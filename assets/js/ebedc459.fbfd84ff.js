"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10543],{37256:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=r(85893),o=r(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/"},i="0327 - Count of Range Sum (Hard)",c={id:"0300-0399/count-of-range-sum-hard",title:"0327 - Count of Range Sum (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/",source:"@site/solutions/0300-0399/0327-count-of-range-sum-hard.md",sourceDirName:"0300-0399",slug:"/0300-0399/count-of-range-sum-hard",permalink:"/solutions/0300-0399/count-of-range-sum-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0327-count-of-range-sum-hard.md",tags:[],version:"current",sidebarPosition:327,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/"},sidebar:"tutorialSidebar",previous:{title:"0323 - Number of Connected Components in an Undirected Graph (Medium)",permalink:"/solutions/0300-0399/number-of-connected-components-in-an-undirected-graph-medium"},next:{title:"0329 - Longest Increasing Path in a Matrix (Hard)",permalink:"/solutions/0300-0399/longest-increasing-path-in-a-matrix-hard"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Ordered Set",id:"approach-1-ordered-set",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0327---count-of-range-sum-hard",children:"0327 - Count of Range Sum (Hard)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/count-of-range-sum/",children:"https://leetcode.com/problems/count-of-range-sum/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given an integer array ",(0,t.jsx)(n.code,{children:"nums"})," and two integers ",(0,t.jsx)(n.code,{children:"lower"})," and ",(0,t.jsx)(n.code,{children:"upper"}),", return ",(0,t.jsx)(n.em,{children:"the number of range sums that lie in"})," ",(0,t.jsx)(n.code,{children:"[lower, upper]"})," ",(0,t.jsx)(n.em,{children:"inclusive"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Range sum ",(0,t.jsx)(n.code,{children:"S(i, j)"})," is defined as the sum of the elements in ",(0,t.jsx)(n.code,{children:"nums"})," between indices ",(0,t.jsx)(n.code,{children:"i"})," and ",(0,t.jsx)(n.code,{children:"j"})," inclusive, where ",(0,t.jsx)(n.code,{children:"i <= j"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [-2,5,-1], lower = -2, upper = 2\nOutput: 3\nExplanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [0], lower = 0, upper = 0\nOutput: 1\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-2^31 <= nums[i] <= 2^31 - 1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-10^5 <= lower <= upper <= 10^5"})}),"\n",(0,t.jsxs)(n.li,{children:["The answer is ",(0,t.jsx)(n.strong,{children:"guaranteed"})," to fit in a ",(0,t.jsx)(n.strong,{children:"32-bit"})," integer."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-ordered-set",children:"Approach 1: Ordered Set"}),"\n",(0,t.jsx)(r,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <ext/pb_ds/assoc_container.hpp>\n#include <ext/pb_ds/tree_policy.hpp>\nusing namespace __gnu_pbds;\n\nclass Solution {\npublic:\n    tree<long long, null_type, less_equal<long long>, rb_tree_tag, tree_order_statistics_node_update> T;\n    \n    // lower <= sum[j] - sum[i] <= upper\n    // sum[j] - sum[i] >= lower\n    // sum[j] - sum[i] <= upper\n    // where i < j\n    \n    // given sum[j], find the number of i such that \n    // 1. i < j \n    // 2. sum[j] - upper <= sum[i] <= sum[j] - lower\n    \n    int countRangeSum(vector<int>& nums, int lower, int upper) {\n        long long sum = 0, ans = 0;\n        // normalise as lower <= sum[j] - 0 <= upper\n        T.insert(0);\n        for (auto x : nums) {\n            // prefix sum\n            sum += x;\n            // count the range\n            ans += T.order_of_key(sum - lower + 1) - T.order_of_key(sum - upper);\n            // update T\n            T.insert(sum);\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(67294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);