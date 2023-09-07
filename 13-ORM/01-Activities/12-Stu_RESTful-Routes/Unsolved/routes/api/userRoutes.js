const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if(!userData) {
      return res.status(404).json({message: 'User not found :('})
    }
    res.status(200).json(userData);
  } catch(err) {
      res.status(500).json(err);
    }
});

// UPDATE a user
// router.put
// try{
//   await User.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   });

//   const userData = await User.findByPk(req.params.id);

//   if(!userData){
//     return res.status(404).json({message: 'User not found! :('});
//   }
// res.status(200).json(userData);
// };

router.put('/:id', async (req, res) => {
  const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

module.exports = router;
