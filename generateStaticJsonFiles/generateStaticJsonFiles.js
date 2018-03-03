const parseMdFiles = require('./parseMdFiles');
const writeJsonFiles = require('write-json-files');

console.log('HEREREE!!!!!!', parseMdFiles);

async function getFiles() {
	const mdFiles = await parseMdFiles();
	const blogFiles = mdFiles
		.filter(m => m.path.startsWith('/blog'))
		.map( (m,i) => ({
			path: m.path.replace('.md', ''),
			getJson: () => ({
				post: {
					html: m.html,
					meta: m.meta
				}
			})
		}));
		
	const individaulProjectFiles = mdFiles
		.filter(m => m.path.startsWith('/projects'))
		.map( (m, i) => {
			let nextProject;
			if (i === mdFiles.filter(m => m.path.startsWith('/projects')).length - 1) {
				nextProject = mdFiles[0];
			} else {
				nextProject = mdFiles[i+1];
			}
			const path = m.path.replace('.md', '');
			const getJson = async () => ({
				project: {
					html: m.html,
					meta: m.meta
				},
				nextProject: {
					title: nextProject.meta.title,
					image: nextProject.meta.image,
					imagePlaceholder: nextProject.meta.imagePlaceholder,
					imageDescription: nextProject.meta.imageDescription,
					description: nextProject.meta.description,
					url: nextProject.path.replace('.md','')
				}
			});
			return {path, getJson}
		});
	return [
		{
			path: 'about',
			getJson: async () => {
				return {'hello': 'world'}
			}
		}, {
			path: 'projects',
			getJson: async () => {
				const projects = mdFiles
					.filter(m => m.path.startsWith('/projects'))
					.map(m => {
						console.log('HEREEE?', m)
						return {
							title: m.meta.title,
							image: m.meta.image,
							imagePlaceholder: m.meta.imagePlaceholder,
							imageDescription: m.meta.imageDescription,
							description: m.meta.description,
							url: m.path.replace('.md','')
						}
					});
				return {projects};
			}
		}, {
			path: 'index',
			getJson: async () => {
				const projects = mdFiles
					.filter(m => m.path.startsWith('/projects'))
					.map(m => {
            const id = m.path.replace('.md', '').split('/').pop();
						return {
							title: m.meta.title,
							image: m.meta.image,
							imagePlaceholder: m.meta.imagePlaceholder,
							imageDescription: m.meta.imageDescription,
							description: m.meta.description,
							url: m.path.replace('.md',''),
              href: `/projects?id=${id}`
						}
					});
        const posts = mdFiles
          .filter(m => m.path.startsWith('/blog'))
          .map(m => {
            const id=m.path.replace('.md', '').split('/').pop();
            return {
              title: m.meta.title,
              url: m.path.replace('.md', ''),
              href: `/blog?id=${id}`
            }
          });
				return {projects, posts};
			}
		}, {
			path: 'blog',
			getJson: async () => {
				const posts = mdFiles
					.filter(m => m.path.startsWith('/blog'))
					.map(m => {
						return {
							title: m.meta.title,
							url: m.path.replace('.md', '')
						}
					});
				return {posts}
			}
		}, {
			path: 'resume',
			getJson: async () => {
				console.log('HEREEEEEEEEEEEE');
				const resume = mdFiles.filter(m => m.path.startsWith('/resume'))[0];
				return {resume}
			}
		}, {
      path: 'exportPathMap',
      getJson: () => {
        let json = {};
        mdFiles
          .filter(m => m.path.startsWith('/blog') || m.path.startsWith('/projects'))
          .forEach(m => {
            json[m.path.replace('.md','')] = {
              page: m.path.startsWith('/blog') ? 'blog' : 'projects',
              query: {id: m.path.replace('.md', '').split('/').pop()}
            }
          });
        return json;
      }
    },
		...individaulProjectFiles,
		...blogFiles
	]
}

function main() {
	console.log('GET FILES!!!');
	writeJsonFiles.set(getFiles, {
		pathPrefix: __dirname +'/../static/data/',
		pathSuffix: '.json'
	});
}
main();
module.exports = main;