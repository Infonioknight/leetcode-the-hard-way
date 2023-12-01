"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29753],{61239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var i=t(85893),s=t(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"},o="2127 - Maximum Employees to Be Invited to a Meeting (Hard)",r={id:"2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",title:"2127 - Maximum Employees to Be Invited to a Meeting (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/",source:"@site/solutions/2100-2199/2127-maximum-employees-to-be-invited-to-a-meeting-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",permalink:"/solutions/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2127-maximum-employees-to-be-invited-to-a-meeting-hard.md",tags:[],version:"current",sidebarPosition:2127,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"},sidebar:"tutorialSidebar",previous:{title:"2122 - Recover the Original Array (Hard)",permalink:"/solutions/2100-2199/recover-the-original-array-hard"},next:{title:"2131 - Longest Palindrome by Concatenating Two Letter Words (Medium)",permalink:"/solutions/2100-2199/longest-palindrome-by-concatenating-two-letter-words-medium"}},l={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2127---maximum-employees-to-be-invited-to-a-meeting-hard",children:"2127 - Maximum Employees to Be Invited to a Meeting (Hard)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/",children:"https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["A company is organizing a meeting and has a list of ",(0,i.jsx)(n.code,{children:"n"})," employees, waiting to be invited. They have arranged for a large ",(0,i.jsx)(n.strong,{children:"circular"})," table, capable of seating ",(0,i.jsx)(n.strong,{children:"any number"})," of employees."]}),"\n",(0,i.jsxs)(n.p,{children:["The employees are numbered from ",(0,i.jsx)(n.code,{children:"0"})," to ",(0,i.jsx)(n.code,{children:"n - 1"}),". Each employee has a ",(0,i.jsx)(n.strong,{children:"favorite"})," person and they will attend the meeting ",(0,i.jsx)(n.strong,{children:"only if"})," they can sit next to their favorite person at the table. The favorite person of an employee is ",(0,i.jsx)(n.strong,{children:"not"})," themself."]}),"\n",(0,i.jsxs)(n.p,{children:["Given a ",(0,i.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,i.jsx)(n.code,{children:"favorite"}),", where ",(0,i.jsx)(n.code,{children:"favorite[i]"})," denotes the favorite person of the ",(0,i.jsx)(n.code,{children:"ith"})," employee, return ",(0,i.jsxs)(n.em,{children:["the ",(0,i.jsx)(n.strong,{children:"maximum number of employees"})," that can be invited to the meeting"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/12/14/ex1.png",alt:""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: favorite = [2,2,1,2]\nOutput: 3\nExplanation:\nThe above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.\nAll employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.\nNote that the company can also invite employees 1, 2, and 3, and give them their desired seats.\nThe maximum number of employees that can be invited to the meeting is 3. \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: favorite = [1,2,0]\nOutput: 3\nExplanation: \nEach employee is the favorite person of at least one other employee, and the only way the company can invite them is if they invite every employee.\nThe seating arrangement will be the same as that in the figure given in example 1:\n- Employee 0 will sit between employees 2 and 1.\n- Employee 1 will sit between employees 0 and 2.\n- Employee 2 will sit between employees 1 and 0.\nThe maximum number of employees that can be invited to the meeting is 3.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/12/14/ex2.png",alt:""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: favorite = [3,0,1,4,1]\nOutput: 4\nExplanation:\nThe above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.\nEmployee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.\nSo the company leaves them out of the meeting.\nThe maximum number of employees that can be invited to the meeting is 4.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"n == favorite.length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"2 <= n <= 10^5"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= favorite[i] <= n - 1"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"favorite[i] != i"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,i.jsx)(n.p,{children:"If an employee A has a favourite person, let's say employee B, and vice versa. Then we can put them together. Then we can put an employee, let's say C, whose favourite person is A on the left hand side of A. Then put an employee, let's say D, whose favourite person is C next to C. If we do the same thing for employee B, then we can have two ways to extend. Therefore, we can first look for the interdependent nodes, in this case, A & B."}),"\n",(0,i.jsxs)(n.p,{children:["Starting from node A and node B, we perform dfs to calculate the maximum nodes of the left chain and the right chain. Then we could invite ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"l"}),(0,i.jsx)(n.mi,{children:"e"}),(0,i.jsx)(n.mi,{children:"f"}),(0,i.jsx)(n.mi,{children:"t"}),(0,i.jsx)(n.mo,{children:"+"}),(0,i.jsx)(n.mi,{children:"r"}),(0,i.jsx)(n.mi,{children:"i"}),(0,i.jsx)(n.mi,{children:"g"}),(0,i.jsx)(n.mi,{children:"h"}),(0,i.jsx)(n.mi,{children:"t"}),(0,i.jsx)(n.mo,{children:"+"}),(0,i.jsx)(n.mn,{children:"2"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"left+right+2"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"+"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"+"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"2"})]})]})]}),"people."]}),"\n",(0,i.jsxs)(n.p,{children:["However, it would fail for the input [1,2,0] because it will output ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mn,{children:"0"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"0"})]})})]})," instead of ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mn,{children:"3"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"3"})]})})]}),". In this case, we need to take care of the cyclic dependency. We need to run another dfs function for each node and check if there is a cyclic dependency. If the visited node is the entry node, then we know there is a cycle here. Then we could invite them also."]}),"\n",(0,i.jsx)(n.p,{children:"The final answer is simple the maximum number of the result of case 1 and case 2."}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumInvitations(vector<int>& a) {\n        int n = a.size();\n        vector<int> depth(n, -1);\n        vector<vector<int>> inv(n);\n        for (int i = 0 ; i < n; i++) inv[a[i]].push_back(i);\n        // check interdependent nodes + longest left & right chain\n        function<int(int)> dfs = [&](int u) {\n            if (depth[u] != -1) return depth[u];\n            int res = 0;\n            for (int x : inv[u]) res = max(res, dfs(x));\n            return depth[u] = res + 1;\n        };\n        int mx1 = 0, mx2 = 0;\n        for (int i = 0; i < n; i++) {\n            if (depth[i] != -1) continue;\n            if (a[a[i]] == i) {\n                depth[i] = depth[a[i]] = 0;\n                int left = 0, right = 0;\n                for (int x : inv[i])    if (x != a[i]) left  = max(left, dfs(x));\n                for (int x : inv[a[i]]) if (x != a[i]) right = max(right, dfs(x));\n                mx1 += left + right + 2;\n            }\n        }\n        // check cyclic dependency\n        function<tuple<int, int, int>(int)> dfs2 = [&](int u)->tuple<int, int, int> {\n            if (depth[u] != -1) {\n                return { u, depth[u], 0 };\n            }  \n            depth[u] = 0;\n            auto [entry, d, isCyclic] = dfs2(a[u]);\n            if (isCyclic) {\n                return { entry, d, 1 };\n            }\n            depth[u] = d + 1;\n            return {\n                entry,\n                depth[u],\n                u == entry\n            };\n        };\n        \n        for (int i = 0; i < n; i++) {\n            if (depth[i] != -1) continue;\n            auto [entry, d, isCyclic] = dfs2(i);\n            if (isCyclic) {\n                mx2 = max(mx2, d);\n            }\n        }\n        return max(mx1, mx2);\n    }\n};\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);