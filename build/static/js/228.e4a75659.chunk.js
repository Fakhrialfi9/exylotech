"use strict";(self.webpackChunkexylotech=self.webpackChunkexylotech||[]).push([[228],{5228:(e,a,s)=>{s.r(a),s.d(a,{default:()=>u});var t=s(5043),r=s(3216),c=(s(3940),s(8448)),n=s(579);const o=function(e){let{selectedProducts:a,onSelectProduct:s}=e;const[r,o,l,d]=(0,t.useState)([]);(0,t.useEffect)((()=>{i()}),[]);const i=async()=>{try{const e=await(0,c.gA)(),a=[...new Set(e.map((e=>e.product)))];o(a)}catch(e){console.error("Error fetching products",e)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"product",children:"Select Product: "}),(0,n.jsxs)("select",{value:a,className:"ProductInput",id:"product",onChange:e=>{s(e.target.value)},children:[(0,n.jsx)("option",{value:"all",children:"All"}),r.map(((e,a)=>(0,n.jsx)("option",{value:e,children:e},a)))]})]})};const l=function(e){let{onDateChange:a}=e;const[s,r]=(0,t.useState)(""),[c,o]=(0,t.useState)("");return(0,n.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,n.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,n.jsx)("label",{children:"Start Date:"}),(0,n.jsx)("input",{className:"date-filter-input",type:"date",value:s,onChange:e=>{r(e.target.value)},placeholder:"Filter by start date"})]}),(0,n.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,n.jsx)("label",{children:"End Date:"}),(0,n.jsx)("input",{className:"date-filter-input",type:"date",value:c,onChange:e=>{o(e.target.value)},placeholder:"Filter by end date"})]}),(0,n.jsx)("button",{className:"DateButtonApply",onClick:()=>{a(s,c)},children:"Terapkan"})]})};const d=function(){return(0,n.jsxs)("form",{className:"SearchForm",children:[(0,n.jsx)("input",{className:"input-grey-rounded",type:"text",placeholder:"Search"}),(0,n.jsx)("button",{type:"submit",className:"SearchButton",children:"Go"})]})};var i=s(3910),h=s(7929);const u=function(e){let{selectedProduct:a,handleSelectProduct:s}=e;const t={"/dashboard":"Dashboard","/orders":"Orders","/product":"Product","/customers":"Customers","/overview":"Overview","/invoice":"Invoice","/setting":"Setting","/support":"Support"}[(0,r.zy)().pathname]||"Dashboard";return(0,n.jsx)("nav",{className:"NavbarDashBoard",children:(0,n.jsx)("div",{className:"NavbarDashBoardContainer",children:(0,n.jsxs)("div",{className:"NavbarDashBoardContent",children:[(0,n.jsxs)("div",{className:"NavbarDashBoardTop",children:[(0,n.jsx)("div",{className:"NavbarDashBoardTop-Left",children:(0,n.jsx)("h5",{children:t})}),(0,n.jsx)("div",{className:"NavbarDashBoardTop-Center",children:(0,n.jsx)(d,{})}),(0,n.jsxs)("div",{className:"NavbarDashBoardTop-Right",children:[(0,n.jsxs)("button",{children:[(0,n.jsx)("span",{className:"BadgeNavbar",children:"3"}),(0,n.jsx)(i.g,{icon:h.z$e,className:"Icon-Bell"})]}),(0,n.jsxs)("button",{children:[(0,n.jsx)("span",{className:"BadgeNavbar",children:"5"}),(0,n.jsx)(i.g,{icon:h.y_8,className:"Icon-Envelope"})]})]})]}),(0,n.jsxs)("div",{className:"NavbarDashBoardBottom",children:[(0,n.jsx)("div",{className:"NavbarDashBoardBottom-Left",children:(0,n.jsx)(o,{selectedProducts:a,onSelectProduct:s})}),(0,n.jsx)("div",{className:"NavbarDashBoardBottom-Right",children:(0,n.jsx)(l,{})})]})]})})})}},3940:()=>{}}]);
//# sourceMappingURL=228.e4a75659.chunk.js.map