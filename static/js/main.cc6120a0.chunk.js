(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),s=a.n(o),i=(a(14),a(6)),l=a(4),c=a(5),u=a(1),d=a(8),m=a(7);a(15),a(16);function p(e){return r.a.createElement("div",{className:"post"},r.a.createElement("span",{className:"post-id"},"ID:"+e.id),r.a.createElement("h4",{className:"post-user-id"},"UserID:".concat(e.userID)),r.a.createElement("h2",{className:"post-title"},e.title),r.a.createElement("p",{className:"post-text"},e.text))}var h=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("input",{required:!0,type:"text",name:"id",id:"",placeholder:"Send your ID"}),r.a.createElement("input",{required:!0,type:"text",name:"userId",id:"",placeholder:"Send your UserID"}),r.a.createElement("input",{required:!0,type:"text",name:"title",id:"",placeholder:"Send title"}),r.a.createElement("textarea",{required:!0,name:"body",id:"",cols:"30",rows:"10",placeholder:"Write your post"}),r.a.createElement("input",{type:"submit",value:"Send posts",className:"submit-btn"}))},v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={posts:[]},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.setState({posts:t}),console.log(e.posts)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(e.target[0].value);var t={id:e.target[0].value,userId:e.target[1].value,title:e.target[2].value,body:e.target[3].value};e.target[0].value="",e.target[1].value="",e.target[2].value="",e.target[3].value="",console.log(t),this.setState({posts:[].concat(Object(i.a)(this.state.posts),[t])})}},{key:"render",value:function(){var e=this.state.posts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid",id:"article"},e.map((function(e,t){return r.a.createElement(p,{key:t+Date.now(),id:e.id,userID:e.userId,title:e.title,text:e.body})}))),r.a.createElement("div",{className:"grid"},r.a.createElement(h,{onSubmit:this.handleSubmit})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.cc6120a0.chunk.js.map