"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[24880],{87177:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(85893),t=n(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/"},r="1066 - Campus Bikes II (Medium)",l={id:"1000-1099/campus-bikes-ii-medium",title:"1066 - Campus Bikes II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/",source:"@site/solutions/1000-1099/1066-campus-bikes-ii-medium.md",sourceDirName:"1000-1099",slug:"/1000-1099/campus-bikes-ii-medium",permalink:"/solutions/1000-1099/campus-bikes-ii-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1066-campus-bikes-ii-medium.md",tags:[],version:"current",sidebarPosition:1066,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/campus-bikes-ii/"},sidebar:"tutorialSidebar",previous:{title:"1061 - Lexicographically Smallest Equivalent String (Medium)",permalink:"/solutions/1000-1099/lexicographically-smallest-equivalent-string-medium"},next:{title:"1071 - Greatest Common Divisor of Strings (Easy)",permalink:"/solutions/1000-1099/greatest-common-divisor-of-strings-easy"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1:  DP Bit Masking",id:"approach-1--dp-bit-masking",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"1066---campus-bikes-ii-medium",children:"1066 - Campus Bikes II (Medium)"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/campus-bikes-ii/",children:"https://leetcode.com/problems/campus-bikes-ii/"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(s.p,{children:["On a campus represented as a 2D grid, there are ",(0,i.jsx)(s.code,{children:"n"})," workers and ",(0,i.jsx)(s.code,{children:"m"})," bikes, with ",(0,i.jsx)(s.code,{children:"n <= m"}),". Each worker and bike is a 2D coordinate on this grid."]}),"\n",(0,i.jsxs)(s.p,{children:["We assign one unique bike to each worker so that the sum of the ",(0,i.jsx)(s.strong,{children:"Manhattan distances"})," between each worker and their assigned bike is minimized."]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsx)(s.code,{children:"the minimum possible sum of Manhattan distances between each worker and their assigned bike"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Manhattan distance"})," between two points ",(0,i.jsx)(s.code,{children:"p1"})," and ",(0,i.jsx)(s.code,{children:"p2"})," is ",(0,i.jsx)(s.code,{children:"Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2019/03/06/1261_example_1_v2.png",alt:""})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]\nOutput: 6\nExplanation: \nWe assign bike 0 to worker 0, bike 1 to worker 1. The Manhattan distance of both assignments is 3, so the output is 6.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2019/03/06/1261_example_2_v2.png",alt:""})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]\nOutput: 4\nExplanation: \nWe first assign bike 0 to worker 0, then assign bike 1 to worker 1 or worker 2, bike 2 to worker 2 or worker 1. Both assignments lead to sum of the Manhattan distances as 4.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: workers = [[0,0],[1,0],[2,0],[3,0],[4,0]], bikes = [[0,999],[1,999],[2,999],[3,999],[4,999]]\nOutput: 4995\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"n == workers.length"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"m == bikes.length"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= n <= m <= 10"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"workers[i].length == 2"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"bikes[i].length == 2"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"0 <= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] < 1000"})}),"\n",(0,i.jsxs)(s.li,{children:["All the workers and the bikes locations are ",(0,i.jsx)(s.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"approach-1--dp-bit-masking",children:"Approach 1:  DP Bit Masking"}),"\n",(0,i.jsxs)(s.p,{children:["Iterate each mask from ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"0"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"0"})]})})]})," to ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"m"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]})," where ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"m"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]})," is the size of ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"k"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"s"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"bikes"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"bik"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"es"})]})})]}),". For each mask, we try to find each bike that is not in use and calculate the Manhattan distance and try the next ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"w"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"k"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"I"}),(0,i.jsx)(s.mi,{children:"d"}),(0,i.jsx)(s.mi,{children:"x"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"workerIdx"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),". We memorise the result to speed up the whole process."]}),"\n",(0,i.jsx)(n,{name:"@wingkwong"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> dp;\n    int n, m;\n    int dfs(vector<vector<int>>& workers, vector<vector<int>>& bikes, int workerIdx, int mask) {\n        // worker idx out of range\n        if (workerIdx >= n) return 0;\n        // calculated before, return immediately\n        if (dp[mask] != -1) return dp[mask];\n        // init res\n        int res = INT_MAX;\n        // iterate each mask\n        for (int bikeIdx = 0; bikeIdx < m; bikeIdx++) {\n            // this bike is not in use\n            if (!(mask & (1 << bikeIdx))) {\n                // calculate the Manhattan distance\n                int dist = abs(workers[workerIdx][0] - bikes[bikeIdx][0]) + abs(workers[workerIdx][1] - bikes[bikeIdx][1]);\n                res = min(res, dist + dfs(workers, bikes, workerIdx + 1, mask | (1 << bikeIdx)));\n            }\n        }\n        // memoize the smallest distance sum for this mask\n        return dp[mask] = res;\n    }\n    int assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {\n        n = workers.size(), m = bikes.size();\n        dp = vector<int>(1 << m, -1);\n        return dfs(workers, bikes, 0, 0);\n    }\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"We can also write like this."}),"\n",(0,i.jsx)(n,{name:"@wingkwong"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int assignBikes(vector<vector<int>>& workers, vector<vector<int>>& bikes) {\n        int n = workers.size(), m = bikes.size(), ans = 1e9;\n        vector<int> dp(1 << m, 1e9);\n        dp[0] = 0;\n        // iterate each mask\n        for (int mask = 0; mask < (1 << m); mask++) {\n            // worker idx\n            int workerIdx = __builtin_popcount(mask);\n            // all workers got the bikes\n            // update the answer\n            if (workerIdx >= n) {\n                ans = min(ans, dp[mask]);\n                continue;\n            }\n            // iterate each bike\n            for (int bikeIdx = 0; bikeIdx < m; bikeIdx++) {\n                // this bike is not in use\n                if (!(mask & (1 << bikeIdx))) {\n                    // calculate the Manhattan distance\n                    int dist = abs(workers[workerIdx][0] - bikes[bikeIdx][0]) + abs(workers[workerIdx][1] - bikes[bikeIdx][1]);\n                    // new mask = current mask + this bike\n                    int newMask = mask | (1 << bikeIdx);\n                    // update distance sum\n                    dp[newMask] = min(dp[newMask], dist + dp[mask]);\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var i=n(67294);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);