(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{OLFJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articleHomepage",function(){return n("Yu+2")}])},"Yu+2":function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),a=n.n(r),i=n("pLtp"),u=n.n(i),c=n("0iUn"),o=n("sLSF"),s=n("MI3g"),l=n("a7VT"),p=n("Tit0"),h=n("q1tI"),f=n.n(h),w=n("nOHt"),b=n("YFqc"),O=n.n(b),d=(n("YJei"),f.a.createElement),m=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t,e=[];for(t=0;t<this.props.articles.length;t++)e.push(d("li",{key:t},d(O.a,{href:"/blogs/articles".concat(this.props.articles[t].location)},d("a",null,this.props.articles[t].markdown.attributes.title))));return d(f.a.Fragment,null,d("h1",null,"Article Homepage"),d(O.a,{href:"/"},d("a",null,"Go Home")),d("ul",null,e))}}],[{key:"getInitialProps",value:function(t){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{articles:u()(t.query).map((function(e){return t.query[e]}))});case 1:case"end":return e.stop()}}))}}]),e}(f.a.Component);e.default=Object(w.withRouter)(m)}},[["OLFJ",0,1]]]);