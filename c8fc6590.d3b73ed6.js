(window.webpackJsonp=window.webpackJsonp||[]).push([[62,16],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return u}));var a=n(2),s=n(6),i=(n(0),n(138)),o=n(48),c={id:"nzbget",title:"nzbGet",sidebar_label:"nzbGet"},l={unversionedId:"applications/nzbget",id:"applications/nzbget",isDocsHomePage:!1,title:"nzbGet",description:"NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files.",source:"@site/docs/applications/nzbget.mdx",slug:"/applications/nzbget",permalink:"/applications/nzbget",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/nzbget.mdx",version:"current",sidebar_label:"nzbGet",sidebar:"docs",previous:{title:"Transmission",permalink:"/applications/transmission"},next:{title:"Sabnzbd",permalink:"/applications/sabnzbd"}},r=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Connect to other clients",id:"connect-to-other-clients",children:[]}],b={rightToc:r};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files."),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Installing nzbGet is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install nzbget\n")),Object(i.b)("p",null,"This command will configure nzbGet for your user."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("p",null,"After installation, you can access nzbGet at the url: ",Object(i.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/nzbget")),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)("p",null,"nzbGet is enabled for use with multiple users. Thus, you must call it with the username of the instance to start."),Object(i.b)("p",null,"The systemd service file resides at:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/nzbget@.service\n")),Object(i.b)(o.default,{service:"nzbget@<username>",mdxType:"SystemdTabs"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"If you are unfamiliar with nzbGet, please check out their ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://nzbget.net/documentation"}),"documentation")," for assistance in getting your news groups setup or learning how to setup post-processing."),Object(i.b)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),Object(i.b)("p",null,"The general settings for connecting nzbget to other clients are as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Host: ",Object(i.b)("inlineCode",{parentName:"li"},"127.0.0.1")),Object(i.b)("li",{parentName:"ul"},"Control Port: ",Object(i.b)("inlineCode",{parentName:"li"},"443")),Object(i.b)("li",{parentName:"ul"},"URL Base: ",Object(i.b)("inlineCode",{parentName:"li"},"nzbget")),Object(i.b)("li",{parentName:"ul"},"SSL: ",Object(i.b)("inlineCode",{parentName:"li"},"ON")),Object(i.b)("li",{parentName:"ul"},"Username: ",Object(i.b)("inlineCode",{parentName:"li"},"<your slot username>")),Object(i.b)("li",{parentName:"ul"},"Password: ",Object(i.b)("inlineCode",{parentName:"li"},"<your slot password>"))))}u.isMDXComponent=!0},139:function(e,t,n){"use strict";var a=n(0),s=n.n(a),i=n(142),o=n(140),c=n(50),l=n.n(c),r=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=Object(i.a)(),f=p.tabGroupChoices,h=p.setTabGroupChoices,O=Object(a.useState)(c),v=O[0],j=O[1],g=Object(a.useState)(!1),y=g[0],w=g[1];if(null!=d){var z=f[d];null!=z&&z!==v&&u.some((function(e){return e.value===z}))&&j(z)}var T=function(e){j(e),null!=d&&h(d,e)},N=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",x)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var t=e.value,n=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case r:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),C(e)},onFocus:function(){return T(t)},onClick:function(){T(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(2),s=n(6),i=(n(0),n(138)),o=n(139),c=n(141),l=n(143),r={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},u=[],d={rightToc:u};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"start",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);