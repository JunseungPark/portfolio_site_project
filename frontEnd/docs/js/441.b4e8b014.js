"use strict";(self["webpackChunkportfolio_template_master"]=self["webpackChunkportfolio_template_master"]||[]).push([[441],{441:function(t,e,a){a.r(e),a.d(e,{default:function(){return T}});var o=a(3396),l=a(7139);const i={class:"container text-center"},d={class:"col-12 p-5"},n={class:"row"},s={class:"col-lg-6 col-md-12 mb-4"},c=["src"],u=["src"],r=["src"],m={class:"col-lg-6 col-md-6 mb-4"},g=["src"],y=["src"],v=["src"],h=["src"];function b(t,e,a,b,p,M){const f=(0,o.up)("TextEditModal"),w=(0,o.up)("ImageEditModal"),x=(0,o.up)("LayoutEditModal");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",{class:"bg",style:(0,l.j5)([b.contentData.layoutAttribute])},[(0,o._)("div",i,[(0,o._)("div",d,[(0,o._)("h1",{onClick:e[0]||(e[0]=t=>b.showTextEditModal(b.contentData.textList[0])),class:"display-5 fw-bold",style:(0,l.j5)([b.contentData.textList[0]])},(0,l.zw)(b.contentData.textList[0].textValue),5)]),(0,o._)("div",n,[(0,o._)("div",s,[(0,o._)("img",{onClick:e[1]||(e[1]=t=>b.showImageEditModal(b.contentData.imageList[0].key)),src:b.contentData.imageList[0].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,c),(0,o._)("img",{onClick:e[2]||(e[2]=t=>b.showImageEditModal(b.contentData.imageList[1].key)),src:b.contentData.imageList[1].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,u),(0,o._)("img",{onClick:e[3]||(e[3]=t=>b.showImageEditModal(b.contentData.imageList[2].key)),src:b.contentData.imageList[2].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,r)]),(0,o._)("div",m,[(0,o._)("img",{onClick:e[4]||(e[4]=t=>b.showImageEditModal(b.contentData.imageList[3].key)),src:b.contentData.imageList[3].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,g),(0,o._)("img",{onClick:e[5]||(e[5]=t=>b.showImageEditModal(b.contentData.imageList[4].key)),src:b.contentData.imageList[4].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,y),(0,o._)("img",{onClick:e[6]||(e[6]=t=>b.showImageEditModal(b.contentData.imageList[5].key)),src:b.contentData.imageList[5].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,v),(0,o._)("img",{onClick:e[7]||(e[7]=t=>b.showImageEditModal(b.contentData.imageList[6].key)),src:b.contentData.imageList[6].imgName,class:"img-fluid mb-4 hoverImageWrap",alt:""},null,8,h)])])])],4),(0,o.Wm)(f,{isShowMoadal:b.isShowTextEditMoadal,selectedText:b.selectedText,onHideModal:b.hideTextEditModal,onEditTextData:b.editTextData},null,8,["isShowMoadal","selectedText","onHideModal","onEditTextData"]),(0,o.Wm)(w,{isShowMoadal:b.isShowImageEditMoadal,selectedImage:b.selectedImage,onHideModal:b.hideImageEditModal,onEditImageData:b.editImageData},null,8,["isShowMoadal","selectedImage","onHideModal","onEditImageData"]),(0,o.Wm)(x,{isShowMoadal:b.isShowLayoutEditMoadal,selectedLayoutAttribute:b.selectedLayoutAttribute,onHideModal:b.hideLayoutEditModal,onEditLayoutData:b.editLayoutData},null,8,["isShowMoadal","selectedLayoutAttribute","onHideModal","onEditLayoutData"])])}var p=a(4870),M=a(3187),f=a(2187),w=a(9217),x=a(130),_=a(7356),D=a(3313),L={name:"PictureTextLayout2",components:{TextEditModal:w.Z,ImageEditModal:x.Z,LayoutEditModal:_.Z},emits:["isOpendAnyModal","isClosedModal"],setup(){const t=(0,M.h)(),e=(0,f.z)(),a=e.getPictureTextLayout2,o=(0,p.iH)(!1),l=(0,p.iH)({}),i=(0,p.iH)((0,D.N9)(a.layoutAttribute.backgroundColor)),d=()=>{l.value=a.layoutAttribute,c(!0)},n=()=>{c(!1)},s=t=>{i.value=t,u(),c(!1)},c=e=>{o.value=e,t.changeState()},u=()=>{a.textList.map((t=>{t.color=a.layoutAttribute.color,t.fontFamily=a.layoutAttribute.fontFamily}))},r=(0,p.iH)(!1),m=(0,p.iH)({}),g=t=>{m.value=t,h(!0)},y=()=>{h(!1)},v=t=>{e.editTextList(a,t),h(!1)},h=e=>{r.value=e,t.changeState()},b=(0,p.iH)(!1),w=(0,p.iH)(0),x=t=>{w.value=t,E(!0)},_=()=>{E(!1)},L=t=>{e.editPictureList(a,t),E(!1)},E=e=>{b.value=e,t.changeState()};return{isShowLayoutEditMoadal:o,selectedLayoutAttribute:l,showLayoutEditModal:d,hideLayoutEditModal:n,editLayoutData:s,isBlackBG:i,isShowTextEditMoadal:r,selectedText:m,showTextEditModal:g,hideTextEditModal:y,editTextData:v,isShowImageEditMoadal:b,selectedImage:w,showImageEditModal:x,hideImageEditModal:_,editImageData:L,contentData:a}}},E=a(89);const I=(0,E.Z)(L,[["render",b]]);var T=I},130:function(t,e,a){a.d(e,{Z:function(){return b}});var o=a(3396);const l={class:"modal fade",ref:"modal",id:"ImageEditModal",tabindex:"-1","data-bs-backdrop":"static","aria-labelledby":"ImageEditModal","aria-hidden":"true"},i={class:"modal-dialog modal-lg"},d={class:"modal-content"},n={class:"modal-body"},s=["src"],c={class:"modal-footer flex-row"},u={class:"file-upload-wrapper"};function r(t,e,a,r,m,g){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",i,[(0,o._)("div",d,[(0,o._)("div",n,[(0,o._)("img",{src:r.image.imgName,class:"previewImg",width:"400",height:"400",alt:""},null,8,s)]),(0,o._)("div",c,[(0,o._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[0]||(e[0]=(...t)=>r.hideModal&&r.hideModal(...t))},"닫기"),(0,o._)("div",u,[(0,o._)("input",{name:"file-upload-field",type:"file",class:"file-upload-field",value:"",onChange:e[1]||(e[1]=(...t)=>r.onFileChange&&r.onFileChange(...t))},null,32)]),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>r.editImageData&&r.editImageData(...t))},"데이터 변경")])])])],512)}var m=a(4870),g=a(806),y={name:"ImageEditModal",props:{selectedImage:{type:Number},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const l=(0,m.iH)(null);let i=null;const d=(0,m.iH)({key:0,imgName:a(555)}),n=()=>{e.emit("hideModal")},s=()=>{e.emit("editImageData",d.value)},c=t=>{var e=t.target.files;e.length&&u(e[0])},u=t=>{var e=new FileReader;e.onload=t=>{d.value.imgName=t.target.result},e.readAsDataURL(t)},r=t=>{t.image=!1};return(0,o.YP)((()=>t.isShowMoadal),(t=>{i&&(t?i.show():(d.value.imgName=a(555),i.hide()))})),(0,o.YP)((()=>t.selectedImage),(t=>{d.value.key=t})),(0,o.bv)((()=>{i=new g.u_(l.value)})),{hideModal:n,editImageData:s,onFileChange:c,createImage:u,removeImage:r,modal:l,image:d}}},v=a(89);const h=(0,v.Z)(y,[["render",r]]);var b=h},7356:function(t,e,a){a.d(e,{Z:function(){return L}});var o=a(3396),l=a(9242);const i={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},d={class:"modal-dialog modal-lg modal-dialog-centered"},n={class:"modal-content"},s={class:"modal-body"},c={class:"d-flex flex-column flex-wrap justify-content-start align-items-center"},u={class:"row align-items-center w-100 mb-3"},r=(0,o._)("div",{class:"col-3"},"글씨체: ",-1),m={class:"row w-100 mb-3"},g=(0,o._)("div",{class:"col-3"},"폰트 컬러 :",-1),y={class:"row w-100"},v=(0,o._)("div",{class:"col-3"},"백그라운드 컬러 :",-1),h={class:"modal-footer"};function b(t,e,a,b,p,M){const f=(0,o.up)("SelectVue");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",d,[(0,o._)("div",n,[(0,o._)("div",s,[(0,o._)("div",c,[(0,o._)("div",u,[r,(0,o.Wm)(f,{class:"col-6",selectedFont:b.layoutAttribute.fontFamily,onChangeFont:b.changeFont},null,8,["selectedFont","onChangeFont"])]),(0,o._)("div",m,[g,(0,o.wy)((0,o._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[0]||(e[0]=t=>b.layoutAttribute.color=t)},null,512),[[l.nr,b.layoutAttribute.color]])]),(0,o._)("div",y,[v,(0,o.wy)((0,o._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[1]||(e[1]=t=>b.layoutAttribute.backgroundColor=t)},null,512),[[l.nr,b.layoutAttribute.backgroundColor]])])])]),(0,o._)("div",h,[(0,o._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[2]||(e[2]=(...t)=>b.hideModal&&b.hideModal(...t))},"닫기"),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>b.editLayoutData&&b.editLayoutData(...t))},"데이터 변경")])])])],512)}var p=a(4870),M=a(806),f=a(2673),w=a(3313),x={name:"LayoutEditModal",components:{SelectVue:f.Z},props:{selectedLayoutAttribute:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const a="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",l=(0,p.iH)(null);let i=null;const d=(0,p.iH)({fontFamily:"",color:"",backgroundColor:""});let n=null;const s=()=>{d.value=n,e.emit("hideModal")},c=()=>{var t=(0,w.N9)(d.value.backgroundColor);e.emit("editLayoutData",t)},u=t=>{d.value.fontFamily=t};return(0,o.YP)((()=>t.isShowMoadal),(t=>{i&&(t?i.show():i.hide())})),(0,o.YP)((()=>t.selectedLayoutAttribute),(t=>{console.log(t),n||(n=JSON.parse(JSON.stringify(t))),d.value=t})),(0,o.bv)((()=>{i=new M.u_(l.value)})),{googleKey:a,hideModal:s,editLayoutData:c,changeFont:u,modal:l,layoutAttribute:d}}},_=a(89);const D=(0,_.Z)(x,[["render",b]]);var L=D},9217:function(t,e,a){a.d(e,{Z:function(){return p}});var o=a(3396),l=a(9242);const i={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},d={class:"modal-dialog modal-lg"},n={class:"modal-content"},s={class:"modal-body"},c={class:"modal-footer"},u=(0,o._)("div",null,"글씨체 변경",-1);function r(t,e,a,r,m,g){const y=(0,o.up)("SelectVue");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",d,[(0,o._)("div",n,[(0,o._)("div",s,[(0,o._)("div",null,[(0,o.wy)((0,o._)("textarea",{class:"form-control form-control-lg",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":e[0]||(e[0]=t=>r.text.textValue=t)},null,512),[[l.nr,r.text.textValue]])])]),(0,o._)("div",c,[(0,o._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[1]||(e[1]=(...t)=>r.hideModal&&r.hideModal(...t))},"닫기"),u,(0,o.Wm)(y,{selectedFont:r.text.fontFamily,onChangeFont:r.changeFont},null,8,["selectedFont","onChangeFont"]),(0,o.wy)((0,o._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[2]||(e[2]=t=>r.text.color=t)},null,512),[[l.nr,r.text.color]]),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>r.editTextData&&r.editTextData(...t))},"데이터 변경")])])])],512)}var m=a(4870),g=a(806),y=a(2673),v={name:"TextEditModal",components:{SelectVue:y.Z},props:{selectedText:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const a="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",l=(0,m.iH)(null);let i=null;const d=(0,m.iH)({key:"",textValue:"",fontFamily:"",color:""});let n={key:"",textValue:"",fontFamily:"",color:""};const s=()=>{d.value.textValue=n.textValue,d.value.fontFamily=n.fontFamily,d.value.color=n.color,e.emit("hideModal")},c=()=>{""===d.value.textValue&&(d.value.textValue=n.textValue,d.value.fontFamily=n.fontFamily,d.value.color=n.color),e.emit("editTextData",d.value)},u=t=>{d.value.fontFamily=t};return(0,o.YP)((()=>t.isShowMoadal),(e=>{i&&(e?(n=JSON.parse(JSON.stringify(t.selectedText)),d.value=t.selectedText,i.show()):i.hide())})),(0,o.bv)((()=>{i=new g.u_(l.value)})),{googleKey:a,hideModal:s,editTextData:c,changeFont:u,modal:l,text:d}}},h=a(89);const b=(0,h.Z)(v,[["render",r]]);var p=b},2673:function(t,e,a){a.d(e,{Z:function(){return y}});var o=a(3396),l=a(7139),i=a(9242);const d={class:"selectBox"},n=["value"];function s(t,e,a,s,c,u){return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.wy)((0,o._)("select",{class:"select","onUpdate:modelValue":e[0]||(e[0]=t=>s.selected=t),onChange:e[1]||(e[1]=t=>s.changeFont(t))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.googleFontsList,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{style:(0,l.j5)("font-family:"+t.family),key:e,value:t.family},(0,l.zw)(t.family),13,n)))),128))],544),[[i.bM,s.selected]])])}var c=a(4870),u=a(3187),r={name:"Select",components:{},props:{selectedFont:{type:String}},emits:["hideModal","editTextData"],setup(t,{emit:e}){const a=(0,u.h)(),l=(0,c.iH)(t.selectedFont),i=a.getGoogleFontsList,d=t=>{e("changeFont",t.target.value)};return(0,o.YP)((()=>t.selectedFont),(t=>{l.value=t})),(0,o.bv)((()=>{})),{selected:l,googleFontsList:i,changeFont:d}}},m=a(89);const g=(0,m.Z)(r,[["render",s]]);var y=g},555:function(t,e,a){t.exports=a.p+"img/defalutImg.5e9db3f1.svg"}}]);
//# sourceMappingURL=441.b4e8b014.js.map