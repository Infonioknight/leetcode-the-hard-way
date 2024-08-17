"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1263],{25879:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(85893),t=n(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/",tags:["String","Greedy"]},r="1328 - Break a Palindrome (Medium)",l={id:"1300-1399/break-a-palindrome-medium",title:"1328 - Break a Palindrome (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/",source:"@site/solutions/1300-1399/1328-break-a-palindrome-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/break-a-palindrome-medium",permalink:"/solutions/1300-1399/break-a-palindrome-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1328-break-a-palindrome-medium.md",tags:[{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:1328,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/",tags:["String","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"1326 - Minimum Number of Taps to Open to Water a Garden (Hard)",permalink:"/solutions/1300-1399/minimum-number-of-taps-to-open-to-water-a-garden-hard"},next:{title:"1329 - Sort the Matrix Diagonally (Medium)",permalink:"/solutions/1300-1399/sort-the-matrix-diagonally-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function h(e){const a={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n,TabItem:i,Tabs:r}=a;return n||d("SolutionAuthor",!0),i||d("TabItem",!0),r||d("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"1328---break-a-palindrome-medium",children:"1328 - Break a Palindrome (Medium)"})}),"\n",(0,s.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://leetcode.com/problems/break-a-palindrome/",children:"https://leetcode.com/problems/break-a-palindrome/"})}),"\n",(0,s.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(a.p,{children:["Given a palindromic string of lowercase English letters ",(0,s.jsx)(a.code,{children:"palindrome"}),", replace ",(0,s.jsx)(a.strong,{children:"exactly one"})," character with any lowercase English letter so that the resulting string is ",(0,s.jsx)(a.strong,{children:"not"})," a palindrome and that it is the ",(0,s.jsx)(a.strong,{children:"lexicographically smallest"})," one possible."]}),"\n",(0,s.jsxs)(a.p,{children:["Return ",(0,s.jsxs)(a.em,{children:["the resulting string. If there is no way to replace a character to make it not a palindrome, return an ",(0,s.jsx)(a.strong,{children:"empty string"}),"."]})]}),"\n",(0,s.jsxs)(a.p,{children:["A string ",(0,s.jsx)(a.code,{children:"a"})," is lexicographically smaller than a string ",(0,s.jsx)(a.code,{children:"b"})," (of the same length) if in the first position where ",(0,s.jsx)(a.code,{children:"a"})," and ",(0,s.jsx)(a.code,{children:"b"})," differ, ",(0,s.jsx)(a.code,{children:"a"})," has a character strictly smaller than the corresponding character in ",(0,s.jsx)(a.code,{children:"b"}),". For example, ",(0,s.jsx)(a.code,{children:'"abcc"'})," is lexicographically smaller than ",(0,s.jsx)(a.code,{children:'"abcd"'})," because the first position they differ is at the fourth character, and ",(0,s.jsx)(a.code,{children:"'c'"})," is smaller than ",(0,s.jsx)(a.code,{children:"'d'"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:'Input: palindrome = "abccba"\nOutput: "aaccba"\nExplanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".\nOf all the ways, "aaccba" is the lexicographically smallest.\n'})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:'Input: palindrome = "a"\nOutput: ""\nExplanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string.\n'})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"1 <= palindrome.length <= 1000"})}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"palindrome"})," consists of only lowercase English letters."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,s.jsxs)(a.p,{children:["If the input ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"s"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]})," has the length of ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mn,{children:"1"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(a.span,{className:"mord",children:"1"})]})})]}),", then the answer is an empty string because a single letter is always a palindrome. There is no way to make it not a palindrome."]}),"\n",(0,s.jsxs)(a.p,{children:["If we need to make it lexicographically smallest one, that means we should replace a character with ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"a"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]})," as early as possible (from the left to right). Therefore, we iterate the input and check the first index ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"i"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})," where ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mi,{children:"s"}),(0,s.jsx)(a.mo,{stretchy:"false",children:"["}),(0,s.jsx)(a.mi,{children:"i"}),(0,s.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"s[i]"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,s.jsx)(a.span,{className:"mopen",children:"["}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,s.jsx)(a.span,{className:"mclose",children:"]"})]})})]})," is not ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"a"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),". This is the position where we need to replace."]}),"\n",(0,s.jsxs)(a.p,{children:["If there is no such position, that means all characters are ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"a"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"a"})]})})]}),". In this case, the lexicographically smallest one is ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mi,{children:"a"}),(0,s.jsx)(a.mi,{children:"a"}),(0,s.jsx)(a.mi,{children:"a"}),(0,s.jsx)(a.mi,{children:"a"}),(0,s.jsx)(a.mi,{children:"a"}),(0,s.jsx)(a.mi,{children:"a"}),(0,s.jsx)(a.mi,{children:"b"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"aaaaaab"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"aaaaaab"})]})})]}),". We can simply change the last character to ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsx)(a.mrow,{children:(0,s.jsx)(a.mi,{children:"b"})}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"b"})]})})}),(0,s.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"b"})]})})]}),"."]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(i,{value:"cpp",label:"C++",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-cpp",children:'// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n    string breakPalindrome(string palindrome) {\n        int n = palindrome.size();\n        // there is no way to replace a single character to make "a" not a palindrome\n        // because no matter what we change, it is still a palindrome\n        if (n == 1) return "";\n        \n        // let\'s think about n = 2 case, e.g. "bb"\n        // in this case, to acheive the lexicographically smallest one\n        // we should replace from the left and the best character to use is "a"\n        // for "bb", we replace the first "b" to "a" to become "ab"\n        \n        // let\'s think about another n = 2 case, e.g. "aa"\n        // in this case, to acheive the lexicographically smallest one\n        // we should replace from the left and the best character to use is "a"\n        // however, for "aa", we cannot use "a" here and the best character to use is "b" now\n        // for "aa", we replace the second "a" to "b" to become "ab"\n        // why not replace the first "a"? because "ba" is not smallest.\n        \n        // since the input is a palindrome, we just need to check the first half only\n        for (int i = 0; i < n / 2; i++) {\n            //  here we know that as long as palindrome[i] is "a", we skip it\n            if (palindrome[i] != \'a\') {\n                // otherwise, we replace the first character that is not "a"\n                palindrome[i] = \'a\';\n                // replaced -> we can return the result here\n                return palindrome;\n            }\n        }\n        // by the time it reaches here, the possible cases would be like "aaa", "aba" etc. \n        // so that we haven\'t changed anything in above logic\n        // in this case, as mentioned above, the best character to use is "b"\n        // and we should replace the last character to achieve the smallest one possible\n        palindrome[n - 1] = \'b\';\n        return palindrome;\n    }\n};\n'})})]}),(0,s.jsxs)(i,{value:"java",label:"Java",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:'// Time Complexity: O(N)\n// Space Complexity: O(N) since we need to convert the string to char array\nclass Solution {\n    public String breakPalindrome(String palindrome) {\n        int n = palindrome.length();\n        // there is no way to replace a single character to make "a" not a palindrome\n        // because no matter what we change, it is still a palindrome\n        if (n == 1) return "";\n        \n        char[] p = palindrome.toCharArray();\n        \n        // let\'s think about n = 2 case, e.g. "bb"\n        // in this case, to acheive the lexicographically smallest one\n        // we should replace from the left and the best character to use is "a"\n        // for "bb", we replace the first "b" to "a" to become "ab"\n        \n        // let\'s think about another n = 2 case, e.g. "aa"\n        // in this case, to acheive the lexicographically smallest one\n        // we should replace from the left and the best character to use is "a"\n        // however, for "aa", we cannot use "a" here and the best character to use is "b" now\n        // for "aa", we replace the second "a" to "b" to become "ab"\n        // why not replace the first "a"? because "ba" is not smallest.\n        \n        for (int i = 0; i < n / 2; i++) {\n            //  here we know that as long as palindrome[i] is "a", we skip it\n            if (p[i] != \'a\') {\n                // otherwise, we replace the first character that is not "a"\n                p[i] = \'a\';\n                // replaced -> we can return the result here\n                return new String(p);\n            }\n        }\n        // by the time it reaches here, the possible cases would be like "aaa", "aba" etc. \n        // so that we haven\'t changed anything in above logic\n        // in this case, as mentioned above, the best character to use is "b"\n        // and we should replace the last character to achieve the smallest one possible\n        p[n - 1] = \'b\';\n        return new String(p);\n    }\n}\n'})})]}),(0,s.jsxs)(i,{value:"go",label:"Go",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-go",children:'// Time Complexity: O(N)\n// Space Complexity: O(1)\nfunc breakPalindrome(palindrome string) string {\n    n := len(palindrome)\n    // there is no way to replace a single character to make "a" not a palindrome\n    // because no matter what we change, it is still a palindrome\n    if n == 1 {\n        return ""\n    }\n    // let\'s think about n = 2 case, e.g. "bb"\n    // in this case, to acheive the lexicographically smallest one\n    // we should replace from the left and the best character to use is "a"\n    // for "bb", we replace the first "b" to "a" to become "ab"\n    \n    // let\'s think about another n = 2 case, e.g. "aa"\n    // in this case, to acheive the lexicographically smallest one\n    // we should replace from the left and the best character to use is "a"\n    // however, for "aa", we cannot use "a" here and the best character to use is "b" now\n    // for "aa", we replace the second "a" to "b" to become "ab"\n    // why not replace the first "a"? because "ba" is not smallest.\n    \n    // since the input is a palindrome, we just need to check the first half only\n    for i := 0; i < n / 2; i++ {\n        //  here we know that as long as palindrome[i] is "a", we skip it\n        if palindrome[i] != \'a\' {\n            // otherwise, we replace the first character that is not "a"\n            // replaced -> we can return the result here\n            return palindrome[:i] + "a" + palindrome[i + 1:]\n        }\n    }\n    // by the time it reaches here, the possible cases would be like "aaa", "aba" etc. \n    // so that we haven\'t changed anything in above logic\n    // in this case, as mentioned above, the best character to use is "b"\n    // and we should replace the last character to achieve the smallest one possible\n    return palindrome[: n - 1] + "b"\n}\n'})})]}),(0,s.jsxs)(i,{value:"py",label:"Python",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:'# Time Complexity: O(N)\n# Space Complexity: O(1)\nclass Solution:\n    def breakPalindrome(self, palindrome: str) -> str:\n        n = len(palindrome)\n        # there is no way to replace a single character to make "a" not a palindrome\n        # because no matter what we change, it is still a palindrome\n        if n == 1:\n            return \'\'\n        # let\'s think about n = 2 case, e.g. "bb"\n        # in this case, to acheive the lexicographically smallest one\n        # we should replace from the left and the best character to use is "a"\n        # for "bb", we replace the first "b" to "a" to become "ab"\n        \n        # let\'s think about another n = 2 case, e.g. "aa"\n        # in this case, to acheive the lexicographically smallest one\n        # we should replace from the left and the best character to use is "a"\n        # however, for "aa", we cannot use "a" here and the best character to use is "b" now\n        # for "aa", we replace the second "a" to "b" to become "ab"\n        # why not replace the first "a"? because "ba" is not smallest.\n        for i in range(n // 2):\n            #  here we know that as long as palindrome[i] is "a", we skip it\n            if palindrome[i] != \'a\':\n                # otherwise, we replace the first character that is not "a"\n                return palindrome[:i] + \'a\' + palindrome[i + 1:]\n        # by the time it reaches here, the possible cases would be like "aaa", "aba" etc. \n        # so that we haven\'t changed anything in above logic\n        # in this case, as mentioned above, the best character to use is "b"\n        # and we should replace the last character to achieve the smallest one possible\n        return palindrome[:-1] + \'b\'\n'})})]})]})]})}function m(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function d(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>r});var s=n(67294);const t={},i=s.createContext(t);function r(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);