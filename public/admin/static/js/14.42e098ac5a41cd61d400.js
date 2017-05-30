webpackJsonp([14],{225:function(t,e,a){var r=a(23)(a(285),a(752),null,null);t.exports=r.exports},285:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Routing",data:function(){return{isLoading:!1,filtersMethodData:[{text:"get",value:"get"},{text:"post",value:"post"}],tableData:[]}},props:{data:{type:Object,required:!0},config:{type:Object,required:!0}},filters:{toUpperCase:function(t){return t.toUpperCase()},date:function(t){var e=new Date(t);return[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-")}},computed:{apiMark:function(){return this.data.core?"core/route/core":"core/route/list"}},methods:{refreshData:function(){var t=this;this.isLoading=!0,this.getData(this.apiMark).then(function(e){t.tableData=e,t.isLoading=!1},function(e){t.isLoading=!1,t.$message.warning(e.msg)})},readme:function(t,e){this.$emit("open","Readme","routing-"+e.core_id,{api:"core/route/core/help",core_id:e.core_id,typeText:"路由",mark:e.uri})},handleEdit:function(t,e){this.$emit("open","RoutingDetails",e.id,e)},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.getData("core/route/del",{id:e.id}).then(function(t){a.$message.success("删除成功"),a.refreshData()},function(t){a.$message.warning(t.msg)})})},filtersMethod:function(t,e){return e.method===t}},created:function(){this.refreshData(),this.$on("refresh",this.refreshData)}}},752:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,height:t.config.other.containerHeight,border:"","element-loading-text":"拼命加载中"}},[t.data.core?t._e():a("el-table-column",{attrs:{prop:"id",label:"ID",sortable:"",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"method",label:"方法",sortable:"",filters:t.filtersMethodData,"filter-method":t.filtersMethod,"filter-multiple":!1,width:"105"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"post"===e.row.method?"primary":"success"}},[t._v(t._s(t._f("toUpperCase")(e.row.method)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"uri",label:"URI",sortable:"","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"gray"}},[a("span",{attrs:{title:e.row.uri}},[t._v(t._s(e.row.uri))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"描述",width:"180"}}),t._v(" "),t.data.core?t._e():a("el-table-column",{attrs:{label:"更新时间",sortable:"",width:"115"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("date")(e.row.updated_at)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.data.core?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.readme(e.$index,e.row)}}},[t._v("使用说明")]):t._e(),t._v(" "),t.data.core?t._e():a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),t.data.core?t._e():a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=14.42e098ac5a41cd61d400.js.map