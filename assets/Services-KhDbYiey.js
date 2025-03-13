import{R as C,r,j as e,L as f,P as z}from"./index-XAQY0n2C.js";import{u as S,a as _}from"./useSupabaseQuery-BySWxqua.js";import{P as E,T as U}from"./trash-2-BJ3bUEgh.js";const o={name:"",duration:"",price:0,description:"",image_url:""},F=()=>{const[u,i]=r.useState(!1),[a,t]=r.useState(o),[n,d]=r.useState(null),{data:l,loading:x,refetch:y}=S("services",{order:{column:"created_at",ascending:!1},cacheKey:"services-list"}),{create:N,update:w,remove:g,loading:c}=_("services",{onSuccess:()=>{i(!1),t(o),d(null),y()},invalidateQueries:["services-list"]}),h=async s=>{s.preventDefault();try{n?await w(n,a):await N(a)}catch(m){console.error("Error saving service:",m)}},p=r.useCallback(s=>{t({name:s.name,duration:s.duration,price:s.price,description:s.description||"",image_url:s.image_url||""}),d(s.id),i(!0)},[]),b=r.useCallback(async s=>{if(window.confirm("Czy na pewno chcesz usunąć tę usługę?"))try{await g(s)}catch(m){console.error("Error deleting service:",m)}},[g]),j=r.useCallback(()=>{i(!1),t(o),d(null)},[]),v=r.useMemo(()=>u?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-6 w-full max-w-md",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:n?"Edytuj Usługę":"Nowa Usługa"}),e.jsxs("form",{onSubmit:h,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Nazwa"}),e.jsx("input",{type:"text",value:a.name,onChange:s=>t({...a,name:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Czas trwania"}),e.jsx("input",{type:"text",value:a.duration,onChange:s=>t({...a,duration:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",required:!0,placeholder:"np. 30 min"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Cena"}),e.jsx("input",{type:"number",value:a.price,onChange:s=>t({...a,price:Number(s.target.value)}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",required:!0,min:"0",step:"0.01"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Opis"}),e.jsx("textarea",{value:a.description,onChange:s=>t({...a,description:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",rows:3})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"URL obrazu"}),e.jsx("input",{type:"url",value:a.image_url,onChange:s=>t({...a,image_url:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",placeholder:"https://przyklad.pl/obraz.jpg"})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6",children:[e.jsx("button",{type:"button",onClick:j,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",children:"Anuluj"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700",disabled:c,children:c?e.jsx(f,{className:"w-5 h-5 animate-spin"}):n?"Zapisz Zmiany":"Utwórz Usługę"})]})]})]})}):null,[u,n,a,c,h,j]),k=r.useCallback(({service:s})=>e.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:[s.image_url&&e.jsx("img",{src:s.image_url,alt:s.name,className:"w-full h-48 object-cover",loading:"lazy"}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-500",children:s.duration})]}),e.jsxs("p",{className:"text-lg font-bold text-red-600",children:[s.price," PLN"]})]}),s.description&&e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:s.description}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>p(s),className:"p-2 text-gray-600 hover:text-gray-900",children:e.jsx(E,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>b(s.id),className:"p-2 text-red-600 hover:text-red-900",children:e.jsx(U,{className:"w-5 h-5"})})]})]})]},s.id),[p,b]);return x&&(!l||l.length===0)?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx(f,{className:"w-8 h-8 animate-spin text-gray-500"})}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Usługi"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Zarządzaj usługami oferowanymi w Twoim barbershopie"})]}),e.jsxs("button",{onClick:()=>{t(o),d(null),i(!0)},className:"btn-primary flex items-center gap-2",children:[e.jsx(z,{className:"w-5 h-5"}),"Nowa Usługa"]})]}),v,e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l==null?void 0:l.map(s=>e.jsx(k,{service:s},s.id))}),(!l||l.length===0)&&!x&&e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-gray-500",children:"Brak zarejestrowanych usług"})})]})},R=C.memo(F);export{R as default};
