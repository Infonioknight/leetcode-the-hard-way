"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48610],{99703:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var s=n(95999),a=n(32244),i=n(85893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.Z,{permalink:n,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.Z,{permalink:r,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},79985:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var s=n(9460),a=n(33665),i=n(85893);function r(e){let{items:t,component:n=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.n,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},41714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(67294);var s=n(90512),a=n(95999),i=n(88824),r=n(71667),l=n(35281),o=n(33692),c=n(61460),d=n(99703),h=n(90197),u=n(79985),g=n(22212),p=n(92503),x=n(85893);function m(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=m(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.d,{title:n,description:t.description}),(0,x.jsx)(h.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=m(t);return(0,x.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,x.jsx)(g.Z,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(p.Z,{as:"h1",children:r}),t.description&&(0,x.jsx)("p",{children:t.description}),(0,x.jsx)(o.Z,{href:t.allTagsPath,children:(0,x.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.Z,{items:n}),(0,x.jsx)(d.Z,{metadata:i})]})}function f(e){return(0,x.jsxs)(r.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,x.jsx)(j,{...e}),(0,x.jsx)(b,{...e})]})}},22212:(e,t,n)=>{n.d(t,{Z:()=>g});n(67294);var s=n(90512),a=n(95999),i=n(35742),r=n(85893);function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),h=n(59047);function u(e){let{className:t}=e;return(0,r.jsx)(h.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},30476:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var s=n(90801),a=n(74866),i=n(85162),r=n(85893);function l(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,r.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,r.jsx)("span",{className:"topic-tag",children:e},t)))})}const o={...s.Z,SolutionAuthor:function(e){let{name:t}=e;return(0,r.jsx)("div",{className:"solution-author-wrapper",children:(0,r.jsxs)("span",{children:["Written by ",t]})})},Tabs:a.Z,TabItem:i.Z,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,r.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,r.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:s=!0,data:a}=e;const i=a.some((e=>e.tags)),o={Easy:0,Medium:1,Hard:2},c=(s?a.sort(((e,t)=>o[e.difficulty]-o[t.difficulty])):a).map(((e,t)=>{return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:e.leetCodeLink,target:"_blank",children:e.problemName})}),(0,r.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,r.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,r.jsx)("a",{href:e.solutionLink,target:"_blank",children:"View Solutions"}),!e.solutionLink&&(0,r.jsx)("span",{children:"N/A"})]}),i&&(0,r.jsx)("td",{children:(0,r.jsx)(l,{names:e.tags})})]},t);var n}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:t}),n&&(0,r.jsxs)("h4",{children:["Start Practicing: ",(0,r.jsx)("a",{href:n,target:"_blank",children:n})]}),(0,r.jsxs)("table",{class:"suggested-problem-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Problem Name"}),(0,r.jsx)("th",{children:"Difficulty"}),(0,r.jsx)("th",{children:"Solution Link"}),i&&(0,r.jsx)("th",{children:"Topic"})]})}),(0,r.jsx)("tbody",{children:c})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,r.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,r.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})}}}}]);