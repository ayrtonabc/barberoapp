import{c as f,R as v,r as c,j as e,L as j,C as w}from"./index-XAQY0n2C.js";import{u as b,a as C}from"./useSupabaseQuery-BySWxqua.js";import{t as D,c as S,s as p,D as _,f as k,p as z}from"./pl-C20WK1aG.js";import{C as E}from"./clock-BK1c9p1T.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=f("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=f("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function m(t,r){const a=D(t);return isNaN(r)?S(t,NaN):(r&&a.setDate(a.getDate()+r),a)}function R(t,r){return m(t,-r)}const B={pending:"bg-yellow-100 text-yellow-800",confirmed:"bg-green-100 text-green-800",cancelled:"bg-red-100 text-red-800"},O=()=>{const[t,r]=c.useState(new Date),a=c.useMemo(()=>p(t).toISOString(),[t]),x=c.useMemo(()=>p(m(t,1)).toISOString(),[t]),{data:i,loading:h,refetch:N}=b("bookings",{columns:`
      *,
      service:service_id(*),
      barber:barber_id(*),
      location:location_id(*)
    `,filters:{booking_date:{gte:a,lt:x}},order:{column:"booking_time",ascending:!0},cacheKey:`bookings-${a}`,dependencies:[a,x]}),{update:u,loading:d}=C("bookings",{onSuccess:()=>{N()}}),o=c.useCallback(async(s,n)=>{try{await u(s,{status:n})}catch(l){console.error("Error updating booking status:",l)}},[u]),g=c.useCallback(s=>{r(n=>s==="prev"?R(n,1):m(n,1))},[]),y=c.useCallback(({booking:s})=>{var n,l;return e.jsxs("div",{className:"p-6 hover:bg-gray-50",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"flex items-center justify-center w-12 h-12 bg-red-100 rounded-full",children:e.jsx(E,{className:"w-6 h-6 text-red-600"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:s.customer_name}),e.jsxs("p",{className:"text-sm text-gray-500",children:[s.customer_email," • ",s.customer_phone]})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-lg font-bold text-gray-900 flex items-center gap-1",children:[e.jsx(_,{className:"w-5 h-5"}),s.total_amount," PLN"]}),e.jsxs("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${B[s.status]}`,children:[s.status==="pending"&&"Oczekująca",s.status==="confirmed"&&"Potwierdzona",s.status==="cancelled"&&"Anulowana"]})]})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-4 text-sm text-gray-500",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-gray-900",children:"Godzina"}),e.jsx("p",{children:s.booking_time})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-gray-900",children:"Usługa"}),e.jsx("p",{children:(n=s.service)==null?void 0:n.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-gray-900",children:"Barber"}),e.jsx("p",{children:(l=s.barber)==null?void 0:l.name})]})]}),s.status==="pending"&&e.jsxs("div",{className:"mt-4 flex justify-end space-x-3",children:[e.jsx("button",{onClick:()=>o(s.id,"cancelled"),className:"px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md",disabled:d,children:"Anuluj"}),e.jsx("button",{onClick:()=>o(s.id,"confirmed"),className:"px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded-md",disabled:d,children:"Potwierdź"})]})]},s.id)},[o,d]);return h&&(!i||i.length===0)?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx(j,{className:"w-8 h-8 animate-spin text-gray-500"})}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Rezerwacje"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Zarządzaj rezerwacjami Twoich klientów"})]}),e.jsxs("div",{className:"flex items-center justify-between bg-white p-4 rounded-lg shadow",children:[e.jsx("button",{onClick:()=>g("prev"),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(L,{className:"w-5 h-5"})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{className:"w-5 h-5 text-gray-500"}),e.jsx("span",{className:"text-lg font-medium",children:k(t,"EEEE, d MMMM",{locale:z})})]}),e.jsx("button",{onClick:()=>g("next"),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx(M,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:e.jsx("div",{className:"divide-y divide-gray-200",children:h?e.jsx("div",{className:"flex justify-center py-8",children:e.jsx(j,{className:"w-6 h-6 animate-spin text-gray-400"})}):i&&i.length>0?i.map(s=>e.jsx(y,{booking:s},s.id)):e.jsx("div",{className:"p-6 text-center text-gray-500",children:"Brak rezerwacji na ten dzień"})})})]})},q=v.memo(O);export{q as default};
