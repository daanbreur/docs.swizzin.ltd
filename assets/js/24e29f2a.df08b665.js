(window.webpackJsonp=window.webpackJsonp||[]).push([[21,16,80],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),r=(n(0),n(163)),s=n(57),i=n(60),c={id:"syncthing",title:"Syncthing",sidebar_label:"Syncthing"},l={unversionedId:"applications/syncthing",id:"applications/syncthing",isDocsHomePage:!1,title:"Syncthing",description:"Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet.",source:"@site/docs/applications/syncthing.mdx",sourceDirName:"applications",slug:"/applications/syncthing",permalink:"/applications/syncthing",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/syncthing.mdx",version:"current",sidebar_label:"Syncthing",frontMatter:{id:"syncthing",title:"Syncthing",sidebar_label:"Syncthing"},sidebar:"docs",previous:{title:"Rclone",permalink:"/applications/rclone"},next:{title:"vsftpd",permalink:"/applications/vsftpd"}},u=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration &amp; Usage",id:"configuration--usage",children:[{value:"Setup Remote Device",id:"setup-remote-device",children:[]},{value:"Adding a Folder to Synch with a Remote Server",id:"adding-a-folder-to-synch-with-a-remote-server",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it's transmitted over the internet."),Object(r.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(r.b)("p",null,"Installing Syncthing is easy. Simply issue the following command from SSH:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install syncthing\n")),Object(r.b)("p",null,"This command will configure and install syncthing for your user."),Object(r.b)("p",null,"After installation, the config is stored in ",Object(r.b)("inlineCode",{parentName:"p"},"~/.config/syncthing/"),"."),Object(r.b)("h2",{id:"how-to-access"},"How to Access"),Object(r.b)("p",null,"After installation, you can access the web client at ",Object(r.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/syncthing/"),"."),Object(r.b)("p",null,"You can access the download section ",Object(r.b)("a",{parentName:"p",href:"https://syncthing.net/downloads/"},"here")," for your other client that you plan to sync."),Object(r.b)("h2",{id:"service-management"},"Service Management"),Object(r.b)(s.default,{service:"syncthing",mdxType:"SystemdTabs"}),Object(r.b)("h2",{id:"configuration--usage"},"Configuration & Usage"),Object(r.b)("p",null,"Syncthing needs to connect to another server running syncthing. We will do this by editing the settings. "),Object(r.b)("h3",{id:"setup-remote-device"},"Setup Remote Device"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On your Remote Client, Click Actions and then Show ID."),Object(r.b)("li",{parentName:"ol"},"Copy the ID"),Object(r.b)("li",{parentName:"ol"},"On your other server on the bottom right click +Add Remote Device"),Object(r.b)("li",{parentName:"ol"},"Paste the Device ID and give it a name"),Object(r.b)("li",{parentName:"ol"},"Press Save"),Object(r.b)("li",{parentName:"ol"},"On the other client there should be a pop up asking you if you want to add the device; Press add device."),Object(r.b)("li",{parentName:"ol"},"Another pop up will appear, press Save.")),Object(r.b)("h3",{id:"adding-a-folder-to-synch-with-a-remote-server"},"Adding a Folder to Synch with a Remote Server"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click +Add Folder"),Object(r.b)("li",{parentName:"ol"},"Give the Folder a Label"),Object(r.b)("li",{parentName:"ol"},"Add the folder path of the directory that you want to sync to a remote server."),Object(r.b)("li",{parentName:"ol"},"Go to the Sharing Tab and put a check mark in the client you want to share it with remotely."),Object(r.b)("li",{parentName:"ol"},"Go to the Advanced Tab and choose the folder type you want."),Object(r.b)("li",{parentName:"ol"},"On your other client, another pop up will appear, choose add."),Object(r.b)("li",{parentName:"ol"},"Go through the settings and change what you want.")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)(i.default,{mdxType:"Troubleshooting"}),Object(r.b)("p",null,"Please refer to the ",Object(r.b)("a",{parentName:"p",href:"https://docs.syncthing.net/intro/getting-started.html"},"syncthing documentation")," for further help."))}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,h=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(170),s=n(165),i=n(58),c=n.n(i),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,d=e.groupId,b=e.className,h=Object(r.a)(),m=h.tabGroupChoices,y=h.setTabGroupChoices,f=Object(o.useState)(i),g=f[0],v=f[1],j=Object(o.useState)(!1),O=j[0],w=j[1];if(null!=d){var k=m[d];null!=k&&k!==g&&p.some((function(e){return e.value===k}))&&v(k)}var N=function(e){v(e),null!=d&&y(d,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return Object(o.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",C)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":g===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},167:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},168:function(e,t,n){"use strict";var o=n(0),a=n(172);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var o=n(23),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),s={Prism:o.a,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=c({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=c({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==a&&(r.style=void 0!==r.style?c({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var s=o?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,s=c({},b(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?c({},s.style,a):a),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),i(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,s=0,i=[],c=[i];s>-1;){for(;(r=o[s]++)<a[s];){var d=void 0,b=t[s],h=n[s][r];if("string"==typeof h?(b=s>0?b:["plain"],d=h):(b=p(b,h.type),h.alias&&(b=p(b,h.alias)),d=h.content),"string"==typeof d){var m=d.split(l),y=m.length;i.push({types:b,content:m[0]});for(var f=1;f<y;f++)u(i),c.push(i=[]),i.push({types:b,content:m[f]})}else s++,t.push(b),n.push(d),o.push(0),a.push(d.length)}s--,t.pop(),n.pop(),o.pop(),a.pop()}return u(i),c}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=h},170:function(e,t,n){"use strict";var o=n(0),a=n(171);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},172:function(e,t,n){"use strict";var o=n(0),a=n.n(o).a.createContext(void 0);t.a=a},173:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o=n(3),a=n(0),r=n.n(a),s=n(165),i=n(169);var c=n(173),l=n.n(c),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(168),d=n(164),b=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,o=e.darkTheme||n;return t?o:n},h=n(175),m=n(59),y=n.n(m),f=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function v(e){var t=e.children,n=e.className,c=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,m=Object(a.useState)(!1),v=m[0],j=m[1],O=Object(a.useState)(!1),w=O[0],k=O[1];Object(a.useEffect)((function(){k(!0)}),[]);var N=Object(d.parseCodeBlockTitle)(c)||u,T=Object(a.useRef)(null),x=[],C=b(),S=Array.isArray(t)?t.join(""):t;if(c&&f.test(c)){var E=c.match(f)[1];x=l()(E).filter((function(e){return e>0}))}var D=n&&n.replace(/language-/,"");!D&&p.defaultLanguage&&(D=p.defaultLanguage);var P=S.replace(/\n$/,"");if(0===x.length&&void 0!==D){for(var I,B="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(D),L=S.replace(/\n$/,"").split("\n"),z=0;z<L.length;){var M=z+1,R=L[z].match(A);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=M+",";break;case"highlight-start":I=M;break;case"highlight-end":B+=I+"-"+(M-1)+","}L.splice(z,1)}else z+=1}x=l()(B),P=L.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus()}(P),j(!0),setTimeout((function(){return j(!1)}),2e3)};return r.a.createElement(i.a,Object(o.a)({},i.b,{key:String(w),theme:C,code:P,language:D}),(function(e){var t,n=e.className,a=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:y.a.codeBlockContainer},N&&r.a.createElement("div",{style:a,className:y.a.codeBlockTitle},N),r.a.createElement("div",{className:Object(s.a)(y.a.codeBlockContent,D)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,y.a.codeBlock,"thin-scrollbar",(t={},t[y.a.codeBlockWithTitle]=N,t))},r.a.createElement("div",{className:y.a.codeBlockLines,style:a},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return x.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:T,type:"button","aria-label":Object(h.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(y.a.copyButton),onClick:_},v?r.a.createElement(h.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(h.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(8),r=(n(0),n(163)),s=n(166),i=n(167),c=n(174),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"status",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"start",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(8),r=(n(0),n(163)),s={},i={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can always also try the ",Object(r.b)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0}}]);