"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{1525:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(6444).ZP.button(r||(r=(0,i.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-width: 90px;\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 12px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 250ms linear;\n  &:hover,\n  &:focus {\n    background: #188ce8;\n  }\n  &:disabled {\n    background: #bcdcf6;\n  }\n"]))),a=t(184),c=function(n){var e=n.isLoading,t=void 0!==e&&e,r=n.children;return(0,a.jsx)(o,{type:"submit",disabled:t,children:r})}},5927:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,o,a=t(168),c=t(6444),s=t(5705),d=c.ZP.label(r||(r=(0,a.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  color: black;\n"]))),l=(0,c.ZP)(s.gN)(i||(i=(0,a.Z)(["\n  width: 300px;\n  padding: 3px;\n  display: flex;\n  flex-direction: column;\n"]))),u=(0,c.ZP)(s.Bc)(o||(o=(0,a.Z)(["\n  max-width: 350px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  color: red;\n"]))),p=t(184),x=function(n){var e=n.name,t=n.type,r=n.title;return(0,p.jsxs)(d,{htmlFor:e,children:[r,":",(0,p.jsx)(l,{type:t,name:e}),(0,p.jsx)(u,{name:e,component:"p"})]})}},2096:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  margin-bottom: 22px;\n"]))),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},538:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(168),o=t(6444),a=t(5705),c=(0,o.ZP)(a.l0)(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 450px;\n  border: 2px solid #2196f3;\n  border-radius: 4px;\n  padding: 50px;\n"]))),s=t(184),d=function(n){var e=n.children;return(0,s.jsx)(c,{children:e})}},6699:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  font-weight: 500;\n  font-size: 48px;\n  text-align: center;\n"]))),a=t(184),c=function(n){var e=n.style,t=n.children;return(0,a.jsx)(o,{style:e,children:t})}},3275:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,o,a,c,s,d,l,u,p=t(5861),x=t(885),f=t(7757),m=t.n(f),h=(t(2791),t(5705)),g=t(7103),b=t(168),Z=t(6444),v=Z.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 18px;\n"]))),j=t(5927),y=t(5218),w=t(6377),P=t(2096),k=t(538),z=t(1525),C=t(184),L={name:"",number:""},A=g.Ry().shape({name:g.Z_().trim().min(3,"Too Short!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:g.Z_().trim().min(7,"Too Short!").max(15,"Too Long!").matches(/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,"Phone number is not valid").required("Number is required")}),N=function(){var n=(0,w.wY)().data,e=(0,w.Tn)(),t=(0,x.Z)(e,2),r=t[0],i=t[1].isLoading,o=function(){var e=(0,p.Z)(m().mark((function e(t,i){var o,a,c,s,d,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.name,a=t.number,c=i.resetForm,e.prev=2,s=o.toLowerCase(),d=n.filter((function(n){return n.name.toLowerCase()===s})),!(d.length>0)){e.next=7;break}return e.abrupt("return",y.ZP.error("".concat(o," is already in contacts.")));case 7:return l={name:o.trim(),number:a.trim()},e.next=10,r(l);case 10:y.ZP.success("Contact added"),c(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),y.ZP.error("Error when adding contact"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,C.jsx)(v,{children:(0,C.jsx)(h.J9,{initialValues:L,onSubmit:o,validationSchema:A,children:(0,C.jsxs)(k.Z,{children:[(0,C.jsxs)(P.Z,{children:[(0,C.jsx)(j.Z,{name:"name",type:"text",title:"Name"}),(0,C.jsx)(j.Z,{name:"number",type:"tel",title:"Number"})]}),(0,C.jsx)(z.Z,{isLoading:i,children:i?"in progress...":"Add contact"})]})})})},q=Z.ZP.li(i||(i=(0,b.Z)(["\n  width: 530px;\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),F=Z.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),_=Z.ZP.p(a||(a=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n"]))),B=Z.ZP.button(c||(c=(0,b.Z)(["\n  padding-top: 4px;\n  padding-bottom: 4px;\n  width: 70px;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 12px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 250ms linear;\n\n  &:hover,\n  &:focus {\n    background: #188ce8;\n  }\n  &:disabled {\n    background: #bcdcf6;\n  }\n"]))),S=function(n){var e=n.id,t=n.name,r=n.number,i=(0,w.Nt)(),o=(0,x.Z)(i,2),a=o[0],c=o[1].isLoading;return(0,C.jsx)(q,{children:(0,C.jsxs)(F,{children:[(0,C.jsxs)(_,{children:[t,": ",r]}),(0,C.jsx)(B,{type:"button",disabled:c,onClick:function(){return a(e)},children:"Delete"})]})})},T=Z.ZP.ul(s||(s=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Y=t(5048),J=function(n){return n.filter.query},$=function(){var n=(0,Y.v9)(J),e=(0,w.wY)().data;if(!e)return null;var t=function(){var t=n.toLocaleLowerCase();return e.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}();return(0,C.jsx)(T,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,C.jsx)(S,{name:t,number:r,id:e},e)}))})},M=Z.ZP.label(d||(d=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-bottom: 28px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #757575;\n"]))),D=Z.ZP.input(l||(l=(0,b.Z)(["\n  width: 250px;\n  padding: 3px;\n  margin-left: 23px;\n"]))),E=t(4808),I=function(){var n=(0,Y.v9)(J),e=(0,Y.I0)();return(0,C.jsxs)(M,{children:["Finde contacts by name:",(0,C.jsx)(D,{type:"text",name:"filter",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){var t=n.currentTarget.value;e((0,E.w)(t))}})]})},R=t(334),V=t(4270),G=t(6699),H=Z.ZP.h2(u||(u=(0,b.Z)(["\n  font-size: 28px;\n  text-align: center;\n"]))),K=function(n){var e=n.style,t=n.children;return(0,C.jsx)(H,{style:e,children:t})},O=function(){var n=(0,w.wY)(),e=n.error,t=n.isLoading;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(V.q,{children:(0,C.jsx)("title",{children:"Your contacts"})}),(0,C.jsx)(G.Z,{style:{marginBottom:"28px"},children:"Phonebook"}),(0,C.jsx)(N,{}),(0,C.jsx)(K,{style:{marginBottom:"28px"},children:"Contacts"}),(0,C.jsx)(I,{}),t&&!e&&(0,C.jsx)(R.Z,{}),!t&&e&&(0,C.jsx)("b",{children:"Something went wrong, try reloading the page"}),!e&&(0,C.jsx)($,{})]})}}}]);
//# sourceMappingURL=275.53e0934d.chunk.js.map