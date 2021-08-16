(window.webpackJsonp=window.webpackJsonp||[]).push([[74,17,83],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),r=(n(0),n(166)),s=n(57),i=n(60),c={id:"mango",title:"Mango",sidebar_label:"Mango"},l={unversionedId:"applications/mango",id:"applications/mango",isDocsHomePage:!1,title:"Mango",description:"Mango is a CBZ viewer with an integrated MangaDex downloader and plugin support for other services.",source:"@site/docs/applications/mango.mdx",sourceDirName:"applications",slug:"/applications/mango",permalink:"/applications/mango",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/mango.mdx",version:"current",sidebar_label:"Mango",frontMatter:{id:"mango",title:"Mango",sidebar_label:"Mango"},sidebar:"docs",previous:{title:"Jellyfin",permalink:"/applications/jellyfin"},next:{title:"Plex",permalink:"/applications/plex"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Accessing Mango",id:"accessing-mango",children:[{value:"Retrieving files",id:"retrieving-files",children:[]}]},{value:"Service Management",id:"service-management",children:[]},{value:"User management",id:"user-management",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Mango is a CBZ viewer with an integrated MangaDex downloader and plugin support for other services."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"You can install mango by issuing the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo box install mango\n")),Object(r.b)("h2",{id:"accessing-mango"},"Accessing Mango"),Object(r.b)("p",null,"You can access Mango using ",Object(r.b)("inlineCode",{parentName:"p"},"domain.tld/mango")," if you have ",Object(r.b)("inlineCode",{parentName:"p"},"nginx")," installed. Otherwise, it is available on ",Object(r.b)("inlineCode",{parentName:"p"},"domain.tld:9003")),Object(r.b)("h3",{id:"retrieving-files"},"Retrieving files"),Object(r.b)("p",null,"As the media library for mango is shared, it is located under ",Object(r.b)("inlineCode",{parentName:"p"},"/opt/mango/library"),". This directory is accessible to all users of the server."),Object(r.b)("h2",{id:"service-management"},"Service Management"),Object(r.b)("p",null,"The Mango service is managed by ",Object(r.b)("inlineCode",{parentName:"p"},"systemd")," and has been configured as a system application. You can find the service file here:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"/etc/systemd/system/mango.service\n")),Object(r.b)(s.default,{service:"mango",mdxType:"SystemdTabs"}),Object(r.b)("h2",{id:"user-management"},"User management"),Object(r.b)("p",null,"Mango manages its users in a separate database to ",Object(r.b)("inlineCode",{parentName:"p"},"box"),". However, ",Object(r.b)("inlineCode",{parentName:"p"},"box")," will automatically add, remove and update users and their passwords into Mango when you use the ",Object(r.b)("inlineCode",{parentName:"p"},"box")," user commands (such as ",Object(r.b)("inlineCode",{parentName:"p"},"adduser"),", ",Object(r.b)("inlineCode",{parentName:"p"},"deluser"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"chpasswd"),"). You can still manage users through thee Mango admin interface, and create mango users that are not managed by box at all."),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)(i.default,{mdxType:"Troubleshooting"}),Object(r.b)("p",null,"Please refer to the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/hkalexling/Mango"},"Mango project on Github"),". Please check the Wiki first, and see if there are any closed issues from the past which might be relevant to your problems. Give Mango a star while you're at it ;)"))}d.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},169:function(e,t,n){"use strict";var a=n(0),o=n(174);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},170:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(175),s=n(168),i=n(59),c=n.n(i),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(r.a)(),y=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(a.useState)(i),f=g[0],v=g[1],j=Object(a.useState)(!1),O=j[0],k=j[1];if(null!=d){var w=y[d];null!=w&&w!==f&&p.some((function(e){return e.value===w}))&&v(w)}var x=function(e){v(e),null!=d&&h(d,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},C=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":f===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},171:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},172:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),s={Prism:a.a,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=c({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==o&&(r.style=void 0!==r.style?c({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,s=c({},b(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?c({},s.style,o):o),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),i(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,s=0,i=[],c=[i];s>-1;){for(;(r=a[s]++)<o[s];){var d=void 0,b=t[s],m=n[s][r];if("string"==typeof m?(b=s>0?b:["plain"],d=m):(b=p(b,m.type),m.alias&&(b=p(b,m.alias)),d=m.content),"string"==typeof d){var y=d.split(l),h=y.length;i.push({types:b,content:y[0]});for(var g=1;g<h;g++)u(i),c.push(i=[]),i.push({types:b,content:y[g]})}else s++,t.push(b),n.push(d),a.push(0),o.push(d.length)}s--,t.pop(),n.pop(),a.pop(),o.pop()}return u(i),c}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=m},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),o=n(0),r=n.n(o),s=n(168),i=n(172);var c=n(176),l=n.n(c),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(169),d=n(167),b=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},m=n(178),y=n(58),h=n.n(y),g=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function v(e){var t=e.children,n=e.className,c=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,y=Object(o.useState)(!1),v=y[0],j=y[1],O=Object(o.useState)(!1),k=O[0],w=O[1];Object(o.useEffect)((function(){w(!0)}),[]);var x=Object(d.parseCodeBlockTitle)(c)||u,T=Object(o.useRef)(null),N=[],C=b(),E=Array.isArray(t)?t.join(""):t;if(c&&g.test(c)){var M=c.match(g)[1];N=l()(M).filter((function(e){return e>0}))}var P=n&&n.replace(/language-/,"");!P&&p.defaultLanguage&&(P=p.defaultLanguage);var D=E.replace(/\n$/,"");if(0===N.length&&void 0!==P){for(var B,S="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}}(P),L=E.replace(/\n$/,"").split("\n"),z=0;z<L.length;){var A=z+1,R=L[z].match(I);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=A+",";break;case"highlight-start":B=A;break;case"highlight-end":S+=B+"-"+(A-1)+","}L.splice(z,1)}else z+=1}N=l()(S),D=L.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(D),j(!0),setTimeout((function(){return j(!1)}),2e3)};return r.a.createElement(i.a,Object(a.a)({},i.b,{key:String(k),theme:C,code:D,language:P}),(function(e){var t,n=e.className,o=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:h.a.codeBlockContainer},x&&r.a.createElement("div",{style:o,className:h.a.codeBlockTitle},x),r.a.createElement("div",{className:Object(s.a)(h.a.codeBlockContent,P)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,h.a.codeBlock,"thin-scrollbar",(t={},t[h.a.codeBlockWithTitle]=x,t))},r.a.createElement("div",{className:h.a.codeBlockLines,style:o},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:T,type:"button","aria-label":Object(m.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(h.a.copyButton),onClick:_},v?r.a.createElement(m.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(m.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},174:function(e,t,n){"use strict";var a=n(0),o=n.n(a).a.createContext(void 0);t.a=o},175:function(e,t,n){"use strict";var a=n(0),o=n(177);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},176:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},177:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),r=(n(0),n(166)),s=n(170),i=n(171),c=n(173),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"status",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"start",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(166)),s={},i={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can always also try the ",Object(r.b)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0}}]);