'use strict';

module.exports.sendMessage = (event, context, callback) => {

  const request = require('request');

  var options = {
    text: 'Someone has viewed your resume. You are becoming popular. Cheer up!!',
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.6.1! Your function executed successfully!',
      input: event,
    }),
  };

  request.post('https://hooks.slack.com/services/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' , { body: JSON.stringify(options)}, function (err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('json response');
  console.log(httpResponse);
  console.log('Post to slack bot replied with:', body);

  callback(null, response);
});

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
