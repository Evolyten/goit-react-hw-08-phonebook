"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[987],{2987:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(2791),a=t(5705),i=t(5218),s=t(767),o=t(9434),c=t(2797),u=t(9150),l=t(4190),m=t(5863),h=t(824),d=t(5777),x=t(1294),f=t(184),p={name:"",number:""},v=c.Ry().shape({name:c.Z_().required("Please enter the name").min(3,"Name must have more the 3 letter").max(30,"Name must have less then 30 letter").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:c.Z_().required("Please enter the number").min(6,"Number of phone must have more then 6 number").max(14,"Number of phone must have less then 15 number").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),b=function(){var e=(0,o.I0)(),n=(0,o.v9)(u.K2);return(0,f.jsx)(x.Section,{title:"Phonebook",height:400,children:(0,f.jsx)(a.J9,{initialValues:p,onSubmit:function(t,r){var a=r.resetForm;if(n.some((function(e){return e.name===t.name})))return i.ZP.error("".concat(t.name," is already in contacts")),void a();e((0,s.uK)(t)),a()},validationSchema:v,children:function(e){var n=e.handleSubmit;e.errors,e.touched;return(0,f.jsx)("form",{onSubmit:n,children:(0,f.jsxs)(l.gC,{spacing:6,align:"flex-start",children:[(0,f.jsx)(m.lX,{htmlFor:"name",children:"Contact Name"}),(0,f.jsx)(a.gN,{as:h.II,id:"name",name:"name",type:"name",variant:"filled"}),(0,f.jsx)(a.Bc,{name:"name"}),(0,f.jsx)(m.lX,{htmlFor:"number",children:"Number"}),(0,f.jsx)(a.gN,{as:h.II,id:"number",name:"number",type:"number",variant:"filled",autoComplete:"current-password"}),(0,f.jsx)(a.Bc,{name:"number"}),(0,f.jsx)(d.zx,{type:"submit",colorScheme:"purple",width:"full",children:"Add Contact"})]})})}})})};function j(e){var n=e.user,t=(0,o.I0)(),r=n.id,a=n.name,i=n.number;return(0,f.jsxs)(l.HC,{display:"flex",alignItems:"center",justifyContent:"space-between",mb:"20px",children:[a,": ",i,(0,f.jsx)(d.zx,{h:30,colorScheme:"teal",variant:"outline",onClick:function(){return t((0,s.GK)(r))},children:"Delete"})]})}var g,w=function(){var e=(0,o.v9)(u.K2),n=(0,o.v9)(u.zK);return(0,f.jsx)(l.GS,{width:300,mt:"20px",fontFamily:"sans-serif",fontSize:16,children:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return(0,f.jsx)(j,{user:e},e.id)}))})},C="Filter_filter__HNnTn",y=t(9324),N=function(){var e=(0,o.I0)();return(0,f.jsx)("input",{className:C,type:"text",name:"filter",onChange:function(n){var t=n.target.value;e((0,y.xO)(t))}})},S=t(168),I=t(8402),_=t(7691).ZP.div(g||(g=(0,S.Z)(["\n  text-align: center;\n"])));function k(){return(0,f.jsx)(_,{children:(0,f.jsx)(I.Nx,{width:"200",color:"#4fa94d"})})}function z(){var e=(0,o.v9)(u.K2),n=(0,o.v9)(u.Vc),t=(0,o.I0)();return(0,r.useEffect)((function(){t((0,s.NJ)())}),[t]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l.xu,{display:"flex",bgColor:"gray.100",h:"100vh",flexDirection:"column",alignItems:"center",p:30,children:[(0,f.jsx)(b,{}),(0,f.jsxs)(x.Section,{title:"Contacts",width:400,children:[(0,f.jsx)(N,{}),!!e.length&&(0,f.jsx)(w,{}),n&&(0,f.jsx)(k,{})]}),(0,f.jsx)(i.x7,{position:"top-right",reverseOrder:!0})]})})}},1294:function(e,n,t){t.r(n),t.d(n,{Section:function(){return i}});var r=t(4190),a=t(184);function i(e){var n=e.title,t=e.height,i=e.width,s=void 0===i?"300":i,o=e.children;return(0,a.jsxs)(r.xu,{bg:"white",p:8,rounded:"md",w:s,h:t,mt:"200px",textAlign:"center",children:[(0,a.jsx)(r.X6,{as:"h2",mb:"20px",children:n}),o]})}}}]);
//# sourceMappingURL=987.d1bfa0b9.chunk.js.map