"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[75548],{93568:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=s(85893),a=s(11151);const i={description:"Author: @vigneshshiv, @wingkwong | https://leetcode.com/problems/happy-number/",tags:["Array","Math","Two Pointers"]},l="0202 - Happy Number (Easy)",r={id:"0200-0299/happy-number-easy",title:"0202 - Happy Number (Easy)",description:"Author: @vigneshshiv, @wingkwong | https://leetcode.com/problems/happy-number/",source:"@site/solutions/0200-0299/0202-happy-number-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/happy-number-easy",permalink:"/solutions/0200-0299/happy-number-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0202-happy-number-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Math",permalink:"/solutions/tags/math"},{inline:!0,label:"Two Pointers",permalink:"/solutions/tags/two-pointers"}],version:"current",sidebarPosition:202,frontMatter:{description:"Author: @vigneshshiv, @wingkwong | https://leetcode.com/problems/happy-number/",tags:["Array","Math","Two Pointers"]},sidebar:"tutorialSidebar",previous:{title:"0200 - Number of Islands (Medium)",permalink:"/solutions/0200-0299/number-of-islands-medium"},next:{title:"0204 - Count Primes",permalink:"/solutions/0200-0299/count-primes"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Floyd&#39;s Tortoise and Hare",id:"approach-1-floyds-tortoise-and-hare",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:l}=n;return s||d("SolutionAuthor",!0),i||d("TabItem",!0),l||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0202---happy-number-easy",children:"0202 - Happy Number (Easy)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/happy-number/",children:"https://leetcode.com/problems/happy-number/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Write an algorithm to determine if a number ",(0,t.jsx)(n.code,{children:"n"})," is happy."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"happy number"})," is a number defined by the following process:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Starting with any positive integer, replace the number by the sum of the squares of its digits."}),"\n",(0,t.jsxs)(n.li,{children:["Repeat the process until the number equals 1 (where it will stay), or it ",(0,t.jsx)(n.strong,{children:"loops endlessly in a cycle"})," which does not include 1."]}),"\n",(0,t.jsxs)(n.li,{children:["Those numbers for which this process ",(0,t.jsx)(n.strong,{children:"ends in 1"})," are happy."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.code,{children:"true"})," ",(0,t.jsx)(n.em,{children:"if"})," ",(0,t.jsx)(n.code,{children:"n"})," ",(0,t.jsx)(n.em,{children:"is a happy number, and"})," ",(0,t.jsx)(n.code,{children:"false"})," ",(0,t.jsx)(n.em,{children:"if not"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: n = 19\nOutput: true\nExplanation:\n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: n = 2\nOutput: false\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= n <= 2^31 - 1"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-floyds-tortoise-and-hare",children:"Approach 1: Floyd's Tortoise and Hare"}),"\n",(0,t.jsxs)(n.p,{children:["As stated clearly in the problem, ",(0,t.jsx)(n.strong,{children:"loops endlessly in a cycle"}),", So we can solve this by using Floyd's Tortoise and Hare algorithm."]}),"\n",(0,t.jsx)(n.p,{children:"It's a simple cycle detection algorithm, where one pointer traverses twice as fast as another, once two pointers meet, we can trace back to where the cycle begins."}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"m"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(m)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"m"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," - # of cycles"]}),"\n",(0,t.jsxs)(n.p,{children:["Space complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(s,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public boolean isHappy(int n) {\n        int slow = n, fast = n;\n        do {\n            slow = digitSquareSum(slow);\n            fast = digitSquareSum(digitSquareSum(fast));\n        } while (slow != fast);\n        return slow == 1 ? true : false;\n    }\n    \n    public int digitSquareSum(int num) {\n        int ans = 0;\n        while (num > 0) {\n            int digit = num % 10;\n            ans += digit * digit;\n            num /= 10;\n        }\n        return ans;\n    }\n}\n"})})]}),(0,t.jsxs)(i,{value:"rs",label:"Rust",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rs",children:"impl Solution {\n    fn nxt(mut n: i32) -> i32 {\n        let mut res = 0;\n        while n > 0 {\n            let d = n % 10;\n            res += d * d;\n            n /= 10;\n        }\n        res\n    }\n    \n    pub fn is_happy(n: i32) -> bool {\n        let mut slow = n;\n        let mut fast = Solution::nxt(n);\n        while fast != 1 && slow != fast {\n            slow = Solution::nxt(slow);\n            fast = Solution::nxt(Solution::nxt(fast));\n        }\n        return fast == 1;\n    }\n}\n"})})]}),(0,t.jsxs)(i,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@ColeB2"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def next_num(self, n: int) -> int:\n        # initialize num as 0\n        num = 0\n        # while our number exists: loop\n        while n:\n            # add ones digit squared to num\n            num += (n % 10) ** 2\n            # integer division to remove ones digit.\n            n = n // 10\n        return num\n\n    def isHappy(self, n: int) -> bool:\n        ## Cycle Detection - initialize slow/fast pointers\n        slow, fast = n, self.next_num(n)\n        ## Since we will always reach a cycle at some point\n        ## loop until fast reaches slow\n        while slow != fast:\n            # move fast pointer 2 numbers, slow 1.\n            fast = self.next_num(self.next_num(fast))\n            slow = self.next_num(slow)\n        # If the cycle location ends on 1, we are happy, else False.\n        return fast == 1\n"})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var t=s(67294);const a={},i=t.createContext(a);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);