"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[38290],{69902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const a={description:"Author: @hirotake111 | https://leetcode.com/problems/gas-station/"},o="0134 - Gas Station (Medium)",r={id:"0100-0199/gas-station-medium",title:"0134 - Gas Station (Medium)",description:"Author: @hirotake111 | https://leetcode.com/problems/gas-station/",source:"@site/solutions/0100-0199/0134-gas-station-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/gas-station-medium",permalink:"/solutions/0100-0199/gas-station-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0134-gas-station-medium.md",tags:[],version:"current",sidebarPosition:134,frontMatter:{description:"Author: @hirotake111 | https://leetcode.com/problems/gas-station/"},sidebar:"tutorialSidebar",previous:{title:"0133 - Clone Graph (Medium)",permalink:"/solutions/0100-0199/clone-graph-medium"},next:{title:"0136 - Single Number (Easy)",permalink:"/solutions/0100-0199/single-number-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3}];function h(e){const t={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:o}=t;return n||m("SolutionAuthor",!0),a||m("TabItem",!0),o||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"0134---gas-station-medium",children:"0134 - Gas Station (Medium)"}),"\n",(0,s.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/gas-station/",children:"https://leetcode.com/problems/gas-station/"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(t.p,{children:["There are ",(0,s.jsx)(t.code,{children:"n"})," gas stations along a circular route, where the amount of gas at the ",(0,s.jsx)(t.code,{children:"ith"})," station is ",(0,s.jsx)(t.code,{children:"gas[i]"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You have a car with an unlimited gas tank and it costs ",(0,s.jsx)(t.code,{children:"cost[i]"})," of gas to travel from the ",(0,s.jsx)(t.code,{children:"ith"})," station to its next ",(0,s.jsx)(t.code,{children:"(i + 1)th"})," station. You begin the journey with an empty tank at one of the gas stations."]}),"\n",(0,s.jsxs)(t.p,{children:["Given two integer arrays ",(0,s.jsx)(t.code,{children:"gas"})," and ",(0,s.jsx)(t.code,{children:"cost"}),", return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return ",(0,s.jsx)(t.code,{children:"-1"}),". If there exists a solution, it is guaranteed to be unique"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\nOutput: 3\nExplanation:\nStart at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: gas = [2,3,4], cost = [3,4,3]\nOutput: -1\nExplanation:\nYou can't start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can't travel around the circuit once no matter where you start.\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"n == gas.length == cost.length"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"1 <= n <= 10^5"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"0 <= gas[i], cost[i] <= 10^4"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"approach-1-two-pointers",children:"Approach 1: Two Pointers"}),"\n",(0,s.jsx)(t.p,{children:"This approach includes 2 steps as follows:"}),"\n",(0,s.jsx)(t.h3,{id:"step-1",children:"Step 1"}),"\n",(0,s.jsxs)(t.p,{children:["In the first place we can compare the sum of gas and the sum of cost. If the sum of cost is greater than the sum of gas, we can say there is no way to travel around the circuit with given input. Therefore return ",(0,s.jsx)(t.code,{children:"-1"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"step-2",children:"Step 2"}),"\n",(0,s.jsxs)(t.p,{children:["Since we passed step 1 with given input, now we are sure there is at least one possible solution (starting index). And according to the problem description, there is only ONE.\nAt this point the only thing we need to do is to find the index which the sum of (",(0,s.jsx)(t.code,{children:"gas[i]"})," - ",(0,s.jsx)(t.code,{children:"cost[i]"}),") is always positive for the rest of input (",(0,s.jsx)(t.code,{children:"gas"})," and ",(0,s.jsx)(t.code,{children:"cost"}),")."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Time Complexity: ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mi,{children:"n"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,s.jsxs)(t.li,{children:["Space Complexity: ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsxs)(t.mrow,{children:[(0,s.jsx)(t.mi,{children:"O"}),(0,s.jsx)(t.mo,{stretchy:"false",children:"("}),(0,s.jsx)(t.mn,{children:"1"}),(0,s.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(t.span,{className:"mopen",children:"("}),(0,s.jsx)(t.span,{className:"mord",children:"1"}),(0,s.jsx)(t.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(a,{value:"py",label:"Python",children:[(0,s.jsx)(n,{name:"@hirotake111"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:"class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        total_gas = -1\n        starting_index = -1\n\n        if sum(gas) - sum(cost) < 0:\n            return -1\n        # Now we are sure that there is at least ONE solution in this input\n        # (And according to the problem description, there is only ONE.)\n\n        for i, diff in enumerate([g - c for g, c in zip(gas, cost)]):\n            # If total gas is less than 0 we will seak next index that has a positive diff\n            if total_gas < 0:\n                if 0 <= diff:\n                    # We found the new index that has a positive diff\n                    # Update total gas and index\n                    total_gas = diff\n                    starting_index = i\n                continue\n\n            # total gas is positive - add diff to the total\n            total_gas += diff\n\n        return starting_index\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);