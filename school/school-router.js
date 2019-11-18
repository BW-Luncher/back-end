const router = require('express').Router();
const Schools = require('./school-model');

// GET - all users
router.get('/', async (req, res) => {
	try {
		const schools = await Schools.find();

		res.status(200).json(schools);
	} catch (err) {
		res.status(500).json({ error: 'Server failed to grab all schools.' });
	}
});

router.get('/:id', (req, res) => {
	Schools.find(id)
		.then(schools => {
			res.status(200).json(schools);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when retrieving schools' });
		});
});

module.exports = router;
