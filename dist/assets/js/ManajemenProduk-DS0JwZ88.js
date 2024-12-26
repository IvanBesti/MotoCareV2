import{r,W as Y,j as e}from"./app-CKhyJ4gm.js";import{A as G}from"./AdminLayout-D8-3Js1L.js";import{X as J}from"./index.es-C-Wrnv7o.js";import{B as y}from"./ButtonAdmin-ir0pVVQ-.js";import{R as c,C as i}from"./Row-CtYgeGj7.js";import{M as l}from"./Modal-C2p2uCjZ.js";import{T as K}from"./Table-BS6Wq2lG.js";import{B as S}from"./Button-D3-pOwhD.js";/* empty css            */import"./index-Dx4H4bw4.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./ThemeProvider-DnvZDrLW.js";import"./setPrototypeOf-CL05xPcL.js";import"./divWithClassName-Bd0xnve-.js";const O="_search_1l072_40",Q="_table_1l072_1",V="_tr_1l072_54",Z="_th_1l072_54",$="_td_1l072_59",ee="_form_1l072_24",se="_judul_1l072_80",te="_link_1l072_91",ae="_deskripsi_1l072_103",t={"table-wrapper":"_table-wrapper_1l072_1","title-table":"_title-table_1l072_8","sub-wrapper":"_sub-wrapper_1l072_18","form-search":"_form-search_1l072_24","icon-search":"_icon-search_1l072_32",search:O,table:Q,tr:V,th:Z,td:$,"title-form":"_title-form_1l072_64",form:ee,judul:se,link:te,deskripsi:ae};function ke({produks:m}){const[v,k]=r.useState(!1),[w,p]=r.useState(!1),[a,_]=r.useState(!1),[h,P]=r.useState(""),[D,B]=r.useState(m);r.useEffect(()=>{const s=m.filter(d=>d.nama_produk.toLowerCase().includes(h.toLowerCase())||d.deskripsi.toLowerCase().includes(h.toLowerCase()));B(s)},[h,m]);const{data:o,setData:x,put:E,post:H,delete:R,processing:L,errors:g}=Y({id:"",nama_produk:"",harga:"",stok:"",deskripsi:""}),[M,T]=r.useState(m),b=()=>k(!1),A=s=>{k(!0),_(s)},j=()=>p(!1),F=s=>{p(!0),_(s)},q=[{name:"Nama Produk",selector:s=>s.nama_produk},{name:"Harga",selector:s=>s.harga},{name:"Stok",selector:s=>s.stok},{name:"Action",selector:s=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>A(s),style:{color:"#f16211"},children:e.jsx("box-icon",{name:"info-circle",type:"solid",color:"#f16211"})}),e.jsx("button",{onClick:()=>z(s),className:"mx-2",children:e.jsx("box-icon",{name:"edit",type:"solid",color:"#f16211"})}),e.jsx("button",{onClick:()=>F(s),style:{color:"#f16211"},children:e.jsx("box-icon",{name:"trash",type:"solid",color:"#f16211"})})]})}],z=s=>{x({id:s.id,nama_produk:s.nama_produk,harga:s.harga,stok:s.stok,deskripsi:s.deskripsi})};function u(s){const d=s.target.id,C=s.target.value;x(U=>({...U,[d]:C}))}const[n,I]=r.useState({}),[f,N]=r.useState(!1),W=s=>{s.preventDefault();const d=o.id?"admin.produk.update":"admin.produk.store";(o.id?E:H)(route(d,o.id),{preserveScroll:!0,data:o,onSuccess:()=>{N(!f)}})},X=s=>{s.preventDefault(),R(route("admin.produk.delete",{produk:a.id}),{preserveScroll:!0,onSuccess:()=>{p(!1),N(!f)},onError:()=>{console.error("Error deleting produk")}})};return r.useEffect(()=>{I(g)},[g]),r.useEffect(()=>{T(m),x({id:"",nama_produk:"",harga:"",stok:"",deskripsi:""})},[f,M]),e.jsxs(G,{title:"Manajemen Produk",children:[e.jsxs(c,{children:[e.jsxs(i,{md:7,style:{borderRight:"2px solid #f16211",paddingRight:0},children:[e.jsx("h1",{className:t["title-table"],children:"Daftar Produk"}),e.jsxs("form",{action:"#",id:"form-search",className:t["form-search"]+" d-flex justify-content-md-start",style:{width:"50%"},children:[e.jsx("span",{className:t["icon-search"],children:e.jsx("box-icon",{name:"search",color:"#f16211"})}),e.jsx("input",{type:"text",name:"search",id:"search",placeholder:"Cari Produk",autoComplete:"off",className:t.search,value:h,onChange:s=>P(s.target.value)})]}),e.jsx(J,{columns:q,data:D,pagination:!0,responsive:!0,striped:!0,className:"table-striped"})]}),e.jsxs(i,{md:5,children:[e.jsx("div",{className:"form-merk-motor",children:e.jsx("h1",{className:t["title-form"],children:"Form Produk"})}),e.jsxs("form",{id:"form",onSubmit:W,className:t.form,children:[e.jsx("input",{type:"hidden",name:"id",id:"id",value:o.id}),e.jsx(c,{className:"mb-3",children:e.jsxs(i,{md:{span:9,offset:1},children:[e.jsx("input",{type:"text",name:"nama_produk",id:"nama_produk",placeholder:"Nama Produk",autoComplete:"off",required:!0,value:o.nama_produk,onChange:u,className:t.judul}),n.nama_produk&&e.jsx("small",{className:"text-danger",children:n.nama_produk})]})}),e.jsx(c,{className:"mb-4",children:e.jsxs(i,{md:{span:9,offset:1},children:[e.jsx("input",{type:"number",name:"harga",id:"harga",placeholder:"Harga",autoComplete:"off",required:!0,value:o.harga,onChange:u,className:t.link}),n.harga&&e.jsx("small",{className:"text-danger",children:n.harga})]})}),e.jsx(c,{className:"mb-4",children:e.jsxs(i,{md:{span:9,offset:1},children:[e.jsx("input",{type:"number",name:"stok",id:"stok",placeholder:"Stok",autoComplete:"off",required:!0,value:o.stok,onChange:u,className:t.link}),n.stok&&e.jsx("small",{className:"text-danger",children:n.stok})]})}),e.jsx(c,{className:"mb-4",children:e.jsxs(i,{md:{span:12},children:[e.jsx("textarea",{name:"deskripsi",id:"deskripsi",rows:"6",placeholder:"Deskripsi",autoComplete:"off",required:!0,value:o.deskripsi,onChange:u,className:t.deskripsi,children:o.deskripsi}),n.deskripsi&&e.jsx("small",{className:"text-danger",children:n.deskripsi})]})}),e.jsx(c,{children:e.jsx(i,{md:{span:8,offset:4},children:e.jsxs(y,{type:"submit",disabled:L,style:{background:"linear-gradient(90deg, #f16211 -14.33%, #e59a6f 85.67%)",fontSize:"20px",fontStyle:"normal",fontWeight:"700",textAlign:"center"},children:[e.jsx("box-icon",{name:"save",type:"solid",color:"#fff"})," ",e.jsx("span",{className:"ms-2",children:"SUBMIT"})]})})})]})]})]}),e.jsxs(l,{size:"lg",show:v,onHide:b,children:[e.jsx(l.Header,{closeButton:!0,children:e.jsxs(l.Title,{children:["Detail Produk"," ",e.jsx("span",{className:"title",children:a&&a.nama_produk})]})}),e.jsx(l.Body,{children:e.jsx(K,{borderless:!0,className:t.table,children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:t.tr,children:[e.jsx("th",{className:t.th,children:"Nama Produk"}),e.jsx("td",{className:t.td,children:":"}),e.jsx("td",{children:a&&a.nama_produk})]}),e.jsxs("tr",{className:t.tr,children:[e.jsx("th",{className:t.th,children:"Harga"}),e.jsx("td",{className:t.td,children:":"}),e.jsx("td",{children:a&&"Rp. "+a.harga})]}),e.jsxs("tr",{className:t.tr,children:[e.jsx("th",{className:t.th,children:"Stok"}),e.jsx("td",{className:t.td,children:":"}),e.jsx("td",{children:a&&a.stok})]}),e.jsxs("tr",{className:t.tr,children:[e.jsx("th",{className:t.th,children:"Deskripsi"}),e.jsx("td",{className:t.td,children:":"}),e.jsx("td",{children:a&&a.deskripsi})]})]})})}),e.jsx(l.Footer,{children:e.jsx(S,{variant:"secondary",onClick:b,children:"Close"})})]}),e.jsxs(l,{show:w,onHide:j,children:[e.jsx(l.Header,{closeButton:!0,children:e.jsx(l.Title,{children:"Hapus Produk"})}),e.jsx(l.Body,{children:e.jsxs("p",{children:["Apakah anda yakin ingin menghapus Produk:"," ",e.jsx("b",{children:a&&a.nama_produk}),"?"]})}),e.jsxs(l.Footer,{children:[e.jsx(S,{variant:"secondary",onClick:j,children:"Close"}),e.jsx("form",{onSubmit:X,action:"#",method:"post",children:e.jsx(y,{type:"submit",variant:"primary",onClick:j,style:{backgroundColor:"#f16211",borderColor:"#f16211"},children:"Ya, Hapus"})})]})]})]})}export{ke as default};