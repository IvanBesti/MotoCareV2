import{r as i,W as ie,j as e,R as ne,y as T}from"./app-CyaN6xsP.js";import{U as re}from"./UserLayout-DKIt1O_v.js";import{s as A}from"./index-CEILWtln.js";import{h as oe}from"./moment-C5S46NFB.js";import{R as le,C as U}from"./Row-CiQT7cFv.js";import{M as d}from"./Modal-iN6Zw-8X.js";import{B as j}from"./Button-BgJxX_0z.js";/* empty css            */import"./ThemeProvider-DfRC6yqX.js";import"./setPrototypeOf-CL05xPcL.js";import"./divWithClassName-CvjRewxl.js";const ce="_container_1xaqa_5",de="_section_1xaqa_10",_e="_rating_1xaqa_18",me="_title_1xaqa_26",xe="_rate_1xaqa_85",he="_textarea_1xaqa_151",ge="_review_1xaqa_175",ue="_star_1xaqa_208",pe="_desc_1xaqa_218",ve="_pagination_1xaqa_229",fe="_active_1xaqa_255",je="_img_1xaqa_296",qe="_hero_1xaqa_424",Ne="_header_1xaqa_445",t={container:ce,section:de,"rating-page":"_rating-page_1xaqa_18","form-ulasan":"_form-ulasan_1xaqa_21","title-page":"_title-page_1xaqa_26",rating:_e,"service-type":"_service-type_1xaqa_57","input-text":"_input-text_1xaqa_64",title:me,rate:xe,"title-rate":"_title-rate_1xaqa_90","rate-total":"_rate-total_1xaqa_110","title-rate-input":"_title-rate-input_1xaqa_116","count-rate":"_count-rate_1xaqa_122","tombol-submit-btn":"_tombol-submit-btn_1xaqa_132",textarea:he,"tombol-submit":"_tombol-submit_1xaqa_132","review-list":"_review-list_1xaqa_175","review-title-list":"_review-title-list_1xaqa_179",review:ge,"review-header":"_review-header_1xaqa_192","review-info":"_review-info_1xaqa_196","rating-value":"_rating-value_1xaqa_202",star:ue,"review-description":"_review-description_1xaqa_213",desc:pe,"review-date":"_review-date_1xaqa_224",pagination:ve,"page-item":"_page-item_1xaqa_236",active:fe,"rate-detail":"_rate-detail_1xaqa_261","rating-in":"_rating-in_1xaqa_268","rating-five":"_rating-five_1xaqa_269","rating-four":"_rating-four_1xaqa_270","rating-three":"_rating-three_1xaqa_271","rating-two":"_rating-two_1xaqa_272","rating-one":"_rating-one_1xaqa_273","input-file":"_input-file_1xaqa_278","input-rating":"_input-rating_1xaqa_279",img:je,"label-gambar":"_label-gambar_1xaqa_304","img-box":"_img-box_1xaqa_326","review-img":"_review-img_1xaqa_340","btn-in-modal":"_btn-in-modal_1xaqa_351","scrollbar-item":"_scrollbar-item_1xaqa_378",hero:qe,header:Ne,"has-scrollbar":"_has-scrollbar_1xaqa_453"};function Te({auth:q,ulasans:r,jenisLayanans:$,oneStar:N,twoStar:w,threeStar:b,fourStar:y,fiveStar:R,totalUlasan:C}){const[o,I]=i.useState(0),[H,L]=i.useState(0),[S,k]=i.useState(r),[M,Y]=i.useState([]),{data:_,setData:m,post:we,processing:be,errors:ye}=ie({jenis_layanan:"",rating:o,foto:[],review:""}),[G,P]=i.useState(!1),[K,h]=i.useState(""),[D,g]=i.useState(0),[l,O]=i.useState([]),[x,z]=i.useState(1),[u]=i.useState(4),p=i.useRef(null),B=x*u,J=B-u,V=S.sort((a,s)=>new Date(s.created_at)-new Date(a.created_at)).slice(J,B),v=Math.ceil(S.length/u),c=a=>{z(a),setTimeout(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth",block:"start"})},1)},W=(a,s)=>{O(a),g(s),h("/storage/"+a[s].foto),P(!0)},E=()=>{P(!1)},Q=()=>{const a=(D+1)%l.length;g(a),h("/storage/"+l[a].foto)},X=()=>{const a=(D-1+l.length)%l.length;g(a),h("/storage/"+l[a].foto)},Z=[{id:1,color:o>=1?"#ffdd00":"#dddddd"},{id:2,color:o>=2?"#ffdd00":"#dddddd"},{id:3,color:o>=3?"#ffdd00":"#dddddd"},{id:4,color:o>=4?"#ffdd00":"#dddddd"},{id:5,color:o>=5?"#ffdd00":"#dddddd"}];console.log(N,w,b,y,R,C);const ee=[{id:"five",count:R,stars:5},{id:"four",count:y,stars:4},{id:"three",count:b,stars:3},{id:"two",count:w,stars:2},{id:"one",count:N,stars:1}],ae=a=>{let s=[];for(let n=0;n<5;n++)s.push(e.jsx("box-icon",{name:"star",type:"solid",color:n<a?"#ffdd00":"#ddd"}));return s},[F,f]=i.useState(!1);function te(a){a.preventDefault(),q.user?(console.log(_),T.post(A("user.ulasan.create"),_),f(!0),setTimeout(()=>{k(r),f(!0)},1e3),a.target.reset(),Y([]),I(0),m({jenis_layanan:"",rating:"",review:"",foto:[]})):T.visit(A("auth"),{method:"GET",headers:{"Content-type":"Application/json"}})}return i.useEffect(()=>{F&&(console.log(r),k(r),f(!1))},[F,r]),i.useEffect(()=>{m(a=>({...a,foto:M,rating:o}))},[M,o]),i.useEffect(()=>{const s=r.reduce((n,se)=>n+parseInt(se.rating),0)/r.length;L(s)},[r]),e.jsxs(re,{auth:q,children:[e.jsx("section",{className:t["rating-page"],children:e.jsxs("div",{className:t.container,children:[e.jsx("h1",{className:t["title-page"],children:"RATING PAGE"}),e.jsxs("section",{className:t["form-ulasan"],children:[e.jsxs(le,{children:[e.jsxs(U,{md:5,children:[e.jsx("h3",{className:t.title,children:"Rating Service Kendaraan"}),e.jsx("h1",{className:t["rate-total"],children:"Rating Keseluruhan"}),e.jsxs("div",{className:t["rate-detail"],children:[e.jsx("div",{className:t.rating,children:e.jsx("box-icon",{name:"star",type:"solid",color:"#ffdd00"})}),e.jsxs("p",{className:t["count-rate"],children:[H.toFixed(2)," / 5.0 -"," ",C," ratings"]})]}),ee.map(a=>e.jsxs("div",{className:t["rate-detail"],children:[e.jsx("div",{className:t[`rating-${a.id}`],children:ae(a.stars)}),e.jsxs("p",{className:t["count-rate"],children:[a.count," ratings"]})]},a.id))]}),e.jsxs(U,{md:7,children:[e.jsx("h1",{className:t["title-rate-input"],children:"Berikan Rating"}),e.jsxs("form",{onSubmit:te,method:"post",className:t["form-input-ulasan"],children:[e.jsxs("div",{className:t["service-type"],children:[e.jsx("h4",{className:t["title-rate"],children:"Jenis Layanan"}),e.jsxs("select",{name:"jenis_layanan",className:t["input-text"],value:_.jenis_layanan,onChange:a=>m("jenis_layanan",a.target.value),children:[e.jsx("option",{value:"",children:"Pilih jenis layanan"}),$.map(a=>e.jsx("option",{value:a.jenis_layanan,children:a.jenis_layanan},a.id))]})]}),e.jsxs("div",{className:t.rate,children:[e.jsx("h4",{className:t["title-rate"],children:"Rating"}),e.jsx("div",{className:t["rating-in"],children:Z.map(a=>e.jsxs(ne.Fragment,{children:[e.jsx("input",{type:"radio",id:`star${a.id}`,name:"rating",value:a.id,onChange:()=>I(a.id),className:t["input-rating"]}),e.jsx("label",{style:{cursor:"pointer"},htmlFor:`star${a.id}`,children:e.jsx("box-icon",{name:"star",type:"solid",color:a.color})})]},a.id))})]}),e.jsxs("div",{className:t.desc,children:[e.jsx("h4",{className:t["title-rate"],children:"Catatan"}),e.jsx("textarea",{id:"review",name:"review",className:t.textarea,autoComplete:"off",value:_.review,onChange:a=>m("review",a.target.value)})]}),e.jsx("div",{id:"tombol-submit",className:t["tombol-submit"],children:e.jsx("button",{type:"submit",value:"SUBMIT",className:t["tombol-submit-btn"],children:"SUBMIT"})})]})]})]}),e.jsxs("div",{ref:p,className:t["review-list"],children:[e.jsx("h1",{className:t["review-title-list"],children:"Daftar Ulasan"}),e.jsx("div",{children:V.sort((a,s)=>new Date(s.created_at)-new Date(a.created_at)).map(a=>e.jsxs("div",{className:t.review,children:[e.jsxs("div",{className:t["review-header"],children:[e.jsxs("h3",{className:t["review-info"],children:[a.jenis_layanan," -"," ",a.user.nama]}),e.jsx("div",{className:t["rating-value"],children:[...Array(5)].map((s,n)=>e.jsx("span",{children:e.jsx("box-icon",{type:"solid",name:"star",color:n<parseInt(a.rating)?"#f16211":"#ddd"})},n))}),e.jsx("p",{className:t["review-date"],children:oe(a.created_at).format("DD-MM-YYYY HH:mm:ss")})]}),e.jsx("p",{className:t["review-description"],children:a.review}),a.foto_ulasans.map((s,n)=>e.jsx("img",{className:t["review-img"],src:"/storage/"+s.foto,alt:`Review ${n}`,onClick:()=>W(a.foto_ulasans,n)},n))]},a.id))})]}),e.jsxs("div",{className:t.pagination,children:[e.jsx("a",{href:"#",onClick:()=>c(1),className:t["page-item"],children:"«"}),e.jsx("a",{href:"#",onClick:()=>c(Math.max(1,x-1)),className:t["page-item"],children:"‹"}),Array.from({length:v},(a,s)=>e.jsx("a",{href:"#",onClick:()=>c(s+1),className:`${t["page-item"]} ${x===s+1?t.active:""}`,children:s+1},s+1)),e.jsx("a",{href:"#",onClick:()=>c(Math.min(v,x+1)),className:t["page-item"],children:"›"}),e.jsx("a",{href:"#",onClick:()=>c(v),className:t["page-item"],children:"»"})]})]})]})}),e.jsxs(d,{size:"lg",show:G,onHide:E,children:[e.jsx(d.Header,{closeButton:!0,children:e.jsx(d.Title,{children:"Modal heading"})}),e.jsx(d.Body,{style:{display:"flex",justifyContent:"center"},children:e.jsx("img",{src:K,alt:"Modal Preview",style:{width:"65%"}})}),e.jsxs(d.Footer,{children:[e.jsx(j,{variant:"secondary",className:t["btn-in-modal"],onClick:X,children:"Previous"}),e.jsx(j,{variant:"secondary",className:t["btn-in-modal"],onClick:Q,children:"Next"}),e.jsx(j,{variant:"secondary",className:t["btn-in-modal"],onClick:E,children:"Close"})]})]})]})}export{Te as default};