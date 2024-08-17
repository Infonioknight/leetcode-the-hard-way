"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[79407],{69063:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var n=e(85893),m=e(11151);const l={description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-subarray-minimums/",tags:["Array","Dynamic Programming","Stack","Monotonic Stack"]},i="0907 - Sum of Subarray Minimums (Medium)",r={id:"0900-0999/sum-of-subarray-minimums-medium",title:"0907 - Sum of Subarray Minimums (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-subarray-minimums/",source:"@site/solutions/0900-0999/0907-sum-of-subarray-minimums-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/sum-of-subarray-minimums-medium",permalink:"/solutions/0900-0999/sum-of-subarray-minimums-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0907-sum-of-subarray-minimums-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"},{inline:!0,label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:907,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-subarray-minimums/",tags:["Array","Dynamic Programming","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0904 - Fruit Into Baskets (Medium)",permalink:"/solutions/0900-0999/fruit-into-baskets-medium"},next:{title:"0909 - Snakes and Ladders (Medium)",permalink:"/solutions/0900-0999/snakes-and-ladders-medium"}},c={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}];function h(s){const a={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,m.a)(),...s.components},{SolutionAuthor:e,TabItem:l,Tabs:i}=a;return e||x("SolutionAuthor",!0),l||x("TabItem",!0),i||x("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"0907---sum-of-subarray-minimums-medium",children:"0907 - Sum of Subarray Minimums (Medium)"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/sum-of-subarray-minimums/",children:"https://leetcode.com/problems/sum-of-subarray-minimums/"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(a.p,{children:["Given an array of integers arr, find the sum of ",(0,n.jsx)(a.code,{children:"min(b)"}),", where ",(0,n.jsx)(a.code,{children:"b"})," ranges over every (contiguous) subarray of ",(0,n.jsx)(a.code,{children:"arr"}),". Since the answer may be large, return the answer ",(0,n.jsx)(a.strong,{children:"modulo"})," ",(0,n.jsx)(a.code,{children:"109 + 7"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: arr = [3,1,2,4]\nOutput: 17\nExplanation: \nSubarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. \nMinimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.\nSum is 17.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: arr = [11,81,94,43,3]\nOutput: 444\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"3"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mn,{children:"4"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 <= arr.length <= 3 * 10^4"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,n.jsx)(a.span,{className:"mord",children:"."}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"3"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mn,{children:"4"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 <= arr[i] <= 3 * 10^4"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"approach-1-stack",children:"Approach 1: Stack"}),"\n",(0,n.jsxs)(a.p,{children:["If we brute force the solution, it would take ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n ^ 2)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),". We can improve it by using a stack."]}),"\n",(0,n.jsxs)(a.p,{children:["We can use a monotonically increasing stack to store the indices of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"r"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"arr"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"})]})})]}),", which means the elements in a stack are always increasing. When the stack is not empty, we need to pop all elements from the top until ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"i"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})," reaches ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"n"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]})," or ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s[-1] <= arr[i]"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})]})]}),". Let's say the popped item is ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"j"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),", the next smaller one is ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"w"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"v"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"w"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"k, we can have the range in where "})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ec"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"anha"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"in"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ere"})]})})]}),"j",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{children:"I"}),(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"w"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"is the minimum. If the stack is empty, we use"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"minim"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord",children:"."}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"es"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ki"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"se"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"pt"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"se"})]})})]}),"-1$. Therefore, we got the following contribution"]}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"arr[j] * (i - j) * (j - k)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Time complexity: ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsxs)(a.li,{children:["Space complexity: ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(l,{value:"py",label:"Python",children:[(0,n.jsx)(e,{name:"@wingkwong"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"class Solution:\n    def sumSubarrayMins(self, arr: List[int]) -> int:\n        res, n, M = 0, len(arr), 10 ** 9 + 7\n        s = [-1]\n        for i in range(n + 1):\n            while s[-1] != -1 and (i == n or arr[i] <= arr[s[-1]]): \n                j = s[-1]\n                s.pop()\n                k = s[-1]\n                res += arr[j] * (i - j) * (j - k)\n                res %= M\n            s.append(i)\n        return res\n"})})]})})]})}function d(s={}){const{wrapper:a}={...(0,m.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function x(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,a,e)=>{e.d(a,{Z:()=>r,a:()=>i});var n=e(67294);const m={},l=n.createContext(m);function i(s){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function r(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(m):s.components||m:i(s.components),n.createElement(l.Provider,{value:a},s.children)}}}]);