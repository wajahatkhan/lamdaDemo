var https = require('https');
var querystring = require('querystring');
var number = '01923821595';//event.Details.ContactData.CustomerEndpoint.Address;
var apiKey = 'apikey=aasdaww2242435234';
var authorisation = 'Basic asdadllkjlhau882hjs0772u20jwhgtw6622==';
// request option
var options = {
      host: 'dev-api.morrisons.com',
      port: 443,
      method: 'GET',
      path: '/customer/v2/phonenumbers/' + number + '?' + apiKey,
      headers: {
        'Authorization': authorisation,
            'Content-Type': 'application/json'
      }
};

// request object
var req = https.request(options, function (res) {
    var result = ''; //I waant to return the result as part of the Lambda Funtion somehow
      res.on('data', function (chunk) {
            result += chunk;
      });
      res.on('end', function () {
            console.log(result);

      });
      res.on('error', function (err) {
            console.log(err);
      })
});

// req error
req.on('error', function (err) {
      console.log(err);
});

req.end();
return result;