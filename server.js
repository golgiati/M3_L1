// Gustavo Olgiati

const dotenv = require('dotenv');

// This line has to come first since we need to tell where is the config file
dotenv.config({ path: './config.env' });

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});