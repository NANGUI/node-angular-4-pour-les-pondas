const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let data = require('./countries');

app.use(bodyParser.json());

const router = express.Router();

router.get('/countries', (req, res) => {
	res.json(data.countries[2].data);
});

app.use('/api', router); // http://localhost:port/api/countries

const port = 1003;

app.listen(port, () => {
	console.log(`listning on port ${port}`);
});