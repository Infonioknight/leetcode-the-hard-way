"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32744],{49378:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(85893),r=s(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/non-overlapping-intervals/",tags:["Array","Dynamic Programming","Greedy","Sorting"]},t="0435 - Non-overlapping Intervals (Medium)",l={id:"0400-0499/non-overlapping-intervals-medium",title:"0435 - Non-overlapping Intervals (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/non-overlapping-intervals/",source:"@site/solutions/0400-0499/0435-non-overlapping-intervals-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/non-overlapping-intervals-medium",permalink:"/solutions/0400-0499/non-overlapping-intervals-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0435-non-overlapping-intervals-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Greedy",permalink:"/solutions/tags/greedy"},{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:435,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/non-overlapping-intervals/",tags:["Array","Dynamic Programming","Greedy","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0433 - Minimum Genetic Mutation (Medium)",permalink:"/solutions/0400-0499/minimum-genetic-mutation-medium"},next:{title:"0438 - Find All Anagrams in a String (Medium)",permalink:"/solutions/0400-0499/find-all-anagrams-in-a-string-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:t}=n;return s||h("SolutionAuthor",!0),i||h("TabItem",!0),t||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"0435---non-overlapping-intervals-medium",children:"0435 - Non-overlapping Intervals (Medium)"}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/non-overlapping-intervals/",children:"https://leetcode.com/problems/non-overlapping-intervals/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["Given an array of intervals ",(0,a.jsx)(n.code,{children:"intervals"})," where ",(0,a.jsx)(n.code,{children:"intervals[i] = [starti, endi]"}),", return ",(0,a.jsx)(n.em,{children:"the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1\nExplanation: [1,3] can be removed and the rest of the intervals are non-overlapping.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: intervals = [[1,2],[1,2],[1,2]]\nOutput: 2\nExplanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: intervals = [[1,2],[2,3]]\nOutput: 0\nExplanation: You don't need to remove any of the intervals since they're already non-overlapping.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= intervals.length <= 10^5"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"intervals[i].length == 2"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"-5 * 10^4 <= starti < endi <= 5 * 10^4"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,a.jsxs)(n.p,{children:["First we can sort ",(0,a.jsx)(n.code,{children:"interval"}),". Given two intervals, where ",(0,a.jsx)(n.code,{children:"intervals[j]"})," is the previous interval and ",(0,a.jsx)(n.code,{children:"interval[i]"})," is the current interval. We can think of three cases."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The two intervals are not overlapping, i.e. ",(0,a.jsx)(n.code,{children:"intervals[i][0]"})," >= ",(0,a.jsx)(n.code,{children:"intervals[j][1]"}),". We can simply mark ",(0,a.jsx)(n.code,{children:"j = i"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The two intervals are overlapping and the end of the previous interval is greater than that of the current interval. Since it's overlapping, we increase answer by 1. We also mark ",(0,a.jsx)(n.code,{children:"j = i"}),". ",(0,a.jsx)(n.code,{children:"intervals[j]"})," should be removed."]}),"\n",(0,a.jsxs)(n.li,{children:["The two intervals are overlapping and the end of the previous interval is less than that of the current interval. ",(0,a.jsx)(n.code,{children:"intervals[i]"})," should be removed."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Time Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(nlogn)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"n"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"e"}),(0,a.jsx)(n.mi,{children:"r"}),(0,a.jsx)(n.mi,{children:"v"}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"s"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"intervals"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"in"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"})]})})]}),". We must first sort our intervals array before solving."]}),"\n",(0,a.jsxs)(n.p,{children:["Space Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", We use no space to sort in place and only need extra space to track our answer, and our pointers."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsxs)(i,{value:"c++",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        int ans = 0;\n        if (intervals.size() == 0) return ans;\n        sort(intervals.begin(), intervals.end());\n        for (int i = 1, j = 0; i < intervals.size(); i++) {\n          if (intervals[i][0] < intervals[j][1]) {\n            ans++;\n            if (intervals[j][1] > intervals[i][1]) j = i;\n          } else {\n            j = i;\n          }\n        }\n        return ans;\n    }\n};\n"})})]}),(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"@ColeB2"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        # Sort our intervals array, O(nlogn) time\n        intervals.sort()\n        # track the end of the previous interval.\n        end = intervals[0][1]\n        # track the number of overlapping intervals to delete.\n        overlap = 0\n        # loop through the remaining intervals\n        for i in range(1, len(intervals)):\n            # get start and end of current intervals\n            _start, _end = intervals[i]\n            # if start of current interval lies within last interval.\n            if  _start < end:\n                # delete one\n                overlap += 1\n                # choose the one that ends sooner to keep.\n                end = min(end, _end)\n            # no overlap, don't delete, and update the previous interval's\n            # value to be what the current interval's end value is.\n            else:\n                end = _end\n        return overlap\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var a=s(67294);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);