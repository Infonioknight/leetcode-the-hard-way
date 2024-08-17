"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78537],{79656:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>m,metadata:()=>i,toc:()=>t});var n=e(85893),l=e(11151);const m={description:"Author: @wingkwong | https://leetcode.com/problems/contiguous-array/",tags:["Array","Hash Table","Prefix Sum"]},r="0525 - Contiguous Array (Medium)",i={id:"0500-0599/contiguous-array-medium",title:"0525 - Contiguous Array (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/contiguous-array/",source:"@site/solutions/0500-0599/0525-contiguous-array-medium.md",sourceDirName:"0500-0599",slug:"/0500-0599/contiguous-array-medium",permalink:"/solutions/0500-0599/contiguous-array-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0525-contiguous-array-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"Prefix Sum",permalink:"/solutions/tags/prefix-sum"}],version:"current",sidebarPosition:525,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/contiguous-array/",tags:["Array","Hash Table","Prefix Sum"]},sidebar:"tutorialSidebar",previous:{title:"0523 - Continuous Subarray Sum (Medium)",permalink:"/solutions/0500-0599/continuous-subarray-sum-medium"},next:{title:"0532 - K-diff Pairs in an Array (Medium)",permalink:"/solutions/0500-0599/k-diff-pairs-in-an-array-medium"}},c={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix Sum + Hash Map",id:"approach-1-prefix-sum--hash-map",level:2}];function h(s){const a={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components},{SolutionAuthor:e,TabItem:m,Tabs:r}=a;return e||x("SolutionAuthor",!0),m||x("TabItem",!0),r||x("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"0525---contiguous-array-medium",children:"0525 - Contiguous Array (Medium)"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/contiguous-array/",children:"https://leetcode.com/problems/contiguous-array/"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(a.p,{children:["Given a binary array ",(0,n.jsx)(a.code,{children:"nums"}),", return ",(0,n.jsx)(a.em,{children:"the maximum length of a contiguous subarray with an equal number of"})," ",(0,n.jsx)(a.code,{children:"0"})," ",(0,n.jsx)(a.em,{children:"and"})," ",(0,n.jsx)(a.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: nums = [0,1]\nOutput: 2\nExplanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: nums = [0,1,0]\nOutput: 2\nExplanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"nums[i]"})," is either ",(0,n.jsx)(a.code,{children:"0"})," or ",(0,n.jsx)(a.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"approach-1-prefix-sum--hash-map",children:"Approach 1: Prefix Sum + Hash Map"}),"\n",(0,n.jsxs)(a.p,{children:["Since the number only contain either 0 and 1, we can check the balance and calculate the length. Let ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"pre"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"re"})]})})]})," be the sum with initial value 0. If ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums[i]"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})})]})," is 1, then ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mo,{children:":"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"sum := sum + 1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:":="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]}),". If ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums[i]"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})})]})," is 0, then ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mo,{children:":"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"sum := sum - 1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:":="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]}),". We iterate ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]})," to calculate ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"pre"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"re"})]})})]}),". If we get the same ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"pre"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"re"})]})})]})," at some point, then it means we have one possible answer."]}),"\n",(0,n.jsxs)(a.p,{children:["For example, given the input ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"[0, 0, 0, 1, 1, 1]"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})})]}),", ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"pre"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"re"})]})})]})," would be 0 -> -1 -> -2 -> -3 -> -2 -> -1 -> 0. We can see that there are three contiguous subarrays with an equal number of 0 and 1, which are ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mn,{children:"0..5"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mn,{children:"1..4"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums[0..5], nums[1..4]"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord",children:"0..5"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord",children:"1..4"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mn,{children:"2..3"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums[2..3]"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord",children:"2..3"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})})]}),". The longest contiguous subarray with an equal number of 0 and 1 is ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mn,{children:"0..5"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums[0..5]"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord",children:"0..5"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"})]})})]})," which has the length of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"5"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"6"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"5 - 0 + 1 = 6"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"5"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"6"})]})]})]}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Therefore, the approach is to calculate the prefix sum and put it into a hash map. If the prefix sum can be found, then the we can compare the length with the current maximum answer to see if we update it or not. This solution gives both ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"time complexity and space complexity."]}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(m,{value:"cpp",label:"C++",children:[(0,n.jsx)(e,{name:"@wingkwong"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findMaxLength(vector<int>& nums) {\n        int ans = 0, pre = 0, n = nums.size();\n        unordered_map<int, int> m;\n        for (int i = 0; i < n; i++) {\n            pre += 2 * nums[i] - 1;\n            if (pre == 0) ans = max(ans, i + 1);\n            if (m.count(pre)) ans = max(ans, i - m[pre]);\n            else m[pre] = i;            \n        }\n        return ans;\n    }\n};\n"})})]})}),"\n",(0,n.jsxs)(a.p,{children:["Or you can initialise ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"m[pre] = -1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"re"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]})," for ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"0"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"pre = 0"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"re"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"})]})]})]}),"."]}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(m,{value:"cpp",label:"C++",children:[(0,n.jsx)(e,{name:"@wingkwong"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findMaxLength(vector<int>& nums) {\n        int ans = 0, pre = 0, n = nums.size();\n        unordered_map<int, int> m;\n        m[0] = -1;\n        for (int i = 0; i < n; i++) {\n            pre += 2 * nums[i] - 1;\n            if (m.count(pre)) ans = max(ans, i - m[pre]);\n            else m[pre] = i;            \n        }\n        return ans;\n    }\n};\n"})})]})})]})}function d(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function x(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,a,e)=>{e.d(a,{Z:()=>i,a:()=>r});var n=e(67294);const l={},m=n.createContext(l);function r(s){const a=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function i(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),n.createElement(m.Provider,{value:a},s.children)}}}]);