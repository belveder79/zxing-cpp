var express = require('express');
var app = express();

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

app.get('/', function (req, res) {
	ls();
	res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
