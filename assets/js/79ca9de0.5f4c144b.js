"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48830],{89072:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(85893),a=s(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/valid-palindrome-ii/"},r="0680 - Valid Palindrome II (Easy)",l={id:"0600-0699/valid-palindrome-ii-easy",title:"0680 - Valid Palindrome II (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/valid-palindrome-ii/",source:"@site/solutions/0600-0699/0680-valid-palindrome-ii-easy.md",sourceDirName:"0600-0699",slug:"/0600-0699/valid-palindrome-ii-easy",permalink:"/solutions/0600-0699/valid-palindrome-ii-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0680-valid-palindrome-ii-easy.md",tags:[],version:"current",sidebarPosition:680,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/valid-palindrome-ii/"},sidebar:"tutorialSidebar",previous:{title:"0678 - Valid Parenthesis String (Medium)",permalink:"/solutions/0600-0699/valid-parenthesis-string-medium"},next:{title:"0682 - Baseball Game (Easy)",permalink:"/solutions/0600-0699/baseball-game-easy"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0680---valid-palindrome-ii-easy",children:"0680 - Valid Palindrome II (Easy)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/valid-palindrome-ii",children:"https://leetcode.com/problems/valid-palindrome-ii"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given a string ",(0,t.jsx)(n.code,{children:"s"}),", return ",(0,t.jsx)(n.code,{children:"true"})," ",(0,t.jsx)(n.em,{children:"if the"})," ",(0,t.jsx)(n.code,{children:"s"})," ",(0,t.jsxs)(n.em,{children:["can be palindrome after deleting ",(0,t.jsx)(n.strong,{children:"at most one"})," character from it"]}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "aba"\nOutput: true\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: s = \"abca\"\nOutput: true\nExplanation: You could delete the character 'c'.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "abc"\nOutput: false\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= s.length <= 10^5"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,t.jsxs)(n.p,{children:["To check if a string is a palindrome, we can use two pointers to compare the character at pointer ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"i"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]})," and that at pointer ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"j"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),". If they are not same, then it means it is not a palindrome. However, this problem allows us to delete at most one character from it. Therefore, we do the same way. If there is a difference, that means we can potentially delete the one at pointer ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"i"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]})," or the one at pointer ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"j"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),". We try both case to see if it is possible to form a palindrome."]}),"\n",(0,t.jsx)(s,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // check palindrome with target range\n    bool palindromeWithRange(string s, int i, int j) {\n        while (i < j) {\n            if (s[i] != s[j]) return false;\n            i++, j--;\n        }\n        return true;\n    }\n    \n    bool validPalindrome(string s) {\n        int n = s.size(), i = 0, j = n - 1;\n        while (i < j) {\n            // not same -> potentially delete s[i] or s[j]\n            if (s[i] != s[j]) {\n                // try both case\n                return palindromeWithRange(s, i, j - 1) || palindromeWithRange(s, i + 1, j);\n            }\n            i++, j--;\n        }\n        return true;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(67294);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);