(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{OLFJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articleHomepage",function(){return n("Yu+2")}])},"Yu+2":function(t,e,n){"use strict";n.r(e);var a=n("ln6h"),r=n.n(a),o=n("pLtp"),c=n.n(o),i=n("0iUn"),s=n("sLSF"),l=n("MI3g"),u=n("a7VT"),p=n("Tit0"),d=n("q1tI"),h=n.n(d),w=n("nOHt"),b=n("YFqc"),m=n.n(b),f=n("okHz"),g=h.a.createElement,v=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e=[],n=this.props.router.asPath.replace(/^\/blogs\/articles/,""),a={markdown:{attributes:{}}},r=this.props.categories.filter((function(t){var e=/\/$/.test(n)?n:"".concat(n,"/"),r=t.location===e;r&&(a=t);var o=t.location.replace(e,"").replace(/\/$/,"").split("/").length;return t.location.startsWith(n)&&!r&&1===o}));for(t=0;t<r.length;t++)e.push(g("li",{className:"col-md-3",key:t},g("div",null,g(m.a,{href:"/blogs/articles".concat(r[t].location)},g("a",null,r[t].markdown.attributes.title)))));var o=n?g("div",{className:"row"},g("div",{className:"col-md-12",dangerouslySetInnerHTML:{__html:a.markdown.body}})):g("h1",null,"Article Categories"),c=g(h.a.Fragment,null,o,g("ul",{className:"row"},e));return g(f.a,{attrib:a.markdown.attributes,body:c})}}],[{key:"getInitialProps",value:function(t){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{categories:c()(t.query).map((function(e){return t.query[e]}))});case 1:case"end":return e.stop()}}))}}]),e}(h.a.Component);e.default=Object(w.withRouter)(v)}},[["OLFJ",0,1]]]);