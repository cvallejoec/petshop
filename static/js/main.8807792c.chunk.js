(this.webpackJsonppetshop=this.webpackJsonppetshop||[]).push([[0],{15:function(e,t){e.exports={url:"https://petshop-back.herokuapp.com"}},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),i=c(29),l=c.n(i),o=(c(37),c(38),c(30)),r=c(2),j=(c(39),c.p+"static/media/hero.658f4721.svg"),u=(c(40),function(e){var t=e.icon,c=e.title,n=e.description;return Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("img",{src:t,alt:"".concat(t)}),Object(a.jsx)("h3",{children:c}),Object(a.jsx)("p",{children:n})]})}),d=c.p+"static/media/1-step.5d4985dc.svg",b=c.p+"static/media/2-step.21682d10.svg",m=c.p+"static/media/3-step.ab6998bf.svg",h=c.p+"static/media/4-step.b0bf1c99.svg",p=c(10),x=(c(41),c(9)),O=c(11),v=c(13),_=c.n(v),f=c(14),N=c.n(f),g=(c(60),c(15)),C=c.n(g),y=(c(61),function(e){var t=e.className,c=void 0===t?"button__primary":t,n=e.text,s=void 0===n?"Enviar":n,i=e.onClick;return Object(a.jsx)("button",{className:c,onClick:i,children:s})}),S=function(){var e=Object(n.useState)({name:"",clientDocument:"",species:"",petName:"",genre:"",serviceType:"",location:{latitude:111,longitude:222,text:""},location2:""}),t=Object(p.a)(e,2),c=t[0],s=t[1],i=function(e){s(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("h2",{className:"form__title",children:"Crea tu servicio"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"name",className:"label__title",children:"Nombre"}),Object(a.jsx)("input",{type:"text",name:"name",id:"name",value:c.name,onChange:function(e){return i(e)},className:"label__input"})]}),Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"clientDocument",className:"label__title",children:"C\xe9dula"}),Object(a.jsx)("input",{type:"text",name:"clientDocument",id:"clientDocument",value:c.clientDocument,onChange:function(e){return i(e)},className:"label__input"})]}),Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"species",className:"label__title",children:"Especie"}),Object(a.jsx)("input",{type:"text",name:"species",id:"species",value:c.species,onChange:function(e){return i(e)},className:"label__input"})]}),Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"petName",className:"label__title",children:"Nombre mascota"}),Object(a.jsx)("input",{type:"text",name:"petName",id:"petName",value:c.petName,onChange:function(e){return i(e)},className:"label__input"})]}),Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"genre",className:"label__title",children:"Sexo"}),Object(a.jsxs)("select",{value:c.genre,name:"genre",onChange:function(e){return i(e)},className:"label__input",id:"genre",children:[Object(a.jsx)("option",{value:"",children:"--SELECCIONAR--"}),Object(a.jsx)("option",{value:"Macho",children:"Macho"}),Object(a.jsx)("option",{value:"Hembra",children:"Hembra"})]})]}),Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"serviceType",className:"label__title",children:"Tipo de Servicio"}),Object(a.jsxs)("select",{value:c.serviceType,name:"serviceType",onChange:function(e){return i(e)},className:"label__input",children:[Object(a.jsx)("option",{value:"",children:"--SELECCIONAR--"}),Object(a.jsx)("option",{value:"Lavado",children:"Lavado"}),Object(a.jsx)("option",{value:"Peluquer\xeda",children:"Peluquer\xeda"})]})]}),Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"location2",className:"label__title",children:"Direcci\xf3n de recogida"}),Object(a.jsx)("input",{type:"text",name:"location2",id:"location2",value:c.location2,onChange:function(e){return i(e)},className:"label__input"})]})]}),Object(a.jsx)("div",{className:"form__footer",children:Object(a.jsx)(y,{text:"Solicitar",onClick:function(){_.a.post(C.a.url+"/api/services",c).then((function(e){var t=e.data.data.serviceId;N.a.fire({title:"Servicio solicitado",text:"Este es tu n\xfamero de servicio ".concat(t),icon:"success",showCloseButton:!0})})).catch((function(e){console.log(e)}))}})})]})},k=(c(62),function(){var e=Object(n.useState)({slug:""}),t=Object(p.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("h2",{className:"form__title",children:"Verifica tu servicio"}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"label__container",children:[Object(a.jsx)("label",{htmlFor:"name",className:"label__title",children:"Ingresa tu c\xf3digo:"}),Object(a.jsx)("input",{type:"number",name:"slug",id:"slug",value:c.slug,onChange:function(e){return function(e){s(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))}(e)},className:"label__input"})]})}),Object(a.jsx)("div",{className:"form__footer",children:Object(a.jsx)(y,{text:"Verificar",onClick:function(){_.a.get("".concat(C.a.url,"/api/services/").concat(c.slug)).then((function(e){var t=e.data.data;N.a.fire({title:"Este es el estado de tu servicio",html:" <div>\n              <div>\n              \n              <label>Nombre mascota: ".concat(t.petName,"</label>\n              </div>\n              <div>\n\n              <label>Status: ").concat(t.status,"</label>\n              </div>\n            </div>"),icon:"success"})})).catch((function(e){console.log(e)}))}})})]})}),F=function(){var e="tabs__title",t="tabs__title tabs__title--active",c=Object(n.useState)("customerForm"),s=Object(p.a)(c,2),i=s[0],l=s[1];return Object(a.jsxs)("div",{className:"tabs",children:[Object(a.jsxs)("div",{className:"tabs__container",children:[Object(a.jsx)("h3",{onClick:function(){return l("customerForm")},className:"customerForm"===i?t:e,children:"Crear"}),Object(a.jsx)("h3",{onClick:function(){return l("verifyService")},className:"verifyService"===i?t:e,children:"Verificar"})]}),function(){switch(i){case"customerForm":return Object(a.jsx)(S,{});case"verifyService":return Object(a.jsx)(k,{});default:return null}}()]})},w=function(){return Object(a.jsxs)("div",{className:"customer",children:[Object(a.jsxs)("section",{className:"hero",children:[Object(a.jsxs)("div",{className:"hero__left",children:[Object(a.jsx)("h1",{children:"Te ayudamos con el cuidado de tus mascotas"}),Object(a.jsx)("p",{children:"Ponemos atenci\xf3n a los m\xe1s m\xednimos detalles."})]}),Object(a.jsx)("div",{className:"hero__right",children:Object(a.jsx)("img",{src:j,alt:"hero"})})]}),Object(a.jsxs)("section",{className:"workflow",children:[Object(a.jsx)("h2",{children:"\xbfC\xf3mo funciona?"}),Object(a.jsxs)("div",{className:"workflow__steps",children:[Object(a.jsx)(u,{icon:d,title:"Tus datos y los de tu mascota",description:"Llena el formulario con tu nombre, n\xfamero de contacto y el nombre de tu mascota."}),Object(a.jsx)(u,{icon:b,title:"Selecciona el servicio",description:"Tenemos gran variedad de servicios para ti. Escoge el que se ajuste a tus necesidades."}),Object(a.jsx)(u,{icon:m,title:"Lugar de recogida",description:"Nos integramos con Google para que puedas seleccionar un punto en el mapa en donde podremos recoger a tu mascota."}),Object(a.jsx)(u,{icon:h,title:"Guarda el c\xf3digo",description:"Cada servicio tiene un c\xf3digo \xfanico con el que podr\xe1s ver el status de tu servicio."})]})]}),Object(a.jsx)("section",{className:"customer__tabs",children:Object(a.jsx)(F,{})}),Object(a.jsx)("section",{className:"customer__footer"})]})},E=(c(63),function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Owner"})})});var T=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{basename:"/petshop",children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:w}),Object(a.jsx)(r.a,{exact:!0,path:"/customer",component:w}),Object(a.jsx)(r.a,{exact:!0,path:"/owner",component:E})]})})})};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.8807792c.chunk.js.map