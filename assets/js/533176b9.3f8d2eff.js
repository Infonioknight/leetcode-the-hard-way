"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45455],{89426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>h});var a=n(85893),o=n(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-health-to-beat-game/",tags:["Array","Greedy","Prefix Sum"]},i="2214 - Minimum Health to Beat Game (Medium)",m={id:"2200-2299/minimum-health-to-beat-game-medium",title:"2214 - Minimum Health to Beat Game (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-health-to-beat-game/",source:"@site/solutions/2200-2299/2214-minimum-health-to-beat-game-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-health-to-beat-game-medium",permalink:"/solutions/2200-2299/minimum-health-to-beat-game-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2214-minimum-health-to-beat-game-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Greedy",permalink:"/solutions/tags/greedy"},{inline:!0,label:"Prefix Sum",permalink:"/solutions/tags/prefix-sum"}],version:"current",sidebarPosition:2214,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-health-to-beat-game/",tags:["Array","Greedy","Prefix Sum"]},sidebar:"tutorialSidebar",previous:{title:"2209 - Minimum White Tiles After Covering With Carpets (Hard)",permalink:"/solutions/2200-2299/minimum-white-tiles-after-covering-with-carpets-hard"},next:{title:"2218 - Maximum Value of K Coins From Piles (Hard)",permalink:"/solutions/2200-2299/maximum-value-of-k-coins-from-piles-hard"}},l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function s(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:i}=t;return n||u("SolutionAuthor",!0),r||u("TabItem",!0),i||u("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"2214---minimum-health-to-beat-game-medium",children:"2214 - Minimum Health to Beat Game (Medium)"})}),"\n",(0,a.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/minimum-health-to-beat-game/",children:"https://leetcode.com/problems/minimum-health-to-beat-game/"})}),"\n",(0,a.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(t.p,{children:["You are playing a game that has ",(0,a.jsx)(t.code,{children:"n"})," levels numbered from ",(0,a.jsx)(t.code,{children:"0"})," to ",(0,a.jsx)(t.code,{children:"n - 1"}),". You are given a ",(0,a.jsx)(t.strong,{children:"0-indexed"})," integer array ",(0,a.jsx)(t.code,{children:"damage"})," where ",(0,a.jsx)(t.code,{children:"damage[i]"})," is the amount of health you will lose to complete the ",(0,a.jsx)(t.code,{children:"ith"})," level."]}),"\n",(0,a.jsxs)(t.p,{children:["You are also given an integer ",(0,a.jsx)(t.code,{children:"armor"}),". You may use your armor ability ",(0,a.jsx)(t.strong,{children:"at most once"})," during the game on ",(0,a.jsx)(t.strong,{children:"any"})," level which will protect you from ",(0,a.jsx)(t.strong,{children:"at most"})," ",(0,a.jsx)(t.code,{children:"armor"})," damage."]}),"\n",(0,a.jsxs)(t.p,{children:["You must complete the levels in order and your health must be ",(0,a.jsx)(t.strong,{children:"greater than"})," ",(0,a.jsx)(t.code,{children:"0"})," at all times to beat the game."]}),"\n",(0,a.jsxs)(t.p,{children:["Return ",(0,a.jsxs)(t.em,{children:["the ",(0,a.jsx)(t.strong,{children:"minimum"})," health you need to start with to beat the game."]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input: damage = [2,7,4,3], armor = 4\nOutput: 13\nExplanation: One optimal way to beat the game starting at 13 health is:\nOn round 1, take 2 damage. You have 13 - 2 = 11 health.\nOn round 2, take 7 damage. You have 11 - 7 = 4 health.\nOn round 3, use your armor to protect you from 4 damage. You have 4 - 0 = 4 health.\nOn round 4, take 3 damage. You have 4 - 3 = 1 health.\nNote that 13 is the minimum health you need to start with to beat the game.\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input: damage = [2,5,3,4], armor = 7\nOutput: 10\nExplanation: One optimal way to beat the game starting at 10 health is:\nOn round 1, take 2 damage. You have 10 - 2 = 8 health.\nOn round 2, use your armor to protect you from 5 damage. You have 8 - 0 = 8 health.\nOn round 3, take 3 damage. You have 8 - 3 = 5 health.\nOn round 4, take 4 damage. You have 5 - 4 = 1 health.\nNote that 10 is the minimum health you need to start with to beat the game.\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input: damage = [3,3,3], armor = 0\nOutput: 10\nExplanation: One optimal way to beat the game starting at 10 health is:\nOn round 1, take 3 damage. You have 10 - 3 = 7 health.\nOn round 2, take 3 damage. You have 7 - 3 = 4 health.\nOn round 3, take 3 damage. You have 4 - 3 = 1 health.\nNote that you did not use your armor ability.\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"n == damage.length"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"1 <= n <= 10^5"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"0 <= damage[i] <= 10^5"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"0 <= armor <= 10^5"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long minimumHealth(vector<int>& damage, int armor) {\n        // without any armor, the minimum health you need is sum(damage) + 1 (see example 3)\n        long long ans = accumulate(damage.begin(), damage.end(), 0LL) + 1;\n        // when should we use the armor ability? \n        // it's optimal to use when you take the most amount of damage\n        int mx = *max_element(damage.begin(), damage.end());\n        // since mx can be greater than armor, \n        // we take the minimum value and substract it from ans\n        ans -= min(mx, armor);\n        return ans;\n    }\n};\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>m,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function m(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);