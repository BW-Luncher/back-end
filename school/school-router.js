const router = require('express').Router();
const Schools = require('./school-model');

// GET - all users
router.get('/', async (req, res) => {
	try {
		const schools = await Schools.find();

		res.status(200).json(schools);
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: 'Server failed to grab all schools.' });
	}
});

router.get('/:id', (req, res) => {
	Schools.find(req.params.id)
		.then(schools => {
			res.status(200).json(schools);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when retrieving schools' });
		});
});

router.post('/', (req,res)=> {
	Schools.add(req.body)
		.then(add => {
			res.status(201).json(add);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when retrieving schools' });
		});
})


router.put('/:id',(req,res)=>{
	const id = req.params.id
	const body = req.body
	if(!body.school || !body.address || !body.funds_needed || !body.goal){
		res.status(404).json({message: 'please add missing required fields'})
	}
	Schools.update(body, id)
		.then(item => {
			if(item) {
				res.status(200).json(item)
			}else if(!item.id.length === 0){
				res.status(400).json({message:'could not find school with given id '})
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Error when updating schools' });
		});

})




module.exports = router;
