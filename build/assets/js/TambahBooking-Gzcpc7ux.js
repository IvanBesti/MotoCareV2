import{r,W as E,j as a,a as J}from"./app-CyaN6xsP.js";import{A}from"./AdminLayout-PFMD-RUe.js";import{B as g}from"./ButtonAdmin-DFHYROdf.js";import{S as u}from"./react-select.esm-7obwNL3l.js";import{R as c,C as s}from"./Row-CiQT7cFv.js";/* empty css            */import"./index-CEILWtln.js";import"./Button-BgJxX_0z.js";import"./ThemeProvider-DfRC6yqX.js";import"./setPrototypeOf-CL05xPcL.js";import"./emotion-unitless.esm-sScrWPmR.js";const T="_form_1v98r_1",U="_label_1v98r_17",I="_input_1v98r_22",P="_select_1v98r_23",q="_catatan_1v98r_33",t={"form-wrapper":"_form-wrapper_1v98r_1","title-form":"_title-form_1v98r_6",form:T,label:U,input:I,select:P,catatan:q};function na({katalogs:k,users:N,jenisLayanans:v}){const[h,y]=r.useState(""),[p,S]=r.useState(""),[x,C]=r.useState(""),[L,R]=r.useState(N),[w,D]=r.useState(k),[B,z]=r.useState(v),j=B.map(e=>({value:e.id,label:e.jenis_layanan})),_=L.map(e=>({value:e.id,label:e.nama})),b=w.map(e=>({value:e.id,label:e.merk+" "+e.model})),{data:o,setData:m,post:F,processing:G,errors:d}=E({id:"",user_id:h.id,jenis_layanan_id:x.id,katalog_id:p.id,tahun_pembuatan:"",nomor_polisi:"",km_kendaraan:"",jadwal_booking:"",catatan:""}),[n,K]=r.useState({}),M=e=>{e.preventDefault();const l="admin.booking.store";console.log(o),F(route(l),{preserveScroll:!0,data:o,onSuccess:()=>{setReload(!reload)},onError:()=>{console.log(d)}})};r.useEffect(()=>{K(d)},[d]);const i=e=>{const{name:l,value:f}=e.target;m({...o,[l]:f})};return a.jsx(A,{title:"MANAJEMEN BOOKING",children:a.jsxs("div",{className:t["form-wrapper"],children:[a.jsx("h1",{className:t["title-form"]+" my-3",children:"Form Tambah Booking"}),a.jsxs("form",{id:"form",onSubmit:M,className:t.form,children:[a.jsxs(c,{className:"justify-content-md-center mb-3",children:[a.jsxs(s,{md:4,children:[a.jsx("label",{className:t.label,htmlFor:"nama",children:"Nama Customer"}),a.jsx(u,{id:"user",options:_,value:_.find(e=>e.value===h),onChange:e=>{y(e.value),m(l=>({...l,user_id:e.value}))},placeholder:"Pilih User"}),n.user_id&&a.jsx("small",{className:"text-danger",children:n.user_id})]}),a.jsxs(s,{md:4,children:[a.jsx("label",{className:t.label,htmlFor:"jenis_layanan",children:"Jenis Layanan"}),a.jsx(u,{id:"jenisLayanan",options:j,value:j.find(e=>e.value===x),onChange:e=>{C(e.value),m(l=>({...l,jenis_layanan_id:e.value}))},placeholder:"Pilih Jenis Layanan"}),n.jenis_layanan&&a.jsx("small",{className:"text-danger",children:n.jenis_layanan})]}),a.jsxs(s,{md:4,children:[a.jsx("label",{className:t.label,htmlFor:"merk",children:"Merk Motor"}),a.jsx(u,{id:"katalog",options:b,value:b.find(e=>e.value===p),onChange:e=>{S(e.value),m(l=>({...l,katalog_id:e.value}))},placeholder:"Pilih Katalog"}),n.katalog_id&&a.jsx("small",{className:"text-danger",children:n.katalog_id})]})]}),a.jsxs(c,{className:"justify-content-md-center mb-3",children:[a.jsxs(s,{md:4,children:[a.jsx("label",{className:t.label,htmlFor:"tahun_pembuatan",children:"Tahun Pembuatan"}),a.jsx("input",{type:"text",name:"tahun_pembuatan",id:"tahun_pembuatan",placeholder:"2024",autoComplete:"off",required:!0,className:t.input,onChange:i,value:o.tahun_pembuatan}),n.tahun_pembuatan&&a.jsx("small",{className:"text-danger",children:n.tahun_pembuatan})]}),a.jsxs(s,{md:4,children:[a.jsx("label",{className:t.label,htmlFor:"nomor_polisi",children:"Nomor Polisi"}),a.jsx("input",{type:"text",name:"nomor_polisi",id:"nomor_polisi",placeholder:"B 1234 ABC",autoComplete:"off",required:!0,className:t.input,onChange:i,value:o.nomor_polisi}),n.nomor_polisi&&a.jsx("small",{className:"text-danger",children:n.nomor_polisi})]}),a.jsxs(s,{md:4,children:[a.jsx("label",{className:t.label,htmlFor:"km_kendaraan",children:"Kilometer Kendaraan"}),a.jsx("input",{type:"text",name:"km_kendaraan",id:"km_kendaraan",placeholder:"10000",autoComplete:"off",required:!0,className:t.input,onChange:i,value:o.km_kendaraan}),n.km_kendaraan&&a.jsx("small",{className:"text-danger",children:n.km_kendaraan})]})]}),a.jsxs(c,{className:"justify-content-md-center mb-3",children:[a.jsxs(s,{md:6,children:[a.jsx("label",{className:t.label,htmlFor:"jadwal_booking",children:"Jadwal Booking"}),a.jsx("input",{type:"date",name:"jadwal_booking",id:"jadwal_booking",placeholder:"2024",autoComplete:"off",required:!0,className:t.input,onChange:i,value:o.jadwal_booking}),n.jadwal_booking&&a.jsx("small",{className:"text-danger",children:n.jadwal_booking})]}),a.jsxs(s,{md:6,children:[a.jsx("label",{className:t.label,htmlFor:"catatan",children:"Catatan Tambahan"}),a.jsx("textarea",{className:t.catatan,name:"catatan",id:"catatan",rows:"4",placeholder:"catatan Tambahan",autoComplete:"off",onChange:i,value:o.catatan}),n.catatan&&a.jsx("small",{className:"text-danger",children:n.catatan})]})]}),a.jsxs(c,{className:"mb-3",children:[a.jsx(s,{md:6,children:a.jsx(g,{variant:"secondary",style:{backgroundColor:"rgba(183, 182, 182, 0.8)",fontSize:"20px"},children:a.jsxs(J,{href:route("admin.booking.index"),style:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},children:[a.jsx("box-icon",{name:"arrow-back",color:"#fff"})," ",a.jsx("span",{style:{marginLeft:"10px"},children:"KEMBALI"})]})})}),a.jsx(s,{md:{span:2,offset:4},children:a.jsxs(g,{style:{background:"linear-gradient(90deg, #f16211 -14.33%, #e59a6f 85.67%)",fontSize:"20px"},type:"submit",children:[a.jsx("box-icon",{name:"save",type:"solid",color:"#fff"})," ",a.jsx("span",{style:{marginLeft:"10px"},children:"SUBMIT"})]})})]})]})]})})}export{na as default};