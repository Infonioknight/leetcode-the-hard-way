"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4280],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=o(a),u=s,d=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,i[1]=m;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78227:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return c}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),i=["components"],m={description:"Author: @@vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",tags:["Hash Table","String","Sliding Window"]},p="0003 - Longest Substring Without Repeating Characters (Medium)",o={unversionedId:"0000-0099/longest-substring-without-repeating-characters-medium",id:"0000-0099/longest-substring-without-repeating-characters-medium",title:"0003 - Longest Substring Without Repeating Characters (Medium)",description:"Author: @@vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",source:"@site/solutions/0000-0099/0003-longest-substring-without-repeating-characters-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/longest-substring-without-repeating-characters-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-substring-without-repeating-characters-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0003-longest-substring-without-repeating-characters-medium.md",tags:[{label:"Hash Table",permalink:"/leetcode-the-hard-way/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"},{label:"Sliding Window",permalink:"/leetcode-the-hard-way/solutions/tags/sliding-window"}],version:"current",sidebarPosition:3,frontMatter:{description:"Author: @@vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",tags:["Hash Table","String","Sliding Window"]},sidebar:"tutorialSidebar",previous:{title:"0002 - Add Two Numbers (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/add-two-numbers-medium"},next:{title:"0004 - Median of Two Sorted Arrays",permalink:"/leetcode-the-hard-way/solutions/0000-0099/median-of-two-sorted-arrays-hard"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: HashSet with One Iteration",id:"approach-1-hashset-with-one-iteration",level:2},{value:"Approach 2: Sliding Window with ASCII",id:"approach-2-sliding-window-with-ascii",level:2}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},u=h("Tabs"),d=h("TabItem"),k=h("SolutionAuthor"),N={toc:c};function g(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0003---longest-substring-without-repeating-characters-medium"},"0003 - Longest Substring Without Repeating Characters (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"https://leetcode.com/problems/longest-substring-without-repeating-characters/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", find the length of the ",(0,r.kt)("strong",{parentName:"p"},"longest substring")," without repeating characters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= s.length <= 5 * 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," consists of English letters, digits, symbols and spaces.")),(0,r.kt)("h2",{id:"approach-1-hashset-with-one-iteration"},"Approach 1: HashSet with One Iteration"),(0,r.kt)("p",null,"Two pointer ",(0,r.kt)("em",{parentName:"p"},"i")," and ",(0,r.kt)("em",{parentName:"p"},"j"),", initially at the start of the string. Move right (j++) till distinct characters and store them in set.\nIf repeated character occurs then move left (i++) until that repeated character is occured in left, and also remove all characters that occur before that character including character itself from set. This helps to maintain Set with longest substring. "),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of characters in the string"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(s)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," is the longest substring"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        if (s == null || s.length() == 0) return 0;\n        int i = 0, j = 0, max = 0;\n        Set<Character> seen = new HashSet<>();\n        while (j < s.length()) {\n            if (seen.add(s.charAt(j))) {\n                max = Math.max(max, seen.size());\n                j += 1;\n            } else {\n                seen.remove(s.charAt(i++));\n            }\n        }\n        return max;\n    }\n}\n"))),(0,r.kt)(d,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(k,{name:"@MithunPrabhu777",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var lengthOfLongestSubstring = function (s) {\n    const letterCountMap = new Map();\n\n    // Destructuring assignment syntax is a JavaScript expression that pulls out values from array\n    // Here we are assigning initial values to variables\n    let [left, right, max] = [0, 0, 0];\n\n    while (right < s.length) {\n        const currentValue = s[right];\n        const canSlide = letterCountMap.has(currentValue);\n\n        // We can slide left pointer only when we find duplicate number from map\n        if (canSlide) {\n            const rightSlide = letterCountMap.get(currentValue) + 1;\n            left = Math.max(left, rightSlide);\n        }\n\n        // We are finding window from left to right of non repeating characters\n        const window = (right - left) + 1;\n        max = Math.max(window, max);\n        letterCountMap.set(currentValue, right);\n        right++;\n    }\n\n    return max;\n};\n"))),(0,r.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # initiate variables, left pointer of our window, right pointer of \n        # our window, and longest to track longest length of our window.\n        l, r, longest = 0,0,0\n        # create a hash set for O(1) access of letters inside our window.\n        window = set()\n        # While loop to expand right side of our sliding window.\n        while r < len(s):\n            # character @ right isn't in window, add it to the window.\n            if s[r] not in window:\n                # add character to the window set.\n                window.add(s[r])\n                # update our longest \n                # note: we add 1 as a window of size 1, will share indexes,\n                # ex. 0-0 = 0.\n                longest = max(longest, (r-l)+1)\n                # slide right side of our window forward.\n                r += 1\n            # else handles the condition of the character is in our window set.\n            # so we remove the left character and slide left side pointer forward.\n            # If the left isn't the repeating digit, it will be handled by this condition\n            # as the if statement will be false again, so we will return here to continually\n            # pop left character until we have a non-duplicate unique character set.\n            else:\n                # remove left character of window\n                window.remove(s[l])\n                # move left side of window forward.\n                l += 1\n        # return answer.\n        return longest\n")))),(0,r.kt)("h2",{id:"approach-2-sliding-window-with-ascii"},"Approach 2: Sliding Window with ASCII"),(0,r.kt)("p",null,"We can solve this problem with Sliding Window and Two pointers ",(0,r.kt)("em",{parentName:"p"},"i")," and ",(0,r.kt)("em",{parentName:"p"},"j"),". Iterate over the string, keep moving the 2nd pointer ",(0,r.kt)("em",{parentName:"p"},"j")," forward until the character is not matched with ",(0,r.kt)("em",{parentName:"p"},"i")," th character. "),(0,r.kt)("p",null,"Since the input, may contain ",(0,r.kt)("inlineCode",{parentName:"p"},"English letters, digits, symbols and spaces"),", so maintain the ",(0,r.kt)("a",{parentName:"p",href:"https://bluesock.org/~willg/dev/ascii.html"},"ASCII")," char array of size 128. "),(0,r.kt)("p",null,"If any of the character occur more than once, then break the loop and find the difference of ",(0,r.kt)("em",{parentName:"p"},"j")," and ",(0,r.kt)("em",{parentName:"p"},"i")," and that's the longest substring length. "),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of characters in the string. Since both ",(0,r.kt)("em",{parentName:"p"},"i")," and ",(0,r.kt)("em",{parentName:"p"},"j")," moving in one direction and it's total is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(2n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", constants are ignored, so it's ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," extra space, size of 128 ASCII chars for each iteration, considered as constant space."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        if (s == null || s.length() == 0) return 0;\n        if (s.length() == 1) return 1;\n        int max = 0;\n        for (int idx = 0; idx < s.length() - 1; idx++) {\n            int[] seen = new int[128];\n            int i = idx, j = idx + 1;\n            while (j < s.length() && s.charAt(i) != s.charAt(j)) {\n                if (seen[s.charAt(j)] > 0) break;\n                seen[s.charAt(j)]++;\n                j++;\n            }\n            max = Math.max(max, j - i);\n        }\n        return max;\n    }\n}\n"))),(0,r.kt)(d,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(k,{name:"@AnshikaAnand222",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var lengthOfLongestSubstring = function(s) {\n  const set = new Set();\n  let start = 0;\n  let maxSize = 0;\n  for (let i=0; i < s.length; i++) {\n    const c = s.charAt(i);\n    // keep remove character not in the non-repetitive substring\n    while (set.has(c)) {\n      set.delete(s.charAt(start))\n      start += 1;\n    }\n    maxSize = Math.max(maxSize, i - start + 1);    \n    set.add(c);     \n  }  \n  return maxSize;\n};\n"))),(0,r.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # HashSet\n        char_set = set()\n        # left pointer at position zero\n        l = 0  \n        res = 0\n        # Right pointer is going through every char\n        for r in range(len(s)):\n            # If we get to a duplicate\n            while s[r] in char_set:\n                # Remove left most\n                char_set.remove(s[l])\n                # Shift left pointer by one\n                l += 1  \n            char_set.add(s[r])\n            # If the current window size is greater than what it's now\n            # Update\n            res = max(res, r - l + 1)\n        return res\n")))))}g.isMDXComponent=!0}}]);