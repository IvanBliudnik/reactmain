/*! For license information please see components-Clocks-stories.9e699093.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreactmain=self.webpackChunkreactmain||[]).push([[765],{"./src/components/Clocks.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseAnalogExample:()=>BaseAnalogExample,BaseDigitalExample:()=>BaseDigitalExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Clocks_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const get2DigitString=num=>num<10?"0"+num:num,Clocks=()=>{const[date,setDate]=(0,react.useState)(new Date);return(0,react.useEffect)((()=>{const intervalID=setInterval((()=>{console.log("Tick"),setDate(new Date)}),1e3);return()=>{clearInterval(intervalID)}}),[]),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{children:get2DigitString(date.getHours())})," :",(0,jsx_runtime.jsx)("span",{children:get2DigitString(date.getMinutes())})," :",(0,jsx_runtime.jsx)("span",{children:get2DigitString(date.getSeconds())})]})};Clocks.__docgenInfo={description:"",methods:[],displayName:"Clocks",props:{mode:{required:!0,tsType:{name:"union",raw:'"analog" | "digital"',elements:[{name:"literal",value:'"analog"'},{name:"literal",value:'"digital"'}]},description:""}}};const Clocks_stories={title:"Clocks",component:Clocks},BaseAnalogExample=()=>(0,jsx_runtime.jsx)(Clocks,{mode:"analog"}),BaseDigitalExample=()=>(0,jsx_runtime.jsx)(Clocks,{mode:"digital"}),__namedExportsOrder=["BaseAnalogExample","BaseDigitalExample"];BaseAnalogExample.parameters={...BaseAnalogExample.parameters,docs:{...BaseAnalogExample.parameters?.docs,source:{originalSource:'() => {\n  return <Clocks mode={"analog"} />;\n}',...BaseAnalogExample.parameters?.docs?.source}}},BaseDigitalExample.parameters={...BaseDigitalExample.parameters,docs:{...BaseDigitalExample.parameters?.docs,source:{originalSource:'() => {\n  return <Clocks mode={"digital"} />;\n}',...BaseDigitalExample.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);