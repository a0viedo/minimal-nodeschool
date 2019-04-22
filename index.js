'use strict';

const { list, ip } = require('./config.json');
const usedPorts = [];
module.exports = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if(list.length === 0) {
    res.end('{}');
    console.log('port list is empty');
    return;
  }
  const { port, password } = list.shift();
  usedPorts.push(port);
  console.log(`served port ${port}`);
  res.end(`{ "url": "http://${ip}:${port}", "password": "${password}"}`);
};
