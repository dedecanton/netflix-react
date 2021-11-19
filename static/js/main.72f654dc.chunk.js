(this["webpackJsonpnetflix-react"]=this["webpackJsonpnetflix-react"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(8),i=n.n(s),c=n(3),o=n.n(c),l=n(4),u=n(5),d="8a72281fad7754ffadb67926e404b457",j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,j("/trending/all/week?language=pt-BR&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para voc\xea",items:e.t2},e.next=10,j("/movie/top_rated?language=pt-BR&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em alta",items:e.t4},e.next=14,j("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,j("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,j("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,j("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=13;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("/movie/".concat(t,"?language=pt-BR&api_key=").concat(d));case 7:return r=e.sent,e.abrupt("break",13);case 9:return e.next=11,j("/tv/".concat(t,"?language=pt-BR&api_key=").concat(d));case 11:return r=e.sent,e.abrupt("break",13);case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=(n(18),n(40)),g=n(41),f=n(0),h=function(e){var t=e.title,n=e.items,a=Object(r.useState)(-400),s=Object(u.a)(a,2),i=s[0],c=s[1];return Object(f.jsxs)("div",{className:"movieRow",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"movieRow--left",onClick:function(){var e=i+Math.round(window.innerWidth/2);e>0&&(e=0),c(e)},children:Object(f.jsx)(b.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--right",onClick:function(){var e=i-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),c(e)},children:Object(f.jsx)(g.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--listarea",children:Object(f.jsx)("div",{className:"movieRow--list",style:{marginLeft:i,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(f.jsx)("div",{className:"movieRow--item",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_item})},t)}))})})]})},p=(n(24),function(e){var t=e.item,n=new Date(t.first_air_date),r=[];for(var a in t.genres)r.push(t.genres[a].name);var s=t.overview;return s.length>200&&(s=s.substring(0,200)+"..."),Object(f.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(f.jsx)("div",{className:"featured--vertical",children:Object(f.jsxs)("div",{className:"featured--horizontal",children:[Object(f.jsx)("div",{className:"featured--name",children:t.original_name}),Object(f.jsxs)("div",{className:"featured--info",children:[Object(f.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(f.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(f.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(f.jsx)("div",{className:"featured--description",children:s}),Object(f.jsxs)("div",{className:"featured--buttons",children:[Object(f.jsx)("a",{className:"featured--watchbutton",href:"/watch/".concat(t.id),children:"\u25ba Assistir"}),Object(f.jsx)("a",{className:"featured--mylistbutton",href:"/list/add/".concat(t.id),children:"+ Minha Lista"})]}),Object(f.jsxs)("div",{className:"featured--genres",children:[Object(f.jsx)("strong",{children:"G\xeaneros:"})," ",r.join(", ")]})]})})})}),v=(n(25),function(e){var t=e.black;return Object(f.jsxs)("header",{className:t?"black":"",children:[Object(f.jsx)("div",{className:"header--logo",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png",alt:"Netflix"})})}),Object(f.jsx)("div",{className:"header--user",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png",alt:"Usu\xe1rio logado"})})})]})}),x=(n(26),function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),i=Object(u.a)(s,2),c=i[0],d=i[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),g=b[0],x=b[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getHomeList();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,m.getMovieInfo(s.id,"tv");case 9:i=e.sent,d(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=function(){return window.scrollY>10?x(!0):x(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(v,{black:g}),c&&Object(f.jsx)(p,{item:c}),Object(f.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(f.jsx)(h,{title:e.title,items:e.items},t)}))}),Object(f.jsxs)("footer",{children:["Feito por Andr\xe9 Canton",Object(f.jsx)("br",{}),"Direitos de imagem para Netflix",Object(f.jsx)("br",{}),"Dados pegos do site Themoviedb.org",Object(f.jsx)("br",{})]}),n.length<=0&&Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("img",{src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"})})]})});i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.72f654dc.chunk.js.map