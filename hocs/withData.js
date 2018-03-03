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

export default function withData(component) {
  component.getInitialProps = async ({ query, pathname }) => {
    const url = getDataUrl(pathname, query.id);
    let host = 'http://localhost:5000';
    if (typeof window !== 'undefined') {
      host = window.location.origin;
      debugger;
    }
    const res = await fetch(host + url);
    const json = await res.json();
    return json;
  }
  return component;
}