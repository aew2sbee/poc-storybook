import{j as u}from"./jsx-runtime-Qs0-oKlM.js";import"./iframe-BJ9ZqsQx.js";import"./preload-helper-PPVm8Dsz.js";const p="inline-flex items-center justify-center gap-2 rounded-full font-bold leading-none transition select-none",g={primary:"bg-sky-400 text-white hover:bg-sky-500 active:bg-sky-600",secondary:"border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100"},y={small:"h-8 px-4 text-xs",medium:"h-10 px-5 text-sm",large:"h-12 px-6 text-base"};function t({color:n="primary",size:l="medium",type:c="button",className:i="",children:m,...d}){return u.jsx("button",{type:c,className:`${p} ${g[n]} ${y[l]} ${i}`,...d,children:m})}t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},type:{defaultValue:{value:'"button"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const{fn:f}=__STORYBOOK_MODULE_TEST__,b={title:"UI/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:f()}},e={args:{color:"primary",children:"ログイン"}},r={args:{color:"secondary",children:"ログイン"}},a={args:{size:"large",children:"ログイン"}},s={args:{children:"ログイン"}},o={args:{size:"small",children:"ログイン"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    children: "ログイン"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: "ログイン"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "ログイン"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "ログイン"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "ログイン"
  }
}`,...o.parameters?.docs?.source}}};const v=["ColorPrimary","ColorSecondary","SizeLarge","SizeMedium","SizeSmall"];export{e as ColorPrimary,r as ColorSecondary,a as SizeLarge,s as SizeMedium,o as SizeSmall,v as __namedExportsOrder,b as default};
