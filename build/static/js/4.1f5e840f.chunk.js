(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{277:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(34),o=a(35),r=a(37),s=a(36),i=a(0),c=a(16),h=a(21),b=a(271),p=a(273),d=a(2),u={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},m=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,l=a.name,o=a.value;e.setState(Object(n.a)({},l,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,autoComplete:"off",children:[Object(d.jsx)("label",{style:u.label,children:Object(d.jsx)(b.a,{type:"email",name:"email",value:t,placeholder:"e-mail",onChange:this.handleChange})}),Object(d.jsx)("label",{style:u.label,children:Object(d.jsx)(b.a,{type:"password",name:"password",value:a,placeholder:"password",onChange:this.handleChange})}),Object(d.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",children:"Enter"})]})]})}}]),a}(i.Component),j={onLogin:h.a.logIn};t.default=Object(c.b)(null,j)(m)}}]);
//# sourceMappingURL=4.1f5e840f.chunk.js.map