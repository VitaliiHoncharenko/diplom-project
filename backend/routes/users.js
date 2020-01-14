const { Router } = require('express');
const router = Router();

let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.get('/', async (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})


// router.route('/add').post((req, res, next) => {
//   // console.log(1)
//   // console.log(req.method)
//   // if (req.method === 'OPTIONS') {
//   //   console.log(2)
//   //   return next();
//   // }
//
//   const username = req.body.username;
//
//   const newUser = new User({username});
//
//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.post('/add', (req, res, next) => {
  console.log(req.method)
  if(req.method === 'OPTIONS') {
    return next();
  }
}, async (req, res) => {
  console.log('1')
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;