const glob = require('glob');

module.exports = function getFilePaths(filePattern) {
  console.log('GET FILE PATHS', filePattern);
	return new Promise( (resolve, reject) => {
		glob(filePattern, {}, function(er, filePaths) {
			if (er) {
				reject(er);
			}
			resolve(filePaths);
		});
	});
}