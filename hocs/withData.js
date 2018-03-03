import fetch from 'isomorphic-unfetch'

function getDataUrl(pathName, id) {
  let url = pathName;
  if (url.endsWith('/') && !id) {
    url = url + 'index';
  } else if (id) {
    if (!url.endsWith('/')) { url = url + '/'; }
    url = url + id;
  }
  
  url = url + '.json';
  if (!url.startsWith('/')) {
    url = '/'+url;
  }
  if (!url.startsWith('/static/data')) {
    url = '/static/data'+url;
  }
  
  return url;
}

const isBrowser = (typeof window !== 'undefined');

export default function withData(component) {
  component.getInitialProps = async ({ query, pathname }) => {
    const url = getDataUrl(pathname, query.id);
    if (isBrowser) {
      const host = window.location.origin;
      const res = await fetch(host + url);
      const json = await res.json();
      return json;
    } else {
      //hackery to load files via fs if on server
      const path = eval("require('path')");
      const fs = eval("require('fs')");
      const util = eval("require('util')");
      let dirname = eval('path.dirname(require.main.filename)');
      const splitOn = 'jeffreyyoung.github.io';
      dirname = dirname.substr(
        0,
        dirname.indexOf(splitOn) + splitOn.length
      );
      
      const readFile = util.promisify(fs.readFile);
      return JSON.parse(await readFile(
        path.join(dirname, url)
      ))
    }
  }
  return component;
}