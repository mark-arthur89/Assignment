// Contains info regarding http calls

class HttpManager
{
	constructor() {

	}

	getData(params){
		// Get params and make call
		let xhr = new XMLHttpRequest();
		let url = params.url;

		xhr.onload = function() {
			// Do the data callback here
			let data = xhr.response;
			params.successCallback(data);
		};

		xhr.open("GET", url, true);
		xhr.send();
	}

}

export default HttpManager;