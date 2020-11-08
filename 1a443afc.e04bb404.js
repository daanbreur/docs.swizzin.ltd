(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{139:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(142),o=a(140),r=a(50),c=a.n(r),l=37,b=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,h=Object(n.useState)(r),j=h[0],O=h[1],g=Object(n.useState)(!1),y=g[0],w=g[1];if(null!=p){var T=f[p];null!=T&&T!==j&&d.some((function(e){return e.value===T}))&&O(T)}var N=function(e){O(e),null!=p&&v(p,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",C)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),s=a(6),i=(a(0),a(138)),o=a(139),r=a(141),c=a(143),l={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},d=[],p={rightToc:d};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"start",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}u.isMDXComponent=!0},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),s=a(6),i=(a(0),a(138)),o=a(48),r={id:"vsftpd",title:"vsftpd",sidebar_label:"vsftpd"},c={unversionedId:"applications/vsftpd",id:"applications/vsftpd",isDocsHomePage:!1,title:"vsftpd",description:"vsftpd is a lightweight FTP server for linux",source:"@site/docs/applications/vsftpd.mdx",slug:"/applications/vsftpd",permalink:"/applications/vsftpd",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/vsftpd.mdx",version:"current",sidebar_label:"vsftpd",sidebar:"docs",previous:{title:"Syncthing",permalink:"/applications/syncthing"},next:{title:"Jackett",permalink:"/applications/jackett"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Enable FXP Support",id:"enable-fxp-support",children:[]},{value:"Changing the default port",id:"changing-the-default-port",children:[]},{value:"Enable chroot",id:"enable-chroot",children:[]}]},{value:"Service Management",id:"service-management",children:[]}],b={rightToc:l};function d(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"vsftpd is a lightweight FTP server for linux"),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Installing vsftpd is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo box install vsftpd\n")),Object(i.b)("p",null,"vsftpd will be installed from your operating system's package repository and can be kept up-to-date with the rest of your operating system's packages."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"By default, we ship vsftpd with a pretty light configuration. FTP(S) is enabled by default. If you are having troubles connecting to your server via FTP, please make sure your client supports the key ciphers in use on your server. The configuration file for vsftpd lives at:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"/etc/vsftpd.conf\n")),Object(i.b)("p",null,"After altering the configuration file, restart vsftpd to make the changes take effect."),Object(i.b)("h3",{id:"enable-fxp-support"},"Enable FXP Support"),Object(i.b)("p",null,"FXP support is not enabled by default. To enable it, uncomment the lines (remove the ",Object(i.b)("inlineCode",{parentName:"p"},"#"),") in your ",Object(i.b)("inlineCode",{parentName:"p"},"vsftpd.conf"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pasv_promiscuous=YES\nport_promiscuous=YES\n")),Object(i.b)("h3",{id:"changing-the-default-port"},"Changing the default port"),Object(i.b)("p",null,"If you want to change the port used by vsftpd, uncomment and add a port to the line in your ",Object(i.b)("inlineCode",{parentName:"p"},"vsftpd.conf"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"listen_port=\n")),Object(i.b)("h3",{id:"enable-chroot"},"Enable chroot"),Object(i.b)("p",null,"If you'd like to lock ftp users to their home directory to prevent snooping around your server, add these lines to your ",Object(i.b)("inlineCode",{parentName:"p"},"vsftpd.conf")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"chroot_local_user=YES\nallow_writeable_chroot=YES\n")),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please be aware that FTP and SFTP are separate protocols. If you enable chroot on your FTP server, your SFTP server will still not be using jails by default."))),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)("p",null,"Service management is done by systemd with the default vsftpd.service file."),Object(i.b)("p",null,"The systemd service file resides at:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/lib/systemd/system/vsftpd.service\n")),Object(i.b)(o.default,{service:"vsftpd",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0}}]);