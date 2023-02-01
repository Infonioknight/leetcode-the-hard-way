"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4413],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=i(t),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return t?n.createElement(h,s(s({ref:a},m),{},{components:t})):n.createElement(h,s({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64073:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=t(87462),r=t(63366),l=(t(67294),t(3905)),s=["components"],o={description:"Author: @vale-c | https://leetcode.com/problems/valid-palindrome/"},p="0125 - Valid Palindrome (Easy)",i={unversionedId:"0100-0199/valid-palindrome",id:"0100-0199/valid-palindrome",title:"0125 - Valid Palindrome (Easy)",description:"Author: @vale-c | https://leetcode.com/problems/valid-palindrome/",source:"@site/solutions/0100-0199/0125-valid-palindrome.md",sourceDirName:"0100-0199",slug:"/0100-0199/valid-palindrome",permalink:"/solutions/0100-0199/valid-palindrome",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0125-valid-palindrome.md",tags:[],version:"current",sidebarPosition:125,frontMatter:{description:"Author: @vale-c | https://leetcode.com/problems/valid-palindrome/"},sidebar:"tutorialSidebar",previous:{title:"0124 - Binary Tree Maximum Path Sum (Hard)",permalink:"/solutions/0100-0199/binary-tree-maximum-path-sum-hard"},next:{title:"0127 - Word Ladder (Hard)",permalink:"/solutions/0100-0199/word-ladder-hard"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach: Two Pointers",id:"approach-two-pointers",level:2},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Space Complexity",id:"space-complexity",level:4}],d=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)}},u=d("Tabs"),h=d("TabItem"),k=d("SolutionAuthor"),N={toc:c};function f(e){var a=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0125---valid-palindrome-easy"},"0125 - Valid Palindrome (Easy)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-palindrome/"},"https://leetcode.com/problems/valid-palindrome/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers."),(0,l.kt)("p",null,"Given a string ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),", return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if it is a palindrome, or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 2 * 10 ^ 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," consists only of printable ASCII characters.")),(0,l.kt)("h2",{id:"approach-two-pointers"},"Approach: Two Pointers"),(0,l.kt)("p",null,"We can use two pointers to check if the string is a palindrome. We start from the beginning and the end of the string and move progressively towards the middle of the string."),(0,l.kt)("p",null,"We use a variable ",(0,l.kt)("inlineCode",{parentName:"p"},"alpha")," to perform the following operations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Converting all uppercase letters to lowercase")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ignoring all non-alphanumeric characters"))),(0,l.kt)("p",null,"If the characters at the two pointers are ",(0,l.kt)("em",{parentName:"p"},"not")," the same, we return ",(0,l.kt)("em",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"If we reach the middle of the string, we return ",(0,l.kt)("em",{parentName:"p"},"true"),"."),(0,l.kt)("h4",{id:"time-complexity"},"Time Complexity"),(0,l.kt)("p",null,"The time complexity for this solution is ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"n")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the length of the string."),(0,l.kt)("h4",{id:"space-complexity"},"Space Complexity"),(0,l.kt)("p",null,"The space complexity is ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))," since we only use a constant amount of space."),(0,l.kt)(u,{mdxType:"Tabs"},(0,l.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)(k,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # discard all non-alphanumeric characters and \n        # convert all uppercase letters to lowercase\n        alpha = ''.join(char for char in s.lower() if char.isalnum()) \n\n        # start pointer from the beginning\n        # end pointer from the end\n        start, end = 0, len(alpha) - 1\n\n        while (start < end):\n            if alpha[start] != alpha[end]:\n                return False\n            else:\n                # move start pointer to the right\n                start += 1\n                # move end pointer to the left\n                end -= 1\n        return True\n"))),(0,l.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)(k,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    bool isPalindrome(string s) {\n        /* discard all non-alphanumeric characters and convert all uppercase letters to lowercase */\n        string alpha = "";\n        for (char c : s) {\n            if (isalnum(c)) {\n                alpha += tolower(c);\n            }\n        }\n\n        int start = 0;\n        int end = alpha.length() - 1;\n\n        while (start < end) {\n            if (alpha[start] != alpha[end]) {\n                return false;\n            } else {\n                start += 1;\n                end -= 1;\n            }\n        }\n        return true;\n    }\n};\n'))),(0,l.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)(k,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public boolean isPalindrome(String s) {\n        /* discard all non-alphanumeric characters and convert all uppercase letters to lowercase */\n        String alpha = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();\n        \n        int start = 0;\n        int end = alpha.length() - 1;\n\n        while (start < end) {\n            if (alpha.charAt(start) != alpha.charAt(end)) {\n                return false;\n            } else {\n                start += 1;\n                end -= 1;\n            }\n        }\n        return true;\n    }\n}\n'))),(0,l.kt)(h,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)(k,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} s\n * @return {boolean}\n */\nvar isPalindrome = function(s) {\n    /* discard all non-alphanumeric characters and convert all uppercase letters to lowercase */\n    const alpha = s.toLowerCase().replace(/[^a-z0-9]/g, ''); \n    \n    let start = 0;\n    let end = alpha.length - 1;\n\n    while (start < end) {\n        if (alpha[start] != alpha[end]) {\n            return false;\n        } else {\n            start += 1;\n            end -= 1;\n        }\n    }\n    return true;\n};\n")))))}f.isMDXComponent=!0}}]);