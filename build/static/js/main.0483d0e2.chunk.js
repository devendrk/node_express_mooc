(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(14),m=a(15),u=a(2),i=a(3),d=a.n(i);function s(e){var t=e.person,a=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("table",{class:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"contact"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.number," "),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger ",onClick:function(){return a(t.id,t.name)}},"delete"))))))}a(39);function f(e){var t=e.handleNameInput,a=e.handleNumberInput,n=e.handleSubmit;return r.a.createElement("div",{className:"mb-5"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header bg-dark text-white text-center py-3"},r.a.createElement("strong",null,"Phone Book form ")),r.a.createElement("div",{className:"card-body px-lg-5"},r.a.createElement("form",{onSubmit:n,className:"text-center",style:{style:"color: #757575"}},r.a.createElement("div",{className:"md-form mt-3"},r.a.createElement("input",{onChange:t,type:"text",id:"materialSubscriptionFormPasswords",placeholder:"Name",className:"form-control text-center"})),r.a.createElement("div",{className:"md-form mt-3"},r.a.createElement("input",{onChange:a,type:"number",id:"materialSubscriptionFormPasswords",placeholder:"phone number",className:"form-control text-center"})),r.a.createElement("input",{className:"btn btn-dark btn-rounded  z-depth-0 my-4  waves-effect",type:"submit",value:"Add Contact"})))))}function b(e){var t=e.conformationMessage;return t?r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"border rounded  border-success py-2 mx-auto px-5 bg-light text-success"},r.a.createElement("span",{className:"h5 pr-4"},t)," is added On in your phone book")):null}function p(e){var t=e.deleteConformation;return t?r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"border rounded  border-danger py-2 mx-auto px-5 bg-light text-danger"},t," Deleted from your Phone book")):null}function h(e){var t=e.updateConformation;return t?r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"border rounded  border-info py-2 mx-auto px-5 bg-light text-info"},r.a.createElement("span",{className:"h5 pr-4"},t)," number is updated")):null}var E=function(e){var t=e.handleSearch;return r.a.createElement("div",{className:" container-fluid font-weight-bolder h3 text-center bg-dark text-white py-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7"}),r.a.createElement("div",{className:" col-4 md-form active-purple  active-purple-2 mb-3 "},r.a.createElement("input",{onChange:t,className:"form-control text-center",type:"text",placeholder:"Search contact","aria-label":"Search"}))))};a(40),a(41);l.a.render(r.a.createElement(function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),v=i[0],N=i[1],g=Object(n.useState)(""),x=Object(u.a)(g,2),y=x[0],w=x[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),S=O[0],k=O[1],C=Object(n.useState)(""),I=Object(u.a)(C,2),D=I[0],P=I[1],F=Object(n.useState)(""),L=Object(u.a)(F,2),T=L[0],B=L[1],J=Object(n.useState)(""),M=Object(u.a)(J,2),z=M[0],A=M[1],q="http://localhost:3001/persons";Object(n.useEffect)(function(){d.a.get("http://localhost:3001/persons").then(function(e){c(e.data)})},[]);var G=function(e,t){var n=a.filter(function(t){return t.id!==e}),r=a.filter(function(t){return t.id===e?t.name:null});window.confirm("delete "+t+" ?")&&d.a.delete("".concat(q,"/").concat(e)).then(function(e){c(n),P(r[0].name),setTimeout(function(){P(null)},3e3)})},H=function(e){A(e.target.value)},K=a.filter(function(e){return e.name.toLowerCase().includes(z.toLocaleLowerCase())});return r.a.createElement("div",null,r.a.createElement(E,{handleSearch:H}),r.a.createElement("div",{className:"text-center"},r.a.createElement(b,{conformationMessage:S}),r.a.createElement(h,{updateConformation:T}),r.a.createElement(p,{deleteConformation:D})),r.a.createElement("div",{className:" d-flex flex-wrap justify-content-around my-5"},r.a.createElement("div",null,r.a.createElement(f,{handleNameInput:function(e){N(e.target.value)},handleNumberInput:function(e){w(e.target.value)},handleSubmit:function(e){var t;e.preventDefault();var n=a.filter(function(e){return v===e.name?t=e.id:null}).length>0;if(v.length<1||y.length<1)return alert("Field cant be empty");if(n){if(window.confirm(v+" already exist do you want to update number ? ")){var r={name:v,number:y,id:t};d.a.put("".concat(q,"/").concat(t),r).then(function(e){var t=a.findIndex(function(t){return t.id===e.data.id}),n=Object.assign(Object(m.a)(a),Object(o.a)({},t,r));c(n),B(e.data.name),N(""),w(""),setTimeout(function(){B(null)},3e3)})}}else{var l={name:v,number:y};d.a.post(q,l).then(function(e){c(a.concat(e.data)),N(""),w(""),k(e.data.name),setTimeout(function(){k(null)},3e3)})}},handleSearch:H})),r.a.createElement("div",null,K.map(function(e){return r.a.createElement(s,{person:e,key:e.id,handleDelete:G})}))))},null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0483d0e2.chunk.js.map