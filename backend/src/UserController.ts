import { Router } from 'express';
import User from './User';

const router = Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const user = new User({ firstName, lastName, email });
  await user.save();
  res.status(201).json(user);
});

export const UserController = router;
