"use strict";(self.webpackChunkexylotech=self.webpackChunkexylotech||[]).push([[584],{4584:(e,a,s)=>{s.r(a),s.d(a,{default:()=>u});var t=s(5043),r=s(3216),c=(s(3940),s(2072)),l=s(579);const d=function(e){let{selectedProducts:a,onSelectProduct:s}=e;const[r,d,o,n]=(0,t.useState)([]);(0,t.useEffect)((()=>{i()}),[]);const i=async()=>{try{const e=await(0,c.getAllSales)(),a=[...new Set(e.map((e=>e.product)))];d(a)}catch(e){console.error("Error fetching products",e)}};return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"product",children:"Select Product: "}),(0,l.jsxs)("select",{value:a,className:"ProductInput",id:"product",onChange:e=>{s(e.target.value)},children:[(0,l.jsx)("option",{value:"all",children:"All"}),r.map(((e,a)=>(0,l.jsx)("option",{value:e,children:e},a)))]})]})};const o=function(){return(0,l.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,l.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,l.jsx)("label",{children:"Start Date:"}),(0,l.jsx)("input",{className:"date-filter-input",type:"date",placeholder:"Filter by start date"})]}),(0,l.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,l.jsx)("label",{children:"End Date:"}),(0,l.jsx)("input",{className:"date-filter-input",type:"date",placeholder:"Filter by end date"})]}),(0,l.jsx)("button",{className:"DateButtonApply",children:"Terapkan"})]})};const n=function(){return(0,l.jsx)("form",{className:"SearchForm",children:(0,l.jsx)("input",{disabled:!0,className:"input-grey-rounded",type:"text",placeholder:"Search"})})};var i=s(3910),h=s(7929);const u=function(e){let{selectedProduct:a,handleSelectProduct:s}=e;const t={"/dashboard":"Dashboard","/orders":"Orders","/product":"Product","/customers":"Customers","/overview":"Overview","/invoice":"Invoice","/setting":"Setting","/support":"Support"}[(0,r.zy)().pathname]||"Dashboard";return(0,l.jsx)("nav",{className:"NavbarDashBoard",children:(0,l.jsx)("div",{className:"NavbarDashBoardContainer",children:(0,l.jsxs)("div",{className:"NavbarDashBoardContent",children:[(0,l.jsxs)("div",{className:"NavbarDashBoardTop",children:[(0,l.jsx)("div",{className:"NavbarDashBoardTop-Left",children:(0,l.jsx)("h5",{children:t})}),(0,l.jsx)("div",{className:"NavbarDashBoardTop-Center",children:(0,l.jsx)(n,{})}),(0,l.jsxs)("div",{className:"NavbarDashBoardTop-Right",children:[(0,l.jsxs)("button",{children:[(0,l.jsx)("span",{className:"BadgeNavbar",children:"3"}),(0,l.jsx)(i.g,{icon:h.z$e,className:"Icon-Bell"})]}),(0,l.jsxs)("button",{children:[(0,l.jsx)("span",{className:"BadgeNavbar",children:"5"}),(0,l.jsx)(i.g,{icon:h.y_8,className:"Icon-Envelope"})]})]})]}),(0,l.jsxs)("div",{className:"NavbarDashBoardBottom",children:[(0,l.jsx)("div",{className:"NavbarDashBoardBottom-Left",children:(0,l.jsx)(d,{selectedProducts:a,onSelectProduct:s})}),(0,l.jsx)("div",{className:"NavbarDashBoardBottom-Right",children:(0,l.jsx)(o,{})})]})]})})})}},3940:()=>{}}]);
//# sourceMappingURL=584.c292d0a7.chunk.js.map