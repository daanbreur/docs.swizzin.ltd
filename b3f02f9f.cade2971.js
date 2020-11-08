(window.webpackJsonp=window.webpackJsonp||[]).push([[58,16],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),s=(a(0),a(138)),o=a(48),r={id:"autodl",title:"Autodl",sidebar_label:"Autodl"},l={unversionedId:"applications/autodl",id:"applications/autodl",isDocsHomePage:!1,title:"Autodl",description:"autodl-irssi is a plugin for irssi that monitors IRC announce channels and downloads torrent files based on user-defined filters.",source:"@site/docs/applications/autodl.mdx",slug:"/applications/autodl",permalink:"/applications/autodl",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/autodl.mdx",version:"current",sidebar_label:"Autodl",sidebar:"docs",previous:{title:"Applications Index",permalink:"/applications/"},next:{title:"Bazarr",permalink:"/applications/bazarr"}},c=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"autodl-irssi is a plugin for irssi that monitors IRC announce channels and downloads torrent files based on user-defined filters."),Object(s.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(s.b)("p",null,"Installing autodl is easy. Simply issue the following command from SSH:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install autodl\n")),Object(s.b)("p",null,"This command will configure autodl and the associated ruTorrent plugin."),Object(s.b)("h2",{id:"how-to-access"},"How to Access"),Object(s.b)("p",null,"Autodl is a plugin for the console IRC client, ",Object(s.b)("inlineCode",{parentName:"p"},"irssi"),". Thus, autodl doesn't have a graphical user interface of its own. You can either add rules with the ruTorrent plugin (the only GUI option), or write them by hand in the file: ",Object(s.b)("inlineCode",{parentName:"p"},"~/.autodl/autodl.cfg")),Object(s.b)("p",null,"You can attach directly to the running irssi screen with:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"screen -r irssi\n")),Object(s.b)("p",null,"To detach again, press: ",Object(s.b)("inlineCode",{parentName:"p"},"control-a, control-d")),Object(s.b)("h2",{id:"service-management"},"Service Management"),Object(s.b)("p",null,"The systemd script for irssi (the main client for the autodl plugin) can be found at"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/irssi@.service\n")),Object(s.b)("p",null,"As a multi-user script, you must call it with the username to change the service status for."),Object(s.b)(o.default,{service:"irssi@<username>",mdxType:"SystemdTabs"}),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Configuration options for the GUI client can be found ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.google.com/archive/p/rutorrent/wikis/PluginAutodlirssi.wiki#Usage"}),"here"),'. The options will be found under the header "Usage".'),Object(s.b)("p",null,"If you don't want to use the ruTorrent plugin and would prefer to configure the configuration files by hand, you can read the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://autodl-community.github.io/autodl-irssi/configuration/overview/"}),"autodl-irssi documentation")," for an in-depth review of the available options."))}d.isMDXComponent=!0},139:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(142),o=a(140),r=a(50),l=a.n(r),c=37,u=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(s.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(n.useState)(r),O=v[0],g=v[1],j=Object(n.useState)(!1),y=j[0],w=j[1];if(null!=b){var T=f[b];null!=T&&T!==O&&d.some((function(e){return e.value===T}))&&g(T)}var x=function(e){g(e),null!=b&&h(b,e)},k=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},N=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",N)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),s=(a(0),a(138)),o=a(139),r=a(141),l=a(143),c={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},d=[],b={rightToc:d};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"code"},Object(s.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"start",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}p.isMDXComponent=!0}}]);