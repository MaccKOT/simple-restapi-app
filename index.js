import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// /api/users
app.use('/api', userRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
