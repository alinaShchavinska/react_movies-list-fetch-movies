(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),i=(c(19),c(13)),a=c(9),r=c(10),o=c(14),l=c(12),j=c(1),d=(c(20),c(21),c(22),c(0)),m=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.Plot,Object(d.jsx)("br",{})]})]})]})},u=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(m,{movie:e},e.imdbID)}))})},b=c(4),v=c(6),h=c(2),O=c.n(h),f=function(){var e=Object(b.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat("http://www.omdbapi.com/?apikey=b2b9c7f0","&t=").concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=(c(25),function(e){var t=e.onAdd,c=Object(j.useState)(""),n=Object(v.a)(c,2),s=n[0],i=n[1],a=Object(j.useState)(null),r=Object(v.a)(a,2),o=r[0],l=r[1],u=Object(j.useState)(!1),h=Object(v.a)(u,2),x=h[0],p=h[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(x?"is-danger":""),value:s,onChange:function(e){i(e.target.value),p(!1)}})})]}),x&&Object(d.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-light",onClick:Object(b.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(s);case 2:(t=e.sent).Error?(p(!0),l(null)):(p(!1),l(t));case 4:case"end":return e.stop()}}),e)}))),children:"Find a movie"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-primary",onClick:Object(b.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==o&&(t(o),i(""));case 1:case"end":return e.stop()}}),e)}))),children:"Add to the list"})})]})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),o&&Object(d.jsx)(m,{movie:o})]})]})}),p=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={movies:[]},e.addMovie=function(t){e.state.movies.find((function(e){return e.imdbID===t.imdbID}))||e.setState((function(e){return{movies:[].concat(Object(i.a)(e.movies),[t])}}))},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state.movies;return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(u,{movies:e})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(x,{onAdd:this.addMovie})})]})}}]),c}(j.Component);s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8067e51c.chunk.js.map