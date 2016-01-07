function dataRender(options) {
	return function(request, response, next) {
		for(var key in options) {
			if(typeof options[key] === 'object') {
				var option = options[key];
				response.locals[key] = option['eval']? eval(option['content']):option['content'];
			}
			else {
				response.locals[key] = options[key];
			}
		}
		next();
	}
}

module.exports = dataRender;
