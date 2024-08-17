"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30439],{33002:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>m});var a=s(85893),t=s(11151);const c={description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/"},i="1833 - Maximum Ice Cream Bars (Medium)",r={id:"1800-1899/maximum-ice-cream-bars-medium",title:"1833 - Maximum Ice Cream Bars (Medium)",description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/",source:"@site/solutions/1800-1899/1833-maximum-ice-cream-bars-medium.md",sourceDirName:"1800-1899",slug:"/1800-1899/maximum-ice-cream-bars-medium",permalink:"/solutions/1800-1899/maximum-ice-cream-bars-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1833-maximum-ice-cream-bars-medium.md",tags:[],version:"current",sidebarPosition:1833,frontMatter:{description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/"},sidebar:"tutorialSidebar",previous:{title:"1823 - Find the Winner of the Circular Game (Medium)",permalink:"/solutions/1800-1899/find-the-winner-of-the-circular-game-medium"},next:{title:"1851 - Minimum Interval to Include Each Query",permalink:"/solutions/1800-1899/minimum-interval-to-include-each-query-hard"}},o={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Frequency",id:"approach-1-frequency",level:2}];function l(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:s,TabItem:c,Tabs:i}=n;return s||d("SolutionAuthor",!0),c||d("TabItem",!0),i||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"1833---maximum-ice-cream-bars-medium",children:"1833 - Maximum Ice Cream Bars (Medium)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-ice-cream-bars/",children:"https://leetcode.com/problems/maximum-ice-cream-bars/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsx)(n.p,{children:"It is a sweltering summer day, and a boy wants to buy some ice cream bars."}),"\n",(0,a.jsxs)(n.p,{children:["At the store, there are ",(0,a.jsx)(n.code,{children:"n"})," ice cream bars. You are given an array ",(0,a.jsx)(n.code,{children:"costs"})," of length ",(0,a.jsx)(n.code,{children:"n"}),", where ",(0,a.jsx)(n.code,{children:"costs[i]"})," is the price of the ",(0,a.jsx)(n.code,{children:"ith"})," ice cream bar in coins. The boy initially has ",(0,a.jsx)(n.code,{children:"coins"})," coins to spend, and he wants to buy as many ice cream bars as possible."]}),"\n",(0,a.jsxs)(n.p,{children:["Return the maximum number of ice cream bars the boy can buy with ",(0,a.jsx)(n.code,{children:"coins"})," coins."]}),"\n",(0,a.jsx)(n.p,{children:"Note: The boy can buy the ice cream bars in any order."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: costs = [1,3,2,4,1], coins = 7\nOutput: 4\nExplanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: costs = [10,6,8,7,7,8], coins = 5\nOutput: 0\nExplanation: The boy cannot afford any of the ice cream bars.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: costs = [1,6,3,1,2,5], coins = 20\nOutput: 6\nExplanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"costs.length == n"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= costs[i] <= 10^5"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= coins <= 10^8"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-frequency",children:"Approach 1: Frequency"}),"\n",(0,a.jsxs)(n.p,{children:["Time Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{children:"+"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n + m)"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"+"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})]})]})," ",(0,a.jsxs)("sub",{children:["(where ",(0,a.jsx)(n.code,{children:"n"}),": length of costs, ",(0,a.jsx)(n.code,{children:"m"}),": maximum value among ",(0,a.jsx)(n.code,{children:"costs"}),")"]}),"\nSpace Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(m)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," ",(0,a.jsxs)("sub",{children:["(where ",(0,a.jsx)(n.code,{children:"m"}),": maximum value among ",(0,a.jsx)(n.code,{children:"costs"}),")"]})]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(c,{value:"py",label:"Python",children:[(0,a.jsx)(s,{name:"@hirotake111"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def maxIceCream(self, costs: List[int], coins: int) -> int:\n        # Fill in the list of frequency\n        # Each index is cost of icecream - so the length must be max(costs) + 1\n        freq = [0] * (max(costs) + 1)\n        answer = 0\n\n        # Count each cost's frequency\n        for cost in costs:\n            freq[cost] += 1\n\n        for cost, amount in enumerate(freq):\n            # If frequency is 0, skip it\n            if freq[cost] == 0:\n                continue\n            # If cost * amount is less than coins,\n            # simply decrease the coins by cost * amount\n            if cost * amount <= coins:\n                coins -= cost * amount\n                answer += amount\n                continue\n            # At this point we can't buy amount * cost\n            # So coins // cost should be the amount of icecream we can buy\n            answer += coins // cost\n            # And don't forget to exit loop (as we can't buy icecreams anymore)\n            break\n\n        return answer\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var a=s(67294);const t={},c=a.createContext(t);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);