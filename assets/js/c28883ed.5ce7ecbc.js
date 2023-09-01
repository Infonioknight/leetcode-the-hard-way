"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>w,frontMatter:()=>o,metadata:()=>s,suggestedProblems:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","two pointers","algorithm"]},i=void 0,s={unversionedId:"basic-topics/two-pointers",id:"basic-topics/two-pointers",title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",source:"@site/tutorials/basic-topics/two-pointers.md",sourceDirName:"basic-topics",slug:"/basic-topics/two-pointers",permalink:"/tutorials/basic-topics/two-pointers",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/two-pointers.md",tags:[],version:"current",frontMatter:{title:"Two Pointers",description:"Two Pointers is an effective technique used for searching pairs in a sorted array.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","two pointers","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Trie",permalink:"/tutorials/basic-topics/trie"},next:{title:"Graph Theory",permalink:"/tutorials/category/graph-theory"}},l={},p=[{value:"Overview",id:"overview",level:2}],m=[{problemName:"1768 - Merge Strings Alternately",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/merge-strings-alternately/",solutionLink:"../../solutions/1700-1799/merge-strings-alternately-easy"},{problemName:"2108 - Find First Palindromic String in the Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",solutionLink:"../../solutions/2100-2199/find-first-palindromic-string-in-the-array-easy"},{problemName:"0283 - Move Zeroes",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/move-zeroes/",solutionLink:"../../solutions/0200-0299/move-zeroes-easy"}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("TutorialAuthors"),h=c("Tabs"),d=c("TabItem"),g=c("SolutionAuthor"),f=c("Table"),k={toc:p,suggestedProblems:m},y="wrapper";function w(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{names:"@heiheihang, @wingkwong",mdxType:"TutorialAuthors"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The two pointers technique is a technique used to iterate through a data set, typically an array or a list, in a controlled way. It involves using two pointers, one pointing to the beginning of the data set and the other pointing to the end, and moving them towards each other based on specific conditions. This technique is commonly used to solve problems that involve searching for a specific condition or pattern within a data set, or that require a comparison between different elements in the data set."),(0,r.kt)("p",null,"The two pointers technique is mainly used for solving problems that have a linear time complexity, it can lead to substantial performance improvements over a brute-force approach. Some common examples of problems that can be solved using this technique include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finding the maximum / minimum value in a set of data."),(0,r.kt)("li",{parentName:"ul"},"Counting the number of occurrences of a specific element."),(0,r.kt)("li",{parentName:"ul"},"Finding the longest substring without repeating characters."),(0,r.kt)("li",{parentName:"ul"},"Finding the maximum sum of a sub-array of size ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),".")),(0,r.kt)("p",null,"Overall, the two pointers technique is a useful approach for solving specific types of problems that involve iterating through a data set in a controlled way, such as in pattern matching, data analysis, and statistics. It allows for an efficient and controlled iteration of a data set, which can lead to improved performance and more accurate results."),(0,r.kt)("h1",{id:"example-1-977-squares-of-a-sorted-array"},"Example 1: ",(0,r.kt)("a",{parentName:"h1",href:"https://leetcode.com/problems/squares-of-a-sorted-array/"},"977. Squares of a Sorted Array")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Given an integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," sorted in ",(0,r.kt)("strong",{parentName:"p"},"non-decreasing")," order, return ",(0,r.kt)("em",{parentName:"p"},"an array of ",(0,r.kt)("strong",{parentName:"em"},"the squares of each number")," sorted in non-decreasing order"),".")),(0,r.kt)("p",null,"Let's look at this example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# input\nnums = [-4,-1,0,3,10]\n")),(0,r.kt)("p",null,"From this input, we can generate the following square numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"squares = [16, 1, 0, 9, 100]\n")),(0,r.kt)("p",null,"We want to return the following sorted squares:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"answer = [0, 1, 9, 16, 100]\n")),(0,r.kt)("p",null,"You may be thinking, why can't we generate the squares and then sort the result? This approach would take ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(NlogN)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"Nl"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", and we want to do better than this."),(0,r.kt)("p",null,"We can sequentially add the next biggest elements with the two pointer approach. We first set a ",(0,r.kt)("inlineCode",{parentName:"p"},"left_pointer")," at the left of the list and a ",(0,r.kt)("inlineCode",{parentName:"p"},"right_pointer")," at the right of the list. The ",(0,r.kt)("inlineCode",{parentName:"p"},"left_pointer")," should be pointing at the ",(0,r.kt)("strong",{parentName:"p"},"largest")," negative number (most negative), and the ",(0,r.kt)("inlineCode",{parentName:"p"},"right_pointer")," should be pointing at the ",(0,r.kt)("strong",{parentName:"p"},"largest")," positive number. We can move the pointers accordingly to find the next largest squared number."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(g,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        # initialize two pointers\n        left_pointer, right_pointer = 0, len(nums) - 1\n        # initialize result\n        res = []\n        # while left_pointer does not meet right_pointer\n        while(left_pointer <= right_pointer):\n            # if the square of left_pointer and right_pointer \n            if(abs(nums[left_pointer]) > abs(nums[right_pointer])):\n                res.append(nums[left_pointer] ** 2)\n                # we move the left to the right\n                left_pointer += 1\n            else:\n                res.append(nums[right_pointer] ** 2)\n                # we move the right pointer to the left\n                right_pointer -= 1\n        # we need to reverse the result list\n        res.reverse()\n        return res\n"))),(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        int left_pointer = 0;\n        int right_pointer = nums.size() - 1;\n        vector<int> res;\n        while(left_pointer <= right_pointer) {\n            if(abs(nums[left_pointer]) > abs(nums[right_pointer])) {\n                res.push_back(nums[left_pointer] * nums[left_pointer]);\n                left_pointer += 1;\n            }\n            else {\n                res.push_back(nums[right_pointer] * nums[right_pointer]);\n                right_pointer -= 1;\n            }\n        }\n        reverse(res.begin(), res.end());\n        return res;\n    }\n};\n\n"))),(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> sortedSquares(int[] nums) {\n        int left_pointer = 0;\n        int right_pointer = nums.length - 1;\n        List<Integer> res = new ArrayList<>();\n        while(left_pointer <= right_pointer) {\n            if(Math.abs(nums[left_pointer]) > Math.abs(nums[right_pointer])) {\n                res.add(nums[left_pointer] * nums[left_pointer]);\n                left_pointer += 1;\n            }\n            else {\n                res.add(nums[right_pointer] * nums[right_pointer]);\n                right_pointer -= 1;\n            }\n        }\n        Collections.reverse(res);\n        return res;\n    }\n}\n\n")))),(0,r.kt)("p",null,"Unfortunately, there is no fixed way to perform two pointers. However, generally, we have a pointer at the start of the list and another pointer at the end of the list. We have to carefully analyze the question and choose the most appropriate approach to operate the two pointers."),(0,r.kt)(f,{title:"Suggested Problems",data:m,mdxType:"Table"}))}w.isMDXComponent=!0}}]);