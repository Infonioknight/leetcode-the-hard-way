"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93089],{80046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});n(67294);var s=n(90512),a=n(52263),r=n(10833),i=n(35281),l=n(61460),o=n(99703),c=n(90197),d=n(79985),h=n(85893);function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.Z)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?n:i;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.d,{title:o,description:s}),(0,h.jsx)(c.Z,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:n,sidebar:s}=e;return(0,h.jsxs)(l.Z,{sidebar:s,children:[(0,h.jsx)(d.Z,{items:n}),(0,h.jsx)(o.Z,{metadata:t})]})}function g(e){return(0,h.jsxs)(r.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage),children:[(0,h.jsx)(u,{...e}),(0,h.jsx)(p,{...e})]})}},99703:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(95999),a=n(32244),r=n(85893);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.Z,{permalink:n,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,r.jsx)(a.Z,{permalink:i,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},79985:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(9460),a=n(30390),r=n(85893);function i(e){let{items:t,component:n=a.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},30476:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var s=n(3563),a=n(74866),r=n(85162),i=n(85893);function l(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,i.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,i.jsx)("span",{className:"topic-tag",children:e},t)))})}const o={...s.Z,SolutionAuthor:function(e){let{name:t}=e;return(0,i.jsx)("div",{className:"solution-author-wrapper",children:(0,i.jsxs)("span",{children:["Written by ",t]})})},Tabs:a.Z,TabItem:r.Z,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,i.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,i.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:s=!0,data:a}=e;const r=a.some((e=>e.tags)),o={Easy:0,Medium:1,Hard:2},c=(s?a.sort(((e,t)=>o[e.difficulty]-o[t.difficulty])):a).map(((e,t)=>{return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:e.leetCodeLink,target:"_blank",children:e.problemName})}),(0,i.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,i.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,i.jsx)("a",{href:e.solutionLink,target:"_blank",children:"View Solutions"}),!e.solutionLink&&(0,i.jsx)("span",{children:"N/A"})]}),r&&(0,i.jsx)("td",{children:(0,i.jsx)(l,{names:e.tags})})]},t);var n}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:t}),n&&(0,i.jsxs)("h4",{children:["Start Practicing: ",(0,i.jsx)("a",{href:n,target:"_blank",children:n})]}),(0,i.jsxs)("table",{class:"suggested-problem-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Problem Name"}),(0,i.jsx)("th",{children:"Difficulty"}),(0,i.jsx)("th",{children:"Solution Link"}),r&&(0,i.jsx)("th",{children:"Topic"})]})}),(0,i.jsx)("tbody",{children:c})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,i.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,i.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})}}}}]);