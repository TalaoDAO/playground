// Import the module
const app = require('./app');

const port = 3034;

// @ts-ignore
app.listen(port, () => {
  console.log('Server is listening', { port });
});
