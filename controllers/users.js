import { v4 as uuidV4 } from 'uuid';

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
export const getUsers = function (req, res) {
  res.json(users);
};

//create user
export const createUser = function (req, res) {
  const { name, age } = req.body;
  users.push({ name, age, id: uuidV4() });

  res.json(users);
};

// get one user by id
export const getOneUser = function (req, res) {
  const userId = req.params.id;

  const user = users.find(function (user) {
    return user.id === userId;
  });

  if (user) {
    res.json(user);
  } else {
    res.json({ errorMsg: 'UserID not founded in database' });
  }
};

// delete user by id
export const deleteUser = function (req, res) {
  const userId = req.params.id;

  users = users.filter(function (user) {
    return user.id !== userId;
  });

  res.json(users);
};

// update user by id
export const updateUser = function (req, res) {
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
};
