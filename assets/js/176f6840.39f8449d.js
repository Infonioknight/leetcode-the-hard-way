"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30179],{45272:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(85893),r=n(11151);const i={description:"Author: @heder, wingkwong | https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/",tags:["Array","Math"]},t="2455 - Average Value of Even Numbers That Are Divisible by Three (Easy)",l={id:"2400-2499/average-value-of-even-numbers-that-are-divisible-by-three-easy",title:"2455 - Average Value of Even Numbers That Are Divisible by Three (Easy)",description:"Author: @heder, wingkwong | https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/",source:"@site/solutions/2400-2499/2455-average-value-of-even-numbers-that-are-divisible-by-three-easy.md",sourceDirName:"2400-2499",slug:"/2400-2499/average-value-of-even-numbers-that-are-divisible-by-three-easy",permalink:"/solutions/2400-2499/average-value-of-even-numbers-that-are-divisible-by-three-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2455-average-value-of-even-numbers-that-are-divisible-by-three-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Math",permalink:"/solutions/tags/math"}],version:"current",sidebarPosition:2455,frontMatter:{description:"Author: @heder, wingkwong | https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/",tags:["Array","Math"]},sidebar:"tutorialSidebar",previous:{title:"2445 - Number of Nodes With Value One (Medium)",permalink:"/solutions/2400-2499/number-of-nodes-with-value-one-medium"},next:{title:"2461 - Maximum Sum of Distinct Subarrays With Length K (Medium)",permalink:"/solutions/2400-2499/maximum-sum-of-distinct-subarrays-with-length-k-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Scan and count",id:"approach-1-scan-and-count",level:2},{value:"Approach 2: Partition the input",id:"approach-2-partition-the-input",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n,TabItem:i,Tabs:t}=s;return n||o("SolutionAuthor",!0),i||o("TabItem",!0),t||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"2455---average-value-of-even-numbers-that-are-divisible-by-three-easy",children:"2455 - Average Value of Even Numbers That Are Divisible by Three (Easy)"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/",children:"https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["Given an integer array ",(0,a.jsx)(s.code,{children:"nums"})," of ",(0,a.jsx)(s.strong,{children:"positive"})," integers, return ",(0,a.jsx)(s.em,{children:"the average value of all even integers that are divisible by"})," ",(0,a.jsx)(s.code,{children:"3"}),(0,a.jsx)(s.em,{children:"."})]}),"\n",(0,a.jsxs)(s.p,{children:["Note that the ",(0,a.jsx)(s.strong,{children:"average"})," of ",(0,a.jsx)(s.code,{children:"n"})," elements is the ",(0,a.jsx)(s.strong,{children:"sum"})," of the ",(0,a.jsx)(s.code,{children:"n"})," elements divided by ",(0,a.jsx)(s.code,{children:"n"})," and ",(0,a.jsx)(s.strong,{children:"rounded down"})," to the nearest integer."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: nums = [1,3,6,10,12,15]\nOutput: 9\nExplanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: nums = [1,2,4,7,10]\nOutput: 0\nExplanation: There is no single number that satisfies the requirement, so return 0.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"1000"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 <= nums.length <= 1000"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord",children:"."}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1000"})]})]})]})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"1000"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 <= nums[i] <= 1000"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1000"})]})]})]})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-scan-and-count",children:"Approach 1: Scan and count"}),"\n",(0,a.jsxs)(s.p,{children:["This is straight forward. We could simplify the condition ",(0,a.jsx)(s.code,{children:"if (num % 2 == 0 && num % 3 == 0)"})," to ",(0,a.jsx)(s.code,{children:"if (num % 6 == 0)"}),"."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Time complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," we need to look at all the numbers in nums"]}),"\n",(0,a.jsxs)(s.li,{children:["Space complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@heder"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"static int averageValue(const vector<int>& nums) {\n    int sum = 0;\n    int count = 0;\n    for (int num : nums) {\n        if (num % 2 == 0 && num % 3 == 0) {\n            sum += num;\n            ++count;\n        }\n    }\n    return count ? sum / count : 0;\n}\n"})})]}),(0,a.jsxs)(i,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def averageValue(self, nums: List[int]) -> int:\n        s, cnt = 0, 0\n        for x in nums:\n            if x % 6 == 0:\n                cnt += 1\n                s += x\n        return s // cnt if cnt > 0 else 0\n"})})]})]}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-partition-the-input",children:"Approach 2: Partition the input"}),"\n",(0,a.jsxs)(s.p,{children:["If we are willing to modify the input vector ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]})," we could also parition the input and do something like below. Instead of ",(0,a.jsx)(s.code,{children:"std::reduce"})," we could use ",(0,a.jsx)(s.code,{children:"std::accumulate"}),", but integer addition is associative and commutative so we can use ",(0,a.jsx)(s.code,{children:"std::reduce"})," here. We are potentialy doing more work, but the overall complexity remains the same as with the first approach."]}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@heder"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"static int averageValue(vector<int>& nums) {\n    auto it = partition(begin(nums), end(nums), [](int num) { return num % 6 == 0; });\n    return it == begin(nums) ? 0 : reduce(begin(nums), it) / distance(begin(nums), it);\n}\n"})})]})})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var a=n(67294);const r={},i=a.createContext(r);function t(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);