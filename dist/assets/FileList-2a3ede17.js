import{j as H,r,ag as f,o as l,c as i,a,V as m,P as h,a9 as z,T as R,O as C,F as V,S as n,U as S,J,u as G,bi as Q,bg as W}from"./@vue-490f819f.js";import{_ as X}from"./index-f0a563ed.js";import"./element-plus-89f172c5.js";import"./lodash-es-21c98b27.js";import"./@vueuse-fdebb321.js";import"./@element-plus-387bf519.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-7b3af433.js";import"./aplayer-d80f7f58.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-85da7166.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";import"./vue-router-fcc9f0d7.js";import"./vue-cookies-9b55b892.js";import"./@highlightjs-e38b0b77.js";import"./highlight.js-cc51af62.js";import"./axios-82afda87.js";import"./docx-preview-b41ea745.js";import"./jszip-d9c085e9.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-90f6c04e.js";import"./vue-3b12653d.js";import"./dplayer-ff9c2365.js";import"./vue-clipboard3-abb1cd37.js";import"./clipboard-2fdbe17c.js";const Y=y=>(Q("data-v-86a7c3ad"),y=y(),W(),y),Z={class:"top"},ee={class:"top-op"},te={class:"search-panel"},oe=Y(()=>a("span",{class:"iconfont icon-del"},null,-1)),ae={class:"file-list"},le=["onMouseenter","onMouseleave"],se=["title"],ie=["onClick"],ne={key:0,class:"transfer-status"},ce={key:1,class:"transfer-status transfer-fail"},re={key:3,class:"edit-panel"},de=["onClick"],pe=["onClick"],ue={class:"op"},fe=["onClick"],me=["onClick"],_e={key:0},ve={__name:"FileList",setup(y){const{proxy:c}=H(),_={loadDataList:"/admin/loadFileList",delFile:"/admin/delFile",createDownloadUrl:"/admin/createDownloadUrl",download:"/api/admin/download"},L=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"发布人",prop:"nickName",width:250},{label:"修改时间",prop:"lastUpdateTime",width:200},{label:"大小",prop:"fileSize",scopedSlots:"fileSize",width:200}],F=()=>{g.value=!0,p()},v=r({}),U={extHeight:50,selectType:"checkbox"},d=r([]),x=t=>{d.value=[],t.forEach(o=>{d.value.push(o.userId+"_"+o.fileId)}),console.log(d)},k=r(),g=r(!0),p=async()=>{let t={pageNo:v.value.pageNo,pageSize:v.value.pageSize,fileNameFuzzy:k.value,filePid:w.value.fileId},o=await c.Request({url:_.loadDataList,showLoading:g,params:t});o&&(v.value=o.data)},$=t=>{v.value.list.forEach(o=>{o.showOp=!1}),t.showOp=!0},D=t=>{t.showOp=!1},I=r(),b=r(),E=t=>{if(t.folderType==1){b.value.openFolder(t);return}if(t.status!=2){c.Message.warning("文件正在转码中，无法预览");return}I.value.showPreview(t,1)},w=r({fileId:0}),O=t=>{const{curFolder:o}=t;w.value=o,g.value=!0,p()},M=t=>{c.Confirm(`你确定要删除【${t.fileName}】吗？删除的文件可在10天内通过回收站还原`,async()=>{await c.Request({url:_.delFile,params:{fileIdAndUserIds:t.userId+"_"+t.fileId}})&&p()})},P=()=>{d.value.length!=0&&c.Confirm("你确定要删除这些文件吗？删除的文件可在10天内通过回收站还原",async()=>{await c.Request({url:_.delFile,params:{fileIdAndUserIds:d.value.join(",")}})&&p()})},B=async t=>{let o=await c.Request({url:_.createDownloadUrl+"/"+t.userId+"/"+t.fileId});o&&(window.location.href=_.download+"/"+o.data)};return(t,o)=>{const T=f("el-input"),K=f("el-button"),q=f("Navigation"),N=f("icon"),j=f("Table"),A=f("Preview");return l(),i("div",null,[a("div",Z,[a("div",ee,[a("div",te,[m(T,{clearable:"",placeholder:"输入文件名搜索",modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=u=>k.value=u),onKeyup:z(F,["enter"])},{suffix:h(()=>[a("i",{class:"iconfont icon-search",onClick:F})]),_:1},8,["modelValue","onKeyup"])]),a("div",{class:"iconfont icon-refresh",onClick:p}),m(K,{style:{"margin-left":"10px"},type:"danger",disabled:d.value.length==0,onClick:P},{default:h(()=>[oe,R(" 批量删除 ")]),_:1},8,["disabled"])]),m(q,{ref_key:"navigationRef",ref:b,onNavChange:O,adminShow:!0},null,512)]),a("div",ae,[m(j,{columns:L,showPagination:!0,dataSource:v.value,fetch:p,initFetch:!1,options:U,onRowSelected:x},{fileName:h(({index:u,row:e})=>[a("div",{class:"file-item",onMouseenter:s=>$(e),onMouseleave:s=>D(e)},[(e.fileType==3||e.fileType==1)&&e.status==2?(l(),C(N,{key:0,cover:e.fileCover,width:32},null,8,["cover"])):(l(),i(V,{key:1},[e.folderType==0?(l(),C(N,{key:0,fileType:e.fileType},null,8,["fileType"])):n("",!0),e.folderType==1?(l(),C(N,{key:1,fileType:0})):n("",!0)],64)),e.showEdit?n("",!0):(l(),i("span",{key:2,class:"file-name",title:e.fileName},[a("span",{onClick:s=>E(e)},S(e.fileName),9,ie),e.status==0?(l(),i("span",ne,"转码中")):n("",!0),e.status==1?(l(),i("span",ce,"转码失败")):n("",!0)],8,se)),e.showEdit?(l(),i("div",re,[m(T,{modelValue:e.fileNameReal,"onUpdate:modelValue":s=>e.fileNameReal=s,modelModifiers:{trim:!0},maxLength:190,onKeyup:z(s=>t.saveNameEdit(u),["enter"])},{suffix:h(()=>[R(S(e.fileSuffix),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onKeyup"]),a("span",{class:J(["iconfont icon-right1",e.fileNameReal?"":"not-allow"]),onClick:s=>t.saveNameEdit(u)},null,10,de),a("span",{class:"iconfont icon-error",onClick:s=>t.cancelNameEdit(u)},null,8,pe)])):n("",!0),a("span",ue,[e.showOp&&e.fileId?(l(),i(V,{key:0},[e.folderType==0?(l(),i("span",{key:0,class:"iconfont icon-download",onClick:s=>B(e)},"下载",8,fe)):n("",!0),a("span",{class:"iconfont icon-del",onClick:s=>M(e)},"删除",8,me)],64)):n("",!0)])],40,le)]),fileSize:h(({index:u,row:e})=>[e.fileSize?(l(),i("span",_e,S(G(c).Utils.size2Str(e.fileSize)),1)):n("",!0)]),_:1},8,["dataSource"])]),m(A,{ref_key:"previewRef",ref:I},null,512)])}}},Ae=X(ve,[["__scopeId","data-v-86a7c3ad"]]);export{Ae as default};
