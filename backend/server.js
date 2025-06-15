// Advanced or modern
import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // hardcoded port

const joke = [
  {
    id: 1,
    title: 'a joke',
    joke: 'teri mkc'
  },
  {
    id: 2,
    title: 'another joke',
    joke:'teri mkc firse haha'
  }
];

app.get('/api/jokes', (req, res) => {
  res.json(joke); // return the array as JSON
});

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});
