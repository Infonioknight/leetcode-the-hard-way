"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37484],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),d=i(t),k=m,c=d["".concat(o,".").concat(k)]||d[k]||N[k]||r;return t?n.createElement(c,s(s({ref:e},l),{},{components:t})):n.createElement(c,s({ref:e},l))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:m,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1764:function(a,e,t){t.r(e),t.d(e,{assets:function(){return N},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n,m=t(87462),r=t(63366),s=(t(67294),t(3905)),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/word-ladder/"},i="0127 - Word Ladder (Hard)",l={unversionedId:"0100-0199/word-ladder-hard",id:"0100-0199/word-ladder-hard",title:"0127 - Word Ladder (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/word-ladder/",source:"@site/solutions/0100-0199/0127-word-ladder-hard.md",sourceDirName:"0100-0199",slug:"/0100-0199/word-ladder-hard",permalink:"/solutions/0100-0199/word-ladder-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0127-word-ladder-hard.md",tags:[],version:"current",sidebarPosition:127,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/word-ladder/"},sidebar:"tutorialSidebar",previous:{title:"0125 - Valid Palindrome (Easy)",permalink:"/solutions/0100-0199/valid-palindrome"},next:{title:"0130 Surrounded Regions (Medium)",permalink:"/solutions/0100-0199/surrounded-regions-medium"}},N={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],k=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}),c={toc:d};function h(a){var e=a.components,t=(0,r.Z)(a,p);return(0,s.kt)("wrapper",(0,m.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0127---word-ladder-hard"},"0127 - Word Ladder (Hard)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-ladder/"},"https://leetcode.com/problems/word-ladder/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"transformation sequence")," from word ",(0,s.kt)("inlineCode",{parentName:"p"},"beginWord")," to word ",(0,s.kt)("inlineCode",{parentName:"p"},"endWord")," using a dictionary ",(0,s.kt)("inlineCode",{parentName:"p"},"wordList")," is a sequence of words ",(0,s.kt)("inlineCode",{parentName:"p"},"beginWord -> s1 -> s2 -> ... -> sk")," such that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Every adjacent pair of words differs by a single letter."),(0,s.kt)("li",{parentName:"ul"},"Every ",(0,s.kt)("inlineCode",{parentName:"li"},"si")," for ",(0,s.kt)("inlineCode",{parentName:"li"},"1 <= i <= k")," is in ",(0,s.kt)("inlineCode",{parentName:"li"},"wordList"),". Note that ",(0,s.kt)("inlineCode",{parentName:"li"},"beginWord")," does not need to be in ",(0,s.kt)("inlineCode",{parentName:"li"},"wordList"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sk == endWord"))),(0,s.kt)("p",null,"Given two words, ",(0,s.kt)("inlineCode",{parentName:"p"},"beginWord")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"endWord"),", and a dictionary ",(0,s.kt)("inlineCode",{parentName:"p"},"wordList"),", return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"number of words")," in the ",(0,s.kt)("strong",{parentName:"em"},"shortest transformation sequence")," from")," ",(0,s.kt)("inlineCode",{parentName:"p"},"beginWord")," ",(0,s.kt)("em",{parentName:"p"},"to")," ",(0,s.kt)("inlineCode",{parentName:"p"},"endWord"),(0,s.kt)("em",{parentName:"p"},", or")," ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," ",(0,s.kt)("em",{parentName:"p"},"if no such sequence exists.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]\nOutput: 5\nExplanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]\nOutput: 0\nExplanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= beginWord.length <= 10")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"endWord.length == beginWord.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= wordList.length <= 5000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wordList[i].length == beginWord.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beginWord"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"endWord"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"wordList[i]")," consist of lowercase English letters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"beginWord != endWord")),(0,s.kt)("li",{parentName:"ul"},"All the words in ",(0,s.kt)("inlineCode",{parentName:"li"},"wordList")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),".")),(0,s.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,s.kt)("p",null,"Imaginate ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"W"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"beginWord")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"inW"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," is a starting node and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"W"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"endWord")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),' is the ending node of a graph with some other nodes between them. The node is connected to each other by only one letter difference. The problem is same as "finding the shortest path between the starting node and the ending node in an undirected and unweighted graph".'),(0,s.kt)("p",null,"Since we are looking for the shortest path, then we should use BFS instead of DFS. Before that, we need to pre-process on the words of the given ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"w"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"wordList")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". If a word is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"hot")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),", then there could be three forms which are ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*ot")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),", ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h*t")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),", and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ho*")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2217")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2217")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2217")))))," can be any alphabet. To implement this, we can use a hash map where the key is the form and the value is the list of word which has the same form. Example: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},":"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"*ot: [hot , dot, lot]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},":"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// 1. build the combination of words that can be formed \nint m = (int) beginWord.size();\nmap<string, vector<string>> comb;\nint n = (int) wordList.size();\nfor (auto s : wordList) {\n    for (int i = 0; i < m; i++) {\n        string t = s.substr(0, i) + '*' + s.substr(i + 1);\n        comb[t].push_back(s);\n    }\n}\n")),(0,s.kt)("p",null,"Then, we can perform BFS using queue. We take the word, build its form and get the list of next nodes. If the next word is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"W"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"endWord")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"or"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),", then we can return the answer which is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"v"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"level + 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),". Otherwise, we check if the next word is visited or not, then push it to the queue and mark it as visited if it hasn't been reached before."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// 2. BFS \nqueue<pair<string, int>> q; // {word, level}\n// check if it is visited already\nunordered_map<string, int> vis;\n// push the first node with level 1\nq.push({beginWord, 1});\n// mark it visited so we won't visit it again\nvis[beginWord] = 1;\nwhile (!q.empty()) {\n    // get the first pair\n    auto [s, level] = q.front(); q.pop();\n    for (int i = 0; i < m; i++) {\n        // build the form\n        string t = s.substr(0, i) + '*' + s.substr(i + 1);\n        // iterate each possible words\n        for (auto w : comb[t]) {\n            // if it reaches the ending node, then we got the answer\n            if (w == endWord) {\n                return level + 1;\n            }\n            // else if it is not visited, then mark it visited \n            // and push it to the queue for next traversal\n            if (!vis.count(w)) {\n                vis[w] = 1;\n                q.push({w, level + 1});\n            }\n        }\n    }\n}\n")),(0,s.kt)("p",null,"Full version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // 1. build the combination of words that can be formed \n        int m = (int) beginWord.size();\n        map<string, vector<string>> comb;\n        int n = (int) wordList.size();\n        for (auto s : wordList) {\n            for (int i = 0; i < m; i++) {\n                string t = s.substr(0, i) + '*' + s.substr(i + 1);\n                comb[t].push_back(s);\n            }\n        }\n        // 2. BFS \n        queue<pair<string, int>> q; // {word, level}\n        unordered_map<string, int> vis;\n        q.push({beginWord, 1});\n        vis[beginWord] = 1;\n        while (!q.empty()) {\n            auto [s, level] = q.front(); q.pop();\n            for (int i = 0; i < m; i++) {\n                string t = s.substr(0, i) + '*' + s.substr(i + 1);\n                for (auto w : comb[t]) {\n                    if (w == endWord) {\n                        return level + 1;\n                    }\n                    if (!vis.count(w)) {\n                        vis[w] = 1;\n                        q.push({w, level + 1});\n                    }\n                }\n            }\n        }\n        return 0;\n    }\n};\n")))}h.isMDXComponent=!0}}]);