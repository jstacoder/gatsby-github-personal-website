(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return g});var l=a(0),n=a.n(l),r=a(178),c=a(190),i=a(191),m=a(192),s=a(171),o=a(159),d=a(196),A=a(246);t.default=function(e){var t=e.data,a=Object(o.a)().style,l=Object(s.a)().layout,g=t.markdownRemark;return n.a.createElement(i.a,null,"stacked"===l?n.a.createElement("div",{className:"container-lg py-6 p-responsive text-center"},n.a.createElement(m.a,{metaData:!1}),n.a.createElement("div",{className:"container-md f4 text-left border rounded-2 bg-white p-3 p-sm-5 mt-6"},n.a.createElement("p",{className:"f5"},n.a.createElement("span",{className:"d-flex flex-items-center",style:{color:"#0366d6"}},n.a.createElement(c.e,{icon:c.a,size:16,verticalAlign:"middle",ariaLabel:"Home",className:"mr-2"}),n.a.createElement(r.a,{to:"/"},"Home"))),n.a.createElement("h1",{className:"f00-light lh-condensed"},g.frontmatter.title),n.a.createElement("p",{className:"mb-5 "+("dark"===a?"text-white":"text-gray")},"Published"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:g.html}}))):n.a.createElement(A.Row,{display:{md:"flex"}},n.a.createElement(A.Col,{alignSelf:"stretch",md:5,lg:4,xl:3,className:("dark"===a?"bg-gray-dark":"border-md-right border-gray-light bg-white")+" px-4 px-md-6 px-lg-7 py-6"},n.a.createElement(m.a,{metaData:!0})),n.a.createElement(A.Col,{md:7,lg:8,xl:9,className:"px-4 py-6 px-lg-7 border-top border-md-top-0",style:{backgroundColor:"dark"===a?"#2f363d":"#fafbfc"}},n.a.createElement("div",{className:"mx-auto",style:{maxWidth:"900px"}},n.a.createElement("div",{className:"f4 "+("dark"===a?"text-white":"")+" mb-6"},n.a.createElement("div",{className:"f4 "+("dark"===a&&"text-white")},n.a.createElement("p",{className:"f5"},n.a.createElement("span",{className:"d-flex flex-items-center",style:{color:"#0366d6"}},n.a.createElement(r.a,{to:"/",className:"d-flex flex-items-center "+("dark"===a&&"text-white")},n.a.createElement(c.e,{icon:c.a,size:16,verticalAlign:"middle",ariaLabel:"Home",className:"mr-2"}),"Home"))),n.a.createElement("h1",{className:"f00-light lh-condensed"},g.frontmatter.title),n.a.createElement("p",{className:("dark"===a?"text-white":"text-gray")+" mb-5"},"Published ",Object(d.b)(""+g.fields.postDate)),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:g.html}})))))))};var g="537037368"},159:function(e,t,a){"use strict";var l=a(0),n=a(65);t.a=function(){var e=Object(l.useContext)(n.a),t=e.state,a=t.theme,r=t.style,c=e.dispatch;return{theme:a,style:r,setTheme:function(e){c({type:"CHANGE_THEME",value:e})}}}},169:function(e,t,a){var l;e.exports=(l=a(189))&&l.default||l},171:function(e,t,a){"use strict";var l=a(195),n="undefined"!=typeof window&&window;t.a=function(){var e=l.data.site;return n.localStorage&&!n.localStorage.getItem("theme")&&n.localStorage.setItem("theme",e.siteMetadata.style),e.siteMetadata}},178:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(5),c=a.n(r),i=a(39),m=a.n(i);a.d(t,"a",function(){return m.a});a(169),n.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},189:function(e,t,a){"use strict";a.r(t);a(40);var l=a(0),n=a.n(l),r=a(5),c=a.n(r),i=a(66),m=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},191:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(159);a(205);t.a=function(e){var t=e.children,a=Object(r.a)().theme;return Object(l.useEffect)(function(){document.body.style.backgroundColor=a.background},[a.background]),n.a.createElement("main",null,t)}},192:function(e,t,a){"use strict";a(170);var l=a(193),n=a(0),r=a.n(n),c=a(194),i=a.n(c),m=a(190),s=a(209),o=a.n(s),d=a(171),A=a(159);t.a=function(e){var t=e.metaData,a=Object(d.a)().layout,n=Object(A.a)(),c=n.style,s=n.theme,g=n.setTheme,h=l.data.github.viewer,u="stacked"===a?"d-md-inline-block mr-3":"d-flex flex-items-center mb-3";return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:h.avatarUrl,alt:"user-avatar",className:"circle mb-3",style:{maxWidth:"150px"}}),r.a.createElement("h1",{className:"dark"===c?"text-white":"mb-2 lh-condensed"},h.name?h.name:h.login),r.a.createElement("p",{className:"mb-3 f4 "+("dark"===c?"text-white":"text-gray")},r.a.createElement(i.a,{text:h.bio||""})),t&&r.a.createElement("div",{className:"f4 mb-6"},h.name&&r.a.createElement("div",{className:u},r.a.createElement("span",{style:{color:s.iconColor}},r.a.createElement(m.e,{icon:m.d,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"GitHub"})),r.a.createElement("a",{href:"https://github.com/"+h.login,className:"dark"===c?"text-white":""},"@",h.login)),h.email&&r.a.createElement("div",{className:u},r.a.createElement("span",{style:{color:s.iconColor}},r.a.createElement(m.e,{icon:m.c,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"email"})),r.a.createElement("a",{href:"mailto:"+h.email,className:"dark"===c?"text-white":""},h.email)),h.location&&r.a.createElement("div",{className:u+" "+("dark"===c&&"text-white")},r.a.createElement("span",{style:{color:s.iconColor}},r.a.createElement(m.e,{icon:m.b,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"Location"})),h.location),h.isHireable&&r.a.createElement("span",{title:"Hire me",className:"d-inline-block f5 rounded-2 text-white bg-green py-1 px-2"},"Available for hire"),r.a.createElement("div",{style:{marginTop:16}},r.a.createElement(o.a,{defaultChecked:"dark"===c,onChange:function(e){var t=e.target.checked?"dark":"light";g(t)},icons:{checked:r.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16}),unchecked:r.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16})}}))))}},193:function(e){e.exports={data:{github:{viewer:{name:"Kyle J. Roux",email:"jstacoder@gmail.com",bio:"a python/javascript/php/linux guru ready to take on the world... ",login:"jstacoder",url:"https://github.com/jstacoder",avatarUrl:"https://avatars2.githubusercontent.com/u/4082254?v=4",isHireable:!1,location:"orange, CA, USA"}}}}},195:function(e){e.exports={data:{site:{siteMetadata:{style:"light",layout:"sidebar"}}}}},196:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var l=a(0),n=a.n(l),r=a(178),c=a(159);function i(e){var t=new Date(e);return t.toLocaleDateString("en-GB",{month:"short"})+" "+t.toLocaleDateString("en-GB",{day:"numeric"})+", "+t.toLocaleDateString("en-GB",{year:"numeric"})}t.a=function(e){var t=e.post,a=Object(c.a)().style;return n.a.createElement("div",{className:"height-full text-left "+("dark"===a?"box-shadow":"border border - gray - light")+" bg-white rounded-1 p-3"},n.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},n.a.createElement("h1",{className:"f4 lh-condensed mb-1"},n.a.createElement(r.a,{to:t.fields.slug},t.frontmatter.title))),n.a.createElement("div",{className:"text-gray mb-2 ws-normal"},i(""+t.fields.postDate)))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-6537a5e26f477a341b9d.js.map