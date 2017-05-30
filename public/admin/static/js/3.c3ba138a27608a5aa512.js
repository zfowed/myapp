webpackJsonp([3],{230:function(e,t,n){n(535);var a=n(23)(n(290),n(747),"data-v-130cfc6e",null);e.exports=a.exports},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"User",data:function(){return{isLoading:!1,req:{unit_step:25,page_current:1,option:{}},res:{list_data:[],page_count:1,page_current:1,unit_count:0,unit_step:0}}},props:{data:{type:Object,required:!0},config:{type:Object,required:!0}},filters:{date:function(e){var t=new Date(e);return[t.getFullYear(),t.getMonth()+1,t.getDate()].join("-")}},methods:{refreshData:function(){var e=this;this.isLoading=!0,this.getData("core/user/list",this.req).then(function(t){e.res=t,e.isLoading=!1},function(t){e.isLoading=!1,e.$message.warning(t.msg)})},handleEdit:function(e,t){this.$emit("open","UserDetails",t.id,t)},handleRoleEdit:function(e){this.$emit("open","RoleDetails",e.id,e)},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.getData("core/user/del",{id:t.id}).then(function(e){n.$message.success("删除成功"),n.refreshData()},function(e){n.$message.warning(e.msg)})})},handleSizeChange:function(e){this.req.unit_step=e,this.refreshData()},handleCurrentChange:function(e){this.req.page_current=e,this.refreshData()}},created:function(){this.refreshData(),this.$on("refresh",this.refreshData)}}},466:function(e,t,n){t=e.exports=n(215)(!0),t.push([e.i,".pagination[data-v-130cfc6e]{margin-top:10px;text-align:center}","",{version:3,sources:["D:/project/GitHub/myapp-admin/src/window/User.vue"],names:[],mappings:"AACA,6BACC,gBAAiB,AACjB,iBAAmB,CACnB",file:"User.vue",sourcesContent:["\n.pagination[data-v-130cfc6e] {\n\tmargin-top: 10px;\n\ttext-align: center;\n}\n"],sourceRoot:""}])},535:function(e,t,n){var a=n(466);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(216)("1e6d3ada",a,!0)},747:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-list"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.res.list_data,height:e.config.other.containerHeight-50,border:"","element-loading-text":"拼命加载中"}},[n("el-table-column",{attrs:{prop:"id",label:"ID",sortable:"",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"user",label:"用户名",sortable:"",width:"105"}}),e._v(" "),n("el-table-column",{attrs:{prop:"role.name",label:"所属角色",sortable:"",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:"gray"}},[n("span",{on:{click:function(n){e.handleRoleEdit(t.row.role)}}},[e._v(e._s(t.row.role.name))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"description",label:"描述"}}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间",sortable:"",width:"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("date")(t.row.updated_at)))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{"current-page":e.res.page_current,"page-sizes":[25,50,100,200],"page-size":e.res.page_count,layout:"total, sizes, prev, pager, next, jumper",total:e.res.unit_count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.c3ba138a27608a5aa512.js.map