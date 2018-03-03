//get file paths
const glob = require('glob');

//read files
const fs = require('fs');
const markdownToHtml = require('./mdToHtml');
const lqipifyAllImages = require('./util/lqipifyAllImages');
const getFilePathsUnBound = require('./util/getFilePaths');
const path = require('path');
const getFilePaths = getFilePathsUnBound.bind(undefined, __dirname + '/../posts/**/*.md')

async function getContainingFolderPath() {
	//TODO fix this
	return path.resolve(__dirname + '/../posts');
}


async function readFilesToString(filePaths) {
	function readFile(filePath) {
		return new Promise( (resolve, reject) => {
			fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			})
		});
	}
	
	return Promise.all(filePaths.map(readFile));
}

async function parseMdFiles() {
	const containerFolderPath = await getContainingFolderPath();
  console.log(containerFolderPath)
	let filePaths = await getFilePaths();
	let [files, images] = await Promise.all([readFilesToString(filePaths), lqipifyAllImages()]);
	
	return files
		.map(f => markdownToHtml(f, {images})) 
		.map(({meta, html}, i) => {
			const fullFilePath = filePaths[i];
			const relativePath = fullFilePath.replace(containerFolderPath, '');
			return {
				html,
				meta,
				path: relativePath,
			}
		})
		.filter(({meta}) => !meta.exclude)
}

module.exports = async function() {
	return parseMdFiles();
}