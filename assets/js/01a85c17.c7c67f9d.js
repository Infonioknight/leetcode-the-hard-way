"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64013],{61460:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(67294),i=s(90512),r=s(7372),l=s(87524),n=s(39960),c=s(95999),o=s(16550),d=s(48596);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const h={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=s(85893);function g(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.Z)(h.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.Z)(h.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,i.Z)(h.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:h.sidebarItem,children:(0,u.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=s(13102);function p(e){let{sidebar:t}=e;const s=m(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,u.jsx)(b.Zo,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,u.jsx)(j,{sidebar:t}):(0,u.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,u.jsx)(r.Z,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:t}),(0,u.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}},24524:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});s(67294);var a=s(90512),i=s(35155),r=s(10833),l=s(35281),n=s(61460),c=s(26090),o=s(90197),d=s(92503),m=s(85893);function h(e){let{tags:t,sidebar:s}=e;const h=(0,i.M)();return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,m.jsx)(r.d,{title:h}),(0,m.jsx)(o.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(n.Z,{sidebar:s,children:[(0,m.jsx)(d.Z,{as:"h1",children:h}),(0,m.jsx)(c.Z,{tags:t})]})]})}},13008:(e,t,s)=>{s.d(t,{Z:()=>n});s(67294);var a=s(90512),i=s(39960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(85893);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},26090:(e,t,s)=>{s.d(t,{Z:()=>o});s(67294);var a=s(35155),i=s(13008),r=s(92503);const l={tag:"tag_Nnez"};var n=s(85893);function c(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(r.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,n.jsx)("li",{className:l.tag,children:(0,n.jsx)(i.Z,{...e})},e.permalink)))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,n.jsx)(c,{letterEntry:e},e.letter)))})}},35155:(e,t,s)=>{s.d(t,{M:()=>i,P:()=>r});var a=s(95999);const i=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);