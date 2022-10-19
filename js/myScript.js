function getData(api, success, error){
 let res = serverCall(api);
 if(res.status){
	success(res.data)
 } else {
	error(res.error)
 }
}

function serverCall(api){
	if(api === undefined || api == '') {
		return {
			'status' : false,
			'error' : 'Error ! Provide api value'
		};
	} else {
		return {
			'status' : true,
			'data' : 'Hello Guys ! Api Success'
		};
	}
}
