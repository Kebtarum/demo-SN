(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={header:"Header_header__2BJ33",loginBlock:"Header_loginBlock__1LY55"}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return h}));var a=n(74),r=n(8),o=n.n(r),c=n(16),i=n(52),s=n(6),u=n(12),l=n(31),A={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"My first post",likesCount:8},{id:3,message:"Blabla",likesCount:3},{id:4,message:"Apog",likesCount:25}],profile:null,status:"123"},m=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET-STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(f(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"SAVE-PHOTO-SUCCESS",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n,r){var c,i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=8;break}n(p(c)),t.next=11;break;case 8:return s=i.messages[0].slice(i.messages[0].indexOf(">")+1,i.messages[0].indexOf(")")).toLocaleLowerCase(),n(Object(l.a)("/edit-profile",{contacts:Object(a.a)({},s,i.messages[0])})),t.abrupt("return",Promise.reject(i.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case"SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},11:function(e,t,n){e.exports={nav:"Navbar_nav__Z25y5",item:"Navbar_item__36P53",active:"Navbar_active__12tZk",itemInner:"Navbar_itemInner__1LMIc"}},116:function(e,t){e.exports="data:image/jpeg;base64,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"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));var a=n(79),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"46d75fc6-30a3-4d7a-81e5-8ce6e95ef3a8"}}),o={getUsers:function(e,t){return r.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("/follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("/follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status/",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return r.put("profile/",e).then((function(e){return e.data}))}},i={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url").then((function(e){return e.data}))}}},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(52),r=n(6),o={dialogsData:[{id:1,name:"Albert"},{id:2,name:"Bogdan"},{id:3,name:"Vovan"},{id:4,name:"Gena"}],messagesData:[{id:1,message:"Hello Albert"},{id:2,message:"Privet Bogdan"},{id:3,message:"Shalom Vovan"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},147:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},177:function(e,t,n){e.exports=n(303)},181:function(e,t,n){},182:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return A})),n.d(t,"a",(function(){return m}));var a=n(103),r=n(0),o=n.n(r),c=n(29),i=n.n(c),s=n(94),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("textarea",Object.assign({},t,r)),c&&o.a.createElement("small",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("input",Object.assign({},t,r)),c&&o.a.createElement("small",null,n.error))},A=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return o.a.createElement("div",{className:i},o.a.createElement(s.a,Object.assign({component:a,name:t,placeholder:e,validate:n},r)),o.a.createElement("span",null,c))},m=function(e){var t=e.input,n=e.type;e.meta;return delete t.value,o.a.createElement("div",{className:i.a.fieldFileStyle},o.a.createElement("input",Object.assign({},t,{type:n,id:"file",accept:"image/jpeg,image/png,image/gif"})))}},29:function(e,t,n){e.exports={formControl:"FormsControls_formControl__TTIjP",error:"FormsControls_error__1lIea",formSummeryErrorParent:"FormsControls_formSummeryErrorParent__12zkx",formSummeryError:"FormsControls_formSummeryError__yMCGz",fieldFileStyle:"FormsControls_fieldFileStyle__1CtbK"}},30:function(e,t,n){e.exports={wrapperContent:"Login_wrapperContent__12Uk7",loginContent:"Login_loginContent__1svlV",formControl:"Login_formControl__1q8KN",error:"Login_error__1Szay",formItemContainer:"Login_formItemContainer__3HUOm",formItemContainerSpecial:"Login_formItemContainerSpecial__3_Vvu",test:"Login_test__2zsMW",loginContentFirstChild:"Login_loginContentFirstChild__3jTy9",loginContentButton:"Login_loginContentButton__1vFYs",loginContentSecondChild:"Login_loginContentSecondChild__3xwbk"}},303:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(70),c=n.n(o);n(181),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(40),s=n(41),u=n(46),l=n(45),A=(n(182),n(11)),m=n.n(A),f=n(35),p=n.n(f),d=n(18),g=n(140),E=n.n(g),h=n(141),v=n.n(h),b=n(142),O=n.n(b),C=n(143),S=n.n(C),w=n(144),P=n.n(w),j=n(145),_=n.n(j);var y=function(){return r.a.createElement("nav",{className:p()(m.a.nav)},r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:m.a.active},r.a.createElement("div",{className:m.a.itemInner},r.a.createElement(E.a,{fontSize:"medium"}),r.a.createElement("span",null,"Profile")))),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.active},r.a.createElement("div",{className:m.a.itemInner},r.a.createElement(v.a,{fontSize:"medium"}),r.a.createElement("span",null,"Messages")))),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:m.a.active},r.a.createElement("div",{className:m.a.itemInner},r.a.createElement(O.a,{fontSize:"medium"}),r.a.createElement("span",null,"Users")))),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:m.a.active},r.a.createElement("div",{className:m.a.itemInner},r.a.createElement(S.a,{fontSize:"medium"}),r.a.createElement("span",null,"News")))),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:m.a.active},r.a.createElement("div",{className:m.a.itemInner},r.a.createElement(P.a,{fontSize:"medium"}),r.a.createElement("span",null,"Music")))),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:m.a.active},r.a.createElement("div",{className:m.a.itemInner},r.a.createElement(_.a,{fontSize:"medium"}),r.a.createElement("span",null,"Settings")))))},T=n(10),N=n(17),I=n(8),x=n.n(I),U=n(16),L=n(52),k=n(6),F=n(12),R=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(k.a)(Object(k.a)({},e),a):e}))},z={users:[],pageSize:10,totalUsersCount:5333,currentPage:1,isFetching:!0,followingInProgress:[]},B=function(e){return{type:"FOLLOW",userId:e}},D=function(e){return{type:"UNFOLLOW",userId:e}},M=function(e){return{type:"SET-USERS",users:e}},G=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},q=function(e){return{type:"SET-TOTAL-USERS-COUNT",count:e}},H=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},Q=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},V=function(){var e=Object(U.a)(x.a.mark((function e(t,n,a,r){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(Q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(k.a)(Object(k.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(k.a)(Object(k.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(k.a)(Object(k.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},K=n(106),Y=n(98),W=n.n(Y);var J=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/n),l=[],A=1;A<=u;A++)l.push(A);var m=Math.ceil(u/s),f=Object(a.useState)(1),p=Object(K.a)(f,2),d=p[0],g=p[1],E=(d-1)*s+1,h=d*s;return r.a.createElement("div",{className:W.a.paginator},d>1&&r.a.createElement("button",{onClick:function(){g(d-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=h})).map((function(e){return r.a.createElement("button",{onClick:function(t){c(e)},className:o===e&&W.a.selectedPage,key:e},e)})),m>d&&r.a.createElement("button",{onClick:function(){g(d+1)}},"NEXT"))},X=n(93),$=n.n(X),ee=n(116),te=n.n(ee);var ne=function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"avatarBlock"},r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:te.a,className:$.a.userPhoto}))),r.a.createElement("div",{className:"followBlock"},t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowTC(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followTC(t.id)}},"Follow"))),r.a.createElement("div",{className:"userInformBlock"},r.a.createElement("div",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("div",null)))},ae=n(43),re=n.n(ae);var oe=function(e){return r.a.createElement("div",{className:p()(re.a.wrapperContent)},r.a.createElement(J,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return r.a.createElement(ne,{user:t,key:t.id,followingInProgress:e.followingInProgress,followTC:e.followTC,unfollowTC:e.unfollowTC})})))},ce=n(48),ie=n(9),se=function(e){return e.usersPage.users},ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},Ae=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunkCreator(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ce.a,null):r.a.createElement(oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC}))}}]),n}(r.a.Component),de=Object(ie.compose)(Object(N.b)((function(e){return{users:se(e),pageSize:ue(e),totalUsersCount:le(e),currentPage:Ae(e),isFetching:me(e),followingInProgress:fe(e)}}),{follow:B,unfollow:D,setUsers:M,setCurrentPage:G,toggleIsFetching:H,toggleIsFollowingProgress:Q,setTotalUsersCount:q,getUsersThunkCreator:function(e,t){return function(){var n=Object(U.a)(x.a.mark((function n(a){var r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(H(!0)),a(G(e)),n.next=4,F.d.getUsers(e,t);case 4:r=n.sent,a(H(!1)),a(M(r.items)),a(q(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followTC:function(e){return function(){var t=Object(U.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,F.d.follow.bind(F.d),B);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowTC:function(e){return function(){var t=Object(U.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,F.d.unfollow.bind(F.d),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(pe),ge=n(147),Ee=n.n(ge),he=n(100),ve=n.n(he);var be=function(e){return r.a.createElement("header",{className:ve.a.header},r.a.createElement("img",{src:Ee.a,alt:"logo"}),r.a.createElement("div",{className:ve.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},"Login")))},Oe=(n(79),n(31)),Ce={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Se=function(e,t,n,a){return{type:"auth/SET-AUTH-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},we=function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},Pe=function(){return function(){var e=Object(U.a)(x.a.mark((function e(t){var n,a,r,o,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.email,c=a.login,t(Se(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){return function(){var e=Object(U.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.c.getCaptchaUrl();case 2:n=e.sent,a=n.url,t(we(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-AUTH-USER-DATA":case"GET-CAPTCHA-URL-SUCCESS":return Object(k.a)(Object(k.a)({},e),t.payload);default:return e}},ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(be,this.props)}}]),n}(r.a.Component),Te=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(U.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.logout();case 2:0===e.sent.resultCode&&t(Se(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ye),Ne=n(138),Ie=n(28),xe=n(71),Ue=n(29),Le=n.n(Ue),ke=n(30),Fe=n.n(ke),Re=Object(Ne.a)({form:"/login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t,className:p()(Fe.a.test)},r.a.createElement("div",{className:Fe.a.formItemContainer},Object(Ie.d)("Email","email",[xe.b],Ie.b)),r.a.createElement("div",{className:Fe.a.formItemContainer},Object(Ie.d)("Password","password",[xe.b],Ie.b,{type:"password"})),r.a.createElement("div",{className:Fe.a.formItemContainerSpecial},Object(Ie.d)(null,"rememberMe",null,Ie.b,{type:"checkbox"},"remember me")),a&&r.a.createElement("img",{src:a}),a&&Object(Ie.d)("Symbols from image","captcha",[xe.b],Ie.b),n&&r.a.createElement("div",{className:Le.a.formSummeryErrorParent},r.a.createElement("div",{className:Le.a.formSummeryError},n," ")),r.a.createElement("div",null,r.a.createElement("button",{className:Fe.a.loginContentButton},"Login")))})),ze=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(U.a)(x.a.mark((function r(o){var c,i;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F.a.login(e,t,n,a);case 2:0===(c=r.sent).resultCode?o(Pe()):(10===c.resultCode&&o(je()),i=c.messages.length>0?c.messages[0]:"Some error",o(Object(Oe.a)("/login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(T.a,{to:"/profile"}):r.a.createElement("div",{className:p()(Fe.a.loginContent,re.a.wrapperContent)},r.a.createElement("div",{className:Fe.a.loginFirstContentChild},r.a.createElement("h2",null,"LOGIN"),r.a.createElement(Re,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})),r.a.createElement("div",{className:Fe.a.loginContentSecondChild},r.a.createElement("h2",null,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"),r.a.createElement("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0431\u044b\u043b \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f ReactJS."),r.a.createElement("p",null,"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443 \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"),r.a.createElement("h3",null,"Email: free@samuraijs.com"),r.a.createElement("h3",null,"Password: free")))})),Be={initialized:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},Me=n(105),Ge=n(137),qe=n(149),He=n(139),Qe=n(9),Ve=Qe.createStore,Ze=Qe.combineReducers,Ke=Qe.applyMiddleware,Ye=Qe.compose,We=Ve(Ze({profilePage:Me.b,dialogsPage:Ge.a,usersPage:Z,auth:_e,form:He.a,app:De}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ye)(Ke(qe.a)));window.__store__=We;var Je=We,Xe=r.a.lazy((function(){return n.e(4).then(n.bind(null,328))})),$e=r.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,327))})),et=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Te,null),r.a.createElement("div",{className:"app-wrapper-navbar"},r.a.createElement(y,null)),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/"},r.a.createElement(T.a,{to:"/profile"})),r.a.createElement(T.b,{path:"/profile/:userId?"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,null)},r.a.createElement($e,null))),r.a.createElement(T.b,{path:"/dialogs"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,null)},r.a.createElement(Xe,null))),r.a.createElement(T.b,{path:"/users"},r.a.createElement(de,null)),r.a.createElement(T.b,{path:"/login"},r.a.createElement(ze,null)),r.a.createElement(T.b,{path:"*"},r.a.createElement("div",{className:re.a.wrapperContent},"404 NOT FOUND"))))):r.a.createElement(ce.a,null)}}]),n}(r.a.Component),tt=Object(ie.compose)(T.g,Object(N.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Pe());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(et),nt=function(e){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{store:Je},r.a.createElement(d.a,null,r.a.createElement(tt,null))))};c.a.render(r.a.createElement(nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,n){e.exports={wrapperContent:"AppPlus_wrapperContent__1BnB6",wrapperContentOne:"AppPlus_wrapperContentOne__8kyrI",flexChild:"AppPlus_flexChild__1morv",contentMarginLeft:"AppPlus_contentMarginLeft__3veuj"}},48:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(99),c=n.n(o);t.a=function(e){return r.a.createElement("div",{className:c.a.preloader},r.a.createElement("div",{className:c.a.spinner}))}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1p654",selectedPage:"Users_selectedPage__3LT56"}},98:function(e,t,n){e.exports={userPhoto:"Paginator_userPhoto__1bDa9",paginator:"Paginator_paginator__1aYFm",pageNumber:"Paginator_pageNumber__1-vlb",selectedPage:"Paginator_selectedPage__3RhgE"}},99:function(e,t,n){e.exports={preloader:"Preloader_preloader__2P3PA",spinner:"Preloader_spinner__1kErv",spin:"Preloader_spin__3uv-K"}}},[[177,1,2]]]);
//# sourceMappingURL=main.b5a9ce59.chunk.js.map