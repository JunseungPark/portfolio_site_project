"use strict";(self["webpackChunkportfolio_template_master"]=self["webpackChunkportfolio_template_master"]||[]).push([[834],{834:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var l=a(3396),o=a(7139);const i={class:"container col-xxl-9 px-4 py-5"},d={class:"row flex-lg-row-reverse g-5 py-5"},n=["src"],s={class:"col-lg-6"},c={class:"lead"},u=["fill"],r=(0,l._)("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"},null,-1),m=[r];function g(t,e,a,r,g,y){const h=(0,l.up)("TextEditModal"),v=(0,l.up)("ImageEditModal"),p=(0,l.up)("LayoutEditModal");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",{class:"bg",style:(0,o.j5)([r.contentData.layoutAttribute])},[(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",{onClick:e[0]||(e[0]=t=>r.showImageEditModal(r.contentData.imageList[0].key)),class:"col-10 col-sm-8 col-lg-6 hoverImageWrap"},[(0,l._)("img",{src:r.contentData.imageList[0].imgName,class:"d-block mx-lg-auto img-fluid",alt:"Bootstrap Themes",width:"700",height:"500",loading:"lazy"},null,8,n)]),(0,l._)("div",s,[(0,l._)("h1",{onClick:e[1]||(e[1]=t=>r.showTextEditModal(r.contentData.textList[0])),class:"display4 fw-thin lh-1 mb-3 clickable effect-shine",style:(0,o.j5)([r.contentData.textList[0]])},(0,o.zw)(r.contentData.textList[0].textValue),5),(0,l._)("p",c,[(0,l._)("small",{onClick:e[2]||(e[2]=t=>r.showTextEditModal(r.contentData.textList[1])),class:"clickable effect-shine",style:(0,o.j5)([r.contentData.textList[1]])},(0,o.zw)(r.contentData.textList[1].textValue),5)])])])])],4),(0,l._)("div",{class:"position-absolute top-0 start-0 p-2",onClick:e[3]||(e[3]=(...t)=>r.showLayoutEditModal&&r.showLayoutEditModal(...t))},[((0,l.wg)(),(0,l.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:r.isBlackBG?"White":"Black",class:"bi bi-sliders layoutSetting",viewBox:"0 0 16 16"},m,8,u))]),(0,l.Wm)(h,{isShowMoadal:r.isShowTextEditMoadal,selectedText:r.selectedText,onHideModal:r.hideTextEditModal,onEditTextData:r.editTextData},null,8,["isShowMoadal","selectedText","onHideModal","onEditTextData"]),(0,l.Wm)(v,{isShowMoadal:r.isShowImageEditMoadal,selectedImage:r.selectedImage,onHideModal:r.hideImageEditModal,onEditImageData:r.editImageData},null,8,["isShowMoadal","selectedImage","onHideModal","onEditImageData"]),(0,l.Wm)(p,{isShowMoadal:r.isShowLayoutEditMoadal,selectedLayoutAttribute:r.selectedLayoutAttribute,onHideModal:r.hideLayoutEditModal,onEditLayoutData:r.editLayoutData},null,8,["isShowMoadal","selectedLayoutAttribute","onHideModal","onEditLayoutData"])])}var y=a(4870),h=a(3187),v=a(2187),p=a(9217),b=a(130),x=a(7273),f=a(3313),w={name:"PictureTextLayout1",components:{TextEditModal:p.Z,ImageEditModal:b.Z,LayoutEditModal:x.Z},setup(){const t=(0,h.h)(),e=(0,v.z)(),a=e.getPictureTextLayout1,l=(0,y.iH)(!1),o=(0,y.iH)({}),i=(0,y.iH)((0,f.N9)(a.layoutAttribute.backgroundColor)),d=()=>{o.value=a.layoutAttribute,c(!0)},n=()=>{c(!1)},s=t=>{i.value=t,u(),c(!1)},c=e=>{l.value=e,t.changeState()},u=()=>{a.textList.map((t=>{t.color=a.layoutAttribute.color,t.fontFamily=a.layoutAttribute.fontFamily}))},r=(0,y.iH)(!1),m=(0,y.iH)({}),g=t=>{m.value=t,x(!0)},p=()=>{x(!1)},b=t=>{e.editTextList(a,t),x(!1)},x=e=>{r.value=e,t.changeState()},w=(0,y.iH)(!1),M=(0,y.iH)(0),_=t=>{M.value=t,T(!0)},D=()=>{T(!1)},L=t=>{e.editPictureList(a,t),T(!1)},T=e=>{w.value=e,t.changeState()};return{isShowLayoutEditMoadal:l,selectedLayoutAttribute:o,showLayoutEditModal:d,hideLayoutEditModal:n,editLayoutData:s,isBlackBG:i,isShowTextEditMoadal:r,selectedText:m,showTextEditModal:g,hideTextEditModal:p,editTextData:b,isShowImageEditMoadal:w,selectedImage:M,showImageEditModal:_,hideImageEditModal:D,editImageData:L,contentData:a}}},M=a(89);const _=(0,M.Z)(w,[["render",g]]);var D=_},130:function(t,e,a){a.d(e,{Z:function(){return p}});var l=a(3396);const o={class:"modal fade",ref:"modal",id:"ImageEditModal",tabindex:"-1","data-bs-backdrop":"static","aria-labelledby":"ImageEditModal","aria-hidden":"true"},i={class:"modal-dialog modal-lg"},d={class:"modal-content"},n={class:"modal-body"},s=["src"],c={class:"modal-footer flex-row"},u={class:"file-upload-wrapper"};function r(t,e,a,r,m,g){return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("img",{src:r.image.imgName,class:"previewImg",width:"400",height:"400",alt:""},null,8,s)]),(0,l._)("div",c,[(0,l._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[0]||(e[0]=(...t)=>r.hideModal&&r.hideModal(...t))},"닫기"),(0,l._)("div",u,[(0,l._)("input",{name:"file-upload-field",type:"file",class:"file-upload-field",value:"",onChange:e[1]||(e[1]=(...t)=>r.onFileChange&&r.onFileChange(...t))},null,32)]),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>r.editImageData&&r.editImageData(...t))},"데이터 변경")])])])],512)}var m=a(4870),g=a(806),y={name:"ImageEditModal",props:{selectedImage:{type:Number},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const o=(0,m.iH)(null);let i=null;const d=(0,m.iH)({key:0,imgName:a(555)}),n=()=>{e.emit("hideModal")},s=()=>{e.emit("editImageData",d.value)},c=t=>{var e=t.target.files;e.length&&u(e[0])},u=t=>{var e=new FileReader;e.onload=t=>{d.value.imgName=t.target.result},e.readAsDataURL(t)},r=t=>{t.image=!1};return(0,l.YP)((()=>t.isShowMoadal),(t=>{i&&(t?i.show():(d.value.imgName=a(555),i.hide()))})),(0,l.YP)((()=>t.selectedImage),(t=>{d.value.key=t})),(0,l.bv)((()=>{i=new g.u_(o.value)})),{hideModal:n,editImageData:s,onFileChange:c,createImage:u,removeImage:r,modal:o,image:d}}},h=a(89);const v=(0,h.Z)(y,[["render",r]]);var p=v},7273:function(t,e,a){a.d(e,{Z:function(){return L}});var l=a(3396),o=a(9242);const i={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},d={class:"modal-dialog modal-lg modal-dialog-centered"},n={class:"modal-content"},s={class:"modal-body"},c={class:"d-flex flex-column flex-wrap justify-content-start align-items-center"},u={class:"row align-items-center w-100 mb-3"},r=(0,l._)("div",{class:"col-3"},"글씨체: ",-1),m={class:"row w-100 mb-3"},g=(0,l._)("div",{class:"col-3"},"폰트 컬러 :",-1),y={class:"row w-100"},h=(0,l._)("div",{class:"col-3"},"백그라운드 컬러 :",-1),v={class:"modal-footer"};function p(t,e,a,p,b,x){const f=(0,l.up)("SelectVue");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("div",s,[(0,l._)("div",c,[(0,l._)("div",u,[r,(0,l.Wm)(f,{class:"col-6",selectedFont:p.layoutAttribute.fontFamily,onChangeFont:p.changeFont},null,8,["selectedFont","onChangeFont"])]),(0,l._)("div",m,[g,(0,l.wy)((0,l._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[0]||(e[0]=t=>p.layoutAttribute.color=t)},null,512),[[o.nr,p.layoutAttribute.color]])]),(0,l._)("div",y,[h,(0,l.wy)((0,l._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[1]||(e[1]=t=>p.layoutAttribute.backgroundColor=t)},null,512),[[o.nr,p.layoutAttribute.backgroundColor]])])])]),(0,l._)("div",v,[(0,l._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[2]||(e[2]=(...t)=>p.hideModal&&p.hideModal(...t))},"닫기"),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>p.editLayoutData&&p.editLayoutData(...t))},"데이터 변경")])])])],512)}var b=a(4870),x=a(806),f=a(2673),w=a(3313),M={name:"LayoutEditModal",components:{SelectVue:f.Z},props:{selectedLayoutAttribute:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const a="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",o=(0,b.iH)(null);let i=null;const d=(0,b.iH)({fontFamily:"",color:"",backgroundColor:""});let n=null;const s=()=>{d.value=n,e.emit("hideModal")},c=()=>{var t=(0,w.N9)(d.value.backgroundColor);e.emit("editLayoutData",t)},u=t=>{d.value.fontFamily=t};return(0,l.YP)((()=>t.isShowMoadal),(t=>{i&&(t?i.show():i.hide())})),(0,l.YP)((()=>t.selectedLayoutAttribute),(t=>{console.log(t),n||(n=JSON.parse(JSON.stringify(t))),d.value=t,console.log(d.value.font)})),(0,l.bv)((()=>{i=new x.u_(o.value)})),{googleKey:a,hideModal:s,editLayoutData:c,changeFont:u,modal:o,layoutAttribute:d}}},_=a(89);const D=(0,_.Z)(M,[["render",p]]);var L=D},9217:function(t,e,a){a.d(e,{Z:function(){return b}});var l=a(3396),o=a(9242);const i={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},d={class:"modal-dialog modal-lg"},n={class:"modal-content"},s={class:"modal-body"},c={class:"modal-footer"},u=(0,l._)("div",null,"글씨체 변경",-1);function r(t,e,a,r,m,g){const y=(0,l.up)("SelectVue");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("div",s,[(0,l._)("div",null,[(0,l.wy)((0,l._)("textarea",{class:"form-control form-control-lg",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":e[0]||(e[0]=t=>r.text.textValue=t)},null,512),[[o.nr,r.text.textValue]])])]),(0,l._)("div",c,[(0,l._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[1]||(e[1]=(...t)=>r.hideModal&&r.hideModal(...t))},"닫기"),u,(0,l.Wm)(y,{selectedFont:r.text.fontFamily,onChangeFont:r.changeFont},null,8,["selectedFont","onChangeFont"]),(0,l.wy)((0,l._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[2]||(e[2]=t=>r.text.color=t)},null,512),[[o.nr,r.text.color]]),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>r.editTextData&&r.editTextData(...t))},"데이터 변경")])])])],512)}var m=a(4870),g=a(806),y=a(2673),h={name:"TextEditModal",components:{SelectVue:y.Z},props:{selectedText:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const a="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",o=(0,m.iH)(null);let i=null;const d=(0,m.iH)({key:"",textValue:"",fontFamily:"",color:""});let n={key:"",textValue:"",fontFamily:"",color:""};const s=()=>{d.value.textValue=n.textValue,d.value.fontFamily=n.fontFamily,d.value.color=n.color,e.emit("hideModal")},c=()=>{""===d.value.textValue&&(d.value.textValue=n.textValue,d.value.fontFamily=n.fontFamily,d.value.color=n.color),e.emit("editTextData",d.value)},u=t=>{d.value.fontFamily=t};return(0,l.YP)((()=>t.isShowMoadal),(e=>{i&&(e?(n=JSON.parse(JSON.stringify(t.selectedText)),d.value=t.selectedText,i.show()):i.hide())})),(0,l.bv)((()=>{i=new g.u_(o.value)})),{googleKey:a,hideModal:s,editTextData:c,changeFont:u,modal:o,text:d}}},v=a(89);const p=(0,v.Z)(h,[["render",r]]);var b=p},2673:function(t,e,a){a.d(e,{Z:function(){return y}});var l=a(3396),o=a(7139),i=a(9242);const d={class:"selectBox"},n=["value"];function s(t,e,a,s,c,u){return(0,l.wg)(),(0,l.iD)("div",d,[(0,l.wy)((0,l._)("select",{class:"select","onUpdate:modelValue":e[0]||(e[0]=t=>s.selected=t),onChange:e[1]||(e[1]=t=>s.changeFont(t))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.googleFontsList,((t,e)=>((0,l.wg)(),(0,l.iD)("option",{style:(0,o.j5)("font-family:"+t.family),key:e,value:t.family},(0,o.zw)(t.family),13,n)))),128))],544),[[i.bM,s.selected]])])}var c=a(4870),u=a(3187),r={name:"Select",components:{},props:{selectedFont:{type:String}},emits:["hideModal","editTextData"],setup(t,{emit:e}){const a=(0,u.h)(),o=(0,c.iH)(t.selectedFont),i=a.getGoogleFontsList,d=t=>{e("changeFont",t.target.value)};return(0,l.YP)((()=>t.selectedFont),(t=>{o.value=t})),(0,l.bv)((()=>{})),{selected:o,googleFontsList:i,changeFont:d}}},m=a(89);const g=(0,m.Z)(r,[["render",s]]);var y=g},555:function(t,e,a){t.exports=a.p+"img/defalutImg.5e9db3f1.svg"}}]);
//# sourceMappingURL=834.2515474d.js.map