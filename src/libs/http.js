const API_URL =
  'https://3gisxk67u2.execute-api.us-east-1.amazonaws.com/dev/api/';

class Http {
  get = async (url) => {
    try {
      let req = await fetch(API_URL + url);
      let json = await req.json();

      return json;
    } catch (err) {
      console.log('http get method err', err);

      throw Error(err);
    }
  };

  post = async (url, form) => {
    try {
      let req = await fetch(API_URL + url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(form),
        redirect: 'follow',
        referrer: 'no-referrer',
      });

      let json = await req.json();

      return json;
    } catch (err) {
      console.log('http post method err', err);

      throw Error(err);
    }
  };
}

export default new Http();
