(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(89)},46:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o),s=(a(46),a(5)),l=a(12),i=a(2),u=a(4),m=a.n(u),d=a(11),p=a(36),f=a(37),h=a(20),v=a.n(h),b=(a(49),a(51),{apiKey:"AIzaSyAYPK2-QSZdpQwX6unspPrJpEqy1TCp0RI",authDomain:"hooks-news1.firebaseapp.com",databaseURL:"https://hooks-news1.firebaseio.com",projectId:"hooks-news1",storageBucket:"hooks-news1.appspot.com",messagingSenderId:"446718869008",appId:"1:446718869008:web:2ae131fce882d891a69495"}),E=new(function(){function e(){Object(p.a)(this,e),v.a.initializeApp(b),this.auth=v.a.auth(),this.db=v.a.firestore()}return Object(f.a)(e,[{key:"register",value:function(){var e=Object(d.a)(m.a.mark(function e(t,a,n){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(a,n);case 2:return r=e.sent,e.next=5,r.user.updateProfile({displayName:t});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(d.a)(m.a.mark(function e(t,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signInWithEmailAndPassword(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signOut();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"resetPassword",value:function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.sendPasswordResetEmail(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),g=r.a.createContext(null),w=E;var k=function(){var e=r.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.useEffect(function(){var e=w.auth.onAuthStateChanged(function(e){n(e||null)});return function(){return e()}},[]),a},N=a(17),y=a(10);var x=function(e,t,a){var n=r.a.useState(e),o=Object(i.a)(n,2),c=o[0],s=o[1],l=r.a.useState({}),u=Object(i.a)(l,2),m=u[0],d=u[1],p=r.a.useState(!1),f=Object(i.a)(p,2),h=f[0],v=f[1];return r.a.useEffect(function(){h&&(0===Object.keys(m).length?(a(),v(!1)):v(!1))},[m]),{handleChange:function(e){e.persist(),s(function(t){return Object(y.a)({},t,Object(N.a)({},e.target.name,e.target.value))})},handleSubmit:function(e){e.preventDefault();var a=t(c);d(a),v(!0)},handleBlure:function(){var e=t(c);d(e)},values:c,errors:m,isSubmiting:h}};function C(e){var t={};return e.description?e.description.length<10&&(t.description="Description must be at least 10 characters"):t.description="Description required",e.url?/^(ftp|http|https):\/\/[^ "]+$/.test(e.url)||(t.url="Please enter a valid URL"):t.url="URL required",t}var O={description:"",url:""};var j=function(e){var t=r.a.useContext(g),a=t.firebase,n=t.user,o=x(O,C,function(){if(n){var t=l.url,r=l.description,o={url:t,description:r,postedBy:{id:n.uid,name:n.displayName},voteCount:0,votes:[],comments:[],created:Date.now()};a.db.collection("links").add(o),e.history.push("/")}else e.history.push("/login")}),c=o.handleChange,s=o.handleSubmit,l=o.values,i=o.errors;return o.isSubmiting,r.a.createElement("form",{onSubmit:s,className:"flex flex-column mt3"},r.a.createElement("input",{onChange:c,value:l.description,name:"description",placeholder:"A description for your link",autoComplete:"off",text:"text",className:i.description&&"error-input"}),i.description&&r.a.createElement("p",{className:"error-text"},i.description),r.a.createElement("input",{onChange:c,value:l.url,name:"url",placeholder:"http://",autoComplete:"off",text:"url",className:i.url&&"error-input"}),i.url&&r.a.createElement("p",{className:"error-text"},i.url),r.a.createElement("button",{className:"button",type:"submit"},"Submit"))},S=a(19),B=3;var A=a(18),P=a.n(A);var I=Object(l.g)(function(e){var t=e.showCount,a=e.link,n=e.index,o=e.history,c=r.a.useContext(g),l=c.firebase,i=c.user,u=i&&i.uid===a.postedBy.id;return r.a.createElement("div",{className:"flex items-start mt2"},r.a.createElement("div",{className:"flex items-center"},t&&r.a.createElement("span",{className:"gray"},n,"."),r.a.createElement("div",{className:"vote-button",style:{cursor:"pointer",fontSize:"1.1rem",color:"LIGHTSALMON"},onClick:function(){if(i){var e=l.db.collection("links").doc(a.id);e.get().then(function(t){if(t.exists){var a=t.data().votes,n={votedBy:{id:i.uid,name:i.displayName}},r=[].concat(Object(S.a)(a),[n]),o=r.length;e.update({votes:r,voteCount:o})}})}else o.push("/login")}},"\u2bc5")),r.a.createElement("div",{className:"ml1"},r.a.createElement("div",null,r.a.createElement("a",{href:a.url,className:"black no-underline"},a.description)," ",r.a.createElement("span",{className:"link"},"(",a.url.replace(/^https?:\/\//i,""),")")),r.a.createElement("div",{className:"f6 lh-copy gray"},a.voteCount," votes by ",a.postedBy.name," ",P()(a.created),"  |  ",r.a.createElement(s.b,{to:"/link/".concat(a.id)},a.comments.length>0?"".concat(a.comments.length," comments"):"discuss"),u&&r.a.createElement(r.a.Fragment,null,"  |  ",r.a.createElement("span",{className:"delete-button",onClick:function(){l.db.collection("links").doc(a.id).delete().then(function(){console.log("Document with ID ".concat(a.id," deleted"))}).catch(function(e){console.error("Error deliting link",e)})}},"Delete")))))});var L=function(){var e=r.a.useContext(g).firebase,t=r.a.useState([]),a=Object(i.a)(t,2),o=a[0],c=a[1],s=r.a.useState([]),l=Object(i.a)(s,2),u=l[0],m=l[1],d=r.a.useState(""),p=Object(i.a)(d,2),f=p[0],h=p[1];return Object(n.useEffect)(function(){e.db.collection("links").get().then(function(e){var t=e.docs.map(function(e){return Object(y.a)({id:e.id},e.data())});c(t)})},[]),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=f.toLowerCase(),a=o.filter(function(e){return e.description.toLowerCase().includes(t)||e.url.toLowerCase().includes(t)||e.postedBy.name.toLowerCase().includes(t)});m(a)}},r.a.createElement("div",null,"Search ",r.a.createElement("input",{onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",null,"Ok"))),u.map(function(e,t){return r.a.createElement(I,{key:e.id,showCount:!1,link:e,index:t})}))};function D(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email required",e.password?e.password.length<6&&(t.password="Password must be at least 6 characters"):t.password="Password required",t}var R={name:"",email:"",password:""};var q=function(e){var t=x(R,D,function(){return y.apply(this,arguments)}),a=t.handleChange,o=t.handleSubmit,c=t.handleBlure,l=t.values,u=t.errors,p=t.isSubmiting,f=Object(n.useState)(!0),h=Object(i.a)(f,2),v=h[0],b=h[1],E=Object(n.useState)(null),g=Object(i.a)(E,2),k=g[0],N=g[1];function y(){return(y=Object(d.a)(m.a.mark(function t(){var a,n,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.name,n=l.email,r=l.password,t.prev=1,!v){t.next=7;break}return t.next=5,w.login(n,r);case 5:t.next=9;break;case 7:return t.next=9,w.register(a,n,r);case 9:e.history.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.error("Authentocation Error",t.t0),N(t.t0.message);case 16:case"end":return t.stop()}},t,null,[[1,12]])}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("h2",{className:"mv3"},v?"Login":"Create Account"),r.a.createElement("form",{onSubmit:o,className:"flex flex-column"},!v&&r.a.createElement("input",{onChange:a,value:l.name,name:"name",type:"text",placeholder:"Your Name",autoComplete:"off"}),r.a.createElement("input",{onChange:a,onBlur:c,value:l.email,type:"email",name:"email",className:u.email&&"error-input",placeholder:"Your Email",autoComplete:"off"}),u.email&&r.a.createElement("p",{className:"error-text"},u.email),r.a.createElement("input",{onChange:a,onBlur:c,value:l.password,type:"password",name:"password",className:u.password&&"error-input",placeholder:"Choose a secure password"}),u.password&&r.a.createElement("p",{className:"error-text"},u.password),k&&r.a.createElement("p",{className:"error-text"},k),r.a.createElement("div",{className:"flex mt3"},r.a.createElement("button",{type:"submit",className:"button pointer br2",disabled:p,style:{background:p?"grey":"orange"}},"Submit"),r.a.createElement("button",{type:"button",className:"button pointer",onClick:function(){return b(function(e){return!e})}},v?"Need to Create an Account?":"Already have an account?"))),r.a.createElement("div",{className:"forgot-password"},r.a.createElement(s.b,{to:"forgot"},"Forgot password?")))};var F=function(){var e=r.a.useContext(g).firebase,t=r.a.useState(""),a=Object(i.a)(t,2),n=a[0],o=a[1],c=r.a.useState(!1),s=Object(i.a)(c,2),l=s[0],u=s[1],p=r.a.useState(null),f=Object(i.a)(p,2),h=f[0],v=f[1];function b(){return(b=Object(d.a)(m.a.mark(function t(a){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.resetPassword(n);case 3:u(!0),v(null),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error sending email",t.t0),v(t.t0.message),u(!1);case 12:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("input",{type:"email",className:"input",placeholder:"Provide your account email",onChange:function(e){return o(e.target.value)}}),r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:function(e){return b.apply(this,arguments)}},"Reset Password")),l&&r.a.createElement("p",null,"Check email to reset password"),h&&r.a.createElement("p",{className:"error-text"},h))};var U=function(e){var t=r.a.useContext(g),a=t.firebase,n=t.user,o=r.a.useState(null),c=Object(i.a)(o,2),s=c[0],l=c[1],u=r.a.useState(""),m=Object(i.a)(u,2),d=m[0],p=m[1],f=e.match.params.linkId,h=a.db.collection("links").doc(f);return r.a.useEffect(function(){h.get().then(function(e){l(Object(y.a)({},e.data(),{id:e.id}))})},[]),s?r.a.createElement("div",null,r.a.createElement(I,{showCount:!1,link:s}),r.a.createElement("textarea",{onChange:function(e){return p(e.target.value)},value:d,rows:"6",cols:"60"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){n?h.get().then(function(e){if(e.exists){var t=e.data().comments,a={postedBy:{id:n.uid,name:n.displayName},created:Date.now(),text:d},r=[].concat(Object(S.a)(t),[a]);h.update({comments:r}),l(function(e){return Object(y.a)({},e,{comments:r})}),p("")}}):e.history.push("/login")},className:"button"},"Add Comment")),s.comments.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",{className:"comment-author"},e.postedBy.name," | ",P()(e.created)),r.a.createElement("p",null,e.text))})):r.a.createElement("div",null,"Loading...")},W=a(40),Z=a.n(W);var z=function(e){var t=r.a.useContext(g).firebase,a=r.a.useState([]),n=Object(i.a)(a,2),o=n[0],c=n[1],s=r.a.useState(null),l=Object(i.a)(s,2),u=l[0],m=l[1],d=r.a.useState(!1),p=Object(i.a)(d,2),f=p[0],h=p[1],v=e.location.pathname.includes("new"),b=e.location.pathname.includes("top"),E=Number(e.match.params.page),w=t.db.collection("links");function k(e){var t=e.docs.map(function(e){return Object(y.a)({id:e.id},e.data())}),a=t[t.length-1];c(t),m(a),h(!1)}r.a.useEffect(function(){var e=function(){h(!0);var e=Boolean(u);if(b)return w.orderBy("voteCount","desc").limit(B).onSnapshot(k);if(1===E)return w.orderBy("created","desc").limit(B).onSnapshot(k);if(e)return w.orderBy("created","desc").startAfter(u.created).limit(B).onSnapshot(k);var t=E*B-B;return Z.a.get("https://us-central1-hooks-news1.cloudfunctions.net/linksPagination?offset=".concat(t)).then(function(e){var t=e.data,a=t[t.length-1];c(t),m(a),h(!1)}),function(){}}();return function(){return e()}},[b,E]);var N=E?(E-1)*B+1:0;return r.a.createElement("div",{style:{opacity:f?.25:1}},o.map(function(e,t){return r.a.createElement(I,{key:e.id,showCount:!0,link:e,index:t+N})}),v&&r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{className:"pointer mr2",onClick:function(){E>1&&e.history.push("/new/".concat(E-1))}},"Previous"),r.a.createElement("div",{className:"pointer mr2",onClick:function(){E<=o.length/B&&e.history.push("/new/".concat(E+1))}},"Next")))};var H=Object(l.g)(function(){var e=r.a.useContext(g),t=e.user,a=e.firebase;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"flex"},r.a.createElement("img",{src:"/logo.png",alt:"Hooks News Logo",className:"logo"}),r.a.createElement(s.c,{to:"/",className:"header-title"},"Hooks News"),r.a.createElement(s.c,{to:"/",className:"header-link"},"New"),r.a.createElement("div",{className:"divider"},"|"),r.a.createElement(s.c,{to:"/top",className:"header-link"},"Top"),r.a.createElement("div",{className:"divider"},"|"),r.a.createElement(s.c,{to:"/search",className:"header-link"},"Search"),t&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"divider"},"|"),r.a.createElement(s.c,{to:"/create",className:"header-link"},"Submit"))),r.a.createElement("div",{className:"flex"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-name"},t.displayName),r.a.createElement("div",{className:"divider"},"|"),r.a.createElement("div",{className:"header-button",onClick:function(){return a.logout()}},"logout")):r.a.createElement(s.c,{to:"/login",className:"header-link"},"login")))});var J=function(){var e=k();return r.a.createElement(s.a,null,r.a.createElement(g.Provider,{value:{user:e,firebase:w}},r.a.createElement("div",{className:"app-container"},r.a.createElement(H,null),r.a.createElement("div",{className:"route-container"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/new/1"})}}),r.a.createElement(l.b,{path:"/create",component:j}),r.a.createElement(l.b,{path:"/login",component:q}),r.a.createElement(l.b,{path:"/forgot",component:F}),r.a.createElement(l.b,{path:"/search",component:L}),r.a.createElement(l.b,{path:"/top",component:z}),r.a.createElement(l.b,{path:"/new/:page",component:z}),r.a.createElement(l.b,{path:"/link/:linkId",component:U}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.7ecbe534.chunk.js.map