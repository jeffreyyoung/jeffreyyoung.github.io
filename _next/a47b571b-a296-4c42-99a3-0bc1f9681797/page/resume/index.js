
          window.__NEXT_REGISTER_PAGE('/resume', function() {
            var comp = module.exports=webpackJsonp([4],{123:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(26),i=o(n),r=a(28),s=o(r),c=a(29),d=o(c),h=a(9),l=o(h),p=a(5),g=o(p),u=a(6),m=o(u),f=a(10),w=o(f),b=a(11),y=o(b),k=a(1),v=o(k),j=a(46),I=(o(j),a(124)),A=o(I);t.default=function(e){return function(t){function a(){return(0,g.default)(this,a),(0,w.default)(this,(a.__proto__||(0,l.default)(a)).apply(this,arguments))}return(0,y.default)(a,t),(0,m.default)(a,[{key:"render",value:function(){var t=this.props.url.query.postUrl||this.props.url.pathname,a=A.default[t];return v.default.createElement(e,(0,d.default)({},this.props,{post:a}))}}],[{key:"getInitialProps",value:function(){function t(){return a.apply(this,arguments)}var a=(0,s.default)(i.default.mark(function t(){var a,o,n=arguments;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=e.getInitialProps)){t.next=7;break}return t.next=4,a.apply(void 0,n);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return o=t.t0,t.abrupt("return",o);case 10:case"end":return t.stop()}},t,this)}));return t}()}]),a}(k.Component)}},124:function(e,t){e.exports={"/projects/2nd-place-in-byu-big-data-seminar-competition":{content:"\nA classmate and I developed an app that FamilyTree could use to view where the majority of their census records are based.\n\nIn the end of the class we won a $500 gift certificate to Microsoft Store for placing second in the competition.",excerpt:"",data:{title:"2nd Place in BYU Big Data Seminar Competition",image:"static/byu-big-data.png",imageDescription:"Screen shot of the current website",category:"projects",order:10,description:"A classmate and I developed an app that FamilyTree could use to view where the majority of their census records are based.",page:"post",url:"/projects/2nd-place-in-byu-big-data-seminar-competition"},path:"posts/projects/byu-big-data-seminar.md",html:"<p>A classmate and I developed an app that FamilyTree could use to view where the majority of their census records are based.</p>\n<p>In the end of the class we won a $500 gift certificate to Microsoft Store for placing second in the competition.</p>"},"/projects/adobe-garage-week-hackathon-finalist":{content:"\nLast December Adobe had a week long hackathon where any engineer could build anything they wanted as long as whatever they built related to Adobe in some way.\n\n![Demo of Collaborative Workspace](/static/collaboration-demo.gif)\n\nI spend most of my time working on Analysis Workspace. AW is product that users can use to create dashboards to view web traffic analytics.  One problem with Analysis Workspace is that only one user can edit a dashboard at a time.  If multiple users, logged in on different computers, edit the same dashboard, each user will be overriding the other users changes.\n\nTo address this problem, I decided I wanted to make Analysis Workspace like Google Docs, where when one user edits a dashboard, changes are pushed to all other users viewing the same dashboard. I posted the idea to the garageweek idea list and two coworkers decided to work with me.  At the end of garage week we were selected as 1 of 8 finalists, and additionally months later we got to demo our project to the CEO of adobe.\n\n![Demoing the Project to the CEO](/static/images/instagram.jpg)\n\n### Technology Used\nWe create a node server with socket.io to send messages back and forth between users.\n\nSince Analysis Workspace already records project changes for undo/redo functionality, we leveraged already written functionality to broadcast and replay changes. ",excerpt:"",data:{title:"Adobe Garage Week Hackathon Finalist",image:"static/collaboration-demo.gif",imageDescription:"Demo of Analysis Workspace with Collaboration",category:"projects",order:2,description:"During a week long hackathon consisting of the Adobe Analytics engineering organization, 2 coworkers and I added features to an existing product that was elected to be a finalist in the hackathon competition.  We eventually got to demo our app to the CEO of Adobe.",page:"post",url:"/projects/adobe-garage-week-hackathon-finalist"},path:"posts/projects/collaborative-workspace.md",html:'<p>Last December Adobe had a week long hackathon where any engineer could build anything they wanted as long as whatever they built related to Adobe in some way.</p>\n<p><img src="/static/collaboration-demo.gif" alt="Demo of Collaborative Workspace" /></p>\n<p>I spend most of my time working on Analysis Workspace. AW is product that users can use to create dashboards to view web traffic analytics.  One problem with Analysis Workspace is that only one user can edit a dashboard at a time.  If multiple users, logged in on different computers, edit the same dashboard, each user will be overriding the other users changes.</p>\n<p>To address this problem, I decided I wanted to make Analysis Workspace like Google Docs, where when one user edits a dashboard, changes are pushed to all other users viewing the same dashboard. I posted the idea to the garageweek idea list and two coworkers decided to work with me.  At the end of garage week we were selected as 1 of 8 finalists, and additionally months later we got to demo our project to the CEO of adobe.</p>\n<p><img src="/static/images/instagram.jpg" alt="Demoing the Project to the CEO" /></p>\n<h3 id="technology-used">Technology Used</h3>\n<p>We create a node server with socket.io to send messages back and forth between users.</p>\n<p>Since Analysis Workspace already records project changes for undo/redo functionality, we leveraged already written functionality to broadcast and replay changes. </p>'},"/projects/put-a-mustache-on-your-face-com":{content:"\nAfter starting and not finishing too many overly ambitious projects.  I decided to build a simple web app where a user could login with facebook, select a photo, and then view that photo with a mustache on it.\n\n![Demo of Put A Mustache On Your Face .com](/static/images/mustache-demo.gif)\n\n### Technology Used\n\nTo build this app I created a front end server to host the user interface, and a backend API server to supply the user interface with data.\n\nI built the front end server with node.js, React JS, Next.js, and Semantic UI.  By using Next.js I was able to get up and running with a server side rendered app quickly.\n\nI wrote the backend API in Python.  I used flask and graphene to create a graphql server, and I used <https://github.com/ageitgey/face_recognition> for the face recognition.  I used Dynamodb to store user data, and Amazon s3 to store images.\n\nTo make deployments simple, I wrapped both of the servers in docker containers and deployed those containers to Elastic Beanstalk on AWS.\n",excerpt:"",data:{title:"Put A Mustache On Your Face .com",image:"static/mustache.png",imageDescription:"Image of A Person With A mustache On Their Face",category:"projects",order:4,description:"After starting and not finishing too many overly ambitious projects.  I decided to build a simple web app where a user could login with facebook, select a photo, and then view that photo with a mustache on it.",page:"post",url:"/projects/put-a-mustache-on-your-face-com"},path:"posts/projects/put-a-mustache-on-your-face.md",html:'<p>After starting and not finishing too many overly ambitious projects.  I decided to build a simple web app where a user could login with facebook, select a photo, and then view that photo with a mustache on it.</p>\n<p><img src="/static/images/mustache-demo.gif" alt="Demo of Put A Mustache On Your Face .com" /></p>\n<h3 id="technology-used">Technology Used</h3>\n<p>To build this app I created a front end server to host the user interface, and a backend API server to supply the user interface with data.</p>\n<p>I built the front end server with node.js, React JS, Next.js, and Semantic UI.  By using Next.js I was able to get up and running with a server side rendered app quickly.</p>\n<p>I wrote the backend API in Python.  I used flask and graphene to create a graphql server, and I used <a href="https://github.com/ageitgey/face_recognition">https://github.com/ageitgey/face_recognition</a> for the face recognition.  I used Dynamodb to store user data, and Amazon s3 to store images.</p>\n<p>To make deployments simple, I wrapped both of the servers in docker containers and deployed those containers to Elastic Beanstalk on AWS.</p>'},"/projects/personal-web-page":{content:"\nWanting to get into freelance web development, I built the website you are looking at!\n\n### Technology Used\n\nI built this website over one weekend using React.js, Next.js, and Semantic UI.  I write categorized posts (like the project post you are reading) in mark down, and then use a generator to generate static html from all the markdown files.  By doing that, I can host a simple static website for free on github pages without having to pay for servers.",excerpt:"",data:{title:"Personal Web Page",image:"static/this-website.png",imageDescription:"Screen shot of the current website",category:"projects",order:4,description:"Wanting to get into freelance web development, I built the website you are looking at to show some of the work I've done.",page:"post",url:"/projects/personal-web-page"},path:"posts/projects/this-website.md",html:'<p>Wanting to get into freelance web development, I built the website you are looking at!</p>\n<h3 id="technology-used">Technology Used</h3>\n<p>I built this website over one weekend using React.js, Next.js, and Semantic UI.  I write categorized posts (like the project post you are reading) in mark down, and then use a generator to generate static html from all the markdown files.  By doing that, I can host a simple static website for free on github pages without having to pay for servers.</p>'},"/projects/whistic-marketing-page":{content:"\nWhistic came to me looking to redesign their marketing website.  After giving me designs, a friend and I converted those designs to html.  We were able to get the finished product to them in one week.\n\n![Scrolling through whistic's home page](/static/images/giphy-whistic-marketing-scrolling.gif)\n\n### Technology Used\nSince Whistic was already using Bootstrap 3 for their product, we decided to build the page using Bootstrap 3.\n\nYou can see the live version of the website at <https://www.whistic.com/>",excerpt:"",data:{title:"Whistic Marketing Page",image:"static/whistic-homepage.png",imageDescription:"Whistic Website",category:"projects",order:1,description:"Whistic came to me looking to redesign their marketing website.  After giving me designs, a friend and I converted those designs to html.",page:"post",url:"/projects/whistic-marketing-page"},path:"posts/projects/whistic-marketing-page.md",html:'<p>Whistic came to me looking to redesign their marketing website.  After giving me designs, a friend and I converted those designs to html.  We were able to get the finished product to them in one week.</p>\n<p><img src="/static/images/giphy-whistic-marketing-scrolling.gif" alt="Scrolling through whistic\'s home page" /></p>\n<h3 id="technology-used">Technology Used</h3>\n<p>Since Whistic was already using Bootstrap 3 for their product, we decided to build the page using Bootstrap 3.</p>\n<p>You can see the live version of the website at <a href="https://www.whistic.com/">https://www.whistic.com/</a></p>'},"/projects/whistic-profile-page":{content:"\nAfter my friend and I worked on their home page, Whistic came back looking to design and build another page of their application.\n\nMy friend and I came up with designs, iterated over those designs with a contact at Whistic and eventually built the page using Bootstrap 3.",excerpt:"",data:{title:"Whistic Profile Page",image:"static/whistic-profile.png",imageDescription:"Whistic Website",category:"projects",order:5,description:"After I worked on their home page, Whistic came to me looking to design and build another page of their application.",page:"post",url:"/projects/whistic-profile-page"},path:"posts/projects/whistic-profile-page.md",html:"<p>After my friend and I worked on their home page, Whistic came back looking to design and build another page of their application.</p>\n<p>My friend and I came up with designs, iterated over those designs with a contact at Whistic and eventually built the page using Bootstrap 3.</p>"},"/resume":{content:"# Jeffrey Young\n## Front End Software Engineer\n\n> [jeffreytyoung1990@gmail.com](jeffreytyoung1990@gmail.com)  \n\n------\n \n## Experience\n\n__Adobe__\n  *Front End Software Engineer*\n  Aug 2016-Present\n  React.js, Angular.js, Node.js, PHP\n\n__Qualtrics__\n  *Full Stack Software Engineer*\n  Jan 2015-April 2016\n  Java Spring, Python, Angular.js, PHP\n\n------\n\n## Education\n\n__Brigham Young University__\n *Computer Science*\n Aug 2009-April 2016\n",excerpt:"",data:{title:"laaaa de laaaaaa",category:"resume",description:"A classmate and I developed an app that FamilyTree could use to view where the majority of their census records are based.",url:"/resume",page:"post"},path:"posts/resume.md",html:'<h1 id="jeffrey-young">Jeffrey Young</h1>\n<h2 id="front-end-software-engineer">Front End Software Engineer</h2>\n<blockquote>\n  <p><a href="jeffreytyoung1990@gmail.com">jeffreytyoung1990@gmail.com</a>  </p>\n</blockquote>\n<hr />\n<h2 id="experience">Experience</h2>\n<p><strong>Adobe</strong><br />\n  <em>Front End Software Engineer</em><br />\n  Aug 2016-Present<br />\n  React.js, Angular.js, Node.js, PHP</p>\n<p><strong>Qualtrics</strong><br />\n  <em>Full Stack Software Engineer</em><br />\n  Jan 2015-April 2016<br />\n  Java Spring, Python, Angular.js, PHP</p>\n<hr />\n<h2 id="education">Education</h2>\n<p><strong>Brigham Young University</strong><br />\n <em>Computer Science</em><br />\n Aug 2009-April 2016</p>'}}},125:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(30),i=o(n),r=a(1),s=o(r);t.default=function(e){var t=e.post;return s.default.createElement("div",{"data-jsx":3170037437},s.default.createElement("div",{className:"PostContent-markdown-wrapper black-90",dangerouslySetInnerHTML:{__html:t.html},"data-jsx":3170037437}),s.default.createElement(i.default,{styleId:3170037437,css:".PostContent-markdown-wrapper img{display:block;margin:3rem auto;max-width:100%}.PostContent-markdown-wrapper p{font-size:1.25rem;line-height:1.5;font-weight:300}"}))}},407:function(e,t,a){e.exports=a(408)},408:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),i=o(n),r=a(63),s=o(r),c=a(64),d=o(c),h=a(123),l=o(h),p=a(125),g=(o(p),a(31)),u=o(g);t.default=(0,s.default)((0,l.default)(function(e){var t=e.post,a=e.url;return i.default.createElement(d.default,{url:a},i.default.createElement(u.default,null,i.default.createElement("section",{className:"pt5"},i.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))))}))}},[407]);
            return { page: comp.default }
          })
        