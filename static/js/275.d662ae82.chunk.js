"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{3974:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),a=t(6444).ZP.p(r||(r=(0,i.Z)(["\n  margin: 0 auto;\n  padding: 18px;\n  font-weight: 500;\n  font-size: 20px;\n  font-style: italic;\n  color: #d8000c;\n"]))),o=t(184),c=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},5927:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,a,o=t(168),c=t(6444),s=t(5705),d=c.ZP.label(r||(r=(0,o.Z)(["\n  font-weight: 700;\n  color: #757575;\n"]))),l=(0,c.ZP)(s.gN)(i||(i=(0,o.Z)(["\n  width: 300px;\n  padding: 3px;\n  display: flex;\n  flex-direction: column;\n"]))),u=(0,c.ZP)(s.Bc)(a||(a=(0,o.Z)(["\n  max-width: 350px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #d8000c;\n"]))),p=t(184),x=function(n){var e=n.name,t=n.type,r=n.title;return(0,p.jsxs)(d,{htmlFor:e,children:[r,":",(0,p.jsx)(l,{type:t,name:e}),(0,p.jsx)(u,{name:e,component:"p"})]})}},2096:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),a=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  margin-bottom: 22px;\n"]))),o=t(184),c=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},538:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(168),a=t(6444),o=t(5705),c=(0,a.ZP)(o.l0)(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 450px;\n  border: 2px solid #2196f3;\n  border-radius: 4px;\n  padding: 50px;\n"]))),s=t(184),d=function(n){var e=n.children;return(0,s.jsx)(c,{children:e})}},6699:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),a=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  font-weight: 500;\n  font-size: 48px;\n  text-align: center;\n"]))),o=t(184),c=function(n){var e=n.style,t=n.children;return(0,o.jsx)(a,{style:e,children:t})}},3275:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,a,o,c,s,d,l,u,p=t(5861),x=t(885),f=t(7757),m=t.n(f),h=(t(2791),t(5705)),Z=t(7103),g=t(168),b=t(6444),j=b.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 18px;\n"]))),v=t(5927),y=t(5218),w=t(6377),P=t(2096),k=t(538),z=t(3408),C=t(184),A={name:"",number:""},L=Z.Ry().shape({name:Z.Z_().trim().min(3,"Too Short!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:Z.Z_().trim().min(7,"Too Short!").max(15,"Too Long!").matches(/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,"Phone number is not valid").required("Number is required")}),N=function(){var n=(0,w.wY)().data,e=(0,w.Tn)(),t=(0,x.Z)(e,2),r=t[0],i=t[1].isLoading,a=function(){var e=(0,p.Z)(m().mark((function e(t,i){var a,o,c,s,d,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.name,o=t.number,c=i.resetForm,e.prev=2,s=a.toLowerCase(),d=n.filter((function(n){return n.name.toLowerCase()===s})),!(d.length>0)){e.next=7;break}return e.abrupt("return",y.ZP.error("".concat(a," is already in contacts.")));case 7:return l={name:a.trim(),number:o.trim()},e.next=10,r(l);case 10:y.ZP.success("Contact added"),c(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),y.ZP.error("Error when adding contact"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,C.jsx)(j,{children:(0,C.jsx)(h.J9,{initialValues:A,onSubmit:a,validationSchema:L,children:(0,C.jsxs)(k.Z,{children:[(0,C.jsxs)(P.Z,{children:[(0,C.jsx)(v.Z,{name:"name",type:"text",title:"Name"}),(0,C.jsx)(v.Z,{name:"number",type:"tel",title:"Number"})]}),(0,C.jsxs)(z.Z,{disabled:i,type:"submit",children:[" ",i?"in progress...":"Add contact"]})]})})})},q=b.ZP.li(i||(i=(0,g.Z)(["\n  width: 530px;\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),F=b.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),_=b.ZP.p(o||(o=(0,g.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n"]))),B=b.ZP.button(c||(c=(0,g.Z)(["\n  padding-top: 4px;\n  padding-bottom: 4px;\n  width: 70px;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 12px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 250ms linear;\n\n  &:hover,\n  &:focus {\n    background: #188ce8;\n  }\n  &:disabled {\n    background: #bcdcf6;\n  }\n"]))),S=function(n){var e=n.id,t=n.name,r=n.number,i=(0,w.Nt)(),a=(0,x.Z)(i,2),o=a[0],c=a[1].isLoading;return(0,C.jsx)(q,{children:(0,C.jsxs)(F,{children:[(0,C.jsxs)(_,{children:[t,": ",r]}),(0,C.jsx)(B,{type:"button",disabled:c,onClick:function(){return o(e)},children:"Delete"})]})})},T=b.ZP.ul(s||(s=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Y=t(5048),J=function(n){return n.filter.query},$=function(){var n=(0,Y.v9)(J),e=(0,w.wY)().data;if(!e)return null;var t=function(){var t=n.toLocaleLowerCase();return e.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}();return(0,C.jsx)(T,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,C.jsx)(S,{name:t,number:r,id:e},e)}))})},M=b.ZP.label(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-bottom: 28px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #757575;\n"]))),D=b.ZP.input(l||(l=(0,g.Z)(["\n  width: 250px;\n  padding: 3px;\n  margin-left: 23px;\n"]))),E=t(4808),I=function(){var n=(0,Y.v9)(J),e=(0,Y.I0)();return(0,C.jsxs)(M,{children:["Finde contacts by name:",(0,C.jsx)(D,{type:"text",name:"filter",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){var t=n.currentTarget.value;e((0,E.w)(t))}})]})},R=t(334),V=t(4270),G=t(6699),H=b.ZP.h2(u||(u=(0,g.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),K=function(n){var e=n.style,t=n.children;return(0,C.jsx)(H,{style:e,children:t})},O=t(3974),Q=function(){var n=(0,w.wY)(),e=n.error,t=n.isLoading;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(V.q,{children:(0,C.jsx)("title",{children:"Your contacts"})}),(0,C.jsx)(G.Z,{style:{marginBottom:"28px"},children:"Phonebook"}),(0,C.jsx)(N,{}),(0,C.jsx)(K,{style:{marginBottom:"28px"},children:"Contacts"}),(0,C.jsx)(I,{}),t&&!e&&(0,C.jsx)(R.Z,{}),!t&&e&&(0,C.jsx)(O.Z,{children:"Something went wrong, try reloading the page"}),!e&&(0,C.jsx)($,{})]})}}}]);
//# sourceMappingURL=275.d662ae82.chunk.js.map