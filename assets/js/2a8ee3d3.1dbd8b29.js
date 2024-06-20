"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[66156],{67057:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var a=e(85893),i=e(11151);const l={description:"Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/coin-change-2",tags:["Array","Dynamic Programming"]},m="0518 - Coin Change 2 (Medium)",r={id:"0500-0599/coin-change-2-medium",title:"0518 - Coin Change 2 (Medium)",description:"Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/coin-change-2",source:"@site/solutions/0500-0599/0518-coin-change-2-medium.md",sourceDirName:"0500-0599",slug:"/0500-0599/coin-change-2-medium",permalink:"/solutions/0500-0599/coin-change-2-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0518-coin-change-2-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:518,frontMatter:{description:"Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/coin-change-2",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0508 - Most Frequent Subtree Sum (Medium)",permalink:"/solutions/0500-0599/most-frequent-subtree-sum-medium"},next:{title:"0520 - Detect Capital (Easy)",permalink:"/solutions/0500-0599/detect-capital-easy"}},c={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function h(s){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",munderover:"munderover",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...s.components},{SolutionAuthor:e,TabItem:l,Tabs:m}=n;return e||d("SolutionAuthor",!0),l||d("TabItem",!0),m||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"0518---coin-change-2-medium",children:"0518 - Coin Change 2 (Medium)"}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/coin-change-2",children:"https://leetcode.com/problems/coin-change-2"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given an integer array ",(0,a.jsx)(n.code,{children:"coins"})," representing coins of different denominations and an integer ",(0,a.jsx)(n.code,{children:"amount"})," representing a total amount of money."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsx)(n.em,{children:"the number of combinations that make up that amount"}),". If that amount of money cannot be made up by any combination of the coins, return ",(0,a.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You may assume that you have an infinite number of each kind of coin."}),"\n",(0,a.jsxs)(n.p,{children:["The answer is ",(0,a.jsx)(n.strong,{children:"guaranteed"})," to fit into a signed ",(0,a.jsx)(n.strong,{children:"32-bit"})," integer."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: amount = 5, coins = [1,2,5]\nOutput: 4\nExplanation: there are four ways to make up the amount:\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: amount = 3, coins = [2]\nOutput: 0\nExplanation: the amount of 3 cannot be made up just with coins of 2.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: amount = 10, coins = [10]\nOutput: 1\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= coins.length <= 300"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= coins[i] <= 5000"})}),"\n",(0,a.jsxs)(n.li,{children:["All the values of ",(0,a.jsx)(n.code,{children:"coins"})," are ",(0,a.jsx)(n.strong,{children:"unique"}),"."]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"0 <= amount <= 5000"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,a.jsxs)(n.p,{children:["This problem is very similar to ",(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/combination-sum-iv/",children:"0377 - Combination Sum IV (Medium)"}),". The only difference is the order of loops. The reason is that ",(0,a.jsx)(n.code,{children:"(1, 1, 2)"})," and ",(0,a.jsx)(n.code,{children:"(2, 1, 1)"})," are considered different in that problem."]}),"\n",(0,a.jsxs)(n.p,{children:["We can derive the following transition if ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"r"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"e"}),(0,a.jsx)(n.mi,{children:"t"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"target"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]})," is greater or equal to ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"nums[i]"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," where ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"d"}),(0,a.jsx)(n.mi,{children:"p"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"dp[i]"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," represents the number of combinations that sum up to the ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"r"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"e"}),(0,a.jsx)(n.mi,{children:"t"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"target"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]}),"."]}),"\n",(0,a.jsx)(n.span,{className:"katex-display",children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"d"}),(0,a.jsx)(n.mi,{children:"p"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsxs)(n.munderover,{children:[(0,a.jsx)(n.mo,{children:"\u2211"}),(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"0"})]}),(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{children:"\u2212"}),(0,a.jsx)(n.mn,{children:"1"})]})]}),(0,a.jsx)(n.mi,{children:"d"}),(0,a.jsx)(n.mi,{children:"p"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mo,{children:"\u2212"}),(0,a.jsx)(n.mi,{children:"c"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"dp(amount)=\\sum_{i=0}^{n-1} dp(amount - coins[i])"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"am"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mclose",children:")"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"3.0788em",verticalAlign:"-1.2777em"}}),(0,a.jsx)(n.span,{className:"mop op-limits",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsxs)(n.span,{className:"vlist",style:{height:"1.8011em"},children:[(0,a.jsxs)(n.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(n.span,{className:"mord mtight",children:[(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"i"}),(0,a.jsx)(n.span,{className:"mrel mtight",children:"="}),(0,a.jsx)(n.span,{className:"mord mtight",children:"0"})]})})]}),(0,a.jsxs)(n.span,{style:{top:"-3.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(n.span,{children:(0,a.jsx)(n.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,a.jsxs)(n.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(n.span,{className:"mord mtight",children:[(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"}),(0,a.jsx)(n.span,{className:"mbin mtight",children:"\u2212"}),(0,a.jsx)(n.span,{className:"mord mtight",children:"1"})]})})]})]}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"1.2777em"},children:(0,a.jsx)(n.span,{})})})]})}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"am"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"co"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"in"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(n.span,{className:"mclose",children:"])"})]})]})]})}),"\n",(0,a.jsxs)(n.p,{children:["Time Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mo,{children:"\u2217"}),(0,a.jsx)(n.mi,{children:"c"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"e"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"h"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(amount * coins.length)"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"am"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"co"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"in"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mord",children:"."}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})]})]}),". For each coin, we are going to loop through all the values from ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"0"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"})]})})]})," to ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"amount"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"am"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Space Complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(amount)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"am"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),". We are going to create an array of size ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{children:"o"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"t"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"amount"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"am"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]}),"."]}),"\n",(0,a.jsxs)(m,{children:[(0,a.jsxs)(l,{value:"cpp",label:"C++",children:[(0,a.jsx)(e,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int change(int amount, vector<int>& coins) {\n        // let dp[i] be the number of combinations that make up to i\n        vector<uint> dp(amount + 1);\n        // base case\n        dp[0] = 1;\n        for(auto c : coins) {\n            for(int i = 1; i <= amount; i++) {\n                // since we need dp[i - c],\n                // we need to make sure i - c is greater or equal to 0\n                if(i >= c) {\n                    // add the previous result\n                    dp[i] += dp[i - c];\n                }\n            }\n        }\n        return dp.back();\n    }\n};\n"})})]}),(0,a.jsxs)(l,{value:"python",label:"Python",children:[(0,a.jsx)(e,{name:"@ColeB2"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        # initialize dp for all amounts from 0 to amount.\n        dp = [0] * (amount + 1)\n        # initialize base case for amount 0.\n        dp[0] = 1\n        # loop through all the coins\n        for coin in coins:\n            # loop through all the amounts, starting at coin. This\n            # prevents us from having to check if i >= coin.\n            for i in range(coin, amount + 1):\n                # the number of ways we can make each amount is based\n                # of the number of ways we can make the amount at each\n                # amount-coin\n                dp[i] += dp[i - coin]\n        # return final value, dp[-1] would also work.\n        return dp[amount]\n"})})]}),(0,a.jsxs)(l,{value:"js",label:"JavaScript",children:[(0,a.jsx)(e,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/**\n * @param {number} amount\n * @param {number[]} coins\n * @return {number}\n */\nvar change = function (amount, coins) {\n  let dp = new Array(amount + 1).fill(0);\n  dp[0] = 1;\n  for (let coin of coins) {\n    for (let i = coin; i < amount + 1; i++) {\n      dp[i] += dp[i - coin];\n    }\n  }\n  return dp[dp.length - 1];\n};\n"})})]})]})]})}function o(s={}){const{wrapper:n}={...(0,i.a)(),...s.components};return n?(0,a.jsx)(n,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}function d(s,n){throw new Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,n,e)=>{e.d(n,{Z:()=>r,a:()=>m});var a=e(67294);const i={},l=a.createContext(i);function m(s){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function r(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:m(s.components),a.createElement(l.Provider,{value:n},s.children)}}}]);