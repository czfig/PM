(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4046dc24"],{5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"652c":function(t,e,r){},b641:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("9dc1");function i(t){return Object(n["a"])({url:"/ToolScrap/commitScrapList",method:"post",data:t})}},c092:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"returnContain"},[r("div",{staticClass:"returnContain-info"}),r("div",{staticClass:"tools-contain"},[r("div",{staticClass:"tools-center"},[r("label",[t._v("正常/试验 退库待查工器具列表")]),r("DataTable",{ref:"checktable",attrs:{index:"",url:"/ToolScrap/getScrapList",param:{repository_id:t.user.storage_id,status:2},stripe:"",height:"100%",fields:[{id:"name",name:"工器具名称",show:!0},{id:"code",name:"工器具ID",show:!0},{id:"model",name:"规格型号",show:!0}],operations:[{name:"报废",type:"danger",action:function(e){t.$refs["checkscrap-form"].show(e)},show:!0}]},on:{initDataTable:t.handleData}})],1)]),r("DialogForm",{ref:"checkscrap-form",attrs:{title:"退库待查报废登记",fields:[{id:"code",lable:"编号",limit:{min:2,max:20},required:!0,disabled:!0},{id:"name",lable:"名称",limit:{min:2,max:20},required:!0,disabled:!0},{id:"model",lable:"规格型号",limit:{min:2,max:20},required:!0,disabled:!0},{id:"description",lable:"报废缘由描述",limit:{max:255},type:"textarea",rows:5,required:!0}]},on:{submit:t.handleSubmit}})],1)},i=[],a=r("5530"),c=r("b641"),o={data:function(){return{user:this.$storage.getUserInfo()}},methods:{handleData:function(t){var e=t.data,r=t.success;r(e.list)},handleSubmit:function(t){var e=this,r={rank:2,status:2,list:[Object(a["a"])(Object(a["a"])({},t),{},{applicant_id:this.user.id,repository_id:this.user.storage_id,imgUrl:""})]};console.log(r),Object(c["a"])(r).then((function(t){e.$message.success("申请提交成功，请等待管理员审核"),e.$refs["checktable"].initList()}))}},created:function(){}},s=o,u=(r("dd33"),r("2877")),d=Object(u["a"])(s,n,i,!1,null,"18520066",null);e["default"]=d.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),a=r("56ef"),c=r("fc6a"),o=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),i=o.f,u=a(n),d={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&s(d,e,r);return d}})},dd33:function(t,e,r){"use strict";r("652c")},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),a=r("fc6a"),c=r("06cf").f,o=r("83ab"),s=i((function(){c(1)})),u=!o||s;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return c(a(t),e)}})}}]);