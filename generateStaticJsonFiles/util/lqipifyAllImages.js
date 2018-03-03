const lqip = require('lqip');
const glob = require('glob');
const path = require('path');
const getFilePaths = require('./getFilePaths');
const _ = require('lodash');

async function lqipifyAllImages() {
  var filePattern = __dirname + '/../../static/**/*.{png,jpg}';
  const paths = await getFilePaths(filePattern);
  const previews = await Promise.all(
    paths.map(async(p) => await lqip.base64(p))
  );
  
  const pathToPublicDir = path.resolve(__dirname + '/../../static/');
  const imgsMap = paths.map(p => p.replace(pathToPublicDir, '')).reduce((imgsMap, imgPath, index) => {
    imgsMap[imgPath] = previews[index];
    return imgsMap;
  }, {});
  
  
  return imgsMap;
}

module.exports = lqipifyAllImages;
