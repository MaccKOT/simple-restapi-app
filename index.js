import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({
    name: 'John',
    age: '20',
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
