"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[46187],{3905:function(a,e,t){t.d(e,{Zo:function(){return i},kt:function(){return k}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var o=n.createContext({}),l=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=l(a.components);return n.createElement(o.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,o=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=l(t),k=m,h=c["".concat(o,".").concat(k)]||c[k]||N[k]||s;return t?n.createElement(h,r(r({ref:e},i),{},{components:t})):n.createElement(h,r({ref:e},i))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var l=2;l<s;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7697:function(a,e,t){t.r(e),t.d(e,{assets:function(){return i},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return N}});var n=t(87462),m=t(63366),s=(t(67294),t(3905)),r=["components"],p={description:"Author: @wingkwong , @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/longest-common-subsequence/",tags:["String","Dynamic Programming"]},o="1143 - Longest Common Subsequence (Medium)",l={unversionedId:"1100-1199/longest-common-subsequence-medium",id:"1100-1199/longest-common-subsequence-medium",title:"1143 - Longest Common Subsequence (Medium)",description:"Author: @wingkwong , @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/longest-common-subsequence/",source:"@site/solutions/1100-1199/1143-longest-common-subsequence-medium.md",sourceDirName:"1100-1199",slug:"/1100-1199/longest-common-subsequence-medium",permalink:"/leetcode-the-hard-way/solutions/1100-1199/longest-common-subsequence-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1143-longest-common-subsequence-medium.md",tags:[{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/leetcode-the-hard-way/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:1143,frontMatter:{description:"Author: @wingkwong , @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/longest-common-subsequence/",tags:["String","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"1140 - Stone Game II (Medium)",permalink:"/leetcode-the-hard-way/solutions/1100-1199/stone-game-ii-medium"},next:{title:"1147 - Longest Chunked Palindrome Decomposition (Hard)",permalink:"/leetcode-the-hard-way/solutions/1100-1199/longest-chunked-palindrome-decomposition-hard"}},i={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}],c=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}},k=c("Tabs"),h=c("TabItem"),d=c("SolutionAuthor"),u={toc:N};function g(a){var e=a.components,t=(0,m.Z)(a,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1143---longest-common-subsequence-medium"},"1143 - Longest Common Subsequence (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-subsequence"},"https://leetcode.com/problems/longest-common-subsequence")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given two strings ",(0,s.kt)("inlineCode",{parentName:"p"},"text1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"text2"),", return ",(0,s.kt)("em",{parentName:"p"},"the length of their longest ",(0,s.kt)("strong",{parentName:"em"},"common subsequence"),".")," If there is no ",(0,s.kt)("strong",{parentName:"p"},"common subsequence"),", return ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"subsequence")," of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"For example, ",(0,s.kt)("inlineCode",{parentName:"li"},'"ace"')," is a subsequence of ",(0,s.kt)("inlineCode",{parentName:"li"},'"abcde"'),".")),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"common subsequence")," of two strings is a subsequence that is common to both strings."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: text1 = "abcde", text2 = "ace" \nOutput: 3  \nExplanation: The longest common subsequence is "ace" and its length is 3.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: text1 = "abc", text2 = "abc"\nOutput: 3\nExplanation: The longest common subsequence is "abc" and its length is 3.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: text1 = "abc", text2 = "def"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= text1.length, text2.length <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"text1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"text2")," consist of only lowercase English characters.")),(0,s.kt)("h2",{id:"approach-1-dp"},"Approach 1: DP"),(0,s.kt)("p",null,"LCS is a classic problem. Let ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the LCS for string ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"text1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," ends at index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," and string ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"text2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," ends at index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"j")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),". If ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"text1[i] == text2[j]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"=="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", then ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," would be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 + dp[i - 1][j - 1]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Otherwise, we target the largest LCS if we skip one character from either ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"text1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," or ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"text2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),", i.e. ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"])"))))),"."),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        int n = text1.size(), m = text2.size();\n        vector<vector<int>> dp(n + 1, vector<int>(m + 1));\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= m; j++) {\n                if(text1[i - 1] == text2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n        return dp[n][m];\n    }\n};\n"))),(0,s.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(d,{name:"@deepanshu-rawat6",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length();\n        int n = text2.length();\n        // dp[][] array for storing records of every charcters\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 0; i <= m; i++) {\n            for (int j = 0; j <= n; j++) {\n                if (i == 0 || j ==0) {\n                    // setting first row and first column to be zero(initial readings)\n                    dp[i][j] = 0;\n                } else if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                    /*\n                    if match found, then store value of previous diagonal element(dp[i - 1][j - 1]) \n                    and increase the value by 1 i.e. a new character match is found\n                    */\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    /*\n                    otherwise, choose maximum of either previous element, either in \n                    row(dp[i][j -1]) or column(dp[i][j - 1])\n                    */\n                    dp[i][j] = Math.max(dp[i][j - 1],dp[i - 1][j]);\n                }\n            }\n        }\n        // dp[m][n] would hold the value of the LCS obtained\n        return dp[m][n];\n    }\n}\n"))),(0,s.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function(text1, text2) {\n    let n = text1.length;\n    let m = text2.length;\n    let dp = new Array(n + 1).fill(0).map(x => new Array(m + 1).fill(0));\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= m; j++) {\n            if (text1[i - 1] != text2[j - 1]) {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            } else {\n                dp[i][j] = 1 + dp[i - 1][j - 1];\n            }\n        }\n    }\n    return dp[n][m];\n};  \n"))),(0,s.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        dp = [[0 for _ in range(len(text2) + 1)] for _ in range(len(text1) + 1)]\n        \n        for i in range(len(text1) - 1, -1, -1):\n            for j in range(len(text2) - 1, -1, -1):\n                if text1[i] == text2[j]:\n                    dp[i][j] = 1 + dp[i + 1][j + 1]\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])\n        return dp[0][0]\n")))))}g.isMDXComponent=!0}}]);