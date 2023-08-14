"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37712],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,d=h["".concat(p,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(d,s(s({ref:t},m),{},{components:a})):n.createElement(d,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={description:"Author: @ColeB2 | https://leetcode.com/problems/partition-labels/",tags:["Hash Table","Two Pointers","String","Greedy"]},s="0763 - Partition Labels (Medium)",o={unversionedId:"0700-0799/partition-labels-medium",id:"0700-0799/partition-labels-medium",title:"0763 - Partition Labels (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/partition-labels/",source:"@site/solutions/0700-0799/0763-partition-labels-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/partition-labels-medium",permalink:"/solutions/0700-0799/partition-labels-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0763-partition-labels-medium.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{label:"String",permalink:"/solutions/tags/string"},{label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:763,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/partition-labels/",tags:["Hash Table","Two Pointers","String","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"0746 - Min Cost Climbing Stairs (Easy)",permalink:"/solutions/0700-0799/min-cost-climbing-stairs-easy"},next:{title:"0778 - Swim in Rising Water (Hard)",permalink:"/solutions/0700-0799/swim-in-rising-water-hard"}},p={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=m("Tabs"),c=m("TabItem"),u=m("SolutionAuthor"),d={toc:l},w="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(w,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0763---partition-labels-medium"},"0763 - Partition Labels (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/partition-labels/"},"https://leetcode.com/problems/partition-labels/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),". We want to partition the string into as many parts as possible so that each letter appears in at most one part."),(0,r.kt)("p",null,"Note that the partition is done so that after concatenating all the parts in order, the resultant string should be ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"a list of integers representing the size of these parts"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "ababcbacadefegdehijhklij"\nOutput: [9,7,8]\nExplanation:\nThe partition is "ababcbaca", "defegde", "hijhklij".\nThis is a partition so that each letter appears in at most one part.\nA partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "eccbbbbdec"\nOutput: [10]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," consists of lowercase English letters.")),(0,r.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,r.kt)("p",null,"To solve this we know that we need to make as many windows as we can, that contain characters that appear in only that window. So we can imagine if start with a character in a window, that we would have to continue to grow our window until we run out of occurrences of that character. Not only that but for each character we add to our window, we must also run out of occurrences of those characters too."),(0,r.kt)("p",null,"Knowing that we will need a hashmap to track the characters in the string. By using our hash map to track the furthest right each character appears in the string, we can vastly simplify our code. Then in combination with a pointer that tells us what is the furthest right a character in our window stretches to, we can iterate through the string, updating how far the furthest character in our window stretches too with each new character added, and we can stop growing our window when our iteration reaches the furthest right character."),(0,r.kt)("p",null,"That's the point we mark the size of the window to add to our partitions length array and adjust our left pointer to start the process over again."),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", we only need to iterate over our string twice, once to create our hash map, and another to solve the problem."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"26"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(26)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"26"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", there are only ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"26")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"26")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"26")))))," unique lowercase characters, which is the maximum size our partitions length array can reach, as well as our hash map."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        # hash map to hold the furthest right a character can be in string\n        # s. This help simplify things, as when a character enters the\n        # window, we don't have to count how many characters are left, we\n        # can just keep expanding the window until we reach that\n        # characters furthest right position.\n        chars_position = {}\n        for i, ch in enumerate(s):\n            # by always setting characters position to i, and iterating\n            # left to right, we are guaranteed to have the furthest\n            # right position be the value of the character in the hashmap.\n            chars_position[ch] = i\n        # array of partitions length we are going to return.\n        partitions_length = []\n        # left and right pointers. Left pointer is the left side of \n        # the window, right pointer is the right side, which will be\n        # updated everytime we add a new character to the window.\n        left, right = 0, 0\n        # iterate all characters in s tracking index and character\n        for i, ch in enumerate(s):\n            # update right side of our window. It will be updated with\n            # the furthest right our incoming character can reach in s.\n            right = max(right, chars_position[ch])\n            # if our index ever reaches right, it means all characters\n            # in the window don't appear in the remaining portion of the\n            # string anymore so we can add this partition to our array.\n            if i == right:\n                # add the partition to the array and update our\n                # left pointer.\n                partitions_length.append(right - left + 1)\n                left = right + 1\n        return partitions_length\n")))))}k.isMDXComponent=!0}}]);