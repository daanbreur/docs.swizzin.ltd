(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),i=(a(0),a(138)),o={id:"dist-upgrade",title:"Keeping your Server Up-to-Date",sidebar_label:"Server Updates"},s={unversionedId:"guides/dist-upgrade",id:"guides/dist-upgrade",isDocsHomePage:!1,title:"Keeping your Server Up-to-Date",description:"Keeping your server up-to-date is important as security fixes are constantly being discovered and released. There are two forms of updates: regular upgrades and distribution upgrades.",source:"@site/docs/guides/dist-upgrade.md",slug:"/guides/dist-upgrade",permalink:"/guides/dist-upgrade",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/guides/dist-upgrade.md",version:"current",sidebar_label:"Server Updates",sidebar:"docs",previous:{title:"xmrig",permalink:"/applications/xmrig"},next:{title:"Troubleshooting 101",permalink:"/guides/troubleshooting"}},l=[{value:"Regular Upgrades",id:"regular-upgrades",children:[]},{value:"Distribution Upgrades",id:"distribution-upgrades",children:[{value:"Updating packages after an upgrade",id:"updating-packages-after-an-upgrade",children:[]}]}],u={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Keeping your server up-to-date is important as security fixes are constantly being discovered and released. There are two forms of updates: regular upgrades and distribution upgrades."),Object(i.b)("h2",{id:"regular-upgrades"},"Regular Upgrades"),Object(i.b)("p",null,"Regular upgrades are the updates to packages released for the current version of your operating system (either Debian or Ubuntu). Since only LTS (Long Term Support) branches are supported in swizzin, security updates are typically the only updates you'll receive; however, the kernel does update regularly, so it's a good idea to check for updates every so often. Regular upgrades are safe and should pose no reliability issues when performing routine restarts."),Object(i.b)("p",null,"Checking for updates is easy:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo apt -y update\nsudo apt upgrade\n")),Object(i.b)("p",null,"After running these commands, you'll see if any packages are available for upgrade. If you are ready and confirm the upgrade of the packages listed, press ",Object(i.b)("inlineCode",{parentName:"p"},"y")," to continue. If you change your mind, press ",Object(i.b)("inlineCode",{parentName:"p"},"n")," or hit ",Object(i.b)("inlineCode",{parentName:"p"},"control-c"),"."),Object(i.b)("p",null,"Following updates, it's typically a good idea to restart any services that were upgraded in order to start using the new versions immediately."),Object(i.b)("p",null,"If there was an update to the ",Object(i.b)("inlineCode",{parentName:"p"},"linux-image")," package, this is the kernel. The only way to reload the kernel is to restart the server. (Unless you're running Ubuntu 18.04 with live kernel updates, which is not covered here.)"),Object(i.b)("h2",{id:"distribution-upgrades"},"Distribution Upgrades"),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DISCLAIMER AND LIMITATION OF LIABILITY")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The steps provided below are meant only to provide you with an outline of the steps required to make a major version change to your operating system (i.e. Debian 9 -> 10). While the steps outlined below will absolutely upgrade your operating system, there are risks involved, for example (but not limited to):"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Package updates causing issues that prevent boot"),Object(i.b)("li",{parentName:"ul"},"Package updates causing previously installed packages in swizzin to fail to start")),Object(i.b)("p",{parentName:"div"},"Distribution upgrades are ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"NOT"))," officially supported. If anything breaks, I am not liable for your server or any of the data contained within it. Further, you are not guaranteed to receive any form of support or help to help get your server functional again. This information is provided for educational purposes only. If you choose to follow the steps, be prepared for the possibility that something could go wrong. If your data is important to you, make a backup."),Object(i.b)("p",{parentName:"div"},"Certain things are known to cause issues -- those issues will be gone over here and the workarounds to get the applications back online, but I cannot provide information for all circumstances and variables."),Object(i.b)("p",{parentName:"div"},"You have been warned."))),Object(i.b)("p",null,"That's a large scary warning, yes. Please think twice about performing the following steps. That said, performing a distribution upgrade is only slightly more involved than a regular update. The biggest difference is that we need to change our ",Object(i.b)("inlineCode",{parentName:"p"},"sources")," file to reference the newer version of the OS we'd like to upgrade to."),Object(i.b)("p",null,"The absolute best time to perform an upgrade is ",Object(i.b)("strong",{parentName:"p"},"before you install swizzin"),"; however, it's still possible to do a distribution upgrade after installation, but it may be more tricky. The reason it's easier is that nothing has been installed or configured yet. When everything gets installed for the first time, it'll be installed correctly for the OS and won't need to be (potentially tweaked)."),Object(i.b)("p",null,"swizzin currently supports 5 distributions:"),Object(i.b)("p",null,"Debian:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Stretch (oldstable)"),Object(i.b)("li",{parentName:"ul"},"Buster (stable)")),Object(i.b)("p",null,"Ubuntu:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Xenial (16.04 LTS)"),Object(i.b)("li",{parentName:"ul"},"Bionic (18.04 LTS)"),Object(i.b)("li",{parentName:"ul"},"Focal (20.04 LTS)")),Object(i.b)("p",null,"If you don't know the OS or version you're running, you can determine it here with the command ",Object(i.b)("inlineCode",{parentName:"p"},"lsb_release -a"),". Your ",Object(i.b)("inlineCode",{parentName:"p"},"codename")," will hopefully correspond to a value above. The codename is the release that's in your current apt sources list (",Object(i.b)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"). We will be changing this to the version you'd like to upgrade to."),Object(i.b)("p",null,"Let's take the scenario where your server was delivered with Debian 9 (stretch), but you'd like to upgrade to Debian 10 (buster). In this scenario, our upgrade path looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"stretch > buster\n")),Object(i.b)("p",null,"Thus, we need to replace all mention of stretch with buster in the file ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"."),Object(i.b)("p",null,"You can either ",Object(i.b)("inlineCode",{parentName:"p"},"sudo nano /etc/apt/sources.list")," and change all instances of ",Object(i.b)("inlineCode",{parentName:"p"},"stretch")," to ",Object(i.b)("inlineCode",{parentName:"p"},"buster")," or issue the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sed -i 's/stretch/buster/g' /etc/apt/sources.list\n")),Object(i.b)("p",null,"This simple ",Object(i.b)("inlineCode",{parentName:"p"},"sed")," command simply states: find the word stretch, replace it with buster in the file `/etc/apt/sources.list."),Object(i.b)("p",null,"Once our sources have been updated, it's time to grab new manifests and update:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo apt -y update\nsudo apt upgrade\n")),Object(i.b)("p",null,"This will take some time. Hundreds (if not 1000+) packages will be downloaded and updated. Please be patient: consider grabbing a coffee or a beer."),Object(i.b)("p",null,"Once this command finishes, we need to complete the upgrade with a ",Object(i.b)("inlineCode",{parentName:"p"},"dist upgrade"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo apt dist-upgrade\n")),Object(i.b)("p",null,"This should offer to upgrade more packages and will round out the full distribution upgrade process."),Object(i.b)("p",null,"After this command finishes, we need to reboot the server to refresh everything that was just upgraded. Use the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo reboot\n")),Object(i.b)("p",null,"Pray to your lucky stars that nothing goes wrong and your server comes back up without any issues."),Object(i.b)("p",null,"If you haven't installed swizzin yet, feel free to start the installer now. If you have already installed packages, we have a bit more updating to do."),Object(i.b)("h3",{id:"updating-packages-after-an-upgrade"},"Updating packages after an upgrade"),Object(i.b)("p",null,"A few things are known to be broken after a ",Object(i.b)("inlineCode",{parentName:"p"},"dist-upgrade")," and will need to be fixed. Major breakers typically include things like php version upgrades and library upgrades (like openSSL), which packages (such as rtorrent) are compiled against."),Object(i.b)("p",null,"Luckily the major breakers have scripts in place designed to help get you back up and running."),Object(i.b)("h4",{id:"nginx"},"nginx"),Object(i.b)("p",null,"We need to upgrade nginx configs to use the correct php socket for applications like the panel and ruTorrent. The easiest way to reconfigure nginx for your current environment is to use the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box upgrade nginx\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This command is considered semi-destructive. In the case of custom nginx configurations, it won't clear the ",Object(i.b)("inlineCode",{parentName:"p"},"nginx/app")," directory, but it will clear the ",Object(i.b)("inlineCode",{parentName:"p"},"nginx/conf.d")," directory. If you have any custom nginx configurations, it's recommended to back them up before running the above command"))),Object(i.b)("h4",{id:"rtorrent"},"rtorrent"),Object(i.b)("p",null,"rTorrent likely failed to start on boot. If you try to start ",Object(i.b)("inlineCode",{parentName:"p"},"rtorrent")," from the command line, you'll likely receive some error about libraries. We just need to recompile rTorrent against the current system. This is simple:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box upgrade rtorrent\n")),Object(i.b)("p",null,"rTorrent will recompile and should start without issues afterwards."),Object(i.b)("h4",{id:"deluge"},"deluge"),Object(i.b)("p",null,"Deluge shouldn't have any issues with the upgrade, but if Deluge fails to start, recompiling would be the first point of troubleshooting:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box upgrade deluge\n")),Object(i.b)("h4",{id:"other-packages"},"Other packages"),Object(i.b)("p",null,"Distribution upgrades haven't been tested rigorously. It's entirely possible other packages may have broken during the upgrade. You'll need to start doing your own troubleshooting here if anything else is broken. You can consult ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"the Troubleshooting guide")," for a quick start. You can find out if any of your systemd services are failing to start with ",Object(i.b)("inlineCode",{parentName:"p"},"systemctl list-units --failed"),". If there are failed units there, you can start debugging with ",Object(i.b)("inlineCode",{parentName:"p"},"systemctl status <failed unit>"),". However, you're on your own form here."))}c.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),b=n,g=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?r.a.createElement(g,s(s({ref:t},u),{},{components:a})):r.a.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);