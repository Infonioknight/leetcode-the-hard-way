"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[86238],{48364:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(85893),t=n(11151);const i={description:"Author: @ColeB2 | https://leetcode.com/problems/subsets-ii/",tags:["Array","Backtracking","Bit Manipulation"]},r="0090 - Subsets II (Medium)",l={id:"0000-0099/subsets-ii-medium",title:"0090 - Subsets II (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/subsets-ii/",source:"@site/solutions/0000-0099/0090-subsets-ii-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/subsets-ii-medium",permalink:"/solutions/0000-0099/subsets-ii-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0090-subsets-ii-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"},{inline:!0,label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"}],version:"current",sidebarPosition:90,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/subsets-ii/",tags:["Array","Backtracking","Bit Manipulation"]},sidebar:"tutorialSidebar",previous:{title:"0088 - Merge Sorted Array (Easy)",permalink:"/solutions/0000-0099/merge-sorted-array-easy"},next:{title:"0091 - Decode Ways (Medium)",permalink:"/solutions/0000-0099/decode-ways-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative Backtracking",id:"approach-1-iterative-backtracking",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components},{SolutionAuthor:n,TabItem:i,Tabs:r}=e;return n||d("SolutionAuthor",!0),i||d("TabItem",!0),r||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"0090---subsets-ii-medium",children:"0090 - Subsets II (Medium)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/subsets-ii/",children:"https://leetcode.com/problems/subsets-ii/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given an integer array nums that may contain duplicates, ",(0,a.jsx)(e.em,{children:"return all possible subsets (the power set)"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["The solution set ",(0,a.jsx)(e.strong,{children:"must not"})," contain duplicate subsets. Return the solution in ",(0,a.jsx)(e.strong,{children:"any order"}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: nums = [1,2,2]\nOutput: [[],[1],[1,2],[1,2,2],[2],[2,2]]\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: nums = [0]\nOutput: [[],[0]]\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= nums.length <= 10"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"-10 <= nums[i] <= 10"})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-iterative-backtracking",children:"Approach 1: Iterative Backtracking"}),"\n",(0,a.jsx)(e.p,{children:"Standard backtracking problem. At each step, we must decide to either take a number or not take a number at each step, similar to Subsets I. The only difference is the input may contain duplicates, and our answer can't."}),"\n",(0,a.jsxs)(e.p,{children:["We can push all of them to a set to remove the duplicates. We also must first sort the numbers, as while backtracking if we have a number set of ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"[4,1,4]"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," for example, during our iterations through for selection, we will at some point push both ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(4,1)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," and ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(1,4)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," to our set, which are the same set when ordered properly, but when hashing and pushing to our set, won't be considered as the same set. By sorting first, we can easily fix that problem, and since the time complexity of backtracking is much greater than sorting, it won't affect our big oh."]}),"\n",(0,a.jsxs)(e.p,{children:["Time Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n*2^n)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," to generate and copy all subsets into our power set.\nSpace Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(n*2^n)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," to return all our subsets."]}),"\n",(0,a.jsx)(e.p,{children:"Worst case, we will have no duplicates and have both exponential time and space."}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:\n        # create our power set, start with empty\n        power_set = set()\n        # initialize our stack for backtracking\n        # we start with an empty tuple instead of a list for hashing\n        # and idx of where we are at in our nums array.\n        stack = [((), 0)]\n        # sort our numbers, since when hashing (1,4) and (4,1) they\n        # are obviously the same for our questions purposes, \n        # but will hash differently and both make our set.\n        nums.sort()\n        while stack:\n            # pop off the current subset and index inside nums.\n            subset, idx = stack.pop()\n            # add it to our power set. Set will ignore all dupes for us.\n            power_set.add(subset)\n            # if our idx is in bounds:\n            if idx < len(nums):\n                # Both take the number, and don't take the number.\n                # add current subset where we don't take the number\n                stack.append((subset, idx + 1))\n                # add subset where we do take the number.\n                stack.append((subset + (nums[idx],), idx + 1))\n        # convert powerset back to a list.\n        return list(power_set)\n"})})]})})]})}function o(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,n)=>{n.d(e,{Z:()=>l,a:()=>r});var a=n(67294);const t={},i=a.createContext(t);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);