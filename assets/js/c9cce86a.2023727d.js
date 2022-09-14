"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7064],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r,o=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/"},l="2235 - Add Two Integers (Easy)",s={unversionedId:"2200-2299/add-two-integers-easy",id:"2200-2299/add-two-integers-easy",title:"2235 - Add Two Integers (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/",source:"@site/solutions/2200-2299/2235-add-two-integers-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/add-two-integers-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/add-two-integers-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2235-add-two-integers-easy.md",tags:[],version:"current",sidebarPosition:2235,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/"},sidebar:"tutorialSidebar",previous:{title:"2233 - Maximum Product After K Increments (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-product-after-k-increments-medium"},next:{title:"2237 - Count Positions on Street With Required Brightness (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: A + B",id:"approach-1-a--b",level:2},{value:"Approach 2: Half Adder",id:"approach-2-half-adder",level:2},{value:"Approach 3: Log &amp; Exp",id:"approach-3-log--exp",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),g={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2235---add-two-integers-easy"},"2235 - Add Two Integers (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/add-two-integers/"},"https://leetcode.com/problems/add-two-integers/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given two integers ",(0,i.kt)("inlineCode",{parentName:"p"},"num1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"num2"),", return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"sum")," of the two integers"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: num1 = 12, num2 = 5\nOutput: 17\nExplanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: num1 = -10, num2 = 4\nOutput: -6\nExplanation: num1 + num2 = -6, so -6 is returned.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-100 <= num1, num2 <= 100"))),(0,i.kt)("h2",{id:"approach-1-a--b"},"Approach 1: A + B"),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return num1 + num2;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-half-adder"},"Approach 2: Half Adder"),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return num2 == 0 ? num1 : sum(num1 ^ num2, (unsigned) (num1 & num2) << 1);\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-3-log--exp"},"Approach 3: Log & Exp"),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return log(exp(num1) * exp(num2)));\n    }\n};\n")))}h.isMDXComponent=!0}}]);