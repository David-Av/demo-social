/*! For license information please see main.a6461cf4.chunk.js.LICENSE.txt */
(this.webpackJsonpnorrrr=this.webpackJsonpnorrrr||[]).push([[0],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(35),a=n(5),c=function(e){return{type:"ADD-MESSAGE",newMessage:e}},u={messagesData:[{id:1,message:"sdsdsdsd"},{id:2,message:"sdsdsdsd"},{id:3,message:"sdsdsdsd"},{id:4,message:"sdsdsdsd"},{id:5,message:"sdsdsdsd"}],dialogsData:[{id:1,name:"David"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Valera"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessage;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},124:function(e,t,n){"use strict";n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"i",(function(){return O}));var r=n(8),a=n.n(r),c=n(19),u=n(35),o=n(5),i=n(13),s={users:[],pageSize:50,totalUsersCount:21,currentPage:1,isFetching:!1,followingInProgres:[]},l=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgres:e,userId:t}},f=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},d=function(e){return{type:"SET_USERS_TOTAL_COUNT",totalUsersCount:e}},m=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"FOLLOW",userId:e}},g=function(e){return{type:"UNFOLLOW",userId:e}},b=function(e){return{type:"SET-USERS",users:e}},E=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(l(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(l(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(f(!0)),r(m(e)),n.next=4,i.c.getUsers(e,t);case 4:c=n.sent,r(b(c.items)),r(f(!1)),r(d(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,i.c.follow.bind(i.c),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,i.c.unFollow.bind(i.c),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_USERS_TOTAL_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgres:t.followingInProgres?[].concat(Object(u.a)(e.followingInProgres),[t.userId]):e.followingInProgres.filter((function(e){return e!==t.userId}))});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(129),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"560961f6-c212-4142-b02d-d99d0a8308d3"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e))},auth:function(){return a.get("auth/me")},getProfile:function(e){return console.warn("Obsolete Method. Please use Profile Api Object"),o.getProfile(e)}},u={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}}},131:function(e,t,n){e.exports=n.p+"static/media/45.2d4eb21c.svg"},14:function(e,t,n){e.exports={nav:"navbar_nav__1IOSw",item:"navbar_item__31OO1",activeLink:"navbar_activeLink__2ODV1"}},158:function(e,t,n){e.exports=n(284)},163:function(e,t,n){},164:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(61),u=n.n(c),o=(n(163),n(48)),i=n(49),s=n(51),l=n(50),f=(n(164),n(12)),d=n(14),m=n.n(d),p=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(f.b,{activeClassName:m.a.activeLink,to:"/Profile"},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(f.b,{activeClassName:m.a.activeLink,to:"/Dialogs"},"Messges")),a.a.createElement("div",{className:m.a.item},a.a.createElement(f.b,{activeClassName:m.a.activeLink,to:"/News"},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(f.b,{activeClassName:m.a.activeLink,to:"/Music"},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(f.b,{activeClassName:m.a.activeLink,to:"/Settings"},"Setting")),a.a.createElement("div",{className:m.a.item},a.a.createElement(f.b,{activeClassName:m.a.activeLink,to:"/users"},"Users")))},g=n(9),b=n(16),E=n(8),v=n.n(E),h=n(19),O=n(5),w=n(52),S=n(13),_="social-network/auth/SET_USER_DATA",j={id:null,email:null,login:null,isAuth:!1},y=function(e,t,n,r){return{type:_,payload:{id:e,email:t,login:n,isAuth:r}}},C=function(){return function(){var e=Object(h.a)(v.a.mark((function e(t){var n,r,a,c,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,u=r.login,t(y(a,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},T=n(86),I=n.n(T),N=function(e){return a.a.createElement("header",{className:I.a.header},a.a.createElement("img",{src:"https://w0.pngwave.com/png/100/1021/intel-png-clip-art.png",alt:""}),a.a.createElement("div",{className:I.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login,"- ",a.a.createElement("button",{onClick:e.logout},"Log Out")):a.a.createElement(f.b,{to:"/login"},"login")))},P=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(N,this.props)}}]),n}(a.a.Component),x=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:y,me:C,logout:L})(P),A=n(125),U=n(126),D=n(68),F=n(62),R=n(32),G=n.n(R),M=Object(U.a)({form:"Login"})((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(A.a,{type:"text",placeholder:"Login",component:F.a,validate:[D.b],name:"email"})),a.a.createElement("div",null,a.a.createElement(A.a,{type:"password",placeholder:"Password",component:F.a,validate:[D.b],name:"password"})),a.a.createElement("div",null,a.a.createElement(A.a,{type:"checkbox",name:"rememberMe",component:F.a})," remeber me"),e.error&&a.a.createElement("div",{className:G.a.formSummaryError},e.error),a.a.createElement("div",null,a.a.createElement("button",null,"Log In"))))})),z=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(h.a)(v.a.mark((function r(a){var c,u;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(C()):(u=c.data.messages.length>0?c.data.messages[0]:"Some Error",a(Object(w.a)("Login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},logout:L})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Login"),a.a.createElement(M,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),W=n(7),B={initialized:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},q=n(90),V=n(132),J=n(123),X=n(92),Z=n(124),K=n(127),Y=Object(W.c)({profilePage:X.b,DialogsPage:J.b,usersPage:Z.a,auth:k,form:K.a,app:H}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,Q=Object(W.e)(Y,$(Object(W.a)(V.a)));window.___store____=Q;var ee=Q,te=a.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),ne=a.a.lazy((function(){return n.e(5).then(n.bind(null,295))})),re=a.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),ae=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app_wrapper"},a.a.createElement(x,null),a.a.createElement(p,null),a.a.createElement("div",{className:"app_wrapper_content"},a.a.createElement(g.b,{path:"/Dialogs",render:function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(ne,null))}}),a.a.createElement(g.b,{path:"/Profile/:userId?",render:function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(te,null))}}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(re,null))}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(z,null)}}))):a.a.createElement(q.a,null)}}]),n}(a.a.Component),ce=Object(W.d)(g.f,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(C()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ae),ue=function(e){return a.a.createElement(f.a,null,a.a.createElement(b.a,{store:ee},a.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports={formControl:"FormContols_formControl__4Nqn3",error:"FormContols_error__2eB8S",formSummaryError:"FormContols_formSummaryError__3xHnB"}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(89),a=n(0),c=n.n(a),u=n(32),o=n.n(u),i=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,c.a.createElement("textarea",Object.assign({},t,a))),u&&c.a.createElement("span",null,n.error))},s=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,c.a.createElement("input",Object.assign({},t,a))),u&&c.a.createElement("span",null,n.error))}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e,"  Symbols")}}},86:function(e,t,n){e.exports={header:"header_header__3RqwT",loginBlock:"header_loginBlock__itwiH"}},90:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(131),u=n.n(c);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a,alt:""}))}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return g}));var r=n(8),a=n.n(r),c=n(19),u=n(35),o=n(5),i=n(13),s={posts:[{id:1,message:"HI",likesCount:11},{id:2,message:"first Post",likesCount:12},{id:3,message:"Second Post",likesCount:55}],newPostText:"newsocial.com",profile:null,status:""},l=function(e){return{type:"ADD-POST",post:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return{type:"SET_USER_PROFILE",profile:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.post,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}}},[[158,1,2]]]);
//# sourceMappingURL=main.a6461cf4.chunk.js.map