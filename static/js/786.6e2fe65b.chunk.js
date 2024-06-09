"use strict";(self.webpackChunkexylotech=self.webpackChunkexylotech||[]).push([[786],{4786:(e,s,a)=>{a.r(s),a.d(s,{default:()=>S});a(3940);var t=a(5043),r=a(108),l=a(2291),n=a(7734),c=a(2185),d=a(6026),i=a(6150),o=a(1327),h=a(8643),x=a(9600),j=a(8448),u=a(579);const v=function(e){let{selectedProduct:s}=e;const[a,v]=(0,t.useState)([]);(0,t.useEffect)((()=>{m()}),[s]);const m=async()=>{try{const e=await(0,j.gA)();if("all"===s)return void v(e);const a=s?e.filter((e=>e.product===s)):e;v(a)}catch(e){console.error("Error fetching data",e)}};return(0,u.jsxs)("div",{className:"ChartContainer",children:[(0,u.jsx)("h5",{children:"Grafik Penjualan Harian"}),(0,u.jsx)(r.u,{width:"100%",height:400,children:(0,u.jsxs)(l.E,{data:a,margin:{top:20,right:30,left:20,bottom:5},children:[(0,u.jsx)(n.d,{strokeDasharray:"3 3"}),(0,u.jsx)(c.W,{dataKey:"date"}),(0,u.jsx)(d.h,{}),(0,u.jsx)(i.m,{}),(0,u.jsx)(o.s,{}),(0,u.jsx)(h.y,{dataKey:"sales",stackId:"a",fill:"#8884d8"}),(0,u.jsx)(h.y,{dataKey:"revenue",stackId:"a",fill:"#82ca9d"}),(0,u.jsx)(x.v,{})]})})]})};const m=function(e){let{selectedProduct:s}=e;return(0,u.jsx)("div",{className:"ChartDailySalesDashBoard",children:(0,u.jsx)("div",{className:"ChartDailySalesDashBoardContainer",children:(0,u.jsx)("div",{className:"ChartDailySalesDashBoardContent",children:(0,u.jsx)("div",{className:"Box-ChartDailySalesDashBoard",children:(0,u.jsx)(v,{selectedProduct:s})})})})})};var f=a(6335),D=a(3839),y=a(168);const C=function(e){let{selectedProduct:s}=e;const[a,l]=(0,t.useState)([]);(0,t.useEffect)((()=>{v()}),[s]);const v=async()=>{try{const e=await(0,j.gA)();if("all"===s)return void l(e);const a=(s?e.filter((e=>e.product===s)):e).sort(((e,s)=>e.sales-s.sales));l(a)}catch(e){console.error("Error fetching data",e)}};return(0,u.jsxs)("div",{className:"ChartContainer",children:[(0,u.jsx)("h5",{children:"Pembandingan Penjualan"}),(0,u.jsx)(r.u,{width:"100%",height:400,children:(0,u.jsxs)(f.X,{data:a,margin:{top:20,right:30,left:20,bottom:5},children:[(0,u.jsx)(n.d,{strokeDasharray:"3 3"}),(0,u.jsx)(c.W,{dataKey:"product"}),(0,u.jsx)(d.h,{}),(0,u.jsx)(i.m,{}),(0,u.jsx)(o.s,{}),(0,u.jsx)(D.G,{type:"monotone",dataKey:"sales",fill:"#8884d8",stroke:"#8884d8"}),(0,u.jsx)(h.y,{dataKey:"sales",stackId:"a",fill:"#0c64a2"}),(0,u.jsx)(y.N,{type:"monotone",dataKey:"revenue",stroke:"#82ca9d"}),(0,u.jsx)(x.v,{})]})})]})};const p=function(e){let{selectedProduct:s}=e;return(0,u.jsx)("div",{className:"ChartDailySalesDashBoard",children:(0,u.jsx)("div",{className:"ChartDailySalesDashBoardContainer",children:(0,u.jsx)("div",{className:"ChartDailySalesDashBoardContent",children:(0,u.jsx)("div",{className:"Box-ChartDailySalesDashBoard",children:(0,u.jsx)(C,{selectedProduct:s})})})})})},g=()=>{var e;const{salesData:s}=(()=>{const[e,s]=(0,t.useState)([]),[a,r]=(0,t.useState)([]),[l,n]=(0,t.useState)("");return(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,j.gA)();console.log("Fetched sales data:",e);const a=(l?e.filter((e=>e.product===l)):e).sort(((e,s)=>e.sales-s.sales));s(a)}catch(e){console.error("Error fetching data",e)}})()}),[l]),(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,j.gA)(),s=[...new Set(e.map((e=>e.product)))];r(s)}catch(e){console.error("Error fetching products",e)}})()}),[]),{salesData:e,products:a,handleSelectProduct:e=>{n(e)}}})(),{filteredData:a,filter:r,setFilter:l}=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[a,r]=(0,t.useState)([]),[l,n]=(0,t.useState)(s);(0,t.useEffect)((()=>{c()}),[l,e]);const c=()=>{let s=[...e];s.sort(((e,s)=>e.id-s.id)),"Descending"===l?s.sort(((e,s)=>s.revenue-e.revenue)):"Ascending"===l?s.sort(((e,s)=>e.revenue-s.revenue)):"AtoZ"===l?s.sort(((e,s)=>e.product.localeCompare(s.product))):"ZtoA"===l&&s.sort(((e,s)=>s.product.localeCompare(e.product))),r(s)};return{filteredData:a,filter:l,setFilter:n}}(s),n=s.reduce(((e,s)=>e+s.revenue),0),c=s.reduce(((e,s)=>e+s.sales),0),d=null===(e=s.sort(((e,s)=>s.revenue-e.revenue))[0])||void 0===e?void 0:e.product;return(0,u.jsxs)("div",{className:"TableContainer",children:[(0,u.jsxs)("div",{className:"TableContent",children:[(0,u.jsx)("h5",{className:"TableContent-Left",children:"Table Penjualan"}),(0,u.jsxs)("div",{className:"TableContent-Right",children:[(0,u.jsx)("label",{htmlFor:"product",children:"Filter Table: "}),(0,u.jsxs)("select",{className:"FilterTable",id:"FilterTable",value:r,onChange:e=>{l(e.target.value)},children:[(0,u.jsx)("option",{value:"",children:"Pilih Filter"}),(0,u.jsx)("option",{value:"Descending",children:"Descending Sales"}),(0,u.jsx)("option",{value:"Ascending",children:"Ascending Sales"}),(0,u.jsx)("option",{value:"AtoZ",children:"A to Z"}),(0,u.jsx)("option",{value:"ZtoA",children:"Z to A"})]})]})]}),a&&a.length>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"ID"}),(0,u.jsx)("th",{children:"Product"}),(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Sales"}),(0,u.jsx)("th",{children:"Revenue"})]})}),(0,u.jsx)("tbody",{children:a.map((e=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.id}),(0,u.jsx)("td",{children:e.product}),(0,u.jsx)("td",{children:e.date}),(0,u.jsx)("td",{children:(0,u.jsxs)("b",{children:["$",e.sales]})}),(0,u.jsx)("td",{children:(0,u.jsxs)("b",{children:["$",e.revenue]})})]},e.id)))})]})}):(0,u.jsx)("p",{children:"Loading..."}),(0,u.jsxs)("div",{className:"TableContent-RightBottom",children:[(0,u.jsxs)("h5",{children:["Best Seller ",(0,u.jsx)("b",{children:d})]}),(0,u.jsxs)("h5",{children:["Total Sales ",(0,u.jsxs)("b",{children:["$",c.toFixed(2)]})]}),(0,u.jsxs)("h5",{children:["Total Revenue ",(0,u.jsxs)("b",{children:["$",n.toFixed(2)]})]})]})]})};const b=function(){return(0,u.jsx)("div",{className:"TableSalesDashBoard",children:(0,u.jsx)("div",{className:"TableSalesDashBoardContainer",children:(0,u.jsx)("div",{className:"TableSalesDashBoardContent",children:(0,u.jsx)("div",{className:"Box-TableSalesDashBoard",children:(0,u.jsx)(g,{})})})})})};const S=function(e){let{selectedProduct:s}=e;return(0,u.jsx)("main",{id:"MainDashBoard",children:(0,u.jsx)("section",{className:"MainDashBoard",children:(0,u.jsx)("div",{className:"Dashboard",children:(0,u.jsx)("div",{className:"DashBoardContainer",children:(0,u.jsxs)("div",{className:"DashBoardContent",children:[(0,u.jsx)("section",{className:"MainChartDailySalesDashBoard",children:(0,u.jsx)(m,{selectedProduct:s})}),(0,u.jsx)("section",{className:"MainChartComparisonSalesDashBoard",children:(0,u.jsx)(p,{selectedProduct:s})}),(0,u.jsx)("section",{className:"MainTableSalesDashboard",children:(0,u.jsx)(b,{})})]})})})})})}},3940:()=>{}}]);
//# sourceMappingURL=786.6e2fe65b.chunk.js.map