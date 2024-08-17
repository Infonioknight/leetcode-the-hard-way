"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64013],{13548:(e,t,a)=>{a.d(t,{n4:()=>c,Ne:()=>P,ci:()=>_,CS:()=>f,wj:()=>l,nO:()=>d,iZ:()=>b,cH:()=>y});var s=a(67294),n=a(902),i=a(65102),r=a(85893);function l(){const e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new n.i6("BlogPostProvider");return e}var m=a(44996),u=a(52263);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:x({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){const{siteConfig:t}=(0,u.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,d=s.image??n.image,m=n.keywords??[],u=`${t.url}${i.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:l,name:l,description:o,datePublished:r,...f?{dateModified:f}:{},...h(i.authors),...p(d,a,l),...m?{keywords:m}:{}}}(e.content,t,a)))}}function b(){const e=l(),{assets:t,metadata:a}=d(),{siteConfig:s}=(0,u.Z)(),{withBaseUrl:n}=(0,m.Cg)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,j=c.keywords??[],x=f?g(f):void 0,N=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:r,name:r,description:o,datePublished:i,...x?{dateModified:x}:{},...h(a.authors),...p(b,n,r),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function x(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var N=a(16550),v=a(33692),C=a(67392),k=a(48596);function y(e){const{pathname:t}=(0,N.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.Mg)(e.permalink,t))}(e,t)))),[e,t])}function _(e){const t=(0,C.vM)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function P(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},41059:(e,t,a)=>{a.d(t,{Z:()=>L});var s=a(67294),n=a(90512),i=a(7372),r=a(87524),l=a(95999),o=a(13548),c=a(86668),d=a(92503),m=a(85893);function u(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(d.Z,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.L)().blog.sidebar.groupByYear){const e=(0,o.ci)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,m.jsx)(u,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(s,{items:n})},t)}))})}return(0,m.jsx)(s,{items:t})}const h=(0,s.memo)(g),p="sidebar_re4s",f="sidebarItemTitle_pO2u",b="sidebarItemList_Yudw",j="sidebarItem__DBe",x="sidebarItemLink_mo7H",N="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",C=e=>{let{items:t}=e;return(0,m.jsx)(o.Ne,{items:t,ulClassName:(0,n.Z)(b,"clean-list"),liClassName:j,linkClassName:x,linkActiveClassName:N})};function k(e){let{sidebar:t}=e;const a=(0,o.cH)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,n.Z)(p,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,n.Z)(f,"margin-bottom--md"),children:t.title}),(0,m.jsx)(h,{items:a,ListComponent:C,yearGroupHeadingClassName:v})]})})}const y=(0,s.memo)(k);var _=a(13102);const P={yearGroupHeading:"yearGroupHeading_QT03"},Z=e=>{let{items:t}=e;return(0,m.jsx)(o.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.cH)(t.items);return(0,m.jsx)(h,{items:a,ListComponent:Z,yearGroupHeadingClassName:P.yearGroupHeading})}function B(e){return(0,m.jsx)(_.Zo,{component:w,props:e})}const H=(0,s.memo)(B);function M(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?(0,m.jsx)(H,{sidebar:t}):(0,m.jsx)(y,{sidebar:t}):null}function L(e){const{sidebar:t,toc:a,children:s,...r}=e,l=t&&t.items.length>0;return(0,m.jsx)(i.Z,{...r,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(M,{sidebar:t}),(0,m.jsx)("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,m.jsx)("div",{className:"col col--2",children:a})]})})})}},24524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});a(67294);var s=a(90512),n=a(35155),i=a(71667),r=a(35281),l=a(41059),o=a(26090),c=a(90197),d=a(92503),m=a(85893);function u(e){let{tags:t,sidebar:a}=e;const u=(0,n.M)();return(0,m.jsxs)(i.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogTagsListPage),children:[(0,m.jsx)(i.d,{title:u}),(0,m.jsx)(c.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(l.Z,{sidebar:a,children:[(0,m.jsx)(d.Z,{as:"h1",children:u}),(0,m.jsx)(o.Z,{tags:t})]})]})}},13008:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var s=a(90512),n=a(33692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(85893);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.Z,{href:t,title:o,className:(0,s.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},26090:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var s=a(35155),n=a(13008),i=a(92503);const r={tag:"tag_Nnez"};var l=a(85893);function o(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(i.Z,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(n.Z,{...e})},e.permalink)))}),(0,l.jsx)("hr",{})]})}function c(e){let{tags:t}=e;const a=(0,s.P)(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,l.jsx)(o,{letterEntry:e},e.letter)))})}},35155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>i});var s=a(95999);const n=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function i(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);