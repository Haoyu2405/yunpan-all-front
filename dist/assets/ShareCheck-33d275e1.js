import{j as b,r as l,ag as a,o as V,c as R,a as e,V as r,U as p,P as d,a3 as N,a9 as D,T as q,bi as B,bg as K}from"./@vue-490f819f.js";import{u as T,b as A}from"./vue-router-fcc9f0d7.js";import{_ as U}from"./index-f0a563ed.js";import"./element-plus-89f172c5.js";import"./lodash-es-21c98b27.js";import"./@vueuse-fdebb321.js";import"./@element-plus-387bf519.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-7b3af433.js";import"./aplayer-d80f7f58.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-85da7166.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";import"./vue-cookies-9b55b892.js";import"./@highlightjs-e38b0b77.js";import"./highlight.js-cc51af62.js";import"./axios-82afda87.js";import"./docx-preview-b41ea745.js";import"./jszip-d9c085e9.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-90f6c04e.js";import"./vue-3b12653d.js";import"./dplayer-ff9c2365.js";import"./vue-clipboard3-abb1cd37.js";import"./clipboard-2fdbe17c.js";const f=n=>(B("data-v-0559d5c7"),n=n(),K(),n),j={class:"share"},E={class:"body-content"},L=f(()=>e("div",{class:"logo"},[e("span",{class:"iconfont icon-pan"}),e("span",{class:"name"},"简存取云盘")],-1)),M={class:"code-panel"},P={class:"file-info"},$={class:"avatar"},z={class:"share-info"},F={class:"user-info"},G={class:"nick-name"},H={class:"share-time"},J={class:"file-name"},O={class:"code-body"},Q=f(()=>e("div",{class:"tips"},"请输入提取码：",-1)),W={class:"input-area"},X={__name:"ShareCheck",setup(n){const{proxy:m}=b(),v=T(),S=A(),_={getShareInfo:"/showShare/getShareInfo",checkShareCode:"/showShare/checkShareCode"},i=S.params.shareId,t=l({});(async()=>{let o=await m.Request({url:_.getShareInfo,params:{shareId:i}});o&&(t.value=o.data)})();const c=l({}),u=l(),I={code:[{required:!0,message:"请输入提取码"},{min:5,message:"提取码为5位"},{max:5,message:"提取码为5位"}]},h=async()=>{u.value.validate(async o=>{!o||!await m.Request({url:_.checkShareCode,params:{shareId:i,code:c.value.code}})||v.push(`/share/${i}`)})};return(o,s)=>{const g=a("Avatar"),y=a("el-input"),k=a("el-button"),C=a("el-form-item"),w=a("el-form");return V(),R("div",j,[e("div",E,[L,e("div",M,[e("div",P,[e("div",$,[r(g,{userId:t.value.userId,avatar:t.value.avatar,width:50},null,8,["userId","avatar"])]),e("div",z,[e("div",F,[e("span",G,p(t.value.nickName),1),e("span",H,"分享于 "+p(t.value.shareTime),1)]),e("div",J,"分享文件："+p(t.value.fileName),1)])]),e("div",O,[Q,e("div",W,[r(w,{model:c.value,rules:I,ref_key:"formDataRef",ref:u,maxLength:5,onSubmit:s[1]||(s[1]=N(()=>{},["prevent"]))},{default:d(()=>[r(C,{prop:"code"},{default:d(()=>[r(y,{class:"input",modelValue:c.value.code,"onUpdate:modelValue":s[0]||(s[0]=x=>c.value.code=x),onKeyup:D(h,["enter"])},null,8,["modelValue","onKeyup"]),r(k,{type:"primary",onClick:h},{default:d(()=>[q("提取文件")]),_:1})]),_:1})]),_:1},8,["model"])])])])])])}}},Ve=U(X,[["__scopeId","data-v-0559d5c7"]]);export{Ve as default};
