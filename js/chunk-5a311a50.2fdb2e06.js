(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a311a50"],{"647b":function(r,e,t){"use strict";t.r(e);var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("section",{staticClass:"providers mb-4"},[t("h2",[r._v("Providers")]),t("div",{staticClass:"accordion",attrs:{role:"tablist"}},r._l(r.providers,(function(r,e){return t("Provider",{key:e,attrs:{id:String(e),provider:r}})})),1)])},i=[],o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-card",{staticClass:"provider",attrs:{"no-body":""}},[t("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[t("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:r.id,expression:"id"}],staticClass:"p-2 d-flex",attrs:{block:"",variant:"provider",squared:""}},[t("span",{staticClass:"roles mr-1",attrs:{"aria-hidden":"true"}},[r.expanded?t("b-icon-chevron-down"):t("b-icon-chevron-right")],1),r._v(" "+r._s(r.provider.name)+" "),Array.isArray(r.provider.roles)?t("div",{staticClass:"roles ml-1"},r._l(r.provider.roles,(function(e){return t("b-badge",{key:e,staticClass:"ml-1 mb-1",attrs:{variant:"secondary"}},[r._v(r._s(e))])})),1):r._e()])],1),t("b-collapse",{attrs:{id:r.id,accordion:"providers",role:"tabpanel"},model:{value:r.expanded,callback:function(e){r.expanded=e},expression:"expanded"}},[t("b-card-body",[r.provider.url?t("b-button-group",[t("b-button",{attrs:{href:r.provider.url,target:"_blank",variant:"outline-primary"}},[r._v(" Go to homepage ")]),r.provider.email||r.provider.mail?t("b-button",{attrs:{href:"mailto:"+(r.provider.email||r.provider.mail),target:"_blank",variant:"outline-primary"}},[r._v(" Send e-mail ")]):r._e()],1):r._e(),r.provider.description?t("b-card-text",{staticClass:"mt-4"},[t("Description",{attrs:{description:r.provider.description,compact:!0}})],1):r._e(),t("Metadata",{staticClass:"mt-4",attrs:{data:r.provider,ignoreFields:r.ignore,title:"",type:"Provider"}})],1)],1)],1)},n=[],s=t("5843"),d=t("7386"),l=t("160f"),c=t("9a30"),p={name:"Provider",components:{BCollapse:s["a"],BIconChevronDown:d["h"],BIconChevronRight:d["i"],Description:l["a"],Metadata:c["a"]},props:{provider:{type:Object,required:!0},id:{type:String,required:!0}},data:function(){return{expanded:!1,ignore:["url","name","description","roles"]}}},v=p,u=(t("6f39"),t("2877")),b=Object(u["a"])(v,o,n,!1,null,null,null),m=b.exports,h={name:"Providers",components:{Provider:m},props:{providers:{type:Array,required:!0}}},_=h,f=Object(u["a"])(_,a,i,!1,null,null,null);e["default"]=f.exports},"6f39":function(r,e,t){"use strict";t("e113")},e113:function(r,e,t){}}]);
//# sourceMappingURL=chunk-5a311a50.2fdb2e06.js.map