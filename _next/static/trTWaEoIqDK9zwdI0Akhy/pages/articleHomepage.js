(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{OLFJ:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articleHomepage",function(){return r("Yu+2")}])},YLAH:function(t,e,r){"use strict";r.r(e);var n=r("1OyB"),c=r("vuIU"),a=r("Ji7U"),o=r("md7G"),i=r("foSv"),u=r("q1tI"),l=r.n(u),s=r("+UdL"),f=r("k7z5"),p=(r("O5zC"),r("HZwY"),l.a.createElement);function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(a.a)(u,t);var e,r=(e=u,function(){var t,r=Object(i.a)(e);if(d()){var n=Object(i.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)});function u(){return Object(n.a)(this,u),r.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return p(l.a.Fragment,null,p(s.default,{attrib:this.props.attrib}),p("div",{className:"container proto-main"},this.props.body),p(f.default,null))}}]),u}(l.a.Component);e.default=m},"Yu+2":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),c=r.n(n),a=r("1OyB"),o=r("vuIU"),i=r("Ji7U"),u=r("md7G"),l=r("foSv"),s=r("q1tI"),f=r.n(s),p=r("nOHt"),d=r("YFqc"),m=r.n(d),y=r("YLAH"),h=(r("x57y"),f.a.createElement);function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(i.a)(n,t);var e,r=(e=n,function(){var t,r=Object(l.a)(e);if(v()){var n=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(u.a)(this,t)});function n(){return Object(a.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t,e=[],r=this.props.router.asPath.replace(/^\/blogs\/articles/,""),n={markdown:{attributes:{}}},c=this.props.categories.filter((function(t){var e=/\/$/.test(r)?r:"".concat(r,"/"),c=t.location===e;c&&(n=t);var a=t.location.replace(e,"").replace(/\/$/,"").split("/").length;return t.location.startsWith(r)&&!c&&1===a}));for(t=0;t<c.length;t++)e.push(h("li",{className:"col-12 col-sm-6 col-md-4 col-lg-3",key:t},h(m.a,{href:"/blogs/articles".concat(c[t].location)},h("a",{className:"article-card"},h("img",{className:"article-card__cover",src:"/static/images/content/web/small.png"}),h("span",{className:"article-card__title px-3 py-2"},c[t].markdown.attributes.title)))));var a=r?h("div",{className:"row"},h("div",{className:"col-md-12",dangerouslySetInnerHTML:{__html:n.markdown.body}})):h("h1",null,"Article Categories"),o=h(f.a.Fragment,null,a,h("ul",{className:"row article-list"},e));return h(y.default,{attrib:n.markdown.attributes,body:o})}}],[{key:"getInitialProps",value:function(t){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{categories:Object.keys(t.query).map((function(e){return t.query[e]}))});case 1:case"end":return e.stop()}}),null,null,null,Promise)}}]),n}(f.a.Component);e.default=Object(p.withRouter)(b)},k7z5:function(t,e,r){"use strict";r.r(e);var n=r("1OyB"),c=r("vuIU"),a=r("Ji7U"),o=r("md7G"),i=r("foSv"),u=r("q1tI"),l=r.n(u),s=(r("okwJ"),l.a.createElement);function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var p=function(t){Object(a.a)(u,t);var e,r=(e=u,function(){var t,r=Object(i.a)(e);if(f()){var n=Object(i.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)});function u(){return Object(n.a)(this,u),r.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return s(l.a.Fragment,null,s("footer",{className:"container-fluid"},s("div",{className:"container"},s("div",{className:"row"},s("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3"})))))}}]),u}(l.a.Component);e.default=p}},[["OLFJ",0,1,2,3,5,4]]]);