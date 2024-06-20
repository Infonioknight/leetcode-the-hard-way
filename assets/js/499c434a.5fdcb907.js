"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[84810],{22828:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,suggestedProblems:()=>o,toc:()=>m});var a=n(85893),t=n(11151);const i={title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","backtracking","algorithm"]},r=void 0,c={id:"basic-topics/backtracking",title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",source:"@site/tutorials/basic-topics/backtracking.md",sourceDirName:"basic-topics",slug:"/basic-topics/backtracking",permalink:"/tutorials/basic-topics/backtracking",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/backtracking.md",tags:[],version:"current",frontMatter:{title:"Backtracking",description:"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","backtracking","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/tutorials/basic-topics/arrays"},next:{title:"Binary Search",permalink:"/tutorials/basic-topics/binary-search"}},l={},o=[{problemName:"0039 - Combination Sum",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/combination-sum/",solutionLink:"../../solutions/0000-0099/combination-sum-medium"},{problemName:"0040 - Combination Sum II",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/combination-sum-ii/",solutionLink:"../../solutions/0000-0099/combination-sum-ii-medium"},{problemName:"0046 - Permutations",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/permutations/",solutionLink:"../../solutions/0000-0099/permutations-medium"},{problemName:"0078 - Subsets",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/subsets/",solutionLink:"../../solutions/0000-0099/subsets-medium"}],m=[{value:"Overview",id:"overview",level:2},{value:"Example: 0046 - Permutations (Medium)",id:"example-0046---permutations-medium",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Table:n,TutorialAuthors:i}=s;return n||p("Table",!0),i||p("TutorialAuthors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{names:"@wingkwong"}),"\n",(0,a.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(s.p,{children:'Backtracking is a general algorithmic technique that involves exploring all possible solutions to a problem by incrementally building a solution and then undoing (or "backtracking" on) the choices that lead to dead ends. It is a form of depth-first search and is particularly useful for solving problems that involve searching through a large number of possibilities, such as finding all possible solutions to a problem or finding the one solution that satisfies a set of constraints.'}),"\n",(0,a.jsx)(s.p,{children:"The steps for using backtracking to solve a problem are as follows:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Understand the problem and its requirements by reading the problem statement and examples."}),"\n",(0,a.jsx)(s.li,{children:"Develop a recursive algorithm that incrementally builds a solution and backtracks when a dead end is reached."}),"\n",(0,a.jsx)(s.li,{children:"Define a base case for the recursion that indicates when a complete solution has been found, and a terminating condition that indicates when to stop the recursion."}),"\n",(0,a.jsx)(s.li,{children:"Test the solution on the provided test cases to check if it works correctly and returns the expected output."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Backtracking can be used for various of problems such as:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Generating all possible combinations of a set of items."}),"\n",(0,a.jsx)(s.li,{children:"Finding all possible solutions to a problem"}),"\n",(0,a.jsx)(s.li,{children:"Finding a specific solution that satisfies a set of constraints."}),"\n",(0,a.jsx)(s.li,{children:"Solving puzzles or other combinatorial problems"}),"\n",(0,a.jsx)(s.li,{children:"And many more"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Backtracking can be very inefficient, especially when the number of possible solutions or the size of the input is large. Therefore, it is important to carefully analyze the problem and develop an efficient backtracking algorithm."}),"\n",(0,a.jsxs)(s.h2,{id:"example-0046---permutations-medium",children:["Example: ",(0,a.jsx)(s.a,{href:"../../solutions/0000-0099/permutations-medium",children:"0046 - Permutations (Medium)"})]}),"\n",(0,a.jsxs)(s.p,{children:["If we have an array ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"s"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]})," of distinct integers, what are all the possible permutations? If the input is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"[1,2,3]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", then the permutations would be ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"[["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:"]]"})]})})]}),". In C++, it is easy to solve this problem by using the built-in STL ",(0,a.jsx)(s.strong,{children:"next_permutation"}),". However, we can also solve it using backtracking."]}),"\n",(0,a.jsx)(s.p,{children:"The general steps are as follows."}),"\n",(0,a.jsx)(s.p,{children:"1. Sort the input array if necessary. However, in this example, sorting is not necessary."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"sort(nums.begin(), nums.end());\n"})}),"\n",(0,a.jsxs)(s.p,{children:["2. Define ",(0,a.jsx)(s.code,{children:"ans"})," and ",(0,a.jsx)(s.code,{children:"tmp"})," where ",(0,a.jsx)(s.code,{children:"ans"})," is the array storing all final permutations and ",(0,a.jsx)(s.code,{children:"tmp"})," is used to store possible permutations at some point."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"vector<vector<int>> ans;\nvector<int> tmp;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["3. Call ",(0,a.jsx)(s.code,{children:"backtrack()"})," function in main"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"backtrack(nums, ans, tmp);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["4. Let's add logic in ",(0,a.jsx)(s.code,{children:"backtrack()"})," function. First we need to define the exit criteria. When should we push ",(0,a.jsx)(s.code,{children:"tmp"})," to ",(0,a.jsx)(s.code,{children:"ans"}),"? If ",(0,a.jsx)(s.code,{children:"tmp"})," already got enough candidates, then we can push ",(0,a.jsx)(s.code,{children:"tmp"})," to ",(0,a.jsx)(s.code,{children:"ans"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"if ((int) tmp.size() == (int) nums.size()) {\n    ans.push_back(tmp);\n    return;\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["5. Iterate each number, check If the candidate has been used or not, skip it if it is already in ",(0,a.jsx)(s.code,{children:"tmp"}),". Otherwise, push it to ",(0,a.jsx)(s.code,{children:"tmp"})," and call ",(0,a.jsx)(s.code,{children:"backtrack()"})," again. After that, remove the previous candidate from ",(0,a.jsx)(s.code,{children:"tmp"})," and move to the next candidate."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"for (auto x : nums) {\n    if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;\n    tmp.push_back(x);\n    backtrack(nums, ans, tmp);\n    tmp.pop_back();   \n}\n"})}),"\n","\n",(0,a.jsx)(n,{title:"Suggested Problems",data:o})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>r});var a=n(67294);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);