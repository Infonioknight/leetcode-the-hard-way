"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[33656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},o="2108 - Find First Palindromic String in the Array (Easy)",s={unversionedId:"2100-2199/find-first-palindromic-string-in-the-array-easy",id:"2100-2199/find-first-palindromic-string-in-the-array-easy",title:"2108 - Find First Palindromic String in the Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",source:"@site/solutions/2100-2199/2108-find-first-palindromic-string-in-the-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/find-first-palindromic-string-in-the-array-easy",permalink:"/solutions/2100-2199/find-first-palindromic-string-in-the-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2108-find-first-palindromic-string-in-the-array-easy.md",tags:[],version:"current",sidebarPosition:2108,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},sidebar:"tutorialSidebar",previous:{title:"2100 - 2199",permalink:"/solutions/category/2100---2199"},next:{title:"2109 - Adding Spaces to a String (Medium)",permalink:"/solutions/2100-2199/adding-spaces-to-a-string-medium"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check each word",id:"approach-1-check-each-word",level:2},{value:'Long and Efficient <a href="#longandefficient" id="longandefficient"></a>',id:"long-and-efficient-",level:4},{value:'Shorter but not efficient <a href="#shorterbutnotefficient" id="shorterbutnotefficient"></a>',id:"shorter-but-not-efficient-",level:4},{value:'Shortest but not efficient <a href="#shortestbutnotefficient" id="shortestbutnotefficient"></a>',id:"shortest-but-not-efficient-",level:4},{value:'Shortest but efficient <a href="#shortestbutefficient" id="shortestbutefficient"></a>',id:"shortest-but-efficient-",level:4}],c=(d="SolutionAuthor",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const m={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2108---find-first-palindromic-string-in-the-array-easy"},"2108 - Find First Palindromic String in the Array (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an array of strings ",(0,i.kt)("inlineCode",{parentName:"p"},"words"),", return ",(0,i.kt)("em",{parentName:"p"},"the first ",(0,i.kt)("strong",{parentName:"em"},"palindromic")," string in the array"),". If there is no such string, return ",(0,i.kt)("em",{parentName:"p"},"an ",(0,i.kt)("strong",{parentName:"em"},"empty string")," ")," ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,i.kt)("p",null,"A string is ",(0,i.kt)("strong",{parentName:"p"},"palindromic")," if it reads the same forward and backward."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: words = ["abc","car","ada","racecar","cool"]\nOutput: "ada"\nExplanation: The first string that is palindromic is "ada".\nNote that "racecar" is also palindromic, but it is not the first.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: words = ["notapalindrome","racecar"]\nOutput: "racecar"\nExplanation: The first and only string that is palindromic is "racecar".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: words = ["def","ghi"]\nOutput: ""\nExplanation: There are no palindromic strings, so the empty string is returned.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"words[i]")," consists only of lowercase English letters.")),(0,i.kt)("h2",{id:"approach-1-check-each-word"},"Approach 1: Check each word"),(0,i.kt)("p",null,"There are several ways to check if a string is a palindrome or not."),(0,i.kt)("h4",{id:"long-and-efficient-"},"Long and Efficient ",(0,i.kt)("a",{href:"#longandefficient",id:"longandefficient"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string& s) {\n    for (int i = 0; i < s.size() / 2; i++) {\n        if (s[i] != s[s.size() - i - 1])\n            return false;\n    }\n    return true;\n}\n")),(0,i.kt)("h4",{id:"shorter-but-not-efficient-"},"Shorter but not efficient ",(0,i.kt)("a",{href:"#shorterbutnotefficient",id:"shorterbutnotefficient"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string& s) {\n    string t = s;\n    reverse(t.begin(), t.end());\n    return s == t;\n}\n")),(0,i.kt)("h4",{id:"shortest-but-not-efficient-"},"Shortest but not efficient ",(0,i.kt)("a",{href:"#shortestbutnotefficient",id:"shortestbutnotefficient"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string& s) {\n    return s == string(s.rbegin(), s.rend());\n}\n")),(0,i.kt)("h4",{id:"shortest-but-efficient-"},"Shortest but efficient ",(0,i.kt)("a",{href:"#shortestbutefficient",id:"shortestbutefficient"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string &s) {\n    return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());\n}\n")),(0,i.kt)("p",null,"We just need to iterate each string and check if the target ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"s")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),"s is a palindrome, return the string if so."),(0,i.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    bool isPalindrome(const string& s) {\n        return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());\n    }\n    \n    string firstPalindrome(vector<string>& words) {\n        for (auto s : words) {\n            if (isPalindrome(s)) {\n                return s;\n            }\n        }\n        return "";\n    }\n};\n')))}u.isMDXComponent=!0}}]);