"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39845],{38251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=t(85893),i=t(11151);const o={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",tags:["Sorting"]},s="1356 - Sort Integers by The Number of 1 Bits (Easy)",a={id:"1300-1399/sort-integers-by-the-number-of-1-bits-easy",title:"1356 - Sort Integers by The Number of 1 Bits (Easy)",description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",source:"@site/solutions/1300-1399/1356-sort-integers-by-the-number-of-1-bits-easy.md",sourceDirName:"1300-1399",slug:"/1300-1399/sort-integers-by-the-number-of-1-bits-easy",permalink:"/solutions/1300-1399/sort-integers-by-the-number-of-1-bits-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1356-sort-integers-by-the-number-of-1-bits-easy.md",tags:[{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:1356,frontMatter:{description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",tags:["Sorting"]},sidebar:"tutorialSidebar",previous:{title:"1349 - Maximum Students Taking Exam (Hard)",permalink:"/solutions/1300-1399/maximum-students-taking-exam-hard"},next:{title:"1359 - Count All Valid Pickup and Delivery Options (Hard)",permalink:"/solutions/1300-1399/count-all-valid-pickup-and-delivery-options-hard"}},l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + __builtin_popcount / Bit Count",id:"approach-1-sorting--__builtin_popcount--bit-count",level:2},{value:"Approach 2: Sorting with Math Logic",id:"approach-2-sorting-with-math-logic",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:s}=n;return t||d("SolutionAuthor",!0),o||d("TabItem",!0),s||d("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1356---sort-integers-by-the-number-of-1-bits-easy",children:"1356 - Sort Integers by The Number of 1 Bits (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",children:"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["You are given an integer array ",(0,r.jsx)(n.code,{children:"arr"}),". Sort the integers in the array in ascending order by the number of ",(0,r.jsx)(n.code,{children:"1"}),"'s in their binary representation and in case of two or more integers have the same number of ",(0,r.jsx)(n.code,{children:"1"}),"'s you have to sort them in ascending order."]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.em,{children:"the array after sorting it"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: arr = [0,1,2,3,4,5,6,7,8]\nOutput: [0,1,2,4,8,3,5,6,7]\nExplantion: [0] is the only integer with 0 bits.\n[1,2,4,8] all have 1 bit.\n[3,5,6] have 2 bits.\n[7] has 3 bits.\nThe sorted array by bits is [0,1,2,4,8,3,5,6,7]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]\nOutput: [1,2,4,8,16,32,64,128,256,512,1024]\nExplantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= arr.length <= 500"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= arr[i] <= 10^4"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-sorting--__builtin_popcount--bit-count",children:"Approach 1: Sorting + __builtin_popcount / Bit Count"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(o,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> sortByBits(vector<int>& arr) {\n        sort(arr.begin(), arr.end(), [&](int a, int b){\n            // __builtin_popcount(x) returns the number of 1-bits set in an int x.\n            int x = __builtin_popcount(a), y = __builtin_popcount(b);\n            return x == y ? \n                // in case of two or more integers have the same number of 1's you have to sort them in ascending order\n                a < b : \n                // else sort the integers in the array in ascending order by the number of 1's in their binary representation \n                x < y;\n        });\n        return arr;\n    }\n};\n"})})]}),(0,r.jsxs)(o,{value:"java",label:"Java",children:[(0,r.jsx)(t,{name:"@vigneshshiv"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int[] sortByBits(int[] arr) {\n        return Arrays.stream(arr)\n                .boxed()\n                .sorted(Comparator.comparing(Integer::bitCount).thenComparing(Integer::intValue))\n                .mapToInt(num -> num)\n                .toArray();\n    }\n}\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"approach-2-sorting-with-math-logic",children:"Approach 2: Sorting with Math Logic"}),"\n",(0,r.jsxs)(n.p,{children:["Since the input values can range from ",(0,r.jsx)(n.code,{children:"0"})," to ",(0,r.jsx)(n.code,{children:"10000"}),", we can add to each element on the array the value of the bit count (number of 1s) multiplied by 10001."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"10001"})," is not a magic number, it is merely the max possible number the array may have + 1, which ensures that the bit count has the maximum priority"]}),"\n",(0,r.jsx)(s,{children:(0,r.jsxs)(o,{value:"java",label:"Java",children:[(0,r.jsx)(t,{name:"@vigneshshiv"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int[] sortByBits(int[] arr) {\n        for (int i = 0; i < arr.length; i++) {\n            arr[i] += (Integer.bitCount(arr[i]) * 10001);\n        }\n        Arrays.sort(arr);\n        for (int i = 0; i < arr.length; i++) {\n            arr[i] %= 10001;\n        }\n        return arr;\n    }\n}\n"})})]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(67294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);