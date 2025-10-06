const serverless = require('serverless-http');
const waline = require('@waline/vercel');

module.exports = serverless(waline());
