"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53608],{63169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(67294);var r=a(39960),s=a(95999),i=a(10833),c=a(7372),l=a(92503),n=a(85893);function h(e){let{year:t,posts:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{as:"h3",id:t,children:t}),(0,n.jsx)("ul",{children:a.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:t}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},t)))})})})}function o(e){let{archive:t}=e;const a=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.d,{title:a,description:r}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.Z,{as:"h1",className:"hero__title",children:a}),(0,n.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(d,{years:h})})]})]})}}}]);