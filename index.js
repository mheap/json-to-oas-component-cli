#!/usr/bin/env node

const getStdin = require('get-stdin');
const json2oas = require('json-to-oas-component');

getStdin().then(str => {
    console.log(json2oas.yaml(JSON.parse(str)));
});
