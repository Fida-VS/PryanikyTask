
export function request(url, token = null, method, data){

	let headers = {
		'content-type': 'application/json',
	  };

	  if (token) {
		headers['x-auth'] = token;
	  }


return fetch(url, {
	headers: headers,
	method: method || 'GET',
	body: data ? JSON.stringify(data) : undefined,
}).then(res => res.json())
}
