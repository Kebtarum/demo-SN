(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{289:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(35),r=a(36),o=a(39),l=a(38),s=a(0),i=a.n(s),c=a(10),u=a(14),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(s,t);var a=Object(l.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),s}(i.a.Component);return Object(u.b)(m)(t)}},290:function(e,t,a){e.exports={mainPhoto:"ProfileInfo_mainPhoto__EhKFG"}},292:function(e,t,a){},295:function(e,t,a){},296:function(e,t,a){e.exports={item:"Post_item__TE-UN"}},301:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(36),o=a(39),l=a(38),s=a(0),i=a.n(s),c=a(292),u=a.n(c),m=(a(295),a(296)),p=a.n(m);var f=function(e){return i.a.createElement("div",{className:p.a.item},i.a.createElement("img",{src:"https://24smi.org/public/media/celebrity/2020/03/17/ndyuq11dpxep-rikardo-milos.jpg"}),e.message)},b=a(86),d=a(130),E=a(64),h=a(25),v=Object(E.a)(10);var O=Object(d.a)({form:"profileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(b.a,{component:h.b,name:"newPostText",placeholder:"something",validate:[E.b,v]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),g=function(e){var t=e.posts.map((function(e){return i.a.createElement(f,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createRef(),i.a.createElement("div",null,i.a.createElement("h3",null,"My posts"),i.a.createElement(O,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)},j=a(97),P=a(14),k=Object(P.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(j.a)(t))}}}))(g),y=a(98),S=a(290),U=a.n(S),A=a(41),w=function(e){var t=Object(s.useState)(!1),a=Object(y.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(e.status),l=Object(y.a)(o,2),c=l[0],u=l[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}},i.a.createElement("b",null,"Status: "),e.status||"----")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,value:c,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){r(!1),e.updateUserStatus(c)}})))},F=a(108),N=a.n(F),C=(a(297),a(34)),T=a.n(C),M=Object(d.a)({form:"/edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:T.a.formSummeryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name:")," ",Object(h.c)("Full name","fullName",[],h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job:"),Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills:"),Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me:"),Object(h.c)("About me","aboutMe",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts:")," ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:U.a.contact},i.a.createElement("b",null,e,": "),Object(h.c)(e,"contacts."+e,[],h.a))}))))})),x=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",null,i.a.createElement("b",null,t,":"),a)},I=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMod;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name:")," ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me:")," ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return i.a.createElement(x,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))};var J=function(e){var t=Object(s.useState)(!1),a=Object(y.a)(t,2),n=a[0],r=a[1];return e.profile?i.a.createElement("div",{className:U.a.discriptionBlock},i.a.createElement("img",{src:e.profile.photos.large||N.a,className:U.a.mainPhoto}),e.isOwner&&i.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),n?i.a.createElement(M,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){r(!1)}))}}):i.a.createElement(I,{profile:e.profile,isOwner:e.isOwner,goToEditMod:function(){r(!0)}}),i.a.createElement(w,{status:e.status,updateUserStatus:e.updateUserStatus})):i.a.createElement(A.a,null)};var _=function(e){return i.a.createElement("div",{className:u.a.content},i.a.createElement(J,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),i.a.createElement(k,{store:e.store}))},D=(a(72),a(10)),V=(a(11),a(289)),z=a(9),B=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.content},i.a.createElement(_,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})))}}]),a}(i.a.Component);t.default=Object(z.compose)(Object(P.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:j.c,getUserStatus:j.d,updateUserStatus:j.g,savePhoto:j.e,saveProfile:j.f}),D.g,V.a)(B)}}]);
//# sourceMappingURL=3.4304e1c5.chunk.js.map