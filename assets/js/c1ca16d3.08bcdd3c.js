"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[73645],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,s[1]=m;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37854:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],m={description:"Author: @vigneshshiv, @MithunPrabhu777, @radojicic23 | https://leetcode.com/problems/reverse-integer/"},p="0007 - Reverse Integer (Medium)",o={unversionedId:"0000-0099/reverse-integer-medium",id:"0000-0099/reverse-integer-medium",title:"0007 - Reverse Integer (Medium)",description:"Author: @vigneshshiv, @MithunPrabhu777, @radojicic23 | https://leetcode.com/problems/reverse-integer/",source:"@site/solutions/0000-0099/0007-reverse-integer-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/reverse-integer-medium",permalink:"/solutions/0000-0099/reverse-integer-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0007-reverse-integer-medium.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Author: @vigneshshiv, @MithunPrabhu777, @radojicic23 | https://leetcode.com/problems/reverse-integer/"},sidebar:"tutorialSidebar",previous:{title:"0006 - Zigzag Conversion (Medium)",permalink:"/solutions/0000-0099/zigzag-conversion-medium"},next:{title:"0009 - Palindrome Number (Easy)",permalink:"/solutions/0000-0099/palindrome-number-easy"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Standard",id:"approach-1-standard",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},d=c("Tabs"),h=c("TabItem"),k=c("SolutionAuthor"),g={toc:u};function N(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0007---reverse-integer-medium"},"0007 - Reverse Integer (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-integer/"},"https://leetcode.com/problems/reverse-integer/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given a signed 32-bit integer ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", return ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," with its digits reversed. If reversing ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," causes the value to go outside the signed 32-bit integer range ",(0,i.kt)("inlineCode",{parentName:"p"},"[-2^31, 2^31 - 1]"),", then return ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"0")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Assume the environment does not allow you to store 64-bit integers (signed or unsigned).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: x = 123\nOutput: 321\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: x = -123\nOutput: -321\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: x = 120\nOutput: 21\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-2^31 <= x <= 2^31 - 1"))),(0,i.kt)("h2",{id:"approach-1-standard"},"Approach 1: Standard"),(0,i.kt)("p",null,"As input can be from ",(0,i.kt)("inlineCode",{parentName:"p"},"Integer.MIN_VALUE")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Integer.MAX_VALUE"),". "),(0,i.kt)("p",null,"Reversing some of the 10 digits number, will not provide the correct answer, because the integer range might overflow, if it does return 0, otherwise the reversed number. "),(0,i.kt)("p",null,"For example, reversing the last integer number ",(0,i.kt)("inlineCode",{parentName:"p"},"2147483647")," can go out of range, so having ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," primitive in the program can hold the range. "),(0,i.kt)("p",null,"First, get the sign bit value, and negate the input if it's negative.\nReverse the integer and if it's above max range then return 0 or return the value with sign bit value."),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Time complexity: O(1), where # digits are always <= 10\n// Space complexity: O(1)\nclass Solution {\n    public int reverse(int x) {\n        long num = 0, remainder = 0;\n        int sign = 1;\n        if (x < 0) {\n            x *= -1;\n            sign = -1;\n        }\n        while (x > 0) {\n            remainder = x % 10;\n            num = (num * 10) + remainder;\n            x /= 10;\n        }\n        return num > Integer.MAX_VALUE ? 0 : (int) num * sign;\n    }\n}\n"))),(0,i.kt)(h,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(k,{name:"@MithunPrabhu777",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number} x\n * @return {number}\n */\nvar reverse = function(x) {\n    let [number, sign, remainder] = [0, 1, 0];\n    const RANGE = 2 ** 31 - 1;\n    if (x < 0) {\n        x *= -1;\n        sign = -1;\n    }\n    while (x > 0) {\n        remainder = x % 10;\n        number = (number * 10) + remainder;\n        x = Math.floor(x / 10);\n    }\n    return number > RANGE ? 0 : number * sign;\n};\n"))),(0,i.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def reverse(self, x: int) -> int:\n        number, remainder, sign = 0, 0, 1\n        MAX = 2 ** 31 - 1\n        if x < 0:\n            x *= -1\n            sign = -1\n        while x > 0:\n            remainder = x % 10\n            number = (number * 10) + remainder\n            x //= 10\n        return 0 if number > MAX else int(number) * sign\n"))),(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int reverse(int x) {\n        int number = 0;\n        while (x != 0) {\n            if (number > INT_MAX / 10 || number < INT_MIN / 10) {\n                return 0;\n            }\n            int carry = x % 10;\n            number = number * 10 + carry;\n            x /= 10;\n        }\n        return number;\n    }\n};\n")))))}N.isMDXComponent=!0}}]);