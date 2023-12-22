"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51197],{20343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(85893),r=n(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/fruit-into-baskets/",tags:["Array","Hash Table","Sliding Window"]},o="0904 - Fruit Into Baskets (Medium)",l={id:"0900-0999/fruit-into-baskets-medium",title:"0904 - Fruit Into Baskets (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/fruit-into-baskets/",source:"@site/solutions/0900-0999/0904-fruit-into-baskets-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/fruit-into-baskets-medium",permalink:"/solutions/0900-0999/fruit-into-baskets-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0904-fruit-into-baskets-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Sliding Window",permalink:"/solutions/tags/sliding-window"}],version:"current",sidebarPosition:904,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/fruit-into-baskets/",tags:["Array","Hash Table","Sliding Window"]},sidebar:"tutorialSidebar",previous:{title:"0901 - Online Stock Span (Medium)",permalink:"/solutions/0900-0999/online-stock-span-medium"},next:{title:"0909 - Snakes and Ladders (Medium)",permalink:"/solutions/0900-0999/snakes-and-ladders-medium"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n,TabItem:s,Tabs:o}=t;return n||h("SolutionAuthor",!0),s||h("TabItem",!0),o||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"0904---fruit-into-baskets-medium",children:"0904 - Fruit Into Baskets (Medium)"}),"\n",(0,i.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/fruit-into-baskets/",children:"https://leetcode.com/problems/fruit-into-baskets/"})}),"\n",(0,i.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(t.p,{children:["You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array ",(0,i.jsx)(t.code,{children:"fruits"})," where ",(0,i.jsx)(t.code,{children:"fruits[i]"})," is the ",(0,i.jsx)(t.strong,{children:"type"})," of fruit the ",(0,i.jsx)(t.code,{children:"ith"})," tree produces."]}),"\n",(0,i.jsx)(t.p,{children:"You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You only have ",(0,i.jsx)(t.strong,{children:"two"})," baskets, and each basket can only hold a ",(0,i.jsx)(t.strong,{children:"single type"})," of fruit. There is no limit on the amount of fruit each basket can hold."]}),"\n",(0,i.jsxs)(t.li,{children:["Starting from any tree of your choice, you must pick ",(0,i.jsx)(t.strong,{children:"exactly one fruit"})," from ",(0,i.jsx)(t.strong,{children:"every"})," tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets."]}),"\n",(0,i.jsx)(t.li,{children:"Once you reach a tree with fruit that cannot fit in your baskets, you must stop."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Given the integer array ",(0,i.jsx)(t.code,{children:"fruits"}),", return ",(0,i.jsxs)(t.em,{children:["the ",(0,i.jsx)(t.strong,{children:"maximum"})," number of fruits you can pick"]}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: fruits = [1,2,1]\nOutput: 3\nExplanation: We can pick from all 3 trees.\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: fruits = [0,1,2,2]\nOutput: 3\nExplanation: We can pick from trees [1,2,2].\nIf we had started at the first tree, we would only pick from trees [0,1].\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: fruits = [1,2,3,2,2]\nOutput: 4\nExplanation: We can pick from trees [2,3,2,2].\nIf we had started at the first tree, we would only pick from trees [1,2].\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"1 <= fruits.length <= 10^5"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"0 <= fruits[i] < fruits.length"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"approach-1-sliding-window",children:"Approach 1: Sliding Window"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)(s,{value:"cpp",label:"C++",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        int n = fruits.size(), ans = 0;\n        // count the frequency of fruits\n        unordered_map<int, int> m;\n        // two pointers \n        // - l is the pointer to the starting index of the window\n        // - r is the pointer to the ending index of the window\n        for (int l = 0, r = 0; r < n; r++) {\n            // add fruits[r] to a hashmap\n            m[fruits[r]]++;\n            // if there is more than two types\n            if (m.size() > 2) {\n                // then we need to substract one from the freq of leftmost element, i.e. fruits[l]\n                // if it is 0, then we can erase it\n                if (--m[fruits[l]] == 0) m.erase(fruits[l]);\n                // shrink the window by moving the `l` to the right\n                l += 1;\n            }\n            // the maximum number of fruits we can pick is simply the window size\n            ans = max(ans, r - l + 1);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,i.jsxs)(s,{value:"py",label:"Python",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"class Solution:\n    def totalFruit(self, fruits: List[int]) -> int:\n        ans = 0\n        # count the frequency of fruits\n        cnt = Counter()\n        # two pointers \n        # - l is the pointer to the starting index of the window\n        # - r is the pointer to the ending index of the window\n        l = 0\n        for r in range(len(fruits)):\n            # add fruits[r] to a counter\n            cnt[fruits[r]] += 1\n            # if there is more than two types\n            if len(cnt) > 2:\n                # then we need to substract one from the freq of leftmost element, i.e. fruits[l]\n                cnt[fruits[l]] -= 1\n                # if it is 0, then we can erase it\n                if cnt[fruits[l]] == 0: cnt.pop(fruits[l])\n                # shrink the window by moving the `l` to the right\n                l += 1\n            # the maximum number of fruits we can pick is simply the window size\n            ans = max(ans, r - l + 1)\n        return ans\n"})})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);