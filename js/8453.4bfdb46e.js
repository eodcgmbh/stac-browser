"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[8453],{8453:function(e,t,r){r.r(t),r.d(t,{default:function(){return be}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"queryable-group"},[t("b-row",{staticClass:"queryable-row"},[t("span",{staticClass:"title"},[e._v(" "+e._s(e.queryable.title)+" ")]),t("b-dropdown",{staticClass:"op",attrs:{size:"sm",variant:"dark",split:"",text:e.operator.label},on:{click:e.iterateOps}},e._l(e.operators,(function(r){return t("b-dropdown-item-button",{key:r.SYMBOL,attrs:{active:r===e.operator},on:{click:function(t){return e.updateOperator(r)}}},[e._v(" "+e._s(r.longLabel)+" "),t("b-badge",{staticClass:"ml-2",attrs:{variant:"dark"}},[e._v(e._s(r.label))])],1)})),1),e.queryable.isTemporal?t("date-picker",e._b({staticClass:"value",attrs:{type:"date",lang:e.datepickerLang,format:e.datepickerFormat,value:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"date-picker",e.validation,!1)):e.queryable.isSelection?t("b-form-select",e._b({staticClass:"value",attrs:{options:e.queryableOptions,size:"sm",value:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-select",e.validation,!1)):e.queryable.isText||e.queryable.isNumeric?t("b-form-input",e._b({staticClass:"value",attrs:{number:e.queryable.isNumeric,type:e.queryable.isNumeric?"number":"text",size:"sm",value:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-input",e.validation,!1)):e.queryable.isBoolean?t("b-form-checkbox",e._b({staticClass:"value",attrs:{switch:"",checked:e.value.value},on:{input:function(t){return e.updateValue(t)}}},"b-form-checkbox",e.validation,!1),[e._v(" "+e._s(e.$t(`checkbox.${e.value.value}`))+" ")]):e._e(),t("b-button",{staticClass:"delete",attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.$emit("remove-queryable")}}},[t("b-icon-x-circle-fill",{attrs:{"aria-hidden":"true"}})],1)],1),e.queryable.description||e.operator.description?t("b-row",{staticClass:"queryable-help text-muted small"},[e.operator.description?t("Description",{attrs:{description:e.operator.description,inline:""}}):e._e(),e.queryable.description?t("Description",{attrs:{description:e.queryable.description,inline:""}}):e._e()],1):e._e()],1)},n=[],a=r(26034),o=r(36537),s=r(1915),l=r(94689),u=r(63294),c=r(12299),p=r(20451),b=r(28492),d=r(18280);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=(0,p.y2)({active:(0,p.pi)(c.U5,!1),activeClass:(0,p.pi)(c.N0,"active"),buttonClass:(0,p.pi)(c.wA),disabled:(0,p.pi)(c.U5,!1),variant:(0,p.pi)(c.N0)},l.V_),y=(0,s.l7)({name:l.V_,mixins:[b.D,d.Z],inject:{getBvDropdown:{default:function(){return function(){return null}}}},inheritAttrs:!1,props:v,computed:{bvDropdown:function(){return this.getBvDropdown()},computedAttrs:function(){return h(h({},this.bvAttrs),{},{role:"menuitem",type:"button",disabled:this.disabled})}},methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(e){this.$emit(u.PZ,e),this.closeDropdown()}},render:function(e){var t,r=this.active,i=this.variant,n=this.bvAttrs;return e("li",{class:n.class,style:n.style,attrs:{role:"presentation"}},[e("button",{staticClass:"dropdown-item",class:[this.buttonClass,(t={},f(t,this.activeClass,r),f(t,"text-".concat(i),i&&!(r||this.disabled)),t)],attrs:this.computedAttrs,on:{click:this.onClick},ref:"button"},this.normalizeSlot())])}}),O=r(19692),g=r(27353),j=r(90494),w=r(11572),P=r(26410),q=r(18735),x=r(33284),k=r(67040),D=r(32023),_=r(58137),S=r(49035),C=r(95505),z=r(73727),F=r(54602),N=(0,F.l)("value"),$=N.mixin,B=N.props,V=N.prop,E=N.event,U=r(37668),I=r(77330);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=(0,p.y2)((0,k.GE)(A(A({},I.N),{},{labelField:(0,p.pi)(c.N0,"label"),optionsField:(0,p.pi)(c.N0,"options")})),"formOptions"),G=(0,s.l7)({mixins:[I.f],props:T,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,x.PO)(e)){var r=(0,U.U)(e,this.valueField),i=(0,U.U)(e,this.textField),n=(0,U.U)(e,this.optionsField,null);return(0,x.Ft)(n)?{value:(0,x.o8)(r)?t||i:r,text:String((0,x.o8)(i)?t:i),html:(0,U.U)(e,this.htmlField),disabled:Boolean((0,U.U)(e,this.disabledField))}:{label:String((0,U.U)(e,this.labelField)||i),options:this.normalizeOptions(n)}}return{value:t||e,text:String(e),disabled:!1}}}}),R=r(69558),J=(0,p.y2)({disabled:(0,p.pi)(c.U5,!1),value:(0,p.pi)(c.r1,void 0,!0)},l.vg),X=(0,s.l7)({name:l.vg,functional:!0,props:J,render:function(e,t){var r=t.props,i=t.data,n=t.children,a=r.value,o=r.disabled;return e("option",(0,R.b)(i,{attrs:{disabled:o},domProps:{value:a}}),n)}});function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=(0,p.y2)((0,k.GE)(M(M({},I.N),{},{label:(0,p.pi)(c.N0,void 0,!0)})),l.Rj),H=(0,s.l7)({name:l.Rj,mixins:[d.Z,I.f],props:Y,render:function(e){var t=this.label,r=this.formOptions.map((function(t,r){var i=t.value,n=t.text,a=t.html,o=t.disabled;return e(X,{attrs:{value:i,disabled:o},domProps:(0,q.U)(a,n),key:"option_".concat(r)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(j.D$),r,this.normalizeSlot()])}});function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re=(0,p.y2)((0,k.GE)(ee(ee(ee(ee(ee(ee(ee({},z.N),B),D.N),_.N),S.N),C.N),{},{ariaInvalid:(0,p.pi)(c.gL,!1),multiple:(0,p.pi)(c.U5,!1),selectSize:(0,p.pi)(c.jg,0)})),l.$S),ie=(0,s.l7)({name:l.$S,mixins:[z.t,$,D.X,S.j,C.J,_.i,G,d.Z],props:re,data:function(){return{localValue:this[V]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(E,this.localValue)}},methods:{focus:function(){(0,P.KS)(this.$refs.input)},blur:function(){(0,P.Cx)(this.$refs.input)},onChange:function(e){var t=this,r=e.target,i=(0,w.Dp)(r.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=r.multiple?i:i[0],this.$nextTick((function(){t.$emit(u.z2,t.localValue)}))}},render:function(e){var t=this.name,r=this.disabled,i=this.required,n=this.computedSelectSize,a=this.localValue,o=this.formOptions.map((function(t,r){var i=t.value,n=t.label,a=t.options,o=t.disabled,s="option_".concat(r);return(0,x.kJ)(a)?e(H,{props:{label:n,options:a},key:s}):e(X,{props:{value:i,disabled:o},domProps:(0,q.U)(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:n,disabled:r,required:i,"aria-required":i?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:a}],ref:"input"},[this.normalizeSlot(j.D$),o,this.normalizeSlot()])}}),ne=r(38019),ae=r(38637),oe=r(79879),se=r(13138),le={name:"QueryableInput",components:{BBadge:a.k,BDropdown:o.R,BDropdownItemButton:y,BFormCheckbox:O.l,BFormInput:g.e,BFormSelect:ie,BIconXCircleFill:ne.aEb,Description:()=>Promise.resolve().then(r.bind(r,2778))},mixins:[ae.Z],props:{value:{},operator:{type:Function,required:!0},queryable:{type:Object,required:!0},cql:{type:Object,required:!0}},computed:{validation(){if(this.queryable.isText&&!this.queryable.isTemporal)return{minlength:this.schema.minLength,maxlength:this.schema.maxLenggth,required:this.schema.minLength>0};if(this.queryable.isNumeric){let e;if("number"===typeof this.schema.minimum&&"number"===typeof this.schema.maximum){let t=this.schema.maximum-this.schema.minimum;e=t<=.1?.01:t<=1?.1:t<=100?1:10}return{min:this.schema.minimum,max:this.schema.maximum,step:e}}return{}},schema(){return this.queryable.schema},operators(){return this.queryable.getOperators(this.cql)},queryableOptions(){return this.queryable.isSelection?this.schema.enum.map((e=>({value:e,text:e}))):[]}},methods:{iterateOps(){let e=this.operators.findIndex((e=>e===this.operator)),t=++e%this.operators.length;this.updateOperator(this.operators[t])},updateValue(e){let t=oe.ZP.isObject(e)&&"target"in e?e.target.value:e;"string"===typeof t&&this.queryable.is("integer")?t=parseInt(t,10):"string"===typeof t&&this.queryable.is("number")&&(t=parseFloat(t)),this.$emit("update:value",se.ZP.create(t))},updateOperator(e){this.$emit("update:operator",e)}}},ue=le,ce=r(1001),pe=(0,ce.Z)(ue,i,n,!1,null,null,null),be=pe.exports}}]);
//# sourceMappingURL=8453.4bfdb46e.js.map