(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(156)),i={id:"index",title:"Applications Index",slug:"/applications/"},c={unversionedId:"applications/index",id:"applications/index",isDocsHomePage:!1,title:"Applications Index",description:"Welcome to the applications documentation repository! In order to categorize things a bit better, applications are now sorted into groups. To your right, you'll see several categories:",source:"@site/docs/applications/index.mdx",slug:"/applications/",permalink:"/applications/",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/index.mdx",version:"current",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/getting-started/faqs"},next:{title:"Autodl",permalink:"/applications/autodl"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to the applications documentation repository! In order to categorize things a bit better, applications are now sorted into groups. To your right, you'll see several categories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Automation (Sonarr, Medusa, etc)"),Object(o.b)("li",{parentName:"ul"},"Backup & Sync (Resilio sync, rclone, etc)"),Object(o.b)("li",{parentName:"ul"},"Indexers (Jackett, NZBHydra2)"),Object(o.b)("li",{parentName:"ul"},"IRC (ZNC Bouncers)"),Object(o.b)("li",{parentName:"ul"},"Media Servers (Plex, Emby, etc)"),Object(o.b)("li",{parentName:"ul"},"Torrent Clients & GUIs (qBittorrent, Deluge, etc)"),Object(o.b)("li",{parentName:"ul"},"Usenet Clients (SABnzbd, NZBGet)"),Object(o.b)("li",{parentName:"ul"},"Utilities (Misc utilities and organization)")),Object(o.b)("p",null,"Simply navigate to the category and choose the application you're looking for."),Object(o.b)("p",null,"If you can't find the application in the list, documentation can generally be accessed directly via ",Object(o.b)("inlineCode",{parentName:"p"},"/applications/appname"),", or for example ",Object(o.b)("inlineCode",{parentName:"p"},"/applications/sonarrv3"),"."),Object(o.b)("p",null,"Otherwise, the full list of apps, with a direct link to the docs can be viewed ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/#applications"}),"on the homepage")))}s.isMDXComponent=!0}}]);