const request = require("request"); 
function getAccessToken () {
 
    const options = {
      method: 'POST',
      url: 'https://dev-93iri8jv.eu.auth0.com/oauth/token',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      form: {
          grant_type: 'client_credentials',
          client_id: '0D4tX7GPUN1kbReOVI5U9VK1XdJR0DhZ',
          client_secret: 'UNkiPhEot7GkIsiZLb7oaO4eMwCUjmswREzAc8Hf61QrBswzPqrcxowV4n6Lzj8i',
          audience: 'https://dev-93iri8jv.eu.auth0.com/api/v2/'
        }
    };
   
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
   
    const parsedResponse1 = JSON.parse(body);
    const accessToken = parsedResponse1.access_token;
    getFullUserProfile(accessToken)
    });
    };

function getFullUserProfile (accessToken) {
   
    const options = {
      method: 'GET',
      url: 'https://dev-93iri8jv.eu.auth0.com/api/v2/users/google-oauth2|102838281229824229575',
      headers: {authorization: 'Bearer '+ accessToken}
    };
   
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
   
    const parsedResponse2 = JSON.parse(body);
    const fullUserProfile = parsedResponse2;
    console.log(fullUserProfile)
    });
    }

getAccessToken ()