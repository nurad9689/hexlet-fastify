import fastify from 'fastify';

const app = fastify();
const port = 3000;

app.get('/', (req, res) => {
    res.send('First page');
});

app.get('/users', (req, res) => {
    res.send('GET /users');
});
  
app.post('/users', (req, res) => {
    res.send('POST /users');
});

app.listen({ port }, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/hello', (req, res) => {
    const { name } = req.query;
    const userName = 'John';
    if (!name === userName) {
      res.send('Hello World!');
    } else {
      res.send(`Hello, ${userName}`);
    }
  });