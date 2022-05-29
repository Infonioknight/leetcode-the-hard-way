"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2349],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31068:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/"},l="2273 - Find Resultant Array After Removing Anagrams (Easy)",p={unversionedId:"2200-2299/find-resultant-array-after-removing-anagrams-easy",id:"2200-2299/find-resultant-array-after-removing-anagrams-easy",title:"2273 - Find Resultant Array After Removing Anagrams (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/",source:"@site/solutions/2200-2299/2273-find-resultant-array-after-removing-anagrams-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/find-resultant-array-after-removing-anagrams-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/find-resultant-array-after-removing-anagrams-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2273-find-resultant-array-after-removing-anagrams-easy.md",tags:[],version:"current",sidebarPosition:2273,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/"},sidebar:"tutorialSidebar",previous:{title:"2267 - Check if There Is a Valid Parentheses String Path (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard"},next:{title:"2274 - Maximum Consecutive Floors Without Special Floors (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-consecutive-floors-without-special-floors-medium"}},d={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2273---find-resultant-array-after-removing-anagrams-easy"},"2273 - Find Resultant Array After Removing Anagrams (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," string array ",(0,o.kt)("inlineCode",{parentName:"p"},"words"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"words[i]")," consists of lowercase English letters."),(0,o.kt)("p",null,"In one operation, select any index ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," such that ",(0,o.kt)("inlineCode",{parentName:"p"},"0 < i < words.length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"words[i - 1]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"words[i]")," are ",(0,o.kt)("strong",{parentName:"p"},"anagrams"),", and ",(0,o.kt)("strong",{parentName:"p"},"delete")," ",(0,o.kt)("inlineCode",{parentName:"p"},"words[i]")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"words"),". Keep performing this operation as long as you can select an index that satisfies the conditions."),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," ",(0,o.kt)("em",{parentName:"p"},"after performing all operations"),". It can be shown that selecting the indices for each operation in ",(0,o.kt)("strong",{parentName:"p"},"any")," arbitrary order will lead to the same result."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Anagram")," is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},'"dacb"')," is an anagram of ",(0,o.kt)("inlineCode",{parentName:"p"},'"abdc"'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: words = ["abba","baba","bbaa","cd","cd"]\nOutput: ["abba","cd"]\nExplanation:\nOne of the ways we can obtain the resultant array is by using the following operations:\n- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].\n  Now words = ["abba","baba","cd","cd"].\n- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].\n  Now words = ["abba","cd","cd"].\n- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].\n  Now words = ["abba","cd"].\nWe can no longer perform any operations, so ["abba","cd"] is the final answer.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: words = ["a","b","c","d","e"]\nOutput: ["a","b","c","d","e"]\nExplanation:\nNo two adjacent strings in words are anagrams of each other, so no operations are performed.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 10")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"words[i]")," consists of lowercase English letters.")),(0,o.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,o.kt)("p",null,"To check if two strings are anagrams, we can sort them to see if they are same or count the frequency of each letter in both string. The first string cannot be deleted. Starting from the second one, if the current one and the previous one are not anagrams, then add the current one to answer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<string> removeAnagrams(vector<string>& words) {\n        vector<string> ans;\n        ans.push_back(words.front());\n        for (int i = 1; i < words.size(); i++) {\n            string s = words[i];\n            string t = words[i - 1];\n            sort(s.begin(), s.end());\n            sort(t.begin(), t.end());\n            if (s != t) ans.push_back(words[i]);\n        }\n        return ans;\n    }\n};\n")))}m.isMDXComponent=!0}}]);