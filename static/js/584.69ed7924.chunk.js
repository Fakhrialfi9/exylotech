"use strict";(self.webpackChunkexylotech=self.webpackChunkexylotech||[]).push([[584],{4584:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var s=t(5043),r=t(3216),c=(t(3940),t(8448)),l=t(579);const n=function(e){let{selectedProducts:a,onSelectProduct:t}=e;const[r,n,o,d]=(0,s.useState)([]);(0,s.useEffect)((()=>{i()}),[]);const i=async()=>{try{const e=await(0,c.gA)(),a=[...new Set(e.map((e=>e.product)))];n(a)}catch(e){console.error("Error fetching products",e)}};return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"product",children:"Select Product: "}),(0,l.jsxs)("select",{value:a,className:"ProductInput",id:"product",onChange:e=>{t(e.target.value)},children:[(0,l.jsx)("option",{value:"all",children:"All"}),r.map(((e,a)=>(0,l.jsx)("option",{value:e,children:e},a)))]})]})},o=e=>{let{startDate:a,endDate:t,onStartDateChange:s,onEndDateChange:r,setSelectedProduct:c}=e;return(0,l.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,l.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,l.jsx)("label",{children:"Start Date:"}),(0,l.jsx)("input",{className:"date-filter-input",type:"date",value:a,onChange:e=>s(e.target.value),placeholder:"Filter by start date"})]}),(0,l.jsxs)("div",{className:"InputDateNavbarDashBoardBottom-Right",children:[(0,l.jsx)("label",{children:"End Date:"}),(0,l.jsx)("input",{className:"date-filter-input",type:"date",value:t,onChange:e=>r(e.target.value),placeholder:"Filter by end date"})]}),(0,l.jsx)("button",{className:"DateButtonApply",onClick:()=>console.log("Apply button clicked"),children:"Terapkan"})]})};const d=function(){return(0,l.jsx)("form",{className:"SearchForm",children:(0,l.jsx)("input",{disabled:!0,className:"input-grey-rounded",type:"text",placeholder:"Search"})})};var i=t(3910),h=t(7929);const u=function(e){let{selectedProduct:a,handleSelectProduct:t}=e;const s={"/dashboard":"Dashboard","/orders":"Orders","/product":"Product","/customers":"Customers","/overview":"Overview","/invoice":"Invoice","/setting":"Setting","/support":"Support"}[(0,r.zy)().pathname]||"Dashboard";return(0,l.jsx)("nav",{className:"NavbarDashBoard",children:(0,l.jsx)("div",{className:"NavbarDashBoardContainer",children:(0,l.jsxs)("div",{className:"NavbarDashBoardContent",children:[(0,l.jsxs)("div",{className:"NavbarDashBoardTop",children:[(0,l.jsx)("div",{className:"NavbarDashBoardTop-Left",children:(0,l.jsx)("h5",{children:s})}),(0,l.jsx)("div",{className:"NavbarDashBoardTop-Center",children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"NavbarDashBoardTop-Right",children:[(0,l.jsxs)("button",{children:[(0,l.jsx)("span",{className:"BadgeNavbar",children:"3"}),(0,l.jsx)(i.g,{icon:h.z$e,className:"Icon-Bell"})]}),(0,l.jsxs)("button",{children:[(0,l.jsx)("span",{className:"BadgeNavbar",children:"5"}),(0,l.jsx)(i.g,{icon:h.y_8,className:"Icon-Envelope"})]})]})]}),(0,l.jsxs)("div",{className:"NavbarDashBoardBottom",children:[(0,l.jsx)("div",{className:"NavbarDashBoardBottom-Left",children:(0,l.jsx)(n,{selectedProducts:a,onSelectProduct:t})}),(0,l.jsx)("div",{className:"NavbarDashBoardBottom-Right",children:(0,l.jsx)(o,{})})]})]})})})}},3940:()=>{}}]);
//# sourceMappingURL=584.69ed7924.chunk.js.map