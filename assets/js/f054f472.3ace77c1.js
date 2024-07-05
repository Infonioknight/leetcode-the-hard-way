"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51095],{97355:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=n(85893),r=n(11151);const t={description:"Author: @wingkwong, @adlet_lee, @jit | https://leetcode.com/problems/find-center-of-star-graph/",tags:["Graph"]},l="1791 - Find Center of Star Graph (Easy)",i={id:"1700-1799/find-center-of-star-graph-easy",title:"1791 - Find Center of Star Graph (Easy)",description:"Author: @wingkwong, @adlet_lee, @jit | https://leetcode.com/problems/find-center-of-star-graph/",source:"@site/solutions/1700-1799/1791-find-center-of-star-graph-easy.md",sourceDirName:"1700-1799",slug:"/1700-1799/find-center-of-star-graph-easy",permalink:"/solutions/1700-1799/find-center-of-star-graph-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1791-find-center-of-star-graph-easy.md",tags:[{inline:!0,label:"Graph",permalink:"/solutions/tags/graph"}],version:"current",sidebarPosition:1791,frontMatter:{description:"Author: @wingkwong, @adlet_lee, @jit | https://leetcode.com/problems/find-center-of-star-graph/",tags:["Graph"]},sidebar:"tutorialSidebar",previous:{title:"1790 - Check if One String Swap Can Make Strings Equal (Easy)",permalink:"/solutions/1700-1799/check-if-one-string-swap-can-make-strings-equal-easy"},next:{title:"1793 - Maximum Score of a Good Subarray (Hard)",permalink:"/solutions/1700-1799/maximum-score-of-a-good-subarray-hard"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Count degrees",id:"approach-1-count-degrees",level:2},{value:"Approach 2: Check the first two edges",id:"approach-2-check-the-first-two-edges",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n,TabItem:t,Tabs:l}=s;return n||o("SolutionAuthor",!0),t||o("TabItem",!0),l||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"1791---find-center-of-star-graph-easy",children:"1791 - Find Center of Star Graph (Easy)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/find-center-of-star-graph/",children:"https://leetcode.com/problems/find-center-of-star-graph/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["There is an undirected ",(0,a.jsx)(s.strong,{children:"star"})," graph consisting of ",(0,a.jsx)(s.code,{children:"n"})," nodes labeled from ",(0,a.jsx)(s.code,{children:"1"})," to ",(0,a.jsx)(s.code,{children:"n"}),". A star graph is a graph where there is one ",(0,a.jsx)(s.strong,{children:"center"})," node and ",(0,a.jsx)(s.strong,{children:"exactly"})," ",(0,a.jsx)(s.code,{children:"n - 1"})," edges that connect the center node with every other node."]}),"\n",(0,a.jsxs)(s.p,{children:["You are given a 2D integer array ",(0,a.jsx)(s.code,{children:"edges"})," where each ",(0,a.jsx)(s.code,{children:"edges[i] = [ui, vi]"})," indicates that there is an edge between the nodes ",(0,a.jsx)(s.code,{children:"ui"})," and ",(0,a.jsx)(s.code,{children:"vi"}),". Return the center of the given star graph."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: edges = [[1,2],[2,3],[4,2]]\nOutput: 2\nExplanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: edges = [[1,2],[5,1],[1,3],[1,4]]\nOutput: 1\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"3 <= n <= 105"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"edges.length == n - 1"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"edges[i].length == 2"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= ui, vi <= n"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"ui != vi"})}),"\n",(0,a.jsxs)(s.li,{children:["The given ",(0,a.jsx)(s.code,{children:"edges"})," represent a valid star graph."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-count-degrees",children:"Approach 1: Count degrees"}),"\n",(0,a.jsxs)(s.p,{children:["Given that there is only one center node and exactly ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n - 1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," edges that connect the center node with every other node, we can iterate each edge and count the degree. The number of degrees for the center node will be ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]}),"."]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsxs)(t,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def findCenter(self, edges: List[List[int]]) -> int:\n        n = len(edges)\n        d = defaultdict(int)\n        # iterate each edge and count the degree\n        for edge in edges:\n            d[edge[0]] += 1\n            d[edge[1]] += 1\n        # search for the center node\n        for k, v in d.items():\n            if v == n:\n                return k\n        # based on the constraints,\n        # it won't reach here\n        return -1\n"})})]}),(0,a.jsxs)(t,{value:"java",label:"Java",children:[(0,a.jsx)(n,{name:"@adlet_lee"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"class Solution {\n    public int findCenter(int[][] edges) {\n        var edgesCnt = new HashMap<Integer, Integer>();\n        for(int i = 0; i < edges.length; ++i){\n            edgesCnt.put(edges[i][0], edgesCnt.getOrDefault(edges[i][0], 0)+1);\n            edgesCnt.put(edges[i][1], edgesCnt.getOrDefault(edges[i][1], 0)+1);\n        }\n        for(var edgeCnt : edgesCnt.entrySet()){\n            if(edgeCnt.getValue() == edgesCnt.size()-1) return edgeCnt.getKey();\n        }\n        return -1;\n    }\n}\n"})})]})]}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-check-the-first-two-edges",children:"Approach 2: Check the first two edges"}),"\n",(0,a.jsxs)(s.p,{children:["Since center node will exist in each edge, we can simply check the first two edges. If ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"edges[0][0]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," is equal to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"edges[1][0]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," or ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"edges[1][1]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", then ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"edges[0][0]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," is the center node. Otherwise, ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"edges[0][1]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," must be the center node given the problem statement."]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsxs)(t,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def findCenter(self, edges: List[List[int]]) -> int:\n        #\n        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:\n            return edges[0][0]\n        return edges[0][1]\n"})})]}),(0,a.jsxs)(t,{value:"racket",label:"Racket",children:[(0,a.jsx)(n,{name:"@jit"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-racket",children:"(define (find-center edges)\n  (car (set-intersect (car edges) (cadr edges))))\n"})})]})]})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var a=n(67294);const r={},t=a.createContext(r);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);