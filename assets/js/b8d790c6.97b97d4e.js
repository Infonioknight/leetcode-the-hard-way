"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85128],{45004:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=n(85893),i=n(11151);const l={description:"Authors: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/"},t="2167 - Minimum Time to Remove All Cars Containing Illegal Goods (Hard)",m={id:"2100-2199/minimum-time-to-remove-all-cars-containing-illegal-goods-hard",title:"2167 - Minimum Time to Remove All Cars Containing Illegal Goods (Hard)",description:"Authors: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/",source:"@site/solutions/2100-2199/2167-minimum-time-to-remove-all-cars-containing-illegal-goods-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-time-to-remove-all-cars-containing-illegal-goods-hard",permalink:"/solutions/2100-2199/minimum-time-to-remove-all-cars-containing-illegal-goods-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2167-minimum-time-to-remove-all-cars-containing-illegal-goods-hard.md",tags:[],version:"current",sidebarPosition:2167,frontMatter:{description:"Authors: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/"},sidebar:"tutorialSidebar",previous:{title:"2166 - Design Bitset (Medium)",permalink:"/solutions/2100-2199/design-bitset-medium"},next:{title:"2169 - Count Operations to Obtain Zero (Easy)",permalink:"/solutions/2100-2199/count-operations-to-obtain-zero-easy"}},r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Minimum Sum of Subarray",id:"approach-1-minimum-sum-of-subarray",level:2},{value:"Approach 2: Dynamic Programming",id:"approach-2-dynamic-programming",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"2167---minimum-time-to-remove-all-cars-containing-illegal-goods-hard",children:"2167 - Minimum Time to Remove All Cars Containing Illegal Goods (Hard)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/",children:"https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["You are given a ",(0,a.jsx)(s.strong,{children:"0-indexed"})," binary string ",(0,a.jsx)(s.code,{children:"s"})," which represents a sequence of train cars. ",(0,a.jsx)(s.code,{children:"s[i] = '0'"})," denotes that the ",(0,a.jsx)(s.code,{children:"ith"})," car does ",(0,a.jsx)(s.strong,{children:"not"})," contain illegal goods and ",(0,a.jsx)(s.code,{children:"s[i] = '1'"})," denotes that the ",(0,a.jsx)(s.code,{children:"ith"})," car does contain illegal goods."]}),"\n",(0,a.jsxs)(s.p,{children:["As the train conductor, you would like to get rid of all the cars containing illegal goods. You can do any of the following three operations ",(0,a.jsx)(s.strong,{children:"any"})," number of times:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Remove a train car from the ",(0,a.jsx)(s.strong,{children:"left"})," end (i.e., remove ",(0,a.jsx)(s.code,{children:"s[0]"}),") which takes 1 unit of time."]}),"\n",(0,a.jsxs)(s.li,{children:["Remove a train car from the ",(0,a.jsx)(s.strong,{children:"right"})," end (i.e., remove ",(0,a.jsx)(s.code,{children:"s[s.length - 1]"}),") which takes 1 unit of time."]}),"\n",(0,a.jsxs)(s.li,{children:["Remove a train car from ",(0,a.jsx)(s.strong,{children:"anywhere"})," in the sequence which takes 2 units of time."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Return ",(0,a.jsxs)(s.em,{children:["the ",(0,a.jsx)(s.strong,{children:"minimum"})," time to remove all the cars containing illegal goods"]}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Note that an empty sequence of cars is considered to have no cars containing illegal goods."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: s = "1100101"\nOutput: 5\nExplanation: \nOne way to remove all the cars containing illegal goods from the sequence is to\n- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.\n- remove a car from the right end. Time taken is 1.\n- remove the car containing illegal goods found in the middle. Time taken is 2.\nThis obtains a total time of 2 + 1 + 2 = 5. \n\nAn alternative way is to\n- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.\n- remove a car from the right end 3 times. Time taken is 3 * 1 = 3.\nThis also obtains a total time of 2 + 3 = 5.\n\n5 is the minimum time taken to remove all the cars containing illegal goods. \nThere are no other ways to remove them with less time.\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: s = "0010"\nOutput: 2\nExplanation:\nOne way to remove all the cars containing illegal goods from the sequence is to\n- remove a car from the left end 3 times. Time taken is 3 * 1 = 3.\nThis obtains a total time of 3.\n\nAnother way to remove all the cars containing illegal goods from the sequence is to\n- remove the car containing illegal goods found in the middle. Time taken is 2.\nThis obtains a total time of 2.\n\nAnother way to remove all the cars containing illegal goods from the sequence is to \n- remove a car from the right end 2 times. Time taken is 2 * 1 = 2. \nThis obtains a total time of 2.\n\n2 is the minimum time taken to remove all the cars containing illegal goods. \nThere are no other ways to remove them with less time.\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= s.length <= 2 * 10^5"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"s[i]"})," is either ",(0,a.jsx)(s.code,{children:"'0'"})," or ",(0,a.jsx)(s.code,{children:"'1'"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-minimum-sum-of-subarray",children:"Approach 1: Minimum Sum of Subarray"}),"\n",(0,a.jsxs)(s.p,{children:["We note that our goal is to ",(0,a.jsx)(s.strong,{children:"minimize"})," the following:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"totalCost = left + right + mid(1) * 2"})}),"\n",(0,a.jsxs)(s.p,{children:["Where ",(0,a.jsx)(s.em,{children:"mid(1)"})," denotes the number of 1s in the middle part, and ",(0,a.jsx)(s.em,{children:"mid(0)"})," denotes the number of 0s in the middle part."]}),"\n",(0,a.jsxs)(s.p,{children:["We can calculate ",(0,a.jsx)(s.em,{children:"mid(1)"})," in the following way:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"mid - mid(0)"})}),"\n",(0,a.jsx)(s.p,{children:"So our new equation becomes:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"totalCost = left + right + 2 * (mid - mid(0)) = left + right + mid + (mid - mid(0)) - mid(0)"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"totalCost = all + mid(1) - mid(0)"})}),"\n",(0,a.jsxs)(s.p,{children:["As all is a constant, we need to ",(0,a.jsx)(s.strong,{children:"minimize"})," ",(0,a.jsx)(s.em,{children:"mid(1) - mid(0)"})]}),"\n",(0,a.jsx)(s.p,{children:"This becomes a minimum sum of subarray problem when we substitute -1 to 0 in the original input."}),"\n",(0,a.jsx)(s.p,{children:"The rest of the problem becomes a classic subarray sum problem."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:'def minimumTime(self, s: str) -> int:\n        \n        #initialize currentValue and smallest\n        currentValue = 0\n        smallest = 0\n        \n        #iterate all characters\n        for c in s:\n            \n            #separate the cases of 0 and 1\n            if(c == "0"):\n                \n                #-1 if it is 0\n                currentValue -= 1\n                \n                #update smallest subarray sum including current value\n                currentValue = min(-1, currentValue)\n                \n                #update smallest\n                smallest = min(smallest, currentValue)\n            else:\n                \n                #add 1 if it is 1\n                currentValue += 1\n        \n        #return result based on formula\n        return len(s) + smallest\n'})}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-dynamic-programming",children:"Approach 2: Dynamic Programming"}),"\n",(0,a.jsxs)(s.p,{children:["Let ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp1[i]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," be the time you need to take from the left to to index ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"j"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp2[j]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," be the time you need to take from the right to to index ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"j"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"."]}),"\n",(0,a.jsx)(s.p,{children:"For each index, we have three options."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["remove from the left and contribute ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," time"]}),"\n",(0,a.jsxs)(s.li,{children:["remove from the middle and contribute ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp1[i - 1] + 2"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})]})]})," or ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp2[i + 1] + 2"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})]})]})," time if applicable."]}),"\n",(0,a.jsxs)(s.li,{children:["remove from the right and contribute ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"i"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n - i"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})]})]})," time"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Let's think about the case from the left to right, the transition is"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["if the character is 0, it doesn't contribute anything, so we take the previous state. ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:":"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp1[i] := dp1[i - 1]"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:":="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})]})]})]}),"\n",(0,a.jsxs)(s.li,{children:["if the character is 1, we can either take ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," or ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp1[i - 1] + 2"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})]})]}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["For ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp2"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})})]}),", we need to do it in reverse order. We can reverse the string and perform the same logic. At the end, the answer is to find the minimum value from ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp1[i] + dp2[n - i]"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})]})]}),"."]}),"\n",(0,a.jsx)(n,{name:"@wingkwong"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimumTime(string s) {\n        int n = s.size(), ans = 1e9;\n        // dp1: min time to take from left to right\n        // dp2: min time to take from right to left\n        vector<int> dp1(n + 1), dp2(n + 1);\n        for (int i = 1; i <= n; i++) {\n            // if it is 0, then take the previous state\n            // if not, remove from the left or remove from the middle directly\n            if (s[i - 1] == '0') dp1[i] = dp1[i - 1];\n            else dp1[i] = min(i, dp1[i - 1] + 2);\n        }\n        // reverse the string and apply the same logic on dp2\n        reverse(s.begin(), s.end());\n        for (int i = 1; i <= n; i++) {\n            if (s[i - 1] == '0') dp2[i] = dp2[i - 1];\n            else dp2[i] = min(i, dp2[i - 1] + 2);\n        }\n        for (int i = 0; i <= n; i++) {\n            // dp1 + dp2: cover those three options\n            ans = min(ans, dp1[i] + dp2[n - i]);\n        }\n        return ans;\n    }\n};\n"})})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>m,a:()=>t});var a=n(67294);const i={},l=a.createContext(i);function t(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function m(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);