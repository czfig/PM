(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ee24a6"],{"6c2f":function(e,t,n){"use strict";n("f99e")},aecd:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return i}));var r=n("9dc1");function a(e){return Object(r["a"])({url:"/storage/getUserByUsername",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/storage/addStorage",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/storage/deleteStorage",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/storage/getGroupMember",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/storage/getStorageInfo",method:"post",data:e})}},c24f:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return i}));var r=n("9dc1");function a(e){return Object(r["a"])({url:"/userManage/getAllCity",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/userManage/updateUser",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/userManage/addUser",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/role/getAllRole",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/role/updateRole",method:"post",data:e})}},f7c7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticStyle:{"font-size":"1.5rem","font-weight":"bold"}},[e._v(e._s(e.user.group_name))]),e._v("仓库列表 "),n("div",{staticClass:"contain"},[n("DataTable",{ref:"member-list",attrs:{url:"/storage/getGroupMember",param:{group_id:e.user.group_id},"top-opera":"",filter:!1,stripe:"",opgroup:"",index:"",height:"calc(100vh - 240px)","table-operations-width":140,fields:[{id:"name",name:"成员名称",show:!0},{id:"username",name:"账号",show:!0},{id:"role_name",name:"角色",show:!0}],"table-operations":[{name:"添加用户",type:"success",action:function(){e.$refs["user-form"].show({})}}],operations:[{name:"编辑",type:"warning",action:function(t){return e.$refs["user-form"].show(t)}},{name:"停用",type:"info",action:e.changeUserState,show:function(e){return e.state}},{name:"启用",type:"success",action:e.changeUserState,show:function(e){return!e.state}}]},on:{initDataTable:e.handleData}})],1),n("DialogForm",{ref:"user-form",attrs:{title:"用户信息",fields:[{id:"username",lable:"账号",required:!0,action:e.searchUserInAdd},{id:"name",lable:"用户名",required:!0},{id:"sign",lable:"角色",required:!0,type:"select",options:[{name:"班组长",value:"Foreman"},{name:"库管员",value:"Warehousekeeper"},{name:"成员",value:"member"}]},{id:"tel_num",lable:"电话号码",required:!0}]},on:{submit:e.submitUserInfo}})],1)},a=[],o=(n("b0c0"),n("c24f")),s=n("aecd"),u={data:function(){return{user:this.$storage.getUserInfo()}},created:function(){},methods:{handleData:function(e){var t=e.data,n=e.success;n(t.list)},submitUserInfo:function(e){var t=this;e.group_id=this.user.group_id,e.city=this.user.city,e.id?Object(o["d"])(e).then((function(e){t.$refs["member-list"].initList()})):Object(o["a"])(e).then((function(e){t.$refs["member-list"].initList()}))},changeUserState:function(e){var t=this;e.state?e.state=0:e.state=1,e.group_id=this.user.group_id,e.city=this.user.city,Object(o["d"])(e).then((function(e){t.$refs["member-list"].initList()}))},searchUserInAdd:function(e){var t=this;Object(s["e"])({username:e}).then((function(e){-1===e.code?t.$message({type:"info",message:"用户不存在，请填写用户完整信息，提交后会自动创建",duration:5e3}):(t.$message({type:"info",message:"用户已存在,请补充用户信息",duration:3e3}),t.$refs["user-form"].form.data.id=e.data.id,t.$refs["user-form"].form.data.name=e.data.name)}))}}},i=u,c=(n("6c2f"),n("2877")),d=Object(c["a"])(i,r,a,!1,null,"ed360140",null);t["default"]=d.exports},f99e:function(e,t,n){}}]);