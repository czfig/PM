(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0481ea22"],{"07d3":function(t,n,e){"use strict";e.d(n,"k",(function(){return a})),e.d(n,"a",(function(){return o})),e.d(n,"l",(function(){return r})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return s})),e.d(n,"f",(function(){return d})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return f})),e.d(n,"i",(function(){return h})),e.d(n,"j",(function(){return p})),e.d(n,"c",(function(){return g}));var i=e("9dc1");function a(t){return Object(i["a"])({url:"/filing_applications/save",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/ToolWarehousing/addTools",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/ToolArchives/updateApplication",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/ToolArchives/cancelById",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/filing_applications/findAll",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/filing_applications/findAll_result",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/filing_applications/city",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/filing_applications/city_result",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/filing_applications/city_storage_id",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/filing_applications/city_storage_id_result",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/filing_applications/pass",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/filing_applications/faild",method:"post",data:t})}},1:function(t,n){},10:function(t,n){},11:function(t,n){},12:function(t,n){},13:function(t,n){},14:function(t,n){},2:function(t,n){},3:function(t,n){},4:function(t,n){},5:function(t,n){},6:function(t,n){},"62e4":function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},7:function(t,n){},8:function(t,n){},"832a":function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return c}));e("7db0"),e("d3b7"),e("b0c0"),e("25f0");var i=e("1c46"),a=e.n(i);function o(t){for(var n=1;n<t.length;n++)t[n]=r(t[n-1],t[n]);return t[t.length-1]}function r(t,n){for(var e=function(e){var i=n[e],a=t.find((function(t){return t.name==i.name&&t.model==i.model}));a?a.number=Math.max(i.number,a.number):t.push(i)},i=0;i<n.length;i++)e(i);return t}function u(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,n=new Date,e=n.getFullYear().toString(),i=(n.getMonth()+1).toString(),a=n.getDate().toString(),o=n.getHours().toString(),r=n.getMinutes().toString(),u=n.getSeconds().toString(),c="",s=0;s<t;s++)c+=Math.floor(10*Math.random());return e+i+a+o+r+u+c}function c(t){var n=a.a.createHash("md5");return n.update(t),n.digest("hex")}},9:function(t,n){},df1a:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"returnContain"},[e("DataTable",{ref:"newtable",attrs:{opgroup:"","top-opera":"",selected:"",height:"calc(100vh - 170px)",stripe:"",checkbox:"",tableOperations:[{name:"新增",type:"primary",action:t.handleAdd},{name:"一键提交",type:"success",action:t.handleSubmit}],fields:[{id:"name",name:"工器具名称",show:!0,type:"input",width:"200"},{id:"brand",name:"品牌",show:!0,type:"input",width:"200"},{id:"model",name:"工器具型号",show:!0,type:"input",width:"200"},{id:"number",name:"数量",show:!0,type:"input",width:"200"}],operations:[{name:"移除",type:"danger",action:t.handleCancel}]},on:{initDataTable:t.handleData,handleSelectionChange:t.handleSelectionChange}})],1)},a=[],o=(e("d81d"),e("a434"),e("832a")),r=e("07d3"),u={data:function(){return{toolList:[],selectedData:[],user:this.$storage.getUserInfo()}},methods:{handleData:function(t){t.success(this.toolList)},handleAdd:function(){this.toolList.push({})},handleSubmit:function(){var t=this;if(0!==this.selectedData.length){var n=Object(o["b"])(5),e=Object(o["a"])(n),i={id:e,application_id:this.user.id,list:null,batch:n,storage_id:this.user.storage_id,city:this.user.city};this.$confirm("确认提交吗？提交后可在申请列表里撤销","通知",{}).then((function(){var n=t.selectedData.map((function(t){return t.filing_application_id=e,t}));i.list=n,Object(r["k"])(i).then((function(n){t.toolList=[],t.$refs["newtable"].initList(),t.$message.success("提交成功")}))}))}else this.$message.success("请选中记录再提交")},handleSelectionChange:function(t){this.selectedData=t},handleCancel:function(t){var n=this.toolList.indexOf(t);this.toolList.splice(n,1)}}},c=u,s=e("2877"),d=Object(s["a"])(c,i,a,!1,null,"4211d65e",null);n["default"]=d.exports}}]);