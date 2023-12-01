"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78867],{35628:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>m});var n=e(85893),r=e(11151);const l={description:"Author: @ColeB2 | https://leetcode.com/problems/hand-of-straights/",tags:["Array","Hash Table","Greedy","Sorting"]},i="0846 - Hand of Straights (Medium)",t={id:"0800-0899/hand-of-straights-medium",title:"0846 - Hand of Straights (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/hand-of-straights/",source:"@site/solutions/0800-0899/0846-hand-of-straights-medium.md",sourceDirName:"0800-0899",slug:"/0800-0899/hand-of-straights-medium",permalink:"/solutions/0800-0899/hand-of-straights-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0846-hand-of-straights-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Greedy",permalink:"/solutions/tags/greedy"},{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:846,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/hand-of-straights/",tags:["Array","Hash Table","Greedy","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0844 - Backspace String Compare (Easy)",permalink:"/solutions/0800-0899/backspace-string-compare-easy"},next:{title:"0847 - Shortest Path Visiting All Nodes (Hard)",permalink:"/solutions/0800-0899/shortest-path-visiting-all-nodes-hard"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy using Sorting and a Hash Map.",id:"approach-1-greedy-using-sorting-and-a-hash-map",level:2}];function h(s){const a={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...s.components},{SolutionAuthor:e,TabItem:l,Tabs:i}=a;return e||o("SolutionAuthor",!0),l||o("TabItem",!0),i||o("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"0846---hand-of-straights-medium",children:"0846 - Hand of Straights (Medium)"}),"\n",(0,n.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/hand-of-straights/",children:"https://leetcode.com/problems/hand-of-straights/"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(a.p,{children:["Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size ",(0,n.jsx)(a.code,{children:"groupSize"}),", and consists of ",(0,n.jsx)(a.code,{children:"groupSize"})," consecutive cards."]}),"\n",(0,n.jsxs)(a.p,{children:["Given an integer array ",(0,n.jsx)(a.code,{children:"hand"})," where ",(0,n.jsx)(a.code,{children:"hand[i]"})," is the value written on the ",(0,n.jsx)(a.code,{children:"ith"})," card and an integer ",(0,n.jsx)(a.code,{children:"groupSize"}),", return ",(0,n.jsx)(a.code,{children:"true"})," if she can rearrange the cards, or ",(0,n.jsx)(a.code,{children:"false"})," otherwise."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3\nOutput: true\nExplanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: hand = [1,2,3,4,5], groupSize = 4\nOutput: false\nExplanation: Alice's hand can not be rearranged into groups of 4.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= hand.length <= 10^4"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"0 <= hand[i] <= 10^9"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= groupSize <= hand.length"})}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Note"}),": This question is the same as 1296: ",(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/",children:"https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/"})]}),"\n",(0,n.jsx)(a.h2,{id:"approach-1-greedy-using-sorting-and-a-hash-map",children:"Approach 1: Greedy using Sorting and a Hash Map."}),"\n",(0,n.jsxs)(a.p,{children:["Breaking down this problem, it would be efficient to access the cards in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})," time, so a hash map to keep track of the count of cards will be of use."]}),"\n",(0,n.jsxs)(a.p,{children:["We also know that given a number, it can be potentially used in a multitude of ways, for example, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"3"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"})]})})]}),", could be used in the group ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"2"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"3"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1,2,3"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"})]})})]}),", group ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"2"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"3"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"4"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"2,3,4"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"4"})]})})]})," and/or group ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"3"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"4"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"5"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"3,4,5"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"4"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"5"})]})})]})," assuming a ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"groupSize"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ro"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"pS"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ze"})]})})]})," of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"3"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"})]})})]}),". This is where our greedy approach comes in. If we sort our cards and start with the smallest group first, we can eliminate cards and create our groups that way."]}),"\n",(0,n.jsxs)(a.p,{children:["For example, if our next card in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"d"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"hand"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"han"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"d"})]})})]})," is ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"2"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"})]})})]})," and our ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mi,{children:"e"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"groupSize"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ro"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"pS"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ze"})]})})]})," is ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"3"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"})]})})]}),", we know ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"2"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"})]})})]})," can only appear in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"2"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"3"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"4"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"2,3,4"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"4"})]})})]})," as since we have a sorted list of cards, and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"2"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"})]})})]})," is the smallest that it can't appear in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"2"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"3"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1,2,3"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"})]})})]})," so by using a sorted list, we can be Greedy with our approach, and only select cards starting with the smallest if they exist, and checking our card counter hash map if ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"d"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"i"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"card + i"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})]})]})," exists from ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"i"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})," ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"z"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 to groupSize - 1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ro"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"pS"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"ze"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Time Complexity ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(nlogn)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})," we will have to sort our input in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"n"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nlogn"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]})," time."]}),"\n",(0,n.jsxs)(a.p,{children:["Space Complexity: ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})," for our card counter hash map."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(l,{value:"python",label:"Python",children:[(0,n.jsx)(e,{name:"@ColeB2"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"class Solution:\n    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:\n        # base case, if we can't make even number of groups, return False.\n        if len(hand) % groupSize != 0:\n            return False\n        # create a hash map counter of each card, so we can check if we\n        # have enough cards to utilize in O(1) time.\n        card_count = Counter(hand)\n        # reverse sort our hand, so we can pop from the hand in O(1) time.\n        hand.sort(reverse=True)\n        # while we have cards in our hand\n        while hand:\n            # pop the initial card from our hand.\n            card = hand.pop()\n            # if the card we popped was already used in previous\n            # iterations and its count reached 0, we can continue.\n            if not card_count[card]:\n                continue\n            # update our card count of the card we popped.\n            card_count[card] -= 1\n            # check the cards, card + i, from 1 to group size.\n            # example card 1 and groupSize 4, check cards 2, 3, 4.\n            for i in range(1, groupSize):\n                # set what our new card we want to search for is.\n                new_card = card + i\n                # if the card exists in our hash map counter:\n                if card_count[new_card]:\n                    # use that card, and decrement its count by one.\n                    card_count[new_card] -= 1\n                else:\n                    # card no longer has a count > 0 in hash map. Then\n                    # we ran out of cards, and can return false.\n                    return False\n        # if we make it through the above loop, it means we could make\n        # enough groupings of cards and can return True.\n        return True\n"})})]})})]})}function d(s={}){const{wrapper:a}={...(0,r.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function o(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,a,e)=>{e.d(a,{Z:()=>t,a:()=>i});var n=e(67294);const r={},l=n.createContext(r);function i(s){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function t(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:i(s.components),n.createElement(l.Provider,{value:a},s.children)}}}]);