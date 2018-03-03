const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const fm = require('front-matter');
const _ = require('lodash');
const md = new MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
});


function markdownToHtml(markdown, {images}) {
  
  md.renderer.rules.image = function (tokens) {
      const token = tokens[0];
      const [,src] = _.find(token.attrs, (attr) => attr[0] === 'src');
      const alt = token.content;
      const lqip = images[src];
      return `<figure class="ma0">` +
          `<noscript>` +
            `<img src="${src}" alt="${alt}"/>` +
          `</noscript>` +
          `<img class="lazyload" data-src="${lqip}" src="${src}" alt="${alt}"/>` +
        `</figure>`;
        
        //TODO figure out lqip
  };
  
  const meta = fm(markdown.trim());
  //const html = console.log(md.render(meta.body.trim()))
  console.log(meta);
  if (meta.attributes.image && images[meta.attributes.image]) {
    meta.attributes.imagePlaceholder = images[meta.attributes.image];
  }
  return {
    meta: meta.attributes,
    html: md.render(meta.body.trim())
  }
}

module.exports = markdownToHtml;
