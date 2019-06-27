(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=(a(203),a(181)),o=a(175),i=a(182),c=a(204),s=(a(177),a(184)),m=a.n(s);var d=function(e){var t=e.repository,a=Object(o.a)().style;return n.a.createElement("div",{className:"github-component height-full text-left "+("dark"===a?"box-shadow":"border border-gray-light")+" bg-white rounded-1 p-3"},n.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},n.a.createElement("h1",{className:"f4 lh-condensed mb-1"},n.a.createElement("a",{href:t.url},n.a.createElement("span",{className:"text-normal"},t.owner.login," /"),t.name))),n.a.createElement("div",{className:"text-gray mb-2 ws-normal"},n.a.createElement(m.a,{text:t.description||""})),n.a.createElement("div",{className:"d-flex f6"},n.a.createElement("a",{href:t.url,className:"d-inline-block link-gray mr-4"},n.a.createElement("svg",{className:"octicon octicon-star mr-1",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},n.a.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),t.stargazers.totalCount),n.a.createElement("a",{href:t.url,className:"d-inline-block link-gray mr-4"},n.a.createElement("svg",{className:"octicon octicon-git-branch mr-1",viewBox:"0 0 10 16",version:"1.1",width:"10",height:"16","aria-hidden":"true"},n.a.createElement("path",{fillRule:"evenodd",d:"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"})),t.forkCount)))};var u=function(){var e=Object(o.a)().style,t=c.data.github.viewer.repositories;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Projects"),n.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"GitHub repositories that I've built."),n.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.nodes.map(function(e,t){return n.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},n.a.createElement(d,{repository:e}))})))},g=a(205);var h=function(e){var t=e.topic;return n.a.createElement(n.a.Fragment,null,t.web_url?n.a.createElement("a",{href:t.web_url,className:"github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5"},t.image_url?n.a.createElement("img",{src:t.image_url,width:"64",height:"64",className:"mx-auto rounded-1 mb-3",alt:t.name}):n.a.createElement("div",{className:"bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3",style:{width:"64px",height:"64px",lineHeight:"64px"}},"#"),n.a.createElement("p",{className:"f3 lh-condensed text-center link-gray-dark mb-0 mt-1"},t.name),t.description&&n.a.createElement("p",{className:"f5 text-gray text-center mb-0 mt-1"},t.description)):n.a.createElement("div",{className:"github-component position-relative height-full text-center border border-gray-light rounded-1 bg-white p-5"},t.image_url?n.a.createElement("img",{src:t.image_url,width:"64",height:"64",className:"mx-auto rounded-1 mb-3",alt:t.name}):n.a.createElement("div",{className:"bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3",style:{width:"64px",height:"64px",lineHeight:"64px"}},"#"),n.a.createElement("p",{className:"f3 lh-condensed text-center mb-0 mt-1"},t.name),t.description&&n.a.createElement("p",{className:"f5 text-gray text-center mb-0 mt-1"},t.description)))};var b=function(){var e=Object(o.a)().style,t=g.data.allDataYaml.edges[0].node.topics;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Interests"),n.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"Topics that I want to learn more about."),n.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.map(function(e,t){return n.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},n.a.createElement(h,{topic:e}))})))},p=a(206),f=a(186);var v=function(){var e=Object(o.a)().style,t=p.data.allMarkdownRemark.edges;return t.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Thoughts"),n.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"Articles I've written."),n.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.map(function(e,t){return n.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},n.a.createElement(f.a,{post:e.node}))}))):null},A=a(207),y=a(208),E=a.n(y);var x=function(){var e=A.data.github.viewer.name;return n.a.createElement(E.a,{htmlAttributes:{lang:"en"},title:e})},w=a(178);t.default=function(){var e=Object(o.a)().style,t=Object(w.a)().layout;return n.a.createElement(l.a,null,n.a.createElement(x,null),"stacked"===t?n.a.createElement("div",{className:"container-lg py-6 p-responsive text-center"},n.a.createElement(i.a,{metaData:!0}),n.a.createElement("div",{className:"my-6"},n.a.createElement(u,null)),n.a.createElement("div",{className:"my-6"},n.a.createElement(b,null)),n.a.createElement("div",{className:"my-6"},n.a.createElement(v,null))):n.a.createElement("div",{className:"d-md-flex "+("dark"!==e&&"border-md-bottom")},n.a.createElement("div",{className:"flex-self-stretch "+("dark"===e?"bg-gray-dark":"border-md-right border-gray-light bg-white")+" col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6"},n.a.createElement(i.a,{metaData:!0})),n.a.createElement("div",{className:"col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0",style:{backgroundColor:"dark"===e?"#2f363d":"#fafbfc"}},n.a.createElement("div",{className:"mx-auto",style:{maxWidth:"900px"}},n.a.createElement(u,null),n.a.createElement(b,null),n.a.createElement(v,null)))))}},175:function(e,t,a){"use strict";var r=a(0),n=a(74);t.a=function(){var e=Object(r.useContext)(n.a),t=e.state,a=t.theme,l=t.style,o=e.dispatch;return{theme:a,style:l,setTheme:function(e){o({type:"CHANGE_THEME",value:e})}}}},176:function(e,t,a){var r;e.exports=(r=a(180))&&r.default||r},178:function(e,t,a){"use strict";var r=a(185),n="undefined"!=typeof window&&window;t.a=function(){var e=r.data.site;return n.localStorage&&!n.localStorage.getItem("theme")&&n.localStorage.setItem("theme",e.siteMetadata.style),e.siteMetadata}},179:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(1),o=a.n(l),i=a(44),c=a.n(i);a.d(t,"a",function(){return c.a});a(176),n.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},180:function(e,t,a){"use strict";a.r(t);a(35);var r=a(0),n=a.n(r),l=a(1),o=a.n(l),i=a(75),c=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},181:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(175);a(187);t.a=function(e){var t=e.children,a=Object(l.a)().theme;return Object(r.useEffect)(function(){document.body.style.backgroundColor=a.background},[a.background]),n.a.createElement("main",null,t)}},182:function(e,t,a){"use strict";a(177),a(35);var r=a(183),n=a(0),l=a.n(n),o=a(184),i=a.n(o),c=a(13),s=a(66),m=a(190),d=a.n(m),u=a(178),g=a(175),h=a(2).b.hr.withConfig({displayName:"mastHead__StyledHr",componentId:"r4k1rh-0"})(["",""],function(e){return"dark"===e.color&&"border-top-color: whitesmoke;"});t.a=function(e){e.metaData;var t=Object(u.a)().layout,a=Object(g.a)(),n=a.style,o=a.theme,m=a.setTheme,b=r.data.github.viewer,p="stacked"===t?function(e){return l.a.createElement(s.c,Object.assign({},e,{display:[null,null,"inline-block"],mr:3}))}:function(e){return l.a.createElement(s.c,Object.assign({},e,{display:"flex",alignItems:"center",mb:3}))},f=b.websiteUrl,v=b.bio,A=b.login,y=b.email,E=b.organizations,x=b.avatarUrl,w=b.isHireable,k=b.name,j=b.location,C=b.isDeveloperProgramMember,G=b.company;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{src:x,alt:"user-avatar",className:"circle",mb:3,size:150,borderRadius:"50%",maxWidth:"150px"}),l.a.createElement(s.d,{color:"dark"===n?"white":void 0,mb:2,lh:"condensed"},k||A),l.a.createElement(s.c,{fontSize:4,mb:2},k&&l.a.createElement(p,null,l.a.createElement(s.f,{color:o.iconColor,icon:c.j,size:20,verticalAlign:"middle",mr:2,ariaLabel:"GitHub"}),l.a.createElement(s.e,{href:"https://github.com/"+A,color:"dark"===n?"white":void 0},A))),l.a.createElement(h,{color:n}),C&&l.a.createElement(p,{color:"dark"===n?"white":void 0},l.a.createElement(s.f,{color:o.iconColor,icon:c.b,size:20,verticalAlign:"middle",mr:2,ariaLabel:"Location"}),l.a.createElement(s.b,{as:"span",fontSize:5,border:0,color:"white",bg:"green.5",py:1,px:2,title:"Developer Program Member",display:"inline-block",borderRadius:2},"Developer Program Member")),l.a.createElement(s.g,{as:"p",mb:3,fontSize:2,color:"dark"===n?"white":"gray.5"},l.a.createElement(i.a,{text:v||""})),l.a.createElement(s.c,{mb:6,fontSize:4},G&&l.a.createElement(p,{color:"dark"===n?"white":void 0},l.a.createElement(s.f,{color:o.iconColor,icon:c.k,size:20,verticalAlign:"middle",mr:2,ariaLabel:"Location"}),G),j&&l.a.createElement(p,{color:"dark"===n?"white":void 0},l.a.createElement(s.f,{color:o.iconColor,icon:c.h,size:20,verticalAlign:"middle",mr:2,ariaLabel:"Location"}),j),y&&l.a.createElement(p,null,l.a.createElement(s.f,{color:o.iconColor,icon:c.i,size:20,verticalAlign:"middle",mr:2,ariaLabel:"email"}),l.a.createElement(s.e,{href:"mailto:"+y,color:"dark"===n?"white":void 0},y)),f&&l.a.createElement(p,null,l.a.createElement(s.f,{color:o.iconColor,icon:c.g,size:20,verticalAlign:"middle",mr:2,ariaLabel:"email"}),l.a.createElement(s.e,{href:f,color:"dark"===n?"white":void 0},f)),w&&l.a.createElement(s.b,{display:"inline-block",fontSize:5,borderRadius:2,bg:"green.5",py:1,px:2,title:"Hire me",border:0},"Available for hire"),l.a.createElement(h,{color:n}),l.a.createElement(s.c,{mb:1},l.a.createElement(s.d,{mb:2,fontSize:4,color:"dark"===n&&"white"},"Organizations"),E&&E.nodes.map(function(e){var t=e.avatarUrl;return l.a.createElement(s.e,{className:"avatar-group-item",style:{cursor:"pointer"},key:t},l.a.createElement(s.a,{size:35,mr:2,src:t}))})),l.a.createElement(s.c,{mt:16},l.a.createElement(d.a,{defaultChecked:"dark"===n,onChange:function(e){var t=e.target.checked?"dark":"light";m(t)},icons:{checked:l.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16}),unchecked:l.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16})}}))))}},183:function(e){e.exports={data:{github:{viewer:{name:"Kyle J. Roux",email:"jstacoder@gmail.com",bio:"a python/javascript/php/linux guru ready to take on the world... ",login:"jstacoder",url:"https://github.com/jstacoder",avatarUrl:"https://avatars2.githubusercontent.com/u/4082254?v=4",isHireable:!1,location:"orange, CA, USA",company:"CasePeer",followers:{totalCount:60},isDeveloperProgramMember:!0,websiteUrl:"https://jstacoder.github.io",organizations:{nodes:[{avatarUrl:"https://avatars2.githubusercontent.com/u/3709251?v=4"},{avatarUrl:"https://avatars0.githubusercontent.com/u/4082729?v=4"}]}}}}}},185:function(e){e.exports={data:{site:{siteMetadata:{style:"light",layout:"sidebar"}}}}},186:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var r=a(0),n=a.n(r),l=a(179),o=a(175);function i(e){var t=new Date(e);return t.toLocaleDateString("en-GB",{month:"short"})+" "+t.toLocaleDateString("en-GB",{day:"numeric"})+", "+t.toLocaleDateString("en-GB",{year:"numeric"})}t.a=function(e){var t=e.post,a=Object(o.a)().style;return n.a.createElement("div",{className:"height-full text-left "+("dark"===a?"box-shadow":"border border - gray - light")+" bg-white rounded-1 p-3"},n.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},n.a.createElement("h1",{className:"f4 lh-condensed mb-1"},n.a.createElement(l.a,{to:t.fields.slug},t.frontmatter.title))),n.a.createElement("div",{className:"text-gray mb-2 ws-normal"},i(""+t.fields.postDate)))}},204:function(e){e.exports={data:{github:{viewer:{repositories:{nodes:[{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"primer-components-tasklist",url:"https://github.com/jstacoder/primer-components-tasklist",description:"the age old javascript TaskList this time using @primer/components",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"date-math",url:"https://github.com/jstacoder/date-math",description:"simple date math module",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"gatsby-docker-compose-starter",url:"https://github.com/jstacoder/gatsby-docker-compose-starter",description:"gatsby starter to utilize docker, compose and alpine linux",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"components",url:"https://github.com/jstacoder/components",description:"Primer React components",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"v4",url:"https://github.com/jstacoder/v4",description:":rocket: twbs/bootstrap V4 UI Components made with bootstrap-styled. Work with css-in-js, react, styled-components, and Bootstrap Styled utilities",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"gatsby-starter-theme",url:"https://github.com/jstacoder/gatsby-starter-theme",description:"A starter that sets up yarn workspaces and an example usage of the minimum possible theme to speed up starting new themes",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"gatsby-themes",url:"https://github.com/jstacoder/gatsby-themes",description:null,stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"gatsby-product-pages",url:"https://github.com/jstacoder/gatsby-product-pages",description:null,stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"jstacoder"},name:"design",url:"https://github.com/jstacoder/design",description:"Primer Design Guidelines",stargazers:{totalCount:0},forkCount:0}]}}}}}},205:function(e){e.exports={data:{allDataYaml:{edges:[{node:{topics:[{name:"CSS",web_url:"https://github.com/topics/css",image_url:"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"},{name:"Web design",web_url:null,image_url:null},{name:"Sass",web_url:"https://github.com/topics/sass",image_url:"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/sass/sass.png"}]}}]}}}},206:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Welcome to Jekyll2!",published:!0},fields:{slug:"/2019/01/29/hello-world/",postDate:"2019-01-29"},html:"<p><strong>Hello world</strong>, this is my first Jekyll blog post.</p>\n<p>I hope you like it!</p>"}}]}}}},207:function(e){e.exports={data:{github:{viewer:{name:"Kyle J. Roux"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-3126fa929157ccbef5fb.js.map