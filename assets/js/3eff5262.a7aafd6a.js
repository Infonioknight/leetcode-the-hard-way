"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34258],{91412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(85893),r=n(11151);const s={description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",tags:["Array","Stack","Monotonic Stack"]},i="0739 - Daily Temperatures",o={id:"0700-0799/daily-temperatures-medium",title:"0739 - Daily Temperatures",description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",source:"@site/solutions/0700-0799/0739-daily-temperatures-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/daily-temperatures-medium",permalink:"/solutions/0700-0799/daily-temperatures-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0739-daily-temperatures-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"},{inline:!0,label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:739,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",tags:["Array","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0733 - Flood Fill (Easy)",permalink:"/solutions/0700-0799/flood-fill-easy"},next:{title:"0740 - Delete and Earn (Medium)",permalink:"/solutions/0700-0799/delete-and-earn-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Monotonic Stack",id:"approach-1-monotonic-stack",level:2}];function h(e){const t={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n,TabItem:s,Tabs:i}=t;return n||m("SolutionAuthor",!0),s||m("TabItem",!0),i||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"0739---daily-temperatures",children:"0739 - Daily Temperatures"})}),"\n",(0,a.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/daily-temperatures/",children:"https://leetcode.com/problems/daily-temperatures/"})}),"\n",(0,a.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(t.p,{children:["Given an array of integers ",(0,a.jsx)(t.code,{children:"temperatures"})," represents the daily temperatures, ",(0,a.jsx)(t.em,{children:"return an array"})," ",(0,a.jsx)(t.code,{children:"answer"})," ",(0,a.jsx)(t.em,{children:"such that"})," ",(0,a.jsx)(t.code,{children:"answer[i]"})," ",(0,a.jsx)(t.em,{children:"is the number of days you have to wait after the"})," ",(0,a.jsx)(t.code,{children:"ith"})," ",(0,a.jsx)(t.em,{children:"day to get a warmer temperature"}),". If there is no future day for which this is possible, keep ",(0,a.jsx)(t.code,{children:"answer[i] == 0"})," instead."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input: temperatures = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input: temperatures = [30,40,50,60]\nOutput: [1,1,1,0]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input: temperatures = [30,60,90]\nOutput: [1,1,0]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"1 <= temperatures.length <= 10^5"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"30 <= temperatures[i] <= 100"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"approach-1-monotonic-stack",children:"Approach 1: Monotonic Stack"}),"\n",(0,a.jsx)(t.p,{children:"To solve this problem, we will use a Monotonic Decreasing Stack. That is a stack, where all the values inside the stack, are ordered from largest, to smallest. Meaning, we only add to the stack when the stack is either:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Empty, or"}),"\n",(0,a.jsx)(t.li,{children:"If the incoming value is smaller or equal to the value on top of the stack."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"That means that if any incoming value is larger, we must pop values off the top of the stack, until it satisfies rules 1 or 2 before we can add it to our stack."}),"\n",(0,a.jsxs)(t.p,{children:["It is during the popping phase, that we will do the majority of our work in solving our problem. By also adding the indexes with the temperature to the stack, we know where they exist in our output array, and can also use the indexes to gauge the relative distance in terms of days from other temperatures. So while popping them, we can calculate the incoming index, ",(0,a.jsx)(t.code,{children:"i"})," minus the popped items index, ",(0,a.jsx)(t.code,{children:"i2"})," and overwrite the values in our output array at ",(0,a.jsx)(t.code,{children:"i2"})," with the difference, that is ",(0,a.jsx)(t.code,{children:"i-i2"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Time Complexity: ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"O"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"("}),(0,a.jsx)(t.mi,{children:"n"}),(0,a.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(t.span,{className:"mopen",children:"("}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(t.span,{className:"mclose",children:")"})]})})]})," where n is the length of the input, temperatures."]}),"\n",(0,a.jsxs)(t.p,{children:["Space Complexity: ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"O"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"("}),(0,a.jsx)(t.mi,{children:"n"}),(0,a.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(t.span,{className:"mopen",children:"("}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(t.span,{className:"mclose",children:")"})]})})]})," which will be the size of our output array, and our stack in the worst case."]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(s,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Here we will utilize a monotonic decreasing stack, meaning everything\n        # in the stack will be ordered from 'hottest' to 'coldest', and any \n        # incoming element, 'warmer' than the top of the stack, will force us\n        # to remove the 'colder' days from the top of our stack, and calculate\n        # the difference in how many days apart they were for our output array.\n        # Initialize output array of 0's the size of temperatures array. We use\n        # 0's as default, as if we don't find a warmer day going forward, we are\n        # to return 0 in that position instead.\n        output = [0] * len(temperatures)\n        stack = []\n        # Loop through temperatures, tracking index, i and temperature, temp.\n        for i, temp in enumerate(temperatures):\n            # While the incoming temperature is 'warmer' than the temperature on \n            # top of the stack: We can start popping.\n            # Note our stack values are formatted with tuples in the form:\n            # (index, temperature).\n            while stack and stack[-1][1] < temp:\n                # Pop temperature, tracking its index in temperatures, i2 and\n                # the temperature itself.\n                i2, temp2 = stack.pop()\n                # Add to out output at the index of the popped value, the\n                # difference of the current temperature index, minus popped\n                # value difference. This will be the number of days in between\n                # them.\n                output[i2] = i-i2\n            # Once the top of the stack is either empty or no longer has days\n            # colder than the incoming temperature, we can add our temperature\n            # to the stack.\n            # Again note that we are tracking index, i, and temperature, temp\n            # inside our stack.\n            stack.append((i, temp))\n        # return our output.\n        return output\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);