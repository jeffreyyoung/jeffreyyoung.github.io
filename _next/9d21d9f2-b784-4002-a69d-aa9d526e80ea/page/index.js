
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([1],{345:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),l=n(r),o=a(8),i=n(o),u=a(9),d=n(u),s=a(13),c=n(s),f=a(14),p=n(f),m=a(4),h=n(m),g=a(3),y=(n(g),a(0)),b=n(y),_=a(5),v=a(210),E=n(v),k=a(771),P=n(k),w=a(346),j=n(w),M=a(772),C=n(M),N=a(347),A=n(N),O=a(348),x=n(O),I=function(e){function t(){var e,a,n,r;(0,i.default)(this,t);for(var l=arguments.length,o=Array(l),u=0;u<l;u++)o[u]=arguments[u];return a=n=(0,c.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleClick=function(e){var t=n.props.onClick;t&&t(e,n.props)},r=a,(0,c.default)(n,r)}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,r=e.className,o=e.color,i=e.description,u=e.extra,d=e.fluid,s=e.header,c=e.href,f=e.image,p=e.link,m=e.meta,g=e.onClick,y=e.raised,v=(0,h.default)("ui",o,(0,_.useKeyOnly)(a,"centered"),(0,_.useKeyOnly)(d,"fluid"),(0,_.useKeyOnly)(p,"link"),(0,_.useKeyOnly)(y,"raised"),"card",r),k=(0,_.getUnhandledProps)(t,this.props),w=(0,_.getElementType)(t,this.props,function(){if(g)return"a"});return _.childrenUtils.isNil(n)?b.default.createElement(w,(0,l.default)({},k,{className:v,href:c,onClick:this.handleClick}),E.default.create(f),(i||s||m)&&b.default.createElement(P.default,{description:i,header:s,meta:m}),u&&b.default.createElement(P.default,{extra:!0},u)):b.default.createElement(w,(0,l.default)({},k,{className:v,href:c,onClick:this.handleClick}),n)}}]),t}(y.Component);I._meta={name:"Card",type:_.META.TYPES.VIEW},I.Content=P.default,I.Description=j.default,I.Group=C.default,I.Header=A.default,I.Meta=x.default,I.handledProps=["as","centered","children","className","color","description","extra","fluid","header","href","image","link","meta","onClick","raised"],t.default=I},346:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.children,a=e.className,n=e.content,l=(0,u.default)(a,"description"),i=(0,f.getUnhandledProps)(r,e),d=(0,f.getElementType)(r,e);return c.default.createElement(d,(0,o.default)({},i,{className:l}),f.childrenUtils.isNil(t)?n:t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),o=n(l),i=a(4),u=n(i),d=a(3),s=(n(d),a(0)),c=n(s),f=a(5);r.handledProps=["as","children","className","content"],r._meta={name:"CardDescription",parent:"Card",type:f.META.TYPES.VIEW},t.default=r},347:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.children,a=e.className,n=e.content,l=(0,u.default)(a,"header"),i=(0,f.getUnhandledProps)(r,e),d=(0,f.getElementType)(r,e);return c.default.createElement(d,(0,o.default)({},i,{className:l}),f.childrenUtils.isNil(t)?n:t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),o=n(l),i=a(4),u=n(i),d=a(3),s=(n(d),a(0)),c=n(s),f=a(5);r.handledProps=["as","children","className","content"],r._meta={name:"CardHeader",parent:"Card",type:f.META.TYPES.VIEW},t.default=r},348:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.children,a=e.className,n=e.content,l=(0,u.default)(a,"meta"),i=(0,f.getUnhandledProps)(r,e),d=(0,f.getElementType)(r,e);return c.default.createElement(d,(0,o.default)({},i,{className:l}),f.childrenUtils.isNil(t)?n:t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),o=n(l),i=a(4),u=n(i),d=a(3),s=(n(d),a(0)),c=n(s),f=a(5);r.handledProps=["as","children","className","content"],r._meta={name:"CardMeta",parent:"Card",type:f.META.TYPES.VIEW},t.default=r},767:function(e,t,a){e.exports=a(768)},768:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),l=n(r),o=a(22),i=n(o),u=a(8),d=n(u),s=a(9),c=n(s),f=a(13),p=n(f),m=a(14),h=n(m),g=a(88),y=n(g),b=a(0),_=n(b),v=a(769),E=n(v),k=a(116),P=n(k),w=a(773),j=n(w),M=a(117),C=(n(M),a(65)),N=(n(C),a(115)),A=n(N),O=a(98),x=n(O),I=a(211),T=n(I);t.default=(0,A.default)((0,j.default)(function(e){function t(e,a){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e,a))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=(this.props,this.props.posts.filter(function(e){return"projects"===e.data.category}).sort(function(e,t){return parseInt(e.data.order)-parseInt(t.data.order)}));return console.log(e),_.default.createElement(P.default,(0,l.default)({showHero:!0},this.props),_.default.createElement(x.default,null,_.default.createElement("h3",{style:{textAlign:"center"},"data-jsx":586183426},"Previous Projects"),_.default.createElement("br",{"data-jsx":586183426}),_.default.createElement(T.default,{relaxed:!0,doubling:!0,className:"masonry ui three column doubling stackable masonry"},e.map(function(e){return _.default.createElement(T.default.Column,{key:e.data.url},_.default.createElement(E.default,{post:e}))}))),_.default.createElement(y.default,{styleId:586183426,css:'.masonry.grid{display:block;min-height:500px}@media only screen and (min-width:768px){.masonry.grid{-webkit-column-count:2;-moz-column-count:2;-webkit-column-count:2;column-count:2;-webkit-column-gap:0;-moz-column-gap:0;-webkit-column-gap:0;column-gap:0}.ui.doubling.masonry.grid[class*="three column"]>.column{width:100% !important}}@media only screen and (min-width:992px){.masonry.grid{-webkit-column-count:3;-moz-column-count:3;-webkit-column-count:3;column-count:3}}'}))}}]),t}(b.Component)))},769:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=n(r),o=a(770),i=n(o),u=a(210),d=n(u),s=a(117),c=n(s);t.default=function(e){var t=e.post;return l.default.createElement(c.default,{href:"/post?postUrl="+encodeURI(t.data.url),as:t.data.url},l.default.createElement(i.default,{fluid:!0,link:!0},l.default.createElement(d.default,{src:t.data.image}),l.default.createElement(i.default.Content,null,l.default.createElement(i.default.Header,null,t.data.title),l.default.createElement(i.default.Meta,null,l.default.createElement("span",{className:"date"},"Aug 2018")),l.default.createElement(i.default.Description,null,t.data.description))))}},770:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(345),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=r.default},771:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.children,a=e.className,n=e.description,l=e.extra,i=e.header,d=e.meta,s=(0,u.default)(a,(0,f.useKeyOnly)(l,"extra"),"content"),p=(0,f.getUnhandledProps)(r,e),h=(0,f.getElementType)(r,e);return f.childrenUtils.isNil(t)?c.default.createElement(h,(0,o.default)({},p,{className:s}),(0,f.createShorthand)(g.default,function(e){return{content:e}},i),(0,f.createShorthand)(b.default,function(e){return{content:e}},d),(0,f.createShorthand)(m.default,function(e){return{content:e}},n)):c.default.createElement(h,(0,o.default)({},p,{className:s}),t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),o=n(l),i=a(4),u=n(i),d=a(3),s=(n(d),a(0)),c=n(s),f=a(5),p=a(346),m=n(p),h=a(347),g=n(h),y=a(348),b=n(y);r.handledProps=["as","children","className","description","extra","header","meta"],r._meta={name:"CardContent",parent:"Card",type:f.META.TYPES.VIEW},t.default=r},772:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.children,a=e.className,n=e.doubling,l=e.items,i=e.itemsPerRow,d=e.stackable,c=(0,s.default)("ui",(0,m.useKeyOnly)(n,"doubling"),(0,m.useKeyOnly)(d,"stackable"),(0,m.useWidthProp)(i),a,"cards"),f=(0,m.getUnhandledProps)(r,e),h=(0,m.getElementType)(r,e);if(!m.childrenUtils.isNil(t))return p.default.createElement(h,(0,o.default)({},f,{className:c}),t);var y=(0,u.default)(l,function(e){var t=e.key||[e.header,e.description].join("-");return p.default.createElement(g.default,(0,o.default)({key:t},e))});return p.default.createElement(h,(0,o.default)({},f,{className:c}),y)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),o=n(l),i=a(209),u=n(i),d=a(4),s=n(d),c=a(3),f=(n(c),a(0)),p=n(f),m=a(5),h=a(345),g=n(h);r.handledProps=["as","children","className","doubling","items","itemsPerRow","stackable"],r._meta={name:"CardGroup",parent:"Card",type:m.META.TYPES.VIEW},t.default=r},773:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(45),l=n(r),o=a(50),i=n(o),u=a(2),d=n(u),s=a(22),c=n(s),f=a(8),p=n(f),m=a(9),h=n(m),g=a(13),y=n(g),b=a(14),_=n(b),v=a(0),E=n(v),k=a(87),P=(n(k),a(774)),w=n(P);t.default=function(e){return function(t){function a(){return(0,p.default)(this,a),(0,y.default)(this,(a.__proto__||(0,c.default)(a)).apply(this,arguments))}return(0,_.default)(a,t),(0,h.default)(a,[{key:"render",value:function(){return E.default.createElement(e,(0,d.default)({},this.props,{posts:w.default}))}}],[{key:"getInitialProps",value:function(){function t(){return a.apply(this,arguments)}var a=(0,i.default)(l.default.mark(function t(){var a,n,r=arguments;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=e.getInitialProps)){t.next=7;break}return t.next=4,a.apply(void 0,r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return n=t.t0,t.abrupt("return",n);case 10:case"end":return t.stop()}},t,this)}));return t}()}]),a}(v.Component)}},774:function(e,t){e.exports=[{data:{title:"2nd Place in BYU Big Data Seminar Competition",image:"static/byu-big-data.png",imageDescription:"Screen shot of the current website",category:"projects",order:10,description:"A classmate and I developed an app that FamilyTree could use to view where the majority of their census records are based.",page:"post",url:"/projects/2nd-place-in-byu-big-data-seminar-competition"}},{data:{title:"Adobe Garage Week Hackathon Finalist",image:"static/collaboration-demo.gif",imageDescription:"Demo of Analysis Workspace with Collaboration",category:"projects",order:2,description:"During a week long hackathon consisting of the Adobe Analytics engineering organization, 2 coworkers and I added features to an existing product that was elected to be a finalist in the hackathon competition.  We eventually got to demo our app to the CEO of Adobe.",page:"post",url:"/projects/adobe-garage-week-hackathon-finalist"}},{data:{title:"PutAMustacheOnYourFace.com",image:"static/mustache.png",imageDescription:"Image of A Person With A mustache On Their Face",category:"projects",order:4,description:"After starting and not finishing too many overly ambitious projects.  I decided to build a simple web app where a user could login with facebook, select a photo, and then view that photo with a mustache on it.",page:"post",url:"/projects/putamustacheonyourfacecom"}},{data:{title:"Personal Web Page",image:"static/this-website.png",imageDescription:"Screen shot of the current website",category:"projects",order:4,description:"Wanting to get into freelance web development, I built the website you are looking at to show some of the work I've done.",page:"post",url:"/projects/personal-web-page"}},{data:{title:"Whistic Marketing Page",image:"static/whistic-homepage.png",imageDescription:"Whistic Website",category:"projects",order:1,description:"Whistic came to me looking to redesign their marketing website.  After giving me designs, a friend and I converted those designs to html.",page:"post",url:"/projects/whistic-marketing-page"}},{data:{title:"Whistic Profile Page",image:"static/whistic-profile.png",imageDescription:"Whistic Website",category:"projects",order:5,description:"After I worked on their home page, Whistic came to me looking to design and build another page of their application.",page:"post",url:"/projects/whistic-profile-page"}},{data:{title:"laaaa de laaaaaa",category:"resume",description:"A classmate and I developed an app that FamilyTree could use to view where the majority of their census records are based.",url:"/resume",page:"post"}}]}},[767]);
            return { page: comp.default }
          })
        