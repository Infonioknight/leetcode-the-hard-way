"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93089],{84351:(t,e,n)=>{n.r(e),n.d(e,{default:()=>b});n(67294);var a=n(90512),i=n(52263),r=n(71667),s=n(35281),l=n(61460),o=n(99703),c=n(90197),d=n(79985),u=n(35742),g=n(20136),h=n(85893);function p(t){const e=(0,g.C)(t);return(0,h.jsx)(u.Z,{children:(0,h.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}function m(t){const{metadata:e}=t,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:s,permalink:l}=e,o="/"===l?n:s;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.d,{title:o,description:a}),(0,h.jsx)(c.Z,{tag:"blog_posts_list"})]})}function x(t){const{metadata:e,items:n,sidebar:a}=t;return(0,h.jsxs)(l.Z,{sidebar:a,children:[(0,h.jsx)(d.Z,{items:n}),(0,h.jsx)(o.Z,{metadata:e})]})}function b(t){return(0,h.jsxs)(r.FG,{className:(0,a.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage),children:[(0,h.jsx)(m,{...t}),(0,h.jsx)(p,{...t}),(0,h.jsx)(x,{...t})]})}},99703:(t,e,n)=>{n.d(e,{Z:()=>s});n(67294);var a=n(95999),i=n(32244),r=n(85893);function s(t){const{metadata:e}=t,{previousPage:n,nextPage:s}=e;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,r.jsx)(i.Z,{permalink:s,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},79985:(t,e,n)=>{n.d(e,{Z:()=>s});n(67294);var a=n(9460),i=n(33665),r=n(85893);function s(t){let{items:e,component:n=i.Z}=t;return(0,r.jsx)(r.Fragment,{children:e.map((t=>{let{content:e}=t;return(0,r.jsx)(a.n,{content:e,children:(0,r.jsx)(n,{children:(0,r.jsx)(e,{})})},e.metadata.permalink)}))})}},20136:(t,e,n)=>{n.d(e,{C:()=>d,i:()=>u});var a=n(44996),i=n(52263),r=n(65102);var s=n(9460);const l=t=>new Date(t).toISOString();function o(t){const e=t.map(g);return{author:1===e.length?e[0]:e}}function c(t,e,n){return t?{image:h({imageUrl:e(t,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(t){const{siteConfig:e}=(0,i.Z)(),{withBaseUrl:n}=(0,a.Cg)(),{metadata:{blogDescription:r,blogTitle:s,permalink:d}}=t,u=`${e.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:s,description:r,blogPost:t.items.map((t=>function(t,e,n){const{assets:a,frontMatter:i,metadata:r}=t,{date:s,title:d,description:u,lastUpdatedAt:g}=r,h=a.image??i.image,p=i.keywords??[],m=`${e.url}${r.permalink}`,x=g?l(g):void 0;return{"@type":"BlogPosting","@id":m,mainEntityOfPage:m,url:m,headline:d,name:d,description:u,datePublished:s,...x?{dateModified:x}:{},...o(r.authors),...c(h,n,d),...p?{keywords:p}:{}}}(t.content,e,n)))}}function u(){const t=function(){const t=(0,r.Z)(),e=t?.data?.blogMetadata;if(!e)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return e}(),{assets:e,metadata:n}=(0,s.C)(),{siteConfig:d}=(0,i.Z)(),{withBaseUrl:u}=(0,a.Cg)(),{date:g,title:h,description:p,frontMatter:m,lastUpdatedAt:x}=n,b=e.image??m.image,f=m.keywords??[],j=x?l(x):void 0,k=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:h,name:h,description:p,datePublished:g,...j?{dateModified:j}:{},...o(n.authors),...c(b,u,h),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${t.blogBasePath}`,name:t.blogTitle}}}function g(t){return{"@type":"Person",...t.name?{name:t.name}:{},...t.title?{description:t.title}:{},...t.url?{url:t.url}:{},...t.email?{email:t.email}:{},...t.imageURL?{image:t.imageURL}:{}}}function h(t){let{imageUrl:e,caption:n}=t;return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:n}}},30476:(t,e,n)=>{n.d(e,{Z:()=>o});n(67294);var a=n(90801),i=n(74866),r=n(85162),s=n(85893);function l(t){let{names:e}=t;if(!e)return null;const n=e.split(",");return(0,s.jsx)("div",{className:"tag-wrapper",children:n.map(((t,e)=>(0,s.jsx)("span",{className:"topic-tag",children:t},e)))})}const o={...a.Z,SolutionAuthor:function(t){let{name:e}=t;return(0,s.jsx)("div",{className:"solution-author-wrapper",children:(0,s.jsxs)("span",{children:["Written by ",e]})})},Tabs:i.Z,TabItem:r.Z,TutorialAuthors:function(t){let{names:e}=t;const n=e.split(",");return(0,s.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((t,e)=>(0,s.jsx)("span",{className:"author-tag tag",children:t},e)))]})},Table:function(t){let{title:e,collectionLink:n,isSorted:a=!0,data:i}=t;const r=i.some((t=>t.tags)),o={Easy:0,Medium:1,Hard:2},c=(a?i.sort(((t,e)=>o[t.difficulty]-o[e.difficulty])):i).map(((t,e)=>{return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:t.leetCodeLink,target:"_blank",children:t.problemName})}),(0,s.jsx)("td",{className:(n=t.difficulty,n.toLowerCase()),children:t.difficulty}),(0,s.jsxs)("td",{style:{textAlign:"center"},children:[t.solutionLink&&(0,s.jsx)("a",{href:t.solutionLink,target:"_blank",children:"View Solutions"}),!t.solutionLink&&(0,s.jsx)("span",{children:"N/A"})]}),r&&(0,s.jsx)("td",{children:(0,s.jsx)(l,{names:t.tags})})]},e);var n}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:e}),n&&(0,s.jsxs)("h4",{children:["Start Practicing: ",(0,s.jsx)("a",{href:n,target:"_blank",children:n})]}),(0,s.jsxs)("table",{class:"suggested-problem-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Problem Name"}),(0,s.jsx)("th",{children:"Difficulty"}),(0,s.jsx)("th",{children:"Solution Link"}),r&&(0,s.jsx)("th",{children:"Topic"})]})}),(0,s.jsx)("tbody",{children:c})]})]})},Contributors:function(t){let{names:e}=t;const n=e.split(",");return(0,s.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((t,e)=>(0,s.jsx)("span",{className:"contributor-tag tag",children:t},e)))]})}}}}]);