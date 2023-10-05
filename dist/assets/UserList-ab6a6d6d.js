import{j as K,r as d,ag as l,o as x,c as k,a as m,V as e,P as a,a3 as V,a9 as P,T as f,U as b,u as C,S as D,n as E}from"./@vue-490f819f.js";import{u as H,b as G}from"./vue-router-fcc9f0d7.js";import{_ as J}from"./index-f0a563ed.js";import"./element-plus-89f172c5.js";import"./lodash-es-21c98b27.js";import"./@vueuse-fdebb321.js";import"./@element-plus-387bf519.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-7b3af433.js";import"./aplayer-d80f7f58.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-85da7166.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";import"./vue-cookies-9b55b892.js";import"./@highlightjs-e38b0b77.js";import"./highlight.js-cc51af62.js";import"./axios-82afda87.js";import"./docx-preview-b41ea745.js";import"./jszip-d9c085e9.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-90f6c04e.js";import"./vue-3b12653d.js";import"./dplayer-ff9c2365.js";import"./vue-clipboard3-abb1cd37.js";import"./clipboard-2fdbe17c.js";const Q={class:"top-panel"},W={class:"file-list"},X={class:"avatar"},Y={key:0,style:{color:"#529b2e"}},Z={key:1,style:{color:"#f56c6c"}},ee=["onClick"],te=["onClick"],ae={__name:"UserList",setup(oe){const{proxy:r}=K();H(),G();const S={loadDataList:"/admin/loadUserList",updateUserStatus:"/admin/updateUserStatus",updateUserSpace:"/admin/updateUserSpace"},N=[{label:"头像",prop:"avatar",width:80,scopedSlots:"avatar"},{label:"昵称",prop:"nickName"},{label:"邮箱",prop:"email"},{label:"空间使用",prop:"space",scopedSlots:"space"},{label:"加入时间",prop:"joinTime"},{label:"最后登录时间",prop:"lastLoginTime"},{label:"状态",prop:"status",scopedSlots:"status",width:80},{label:"操作",prop:"op",width:150,scopedSlots:"op"}],i=d({}),_=d({}),z={extHeight:20},c=async()=>{let o={pageNo:_.value.pageNo,pageSize:_.value.pageSize};Object.assign(o,i.value);let t=await r.Request({url:S.loadDataList,params:o});t&&(_.value=t.data)},L=o=>{r.Confirm(`你确定要【${o.status==0?"启动":"禁用"}】吗？`,async()=>{await r.Request({url:S.updateUserStatus,params:{userId:o.userId,status:o.status==0?1:0}})&&c()})},p=d({show:!1,title:"修改空间大小",buttons:[{type:"primary",text:"确定",click:o=>{T()}}]}),u=d({}),g=d(),I={changeSpace:[{required:!0,message:"请输入空间大小"}]},R=o=>{p.value.show=!0,E(()=>{g.value.resetFields(),u.value=Object.assign({},o)})},T=()=>{g.value.validate(async o=>{if(!o)return;let t={};Object.assign(t,u.value),await r.Request({url:S.updateUserSpace,params:t})&&(p.value.show=!1,r.Message.success("操作成功"),c())})};return(o,t)=>{const h=l("el-input"),v=l("el-form-item"),y=l("el-col"),U=l("el-option"),q=l("el-select"),j=l("el-button"),F=l("el-row"),w=l("el-form"),B=l("Avatar"),M=l("el-divider"),O=l("Table"),$=l("Dialog");return x(),k("div",null,[m("div",Q,[e(w,{model:i.value,"label-width":"80px",onSubmit:t[2]||(t[2]=V(()=>{},["prevent"]))},{default:a(()=>[e(F,null,{default:a(()=>[e(y,{span:4},{default:a(()=>[e(v,{label:"用户昵称"},{default:a(()=>[e(h,{clearable:"",placeholder:"支持模糊搜索",modelValue:i.value.nickNameFuzzy,"onUpdate:modelValue":t[0]||(t[0]=n=>i.value.nickNameFuzzy=n),modelModifiers:{trim:!0},onKeyup:P(c,["native"])},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),e(y,{span:4},{default:a(()=>[e(v,{label:"状态"},{default:a(()=>[e(q,{clearable:"",placeholder:"请选择状态",modelValue:i.value.status,"onUpdate:modelValue":t[1]||(t[1]=n=>i.value.status=n)},{default:a(()=>[e(U,{value:1,label:"启用"}),e(U,{value:0,label:"禁用"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(y,{span:4,style:{"padding-left":"10px"}},{default:a(()=>[e(j,{type:"primary",onClick:c},{default:a(()=>[f(" 查询 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),m("div",W,[e(O,{columns:N,showPagination:!0,dataSource:_.value,fetch:c,options:z},{avatar:a(({index:n,row:s})=>[m("div",X,[e(B,{userId:s.userId,avatar:s.qqAvatar},null,8,["userId","avatar"])])]),space:a(({index:n,row:s})=>[f(b(C(r).Utils.size2Str(s.useSpace))+"/"+b(C(r).Utils.size2Str(s.totalSpace)),1)]),status:a(({index:n,row:s})=>[s.status==1?(x(),k("span",Y,"启用")):D("",!0),s.status==0?(x(),k("span",Z,"禁用")):D("",!0)]),op:a(({index:n,row:s})=>[m("span",{class:"a-link",onClick:A=>R(s)},"分配空间",8,ee),e(M,{direction:"vertical"}),m("span",{class:"a-link",onClick:A=>L(s)},b(s.status==0?"启用":"禁用"),9,te)]),_:1},8,["dataSource"])]),e($,{show:p.value.show,title:p.value.title,buttons:p.value.buttons,width:"400px",showCancel:!1,onClose:t[5]||(t[5]=n=>p.value.show=!1)},{default:a(()=>[e(w,{model:u.value,rules:I,ref_key:"formDataRef",ref:g,"label-width":"80px",onSubmit:t[4]||(t[4]=V(()=>{},["prevent"]))},{default:a(()=>[e(v,{label:"昵称"},{default:a(()=>[f(b(u.value.nickName),1)]),_:1}),e(v,{label:"空间大小",prop:"changeSpace"},{default:a(()=>[e(h,{clearable:"",placeholder:"请输入空间大小",modelValue:u.value.changeSpace,"onUpdate:modelValue":t[3]||(t[3]=n=>u.value.changeSpace=n)},{suffix:a(()=>[f("MB")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title","buttons"])])}}},Ie=J(ae,[["__scopeId","data-v-ad38efaa"]]);export{Ie as default};
