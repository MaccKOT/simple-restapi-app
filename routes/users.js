import express from 'express';
import { v4 as uuidV4 } from 'uuid';

const router = express.Router();

let users = [
  {
    name: 'john',
    age: 20,
    id: '1',
  },
  {
    name: 'amanda',
    age: 22,
    id: '2',
  },
  {
    name: 'rick',
    age: 120,
    id: uuidV4(),
  },
];

// get all users
router.get('/users', function (req, res) {
  res.json(users);
});

//add user
router.post('/users', function (req, res) {
  const { name, age } = req.body;
  users.push({ name, age, id: uuidV4() });

  res.json(users);
});

// get one user by id
router.get('/users/:id', function (req, res) {
  const userId = req.params.id;

  const user = users.find(function (user) {
    return user.id === userId;
  });

  if (user) {
    res.json(user);
  } else {
    res.json({ errorMsg: 'UserID not founded in database' });
  }
});

// delete user by id
router.delete('/users/:id', function (req, res) {
  const userId = req.params.id;

  users = users.filter(function (user) {
    return user.id !== userId;
  });

  res.json(users);
});

// update user by id
router.patch('/users/:id', function (req, res) {
  const userId = req.params.id;
  const { name, age } = req.body; // receive name and age from request

  users = users.map(function (user) {
    if (user.id === userId) {
      return {
        name,
        age,
        id: user.id,
      };
    }

    return user;
  });

  res.json(users);
});

export default router;
