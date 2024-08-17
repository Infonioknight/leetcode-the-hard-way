"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45535],{41578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(85893),r=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/largest-component-size-by-common-factor"},i="0952 - Largest Component Size by Common Factor (Hard)",c={id:"0900-0999/largest-component-size-by-common-factor-hard",title:"0952 - Largest Component Size by Common Factor (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-component-size-by-common-factor",source:"@site/solutions/0900-0999/0952-largest-component-size-by-common-factor-hard.md",sourceDirName:"0900-0999",slug:"/0900-0999/largest-component-size-by-common-factor-hard",permalink:"/solutions/0900-0999/largest-component-size-by-common-factor-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0952-largest-component-size-by-common-factor-hard.md",tags:[],version:"current",sidebarPosition:952,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-component-size-by-common-factor"},sidebar:"tutorialSidebar",previous:{title:"0948 - Bag of Tokens (Medium)",permalink:"/solutions/0900-0999/bag-of-tokens-medium"},next:{title:"0967 - Numbers With Same Consecutive Differences (Medium)",permalink:"/solutions/0900-0999/numbers-with-same-consecutive-differences-medium"}},a={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Factorisation + DSU",id:"approach-1-factorisation--dsu",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t,SolutionAuthor:s}=n;return t||h("Details",!0),s||h("SolutionAuthor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"0952---largest-component-size-by-common-factor-hard",children:"0952 - Largest Component Size by Common Factor (Hard)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/largest-component-size-by-common-factor",children:"https://leetcode.com/problems/largest-component-size-by-common-factor"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["You are given an integer array of unique positive integers ",(0,o.jsx)(n.code,{children:"nums"}),". Consider the following graph:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["There are ",(0,o.jsx)(n.code,{children:"nums.length"})," nodes, labeled ",(0,o.jsx)(n.code,{children:"nums[0]"})," to ",(0,o.jsx)(n.code,{children:"nums[nums.length - 1]"}),","]}),"\n",(0,o.jsxs)(n.li,{children:["There is an undirected edge between ",(0,o.jsx)(n.code,{children:"nums[i]"})," and ",(0,o.jsx)(n.code,{children:"nums[j]"})," if ",(0,o.jsx)(n.code,{children:"nums[i]"})," and ",(0,o.jsx)(n.code,{children:"nums[j]"})," share a common factor greater than ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsx)(n.em,{children:"the size of the largest connected component in the graph"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2018/12/01/ex1.png",alt:""})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [4,6,15,35]\nOutput: 4\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2018/12/01/ex2.png",alt:""})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [20,50,9,63]\nOutput: 2\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2018/12/01/ex3.png",alt:""})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [2,3,6,7,4,12,21,39]\nOutput: 8\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= nums.length <= 2 * 10^4"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= nums[i] <= 105"})}),"\n",(0,o.jsxs)(n.li,{children:["All the values of ",(0,o.jsx)(n.code,{children:"nums"})," are ",(0,o.jsx)(n.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-factorisation--dsu",children:"Approach 1: Factorisation + DSU"}),"\n",(0,o.jsx)(n.p,{children:"We iterate each number and factorise it. In general, here's the approach."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"vector<int> factorize(int x) {\n    vector<int> res;\n    for (int y = 2; y * y <= x; y++) {\n        if (x % y) continue;\n        while(x % y == 0) {\n            res.push_back(y);\n            x /= y;\n        }\n    }\n    if (x > 1) res.push_back(x);\n    return res;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once we got the factors, we use DSU to unite each factor and the number."}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"DSU Template"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class dsu {\n public:\n  vector<int> root, rank, size;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    size.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n        size[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x); y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n        \n      return true;\n    }\n    return false;\n  }\n};\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"At the end, we check the size of each group and return the max one."}),"\n",(0,o.jsx)(s,{name:"@wingkwong"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"int largestComponentSize(vector<int>& nums) {\n        int n = nums.size();\n        dsu d(100005);\n        for (auto x : nums) {\n            // step 1: factorize each number\n            vector<int> f = factorize(x);\n            // step 2: unite each number with its factors\n            for (int i = 0; i < f.size(); i++) {\n                d.unite(x, f[i]);\n            }\n        }\n        // step 3: find out the max group size\n        int ans = 0;\n        unordered_map<int, int> m;\n        for (auto x : nums) {\n            ans = max(ans, ++m[d.get(x)]);\n        }\n        return ans;\n    }\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);