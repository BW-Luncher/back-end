const router = require('express').Router();
const Schools = require('./school-model');
const authenticate = require('../auth/restricted-middleware');

// GET - all users
router.get('/', async (req, res) => {
	try {
		const schools = await Schools.find();

		res.status(200).json(schools);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Server failed to grab all schools.' });
	}
});

router.get('/:id', (req, res) => {
	Schools.find(req.params.id)
		.then(schools => {
			if (!schools) {
				res.status(400).json({ message: 'Cannot find ID of school' });
			} else {
				res.status(200).json(schools);
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when retrieving schools' });
		});
});

router.post('/', authenticate, roleCheck('admin'), (req, res) => {
	const body = req.body;
	if (!body.school || !body.address || !body.funds_needed || !body.goal) {
		res.status(400).json({ message: 'please add missing required fields' });
	}
	Schools.add(req.body)
		.then(add => {
			res.status(201).json(add);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when retrieving schools' });
		});
});

router.put('/:id', authenticate, roleCheck('admin'), (req, res) => {
	const id = req.params.id;
	const body = req.body;
	if (!id) {
		res.status(404).json({ message: 'could not find school with given id ' });
	} else if (
		!body.school ||
		!body.address ||
		!body.funds_needed ||
		!body.goal
	) {
		res.status(400).json({ message: 'please add required missing fields ' });
	}
	Schools.update(body, id)
		.then(item => {
			console.log(item);
			if (item.length === 0) {
				res
					.status(400)
					.json({ message: 'could not find school with given id ' });
			} else {
				res.status(200).json(item[0]);
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when updating schools' });
		});
});

router.delete('/:id', authenticate, roleCheck('admin'), (req, res) => {
	const id = req.params.id;
	Schools.remove(id)
		.then(item => {
			if (item === 0) {
				res.status(404).json({ message: 'ID not found' });
			} else {
				Schools.find(id.id)
					.then(response => {
						res.status(200).json(response);
					})
					.catch(err => {
						console.log(err);
						res.status(500).json({ error: 'Error when deleting schools' });
					});
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when deleting schools' });
		});
});

function roleCheck(role) {
	return function(req, res, next) {
		if (role === res.decodedToken.role) {
			next();
		} else {
			res.status(403).json({ message: "You aren't allowed to do that" });
		}
	};
}

module.exports = router;
