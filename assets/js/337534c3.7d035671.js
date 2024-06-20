"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40807],{76377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(85893),o=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/"},s="1510 - Stone Game IV (Hard)",a={id:"1500-1599/stone-game-iv-hard",title:"1510 - Stone Game IV (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/",source:"@site/solutions/1500-1599/1510-stone-game-iv-hard.md",sourceDirName:"1500-1599",slug:"/1500-1599/stone-game-iv-hard",permalink:"/solutions/1500-1599/stone-game-iv-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1510-stone-game-iv-hard.md",tags:[],version:"current",sidebarPosition:1510,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/"},sidebar:"tutorialSidebar",previous:{title:"1502 - Can Make Arithmetic Progression From Sequence (Easy)",permalink:"/solutions/1500-1599/can-make-arithmetic-progression-from-sequence-easy"},next:{title:"1514 - Path with Maximum Probability (Medium)",permalink:"/solutions/1500-1599/path-with-maximum-probability"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1510---stone-game-iv-hard",children:"1510 - Stone Game IV (Hard)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/stone-game-iv/",children:"https://leetcode.com/problems/stone-game-iv/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsx)(n.p,{children:"Alice and Bob take turns playing a game, with Alice starting first."}),"\n",(0,i.jsxs)(n.p,{children:["Initially, there are ",(0,i.jsx)(n.code,{children:"n"})," stones in a pile. On each player's turn, that player makes a ",(0,i.jsx)(n.em,{children:"move"})," consisting of removing ",(0,i.jsx)(n.strong,{children:"any"})," non-zero ",(0,i.jsx)(n.strong,{children:"square number"})," of stones in the pile."]}),"\n",(0,i.jsx)(n.p,{children:"Also, if a player cannot make a move, he/she loses the game."}),"\n",(0,i.jsxs)(n.p,{children:["Given a positive integer ",(0,i.jsx)(n.code,{children:"n"}),", return ",(0,i.jsx)(n.code,{children:"true"})," if and only if Alice wins the game otherwise return ",(0,i.jsx)(n.code,{children:"false"}),", assuming both players play optimally."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 1\nOutput: true\nExplanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 2\nOutput: false\nExplanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 4\nOutput: true\nExplanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,i.jsxs)(n.p,{children:["Let ",(0,i.jsx)(n.code,{children:"dp[i]"})," be the result of the game with ",(0,i.jsx)(n.code,{children:"i"})," stones. If it is true, it means Alice must win. If it is false, it means Bob must win. If there is any ",(0,i.jsx)(n.code,{children:"j"})," that ",(0,i.jsx)(n.code,{children:"dp[i - j * j]"})," make the other lose the game, then ",(0,i.jsx)(n.code,{children:"dp[i]"})," would be true. For example, Alice can take ",(0,i.jsx)(n.code,{children:"j * j"})," to make Bob into a losing state and end the game."]}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool winnerSquareGame(int n) {\n        int dp[n + 1];\n        memset(dp, 0, sizeof(dp));\n        for(int i = 1; i <= n; i++){\n            for(int j = 1; j * j <= i; j++){\n                dp[i] |= !dp[i - j * j];\n            }\n        }\n        return dp[n];\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);