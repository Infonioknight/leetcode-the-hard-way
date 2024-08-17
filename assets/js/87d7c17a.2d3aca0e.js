"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[249],{1248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(85893),r=t(11151);const o={description:"Author: @jit | https://leetcode.com/problems/knight-dialer/",tags:["Dynamic Programming"]},s="0935 - Knight Dialer (Medium)",a={id:"0900-0999/knight-dialer-medium",title:"0935 - Knight Dialer (Medium)",description:"Author: @jit | https://leetcode.com/problems/knight-dialer/",source:"@site/solutions/0900-0999/0935-knight-dialer-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/knight-dialer-medium",permalink:"/solutions/0900-0999/knight-dialer-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0935-knight-dialer-medium.md",tags:[{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:935,frontMatter:{description:"Author: @jit | https://leetcode.com/problems/knight-dialer/",tags:["Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0926 - Flip String to Monotone Increasing (Medium)",permalink:"/solutions/0900-0999/flip-string-to-monotone-increasing-medium"},next:{title:"0936 - Stamping The Sequence (Hard)",permalink:"/solutions/0900-0999/stamping-the-sequence-hard"}},l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:s}=n;return t||m("SolutionAuthor",!0),o||m("TabItem",!0),s||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"0935---knight-dialer-medium",children:"0935 - Knight Dialer (Medium)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/knight-dialer/",children:"https://leetcode.com/problems/knight-dialer/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["The chess knight has a ",(0,i.jsx)(n.strong,{children:"unique movement"}),",\xa0it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an ",(0,i.jsx)(n.strong,{children:"L"}),"). The possible movements of chess knight are shown in this diagaram:"]}),"\n",(0,i.jsx)(n.p,{children:"A chess knight can move as indicated in the chess diagram below:"}),"\n",(0,i.jsxs)(n.p,{children:["We have a chess knight and a phone pad as shown below, the knight ",(0,i.jsx)(n.strong,{children:"can only stand on a numeric cell"}),"\xa0(i.e. blue cell)."]}),"\n",(0,i.jsxs)(n.p,{children:["Given an integer ",(0,i.jsx)(n.code,{children:"n"}),", return how many distinct phone numbers of length ",(0,i.jsx)(n.code,{children:"n"})," we can dial."]}),"\n",(0,i.jsxs)(n.p,{children:["You are allowed to place the knight ",(0,i.jsx)(n.strong,{children:"on any numeric cell"})," initially and then you should perform ",(0,i.jsx)(n.code,{children:"n - 1"})," jumps to dial a number of length ",(0,i.jsx)(n.code,{children:"n"}),". All jumps should be ",(0,i.jsx)(n.strong,{children:"valid"})," knight jumps."]}),"\n",(0,i.jsxs)(n.p,{children:["As the answer may be very large, ",(0,i.jsx)(n.strong,{children:"return the answer modulo"})," ",(0,i.jsx)(n.code,{children:"109 + 7"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 1\nOutput: 10\nExplanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 2\nOutput: 20\nExplanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 3131\nOutput: 136006598\nExplanation: Please take care of the mod.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= n <= 5000"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-tbc",children:"Approach 1: TBC"}),"\n",(0,i.jsx)(s,{children:(0,i.jsxs)(o,{value:"ruby",label:"Ruby",children:[(0,i.jsx)(t,{name:"@jit"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"require 'matrix'\n\n# Using recurrence relations! We can use a 10x10 matrix\n# to encode all 10 distinct letters, or decompose into\n# 5 distinct states:\n\n# 1) [1, 3, 7, 9] => transitions to state (2) and (3)\n# 2) [2, 8]       => transitions to state (1) two ways\n# 3) [4, 6]       => transitions to state (1) two ways and state (4)\n# 4) [0]          => transitions to state (3) two ways\n# 5) [5]          => cannot transition\ndef knight_dialer(n)\n  init = Matrix[\n    [4, 0, 0, 0, 0],\n    [0, 2, 0, 0, 0],\n    [0, 0, 2, 0, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 1]\n  ]\n\n  trans = Matrix[\n    [0, 1, 1, 0, 0],\n    [2, 0, 0, 0, 0],\n    [2, 0, 0, 1, 0],\n    [0, 0, 2, 0, 0],\n    [0, 0, 0, 0, 0]\n  ]\n\n  (init * trans ** (n - 1)).sum % 1_000_000_007\nend\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);