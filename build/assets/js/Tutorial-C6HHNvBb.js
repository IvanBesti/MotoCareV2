import{r,j as t,y as k}from"./app-CyaN6xsP.js";import{U as w}from"./UserLayout-DKIt1O_v.js";import{s as v}from"./index-CEILWtln.js";import{B as P}from"./Button-BgJxX_0z.js";import{R as C,C as S}from"./Row-CiQT7cFv.js";import{C as n}from"./Card-Co75QxOs.js";/* empty css            */import"./ThemeProvider-DfRC6yqX.js";import"./divWithClassName-CvjRewxl.js";const D="_container_191q8_5",B="_content_191q8_10",E="_title_191q8_17",L="_search_191q8_29",R="_pagination_191q8_109",A="_active_191q8_155",F="_btn_191q8_222",O="_h1_191q8_230",U="_header_191q8_254",$="_hero_191q8_297",a={container:D,content:B,title:E,search:L,"search-form":"_search-form_191q8_33","search-input":"_search-input_191q8_38","search-button":"_search-button_191q8_39","card-header":"_card-header_191q8_79","card-body":"_card-body_191q8_84","card-title":"_card-title_191q8_88","card-text":"_card-text_191q8_100","pagination-container":"_pagination-container_191q8_109","page-item":"_page-item_191q8_117","page-link":"_page-link_191q8_123","pagination-info":"_pagination-info_191q8_128",pagination:R,active:A,"garis-kosong":"_garis-kosong_191q8_173","section-subtitle":"_section-subtitle_191q8_196","scrollbar-item":"_scrollbar-item_191q8_204",btn:F,"section-title":"_section-title_191q8_230",h1:O,"section-text":"_section-text_191q8_249",header:U,hero:$,"material-symbols-rounded":"_material-symbols-rounded_191q8_305","has-scrollbar":"_has-scrollbar_191q8_358"};function X({auth:u,tutorials:o}){const[_,h]=r.useState(o),[c,g]=r.useState(""),[m,s]=r.useState(1),[i,H]=r.useState(12),p=m*i,x=p-i,f=_.slice(x,p);console.log(o);const l=Math.ceil(_.length/i),j=()=>{s(1),window.scrollTo(0,0)},q=()=>{s(l),window.scrollTo(0,0)},b=()=>{s(e=>e<l?(window.scrollTo(0,0),e+1):e)},N=()=>{s(e=>e>1?(window.scrollTo(0,0),e-1):e)},y=e=>{s(e),window.scrollTo(0,0)},T=e=>{e.preventDefault(),c&&k.visit(v("user.tutorial.search"),{method:"get",data:{search:c},headers:{"Content-type":"Application/json"},onSuccess:d=>{h(d)},onError:d=>{console.error("Error fetching search results:",d)}})};return r.useEffect(()=>{h(o)},[c]),t.jsxs(w,{auth:u,children:[t.jsx("div",{className:a.container,children:t.jsxs("section",{className:a.content,children:[t.jsx("h1",{className:a.title,children:"TUTORIAL"}),t.jsx("div",{className:a.search,children:t.jsxs("form",{onSubmit:T,method:"get",className:a["search-form"],children:[t.jsx("input",{type:"text",placeholder:"Search...",id:"search",onChange:e=>g(e.target.value),className:a["search-input"]}),t.jsx(P,{type:"submit",value:"search",id:"btn-search",title:"Search",className:a["search-button"],children:t.jsx("box-icon",{name:"search",color:"#ffffff"})})]})}),t.jsx(C,{className:a["card-container"],children:f.map(e=>t.jsx(S,{md:3,style:{marginBottom:"20px"},children:t.jsxs(n,{style:{display:"flex",flexDirection:"column",height:"100%"},children:[t.jsx(n.Header,{style:{padding:0},className:a["card-header"],children:t.jsx("iframe",{src:e.link,title:e.judul,frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",width:"100%",className:a.video})}),t.jsxs(n.Body,{className:a["card-body"],children:[t.jsx(n.Title,{className:a["card-title"],children:e.judul}),t.jsx(n.Text,{className:a["card-text"],children:e.deskripsi})]})]})},e.id))})]})}),t.jsxs("div",{className:a["pagination-container"],children:[t.jsx("button",{onClick:e=>{e.preventDefault(),j()},className:a["page-item"],children:t.jsx("span",{className:a["page-link"],children:"<<"})}),t.jsx("button",{onClick:e=>{e.preventDefault(),N()},className:a["page-item"],children:t.jsx("span",{className:a["page-link"],children:"<"})}),[...Array(l).keys()].map(e=>t.jsx("button",{onClick:()=>y(e+1),className:`${a["page-item"]} ${m===e+1?a.active:""}`,children:t.jsx("span",{className:a["page-link"],children:e+1})},e+1)),t.jsx("button",{onClick:e=>{e.preventDefault(),b()},className:a["page-item"],children:t.jsx("span",{className:a["page-link"],children:">"})}),t.jsx("button",{onClick:e=>{e.preventDefault(),q()},className:a["page-item"],children:t.jsx("span",{className:a["page-link"],children:">>"})})]})]})}export{X as default};
