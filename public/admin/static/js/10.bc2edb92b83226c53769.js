webpackJsonp([10],{220:function(e,a,t){t(544);var o=t(23)(t(280),t(758),"data-v-60a0215b",null);e.exports=o.exports},280:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(55);a.default={name:"Login",data:function(){return{isLoading:!1,apiUrl:"",form:{user:"sroot",password:""}}},props:{data:{type:Object,required:!0},config:{type:Object,required:!0}},watch:{apiUrl:function(e,a){o.a.url=e}},methods:{onSubmit:function(){var e=this;this.isLoading=!0,this.getData("core/login",this.form).then(function(a){if(e.isLoading=!1,"Sroots"!==a.role)return e.$message.warning("必须登录超级管理员账号");e.$message.success("登录成功"),localStorage&&localStorage.setItem("apiUrl",e.apiUrl),e.data.success&&e.data.success(),e.$emit("close","Login")},function(a){e.isLoading=!1,e.$message.warning(a.msg)})}},created:function(){this.apiUrl=localStorage&&localStorage.getItem("apiUrl")||o.a.url||"http://localhost:3000/api/",o.a.url=this.apiUrl}}},475:function(e,a,t){a=e.exports=t(215)(!0),a.push([e.i,".login[data-v-60a0215b]{margin:25px 15px}","",{version:3,sources:["D:/project/GitHub/myapp-admin/src/window/Login.vue"],names:[],mappings:"AACA,wBACC,gBAAkB,CAClB",file:"Login.vue",sourcesContent:["\n.login[data-v-60a0215b] {\n\tmargin: 25px 15px;\n}\n"],sourceRoot:""}])},544:function(e,a,t){var o=t(475);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(216)("58d4041a",o,!0)},758:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"form",staticClass:"login",attrs:{model:e.form,"element-loading-text":"登录中...","label-width":"80px"}},[t("el-form-item",{attrs:{label:"API接口"}},[t("el-input",{attrs:{placeholder:"请输入API统一接口"},model:{value:e.apiUrl,callback:function(a){e.apiUrl=a},expression:"apiUrl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"账号"}},[t("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.user,callback:function(a){e.form.user=a},expression:"form.user"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password",autofocus:"",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(a){e.form.password=a},expression:"form.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.bc2edb92b83226c53769.js.map