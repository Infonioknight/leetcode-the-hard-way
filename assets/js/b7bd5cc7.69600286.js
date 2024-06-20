"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51927],{85267:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=n(85893),t=n(11151);const i={description:"Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/letter-combinations-of-a-phone-number/",tags:["Hash Table","String","Backtracking"]},r="0017 - Letter Combinations of a Phone Number (Medium)",l={id:"0000-0099/letter-combinations-of-a-phone-number-medium",title:"0017 - Letter Combinations of a Phone Number (Medium)",description:"Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/letter-combinations-of-a-phone-number/",source:"@site/solutions/0000-0099/0017-letter-combinations-of-a-phone-number-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/letter-combinations-of-a-phone-number-medium",permalink:"/solutions/0000-0099/letter-combinations-of-a-phone-number-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0017-letter-combinations-of-a-phone-number-medium.md",tags:[{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:17,frontMatter:{description:"Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/letter-combinations-of-a-phone-number/",tags:["Hash Table","String","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"0014 - Longest Common Prefix (Easy)",permalink:"/solutions/0000-0099/longest-common-prefix-easy"},next:{title:"0019 - Remove Nth Node From End of List (Easy)",permalink:"/solutions/0000-0099/remove-nth-node-from-end-of-list-medium"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive Backtracking with Subsets",id:"approach-1-recursive-backtracking-with-subsets",level:2},{value:"Approach 2: Recursive Backtracking with ASCII",id:"approach-2-recursive-backtracking-with-ascii",level:2},{value:"Approach 3: Iterative Backtracking",id:"approach-3-iterative-backtracking",level:2}];function m(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components},{SolutionAuthor:n,TabItem:i,Tabs:r}=e;return n||o("SolutionAuthor",!0),i||o("TabItem",!0),r||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"0017---letter-combinations-of-a-phone-number-medium",children:"0017 - Letter Combinations of a Phone Number (Medium)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",children:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given a string containing digits from ",(0,a.jsx)(e.code,{children:"2-9"})," inclusive, return all possible letter combinations that the number could represent. Return the answer in ",(0,a.jsx)(e.strong,{children:"any order"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["A mapping of digits to letters (just like on the telephone buttons) is given below. Note that ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"1"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"})]})})]})," does not map to any letters."]}),"\n",(0,a.jsx)("img",{src:"https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png",width:"300",height:"243"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: digits = "23"\nOutput: ["ad","ae","af","bd","be","bf","cd","ce","cf"]\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: digits = ""\nOutput: []\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: digits = ""\nOutput: ["a","b","c"]\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"0 <= digits.length <= 4"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"digits[i]"})," is a digit in the range ",(0,a.jsx)(e.code,{children:"['2', '9']"}),"."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-recursive-backtracking-with-subsets",children:"Approach 1: Recursive Backtracking with Subsets"}),"\n",(0,a.jsx)(e.p,{children:"Simple and naive approach to solve this problem by having map of key and values same as Phone key pad."}),"\n",(0,a.jsx)(e.p,{children:"Iterative over the input digit by digit and for each digit look for the combinations of key characters. Initialize prefix string which holds an key combination in the recursive call stack."}),"\n",(0,a.jsxs)(e.p,{children:["As per example 1, digits is ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"23"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"23"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"23"})]})})]}),", for the first digit ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"2"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"})]})})]}),", the program iterates over ",(0,a.jsx)(e.code,{children:'"abc"'})," characters, and for each char, the program is recursively called to get the next digit combination associated with current character ",(0,a.jsx)(e.code,{children:"'a'"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Maximum possibilities for each character is ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"4"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"4"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"4"})]})})]}),", So each of recursive call, adds the char to the prefix string and add it to the result list, it does ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," time, and ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(4^n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," recursive call stack for each character, where ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of the string."]}),"\n",(0,a.jsxs)(e.p,{children:["Time complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n ^ n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," or ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * 4^n)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,a.jsxs)(e.p,{children:["Space complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n^n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," or ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(4 ^ n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(i,{value:"java",label:"Java",children:[(0,a.jsx)(n,{name:"@vigneshshiv"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'class Solution {\n    \n    private Map<Character, String> digitToChar = Map.of(\n            \'2\', "abc",\n            \'3\', "def",\n            \'4\', "ghi",\n            \'5\', "jkl",\n            \'6\', "mno",\n            \'7\', "pqrs",\n            \'8\', "tuv",\n            \'9\', "wxyz"\n    );\n    \n    public List<String> letterCombinations(String digits) {\n        if (digits.length() == 0) {\n            return new ArrayList<>();\n        }\n        List<String> result = new ArrayList();\n        backtrack(digits, result, "", 0);\n        return result;\n    }\n    \n    public void backtrack(String digits, List<String> result, String prefix, int index) {\n        if (prefix.length() == digits.length()) {\n            result.add(prefix);\n            return;\n        } else if (index >= digits.length()) {\n            return;\n        } else {\n            String digit = digitToChar.get(digits.charAt(index));\n            for (char c : digit.toCharArray()) {\n                backtrack(digits, result, prefix + c, index + 1);\n            }\n        }\n    }\n}\n'})})]}),(0,a.jsxs)(i,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        res = []\n        hashmap = {'2': 'abc', \n                   '3': 'def', \n                   '4': 'ghi', \n                   '5': 'jkl', \n                   '6': 'mno', \n                   '7': 'pqrs', \n                   '8': 'tuv', \n                   '9': 'wxyz'}\n                   \n        def backtrack(i, curr_str):\n            if len(curr_str) == len(digits):\n                res.append(curr_str)\n                return \n            for c in hashmap[digits[i]]:\n                backtrack(i + 1, curr_str + c)\n        if digits:\n            backtrack(0, \"\")\n        return res \n"})})]}),(0,a.jsxs)(i,{value:"js",label:"JavaScript",children:[(0,a.jsx)(n,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"/**\n * @param {string} digits\n * @return {string[]}\n */\nvar letterCombinations = function(digits) {\n    let res = [];\n    const hashmap = {'2': 'abc', \n               '3': 'def', \n               '4': 'ghi', \n               '5': 'jkl', \n               '6': 'mno', \n               '7': 'pqrs', \n               '8': 'tuv', \n               '9': 'wxyz'};\n    \n    function backtrack(i, curr_str) {\n        if (curr_str.length == digits.length) {\n            res.push(curr_str);\n            return;\n        }\n        for (c of hashmap[digits[i]]) {\n            backtrack(i + 1, curr_str + c);\n        }\n    }\n    if (digits) {\n        backtrack(0, \"\");\n    }\n    return res;\n};\n"})})]}),(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        vector<string> ans;\n        string currStr = "";\n        map<char, string> hashMap = {\n                {\'2\', "abc"}, \n                {\'3\', "def"}, \n                {\'4\', "ghi"}, \n                {\'5\', "jkl"}, \n                {\'6\', "mno"}, \n                {\'7\', "pqrs"}, \n                {\'8\', "tuv"}, \n                {\'9\', "wxyz"}\n        };\n        if (digits == "") return ans;\n        backtrack(digits, hashMap, ans, currStr, 0);\n        return ans;\n    }\n    void backtrack(string& digits, map<char, string>& hashMap, vector<string>& ans, string& currStr, int i) {\n        if (digits.size() == currStr.size()) {\n            ans.push_back(currStr);\n            return;\n        }\n        for (char c : hashMap[digits[i]]) {\n            currStr.push_back(c);\n            backtrack(digits, hashMap, ans, currStr, i + 1);\n            currStr.pop_back();\n        }\n    }\n};\n'})})]})]}),"\n",(0,a.jsx)(e.h2,{id:"approach-2-recursive-backtracking-with-ascii",children:"Approach 2: Recursive Backtracking with ASCII"}),"\n",(0,a.jsx)(e.p,{children:"Instead of having a map of characters for each digits, try to solve the problem only with numbers."}),"\n",(0,a.jsxs)(e.p,{children:["Try to map every digits to ASCII combinations like ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"2"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"})]})})]})," is mapped ",(0,a.jsx)(e.code,{children:'"abc"'}),", How to get this from the number."]}),"\n",(0,a.jsxs)(e.p,{children:["Based on the input, we need to have a ",(0,a.jsx)(e.strong,{children:"start and end range"})," for each digit. To form ",(0,a.jsx)(e.code,{children:"'a'"})," from ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"2"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"})]})})]}),", which number we can add to get ",(0,a.jsx)(e.code,{children:"'a'"}),", if we add ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"0"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"0"})]})})]})," with char ",(0,a.jsx)(e.code,{children:"'a'"})," then we will get the same char ",(0,a.jsx)(e.code,{children:"'a'"}),", like wise we need to form the range for other digits as well."]}),"\n",(0,a.jsxs)(e.p,{children:["For ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"7"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"7"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"7"})]})})]})," and ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"9"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"9"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"9"})]})})]})," key pads has 4 chars, so apply the logic by bit different as mentioned below in the program."]}),"\n",(0,a.jsx)(e.p,{children:"Time and Space complexity is same as above."}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{value:"java",label:"Java",children:[(0,a.jsx)(n,{name:"@vigneshshiv"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    \n    public List<String> letterCombinations(String digits) {\n        if (digits.isEmpty()) {\n            return new ArrayList<>();\n        }\n        return letterCombinations(\"\", digits);\n    }\n    \n    public List<String> letterCombinations(String prefix, String digits) {\n        List<String> result = new ArrayList<>();\n        if (digits.isEmpty()) {\n            result.add(prefix);\n            return result;\n        }\n        // Transform char to number by subtracting '0' char (ASCII)\n        int digit = (int) digits.charAt(0) - '0';\n        // ASCII start range for the current digit\n        int start = digit > 7 ? (digit - 1) * 3 - 2 : (digit - 2) * 3;\n        // End range\n        int end = digit == 9 ? (digit * 3) - 1 : digit > 6 ? (digit * 3) - 2 : (digit - 1) * 3;\n        for (int i = start; i < end; i++) {\n            char ch = (char) ('a' + i);\n            result.addAll(letterCombinations(prefix + ch, digits.substring(1)));\n        }\n        return result;\n    }\n}\n"})})]})}),"\n",(0,a.jsx)(e.h2,{id:"approach-3-iterative-backtracking",children:"Approach 3: Iterative Backtracking"}),"\n",(0,a.jsx)(e.p,{children:"We can utilize the same pricinple as above, just maintaining our own stack. At each step of our backtracking, we add to our stack, our current string plus 1 of the mapped letters and we do that for all mapped letters. When we run out of digits we can add to our return array the completed string."}),"\n",(0,a.jsxs)(e.p,{children:["Time Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * 4^n)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," Where n is the length of the input string. In the worst case, (all 7s or 9s) we will have 4 choices of letters to choose from and for each output string we create will be of size ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," and therefore take ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," time to create the string."]}),"\n",(0,a.jsxs)(e.p,{children:["Space Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(4^n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),". We will end up creating ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"4"}),(0,a.jsx)(e.mi,{children:"n"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"4^n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6644em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"4"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})]})})]})," output strings to add to our return array."]}),"\n",(0,a.jsx)(r,{children:(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:'class Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        # base case, given empty input string, return early.\n        if not digits:\n            return []\n        # initialize our digit to letter map.\n        letter_map = {\n            "2": "abc",\n            "3": "def",\n            "4": "ghi",\n            "5": "jkl",\n            "6": "mno",\n            "7": "pqrs",\n            "8": "tuv",\n            "9": "wxyz"\n        }\n        # intiailize our return list, and stack.\n        letter_combos = []\n        # stack is formatted as (int, str)\n        # where the int is our index inside the digits string.\n        # and the str is the current string created so far.\n        stack = [(0, "")]\n\n        while stack:\n            # pop off the current index, and the current string.\n            idx, string = stack.pop()\n            # if we reached the end of the digits string.\n            if idx == len(digits):\n                # add to our return list, the string we created and continue.\n                letter_combos.append(string)\n                continue\n            # for each character that the current digit maps to:\n            for ch in letter_map[digits[idx]]:\n                # add to our backtracking stack\n                # the new index, which is idx + 1, and the new current\n                # string, which is the string + the character we mapped to.\n                stack.append((idx + 1, string + ch))\n        return letter_combos\n'})})]})})]})}function d(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(m,{...s})}):m(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,n)=>{n.d(e,{Z:()=>l,a:()=>r});var a=n(67294);const t={},i=a.createContext(t);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);