"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58815],{54328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=s(85893),t=s(11151);const i={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/majority-element/"},r="0169 - Majority Element (Easy)",l={id:"0100-0199/majority-element-easy",title:"0169 - Majority Element (Easy)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/majority-element/",source:"@site/solutions/0100-0199/0169-majority-element-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/majority-element-easy",permalink:"/solutions/0100-0199/majority-element-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0169-majority-element-easy.md",tags:[],version:"current",sidebarPosition:169,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/majority-element/"},sidebar:"tutorialSidebar",previous:{title:"0165 - Compare Version Numbers (Medium)",permalink:"/solutions/0100-0199/compare-version-numbers-medium"},next:{title:"0188 - Best Time to Buy and Sell Stock IV (Hard)",permalink:"/solutions/0100-0199/best-time-to-buy-and-sell-stock-iv-hard"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Boyer-Moore Voting Algorithm",id:"approach-1-boyer-moore-voting-algorithm",level:2},{value:"Approach 2: Bit Manipulation",id:"approach-2-bit-manipulation",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:r}=n;return s||d("SolutionAuthor",!0),i||d("TabItem",!0),r||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"0169---majority-element-easy",children:"0169 - Majority Element (Easy)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/majority-element/",children:"https://leetcode.com/problems/majority-element/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["Given an array ",(0,a.jsx)(n.code,{children:"nums"})," of size ",(0,a.jsx)(n.code,{children:"n"}),", return ",(0,a.jsx)(n.em,{children:"the majority element"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The majority element is the element that appears more than ",(0,a.jsx)(n.code,{children:"\u230an / 2\u230b"})," times. You may assume that the majority element always exists in the array."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: nums = [3,2,3]\nOutput: 3\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: nums = [2,2,1,1,1,2,2]\nOutput: 2\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"n == nums.length"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= n <= 5 * 10^4"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"-2^31 <= nums[i] <= 2^31 - 1"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Follow-up:"})," Could you solve the problem in linear time and in ",(0,a.jsx)(n.code,{children:"O(1)"})," space?"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-boyer-moore-voting-algorithm",children:"Approach 1: Boyer-Moore Voting Algorithm"}),"\n",(0,a.jsxs)(n.p,{children:["The Boyer-Moore Voting Algorithm is used to find the majority of a sequence of elements using linear time and constant space. We initialise the counter ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mo,{children:":"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"0"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"i := 0"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:":="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"})]})]})]})," and iterate each number ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"x"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]}),". If the counter is ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"0"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"})]})})]}),", then we set ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"x"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]})," as the major element. If the current number is the major element, then we increase the counter by ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"1"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]}),", else decrease by ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"1"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Reference: ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm",children:"Boyer-Moore Voting Algorithm"})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Boyer-Moore Voting Algorithm\n        int i = 0, m = 0;\n        for(int x : nums) {\n            // counter hits 0, reset majority as x and update counter\n            if(i == 0) m = x, i = 1;\n            // increase the counter as x is in the same sequence\n            else if(m == x) i++;\n            // decrease the counter as x is not in the same sequence\n            else i--;\n        }\n        return m;\n    }\n};\n"})})]}),(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        res, count = 0, 0\n\n        for n in nums:\n            if count == 0:\n                res = n\n            count += (1 if n == res else -1)\n        return res \n"})})]}),(0,a.jsxs)(i,{value:"javascript",label:"JavaScript",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar majorityElement = function(nums) {\n    let res = 0;\n    let count = 0;\n    for (n of nums) {\n        if (count == 0) res = n, count = 1;\n        else if (n == res) count++;\n        else count--;\n    }\n    return res; \n};\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"approach-2-bit-manipulation",children:"Approach 2: Bit Manipulation"}),"\n",(0,a.jsxs)(n.p,{children:["If the majority number appears more than ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"[n / 2]"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord",children:"/2"}),(0,a.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," times, each of its bits will also appear more than ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"[n / 2]"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord",children:"/2"}),(0,a.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," times. Therefore, we iterate each bit on each number to see if condition is true. If so, we set this bit as 1."]}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int m = 0, n = nums.size();\n        // iterate each bit\n        for (int bit = 0; bit < 32; bit++) {\n            int ones = 0;\n            // iterate each number to see if this bit is set or not\n            // if so, add 1 to ones\n            for (auto x : nums) if (x & (1 << bit)) ones++;\n            // if this bit appears more than [n / 2] times\n            // then set this bit on final answer\n            if (ones > (n / 2)) m |= (1 << bit);\n        }\n        return m;\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var a=s(67294);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);