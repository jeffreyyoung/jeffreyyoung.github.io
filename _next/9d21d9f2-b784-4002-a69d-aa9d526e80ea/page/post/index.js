
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports=webpackJsonp([3],{775:function(e,t,a){e.exports=a(776)},776:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=l(n),u=a(349),d=l(u),c=a(115),i=l(c),f=a(116),o=l(f),s=a(778),m=l(s),p=a(98),h=l(p),v=a(343),E=(l(v),a(211)),_=l(E),y=a(344),N=(l(y),a(779)),P=l(N),b=a(97),k=(l(b),a(117)),C=l(k);t.default=(0,i.default)((0,d.default)(function(e){var t=e.post,a=e.url;return r.default.createElement(o.default,{url:a},r.default.createElement(h.default,null,r.default.createElement("main",null,r.default.createElement("article",null,r.default.createElement(_.default,null,r.default.createElement(_.default.Row,null,r.default.createElement(_.default.Column,{mobile:16,tablet:14,computer:12},r.default.createElement(P.default,null,r.default.createElement(C.default,{href:"/"},r.default.createElement(P.default.Section,{link:!0},"Projects")),r.default.createElement(P.default.Divider,null),r.default.createElement(P.default.Section,{active:!0},t.data.title)),r.default.createElement("h1",null,t.data.title),r.default.createElement(m.default,{post:t}))))))))}))},778:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(88),r=l(n),u=a(0),d=l(u);t.default=function(e){var t=e.post;return d.default.createElement("div",{"data-jsx":3100936550},d.default.createElement("div",{className:"PostContent-markdown-wrapper",dangerouslySetInnerHTML:{__html:t.html},"data-jsx":3100936550}),d.default.createElement(r.default,{styleId:3100936550,css:".PostContent-markdown-wrapper img{display:block;margin:0 auto;max-width:100%}p{font-size:1.25em}"}))}},779:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(780),n=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=n.default},780:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.children,a=e.className,l=e.divider,r=e.icon,d=e.sections,c=e.size,f=(0,o.default)("ui",c,"breadcrumb",a),s=(0,h.getUnhandledProps)(n,e),m=(0,h.getElementType)(n,e);if(!h.childrenUtils.isNil(t))return p.default.createElement(m,(0,u.default)({},s,{className:f}),t);var v=[];return(0,i.default)(d,function(e,t){var a=y.default.create(e);if(v.push(a),t!==d.length-1){var n=a.key+"_divider"||JSON.stringify(e);v.push(E.default.create({content:l,icon:r,key:n}))}}),p.default.createElement(m,(0,u.default)({},s,{className:f}),v)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=l(r),d=a(52),c=(l(d),a(310)),i=l(c),f=a(4),o=l(f),s=a(3),m=(l(s),a(0)),p=l(m),h=a(5),v=a(781),E=l(v),_=a(782),y=l(_);n.handledProps=["as","children","className","divider","icon","sections","size"],n._meta={name:"Breadcrumb",type:h.META.TYPES.COLLECTION},n.Divider=E.default,n.Section=y.default,t.default=n},781:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.children,a=e.className,l=e.content,r=e.icon,d=(0,f.default)("divider",a),i=(0,p.getUnhandledProps)(n,e),o=(0,p.getElementType)(n,e);return(0,c.default)(r)?(0,c.default)(l)?m.default.createElement(o,(0,u.default)({},i,{className:d}),p.childrenUtils.isNil(t)?"/":t):m.default.createElement(o,(0,u.default)({},i,{className:d}),l):v.default.create(r,{defaultProps:(0,u.default)({},i,{className:d})})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=l(r),d=a(136),c=l(d),i=a(4),f=l(i),o=a(3),s=(l(o),a(0)),m=l(s),p=a(5),h=a(97),v=l(h);n.handledProps=["as","children","className","content","icon"],n._meta={name:"BreadcrumbDivider",type:p.META.TYPES.COLLECTION,parent:"Breadcrumb"},n.create=(0,p.createShorthandFactory)(n,function(e){return{icon:e}}),t.default=n},782:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=l(n),u=a(8),d=l(u),c=a(9),i=l(c),f=a(13),o=l(f),s=a(14),m=l(s),p=a(4),h=l(p),v=a(3),E=(l(v),a(0)),_=l(E),y=a(5),N=function(e){function t(){var e,a,l,n;(0,d.default)(this,t);for(var r=arguments.length,u=Array(r),c=0;c<r;c++)u[c]=arguments[c];return a=l=(0,o.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.handleClick=function(e){var t=l.props.onClick;t&&t(e,l.props)},n=a,(0,o.default)(l,n)}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,a=e.active,l=e.children,n=e.className,u=e.content,d=e.href,c=e.link,i=e.onClick,f=(0,h.default)((0,y.useKeyOnly)(a,"active"),"section",n),o=(0,y.getUnhandledProps)(t,this.props),s=(0,y.getElementType)(t,this.props,function(){if(c||i)return"a"});return _.default.createElement(s,(0,r.default)({},o,{className:f,href:d,onClick:this.handleClick}),y.childrenUtils.isNil(l)?u:l)}}]),t}(E.Component);N._meta={name:"BreadcrumbSection",type:y.META.TYPES.COLLECTION,parent:"Breadcrumb"},N.handledProps=["active","as","children","className","content","href","link","onClick"],t.default=N,N.create=(0,y.createShorthandFactory)(N,function(e){return{content:e,link:!0}})}},[775]);
            return { page: comp.default }
          })
        