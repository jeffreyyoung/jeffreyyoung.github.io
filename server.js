const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const serve = require('serve');
const generateStaticFiles = require('./generateStaticJsonFiles/generateStaticJsonFiles');
const fs = require('fs');
const path = require('path');
app.prepare()
.then(() => {
  const server = express()
  
  //serve static files
  server.use('/static', express.static(path.join(__dirname, 'static')))

  server.get('/projects/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })
  server.get('/blog/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const directoriesToWatch = [
  './generateStaticJsonFiles',
  './posts'
]

if (dev) {
  const debouncedStaticFileGenerator = debounce(generateStaticFiles, 1500);
  directoriesToWatch.forEach(directory => fs.watch(
    path.join(__dirname, directory),
    {recursive: true},
    debouncedStaticFileGenerator
  ));
}