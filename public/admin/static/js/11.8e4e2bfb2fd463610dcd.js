webpackJsonp([11],{219:function(e,t,i){i(538);var o=i(23)(i(279),i(750),"data-v-2267abf6",null);e.exports=o.exports},279:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(54),a=i.n(o);t.default={name:"GuestVerification",data:function(){return{isLoading:!0,form:{verification_route_bypass:!0,verification_route:[],verification_api_bypass:!1,verification_api:[],effective:!1}}},props:{data:{type:Object,required:!0},config:{type:Object,required:!0}},methods:{onUpdate:function(){var e=this;this.isLoading=!0,this.getData("core/guest/verification/set",this.form).then(function(t){e.isLoading=!1,e.$message.success("更新成功"),e.onClose()},function(t){e.isLoading=!1,e.$message.warning(t.msg)})},onClose:function(){this.$emit("close","GuestVerification")}},created:function(){var e=this;this.getData("core/guest/verification").then(function(t){e.isLoading=!1,a()(e.form,t)},function(t){e.isLoading=!1,e.$message.warning(t.msg)})}}},469:function(e,t,i){t=e.exports=i(215)(!0),t.push([e.i,".guest-verification[data-v-2267abf6]{margin:15px}","",{version:3,sources:["D:/project/GitHub/myapp-admin/src/window/GuestVerification.vue"],names:[],mappings:"AACA,qCACC,WAAa,CACb",file:"GuestVerification.vue",sourcesContent:["\n.guest-verification[data-v-2267abf6] {\n\tmargin: 15px;\n}\n"],sourceRoot:""}])},538:function(e,t,i){var o=i(469);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(216)("4060bf2d",o,!0)},750:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"form",staticClass:"guest-verification",attrs:{model:e.form,"element-loading-text":"拼命加载中","label-width":"100px"}},[i("el-form-item",{attrs:{label:"验证路由模式"}},[i("el-switch",{attrs:{"on-text":"绕行","off-text":"绕行","on-color":"#13ce66"},model:{value:e.form.verification_route_bypass,callback:function(t){e.form.verification_route_bypass=t},expression:"form.verification_route_bypass"}}),e._v(" "),e.form.verification_route_bypass?i("span",[e._v("（禁止访问列表中的路由规则）")]):i("span",[e._v("（只允许访问列表中的路由规则）")])],1),e._v(" "),i("el-form-item",{attrs:{label:"验证路由列表"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"",placeholder:"请输入验证的路由规则"},model:{value:e.form.verification_route,callback:function(t){e.form.verification_route=t},expression:"form.verification_route"}},e._l(e.form.route,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"验证API模式"}},[i("el-switch",{attrs:{"on-text":"绕行","off-text":"绕行","on-color":"#13ce66"},model:{value:e.form.verification_api_bypass,callback:function(t){e.form.verification_api_bypass=t},expression:"form.verification_api_bypass"}}),e._v(" "),e.form.verification_api_bypass?i("span",[e._v("（禁止访问列表中的API）")]):i("span",[e._v("（只允许访问列表中的API）")])],1),e._v(" "),i("el-form-item",{attrs:{label:"验证API列表"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"",placeholder:"请输入验证的路由规则"},model:{value:e.form.verification_api,callback:function(t){e.form.verification_api=t},expression:"form.verification_api"}},e._l(e.form.api,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"立刻生效"}},[i("el-switch",{attrs:{"on-color":"#13ce66"},model:{value:e.form.effective,callback:function(t){e.form.effective=t},expression:"form.effective"}}),e._v(" "),i("span",[e._v("（踢掉所有用户）")])],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.onUpdate}},[e._v("修改")]),e._v(" "),i("el-button",{on:{click:e.onClose}},[e._v("取消")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.8e4e2bfb2fd463610dcd.js.map