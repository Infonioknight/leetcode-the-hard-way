"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[61156],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,d=u["".concat(i,".").concat(k)]||u[k]||c[k]||p;return n?a.createElement(d,o(o({ref:t},l),{},{components:n})):a.createElement(d,o({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a,r=n(87462),p=n(63366),o=(n(67294),n(3905)),m=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/powx-n/"},s="0050 - Pow(x, n) (Medium)",l={unversionedId:"0000-0099/pow-x-n-medium",id:"0000-0099/pow-x-n-medium",title:"0050 - Pow(x, n) (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/powx-n/",source:"@site/solutions/0000-0099/0050-pow-x-n-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/pow-x-n-medium",permalink:"/solutions/0000-0099/pow-x-n-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0050-pow-x-n-medium.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/powx-n/"},sidebar:"tutorialSidebar",previous:{title:"0049 - Group Anagrams (Medium)",permalink:"/solutions/0000-0099/group-anagrams-medium"},next:{title:"0057 - Insert Interval (Medium)",permalink:"/solutions/0000-0099/insert-interval-medium"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Exponentiation",id:"approach-1-binary-exponentiation",level:2}],k=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:u};function h(e){var t=e.components,n=(0,p.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0050---powx-n-medium"},"0050 - Pow(x, n) (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/powx-n/"},"https://leetcode.com/problems/powx-n/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Implement ",(0,o.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/valarray/pow/"},"pow(x, n)"),", which calculates ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," raised to the power ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"x^n"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: x = 2.00000, n = 10\nOutput: 1024.00000\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: x = 2.10000, n = 3\nOutput: 9.26100\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: x = 2.00000, n = -2\nOutput: 0.25000\nExplanation: 2-2 = 1/22 = 1/4 = 0.25\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100.0 < x < 100.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-2^31 <= n <= 2^31 - 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^4 <= x^n <= 10^4"))),(0,o.kt)("h2",{id:"approach-1-binary-exponentiation"},"Approach 1: Binary Exponentiation"),(0,o.kt)("p",null,"If the exponent ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"n")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is negative, we need to change it to positive exponent ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mo",{parentName:"mrow"},"\u2212"),(0,o.kt)("mi",{parentName:"mrow"},"n")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"- n")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," and make the base  to ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"1"),(0,o.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,o.kt)("mi",{parentName:"mrow"},"x")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 / x")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"1/"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),". Then apply ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/math/number-theory/binary-exponentiation"},"Binary Exponentiation"),"."),(0,o.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    double myPow(double x, int N) {\n        long long n = N;\n        if (n < 0) n = -n, x = 1 / x;\n        // Binary Exponentiation\n        double ans = 1;\n        if (n == 0) return 1;\n        while (n > 0) {\n            if(n & 1) ans *= x;\n            x *= x;\n            n >>= 1;\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);