"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48791],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var m=a.createContext({}),o=function(n){var e=a.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=o(n.components);return a.createElement(m.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,m=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=o(t),c=r,g=u["".concat(m,".").concat(c)]||u[c]||d[c]||i;return t?a.createElement(g,s(s({ref:e},p),{},{components:t})):a.createElement(g,s({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=n,l[u]="string"==typeof n?n:r,s[1]=l;for(var o=2;o<i;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},54783:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={description:"Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",tags:["Array","Binary Search"]},s="0034 - Find First and Last Position of Element in Sorted Array (Medium)",l={unversionedId:"0000-0099/find-first-and-last-position-of-element-in-sorted-array-medium",id:"0000-0099/find-first-and-last-position-of-element-in-sorted-array-medium",title:"0034 - Find First and Last Position of Element in Sorted Array (Medium)",description:"Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",source:"@site/solutions/0000-0099/0034-find-first-and-last-position-of-element-in-sorted-array-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/find-first-and-last-position-of-element-in-sorted-array-medium",permalink:"/solutions/0000-0099/find-first-and-last-position-of-element-in-sorted-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0034-find-first-and-last-position-of-element-in-sorted-array-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Binary Search",permalink:"/solutions/tags/binary-search"}],version:"current",sidebarPosition:34,frontMatter:{description:"Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",tags:["Array","Binary Search"]},sidebar:"tutorialSidebar",previous:{title:"0033 - Search in Rotated Sorted Array (Medium)",permalink:"/solutions/0000-0099/search-in-rotated-sorted-array-medium"},next:{title:"0035 - Search Insert Position (Easy)",permalink:"/solutions/0000-0099/search-insert-position-easy"}},m={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2},{value:"Approach 2: Optimal Binary Search",id:"approach-2-optimal-binary-search",level:2}],p=n=>function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},u=p("Tabs"),d=p("TabItem"),c=p("SolutionAuthor"),g={toc:o},h="wrapper";function f(n){let{components:e,...t}=n;return(0,r.kt)(h,(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0034---find-first-and-last-position-of-element-in-sorted-array-medium"},"0034 - Find First and Last Position of Element in Sorted Array (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given an array of integers ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," sorted in non-decreasing order, find the starting and ending position of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," value."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," is not found in the array, return ",(0,r.kt)("inlineCode",{parentName:"p"},"[-1, -1]"),"."),(0,r.kt)("p",null,"You must write an algorithm with ",(0,r.kt)("inlineCode",{parentName:"p"},"O(log n)")," runtime complexity."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [5,7,7,8,8,10], target = 8\nOutput: [3,4]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [5,7,7,8,8,10], target = 6\nOutput: [-1,-1]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [], target = 0\nOutput: [-1,-1]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= nums.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums[i] <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nums")," is a non-decreasing array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^9 <= target <= 10^9"))),(0,r.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,r.kt)("admonition",{title:"Prerequisite",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")))),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"c++",label:"C++",mdxType:"TabItem"},(0,r.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int getFirstPosition(vector<int>& nums, int target) {\n        int n = nums.size(), l = 0, r = n - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (target > nums[m]) l = m + 1;\n            else r = m;\n        }\n        return nums[l] == target ? l : -1;\n    }\n\n    int getLastPosition(vector<int>& nums, int target) {\n        int n = nums.size(), l = 0, r = n - 1;\n        while (l < r) {\n            int m = l + (r - l + 1) / 2;\n            if (target < nums[m]) r = m - 1;\n            else l = m;\n        }\n        return nums[l] == target ? l : -1;\n    }\n\n    vector<int> searchRange(vector<int>& nums, int target) {\n        // handle edge case\n        if ((int) nums.size() == 0) return {-1, -1};\n        // return the lower bound and upper bound - 1\n        return vector<int> {\n            // if the first position is -1, we can return ans directly\n            // see Approach 2: Optimal Binary Search\n            getFirstPosition(nums, target),\n            getLastPosition(nums, target)\n        };\n    }\n};\n"))),(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(c,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        int start = 0, end = nums.length - 1, firstelement = -1;\n        while (start <= end) {\n            int mid = start + (end - start) / 2;\n            if (nums[mid] == target) {\n                firstelement = mid;\n                end = mid - 1;\n            } else if (nums[mid] > target) {\n                end = mid - 1;\n            } else {\n                start = mid + 1;\n            }\n        }\n        start = 0;\n        end = nums.length - 1;\n        int endelement = -1;\n        while (start <= end) {\n            int mid = start + (end - start) / 2;\n            if (nums[mid] == target) {\n                endelement = mid;\n                start = mid + 1;\n            } else if (nums[mid] > target) {\n                end = mid - 1;\n            } else {\n                start = mid + 1;\n            }\n        }\n        return new int[] { firstelement, endelement };\n    }\n}\n"))),(0,r.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(c,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar searchRange = function (nums, target) {\n  let l = 0;\n  let r = nums.length - 1;\n  while (l <= r) {\n    let mid = Math.floor((l + r) / 2);\n    if (nums[l] == target && nums[r] == target) {\n      return [l, r];\n    }\n    if (nums[mid] > target) {\n      r = mid - 1;\n    } else if (nums[mid] < target) {\n      l = mid + 1;\n    } else {\n      if (nums[l] != target) l++;\n      if (nums[r] != target) r--;\n    }\n  }\n  return [-1, -1];\n};\n"))),(0,r.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(c,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[l] == nums[r] == target:\n                return [l, r]\n            if nums[mid] > target:\n                r = mid - 1\n            elif nums[mid] < target:\n                l = mid + 1\n            else:\n                if nums[l] != target: l += 1\n                if nums[r] != target: r -= 1\n        return [-1, -1]\n\n"))),(0,r.kt)(d,{value:"kotlint",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Solution {\n    fun getFirstPosition(nums: IntArray, target: Int): Int {\n        var l = 0\n        var r = nums.size - 1\n        while (l < r) {\n            val m = (l + r) / 2\n            if (target > nums[m]) l = m + 1\n            else r = m\n        }\n        return if (nums[l] == target) l else -1\n    }\n    \n    fun getLastPosition(nums: IntArray, target: Int): Int {\n        var l = 0\n        var r = nums.size - 1\n        while (l < r) {\n            val m = (l + r + 1) / 2\n            if (target < nums[m]) r = m - 1\n            else l = m\n        }\n        return if (nums[l] == target) l else -1\n    }\n    \n    fun searchRange(nums: IntArray, target: Int): IntArray {\n        if (nums.size == 0) return intArrayOf(-1, -1)\n        return intArrayOf(\n            getFirstPosition(nums, target),\n            getLastPosition(nums, target),\n        )\n    }\n}\n")))),(0,r.kt)("h2",{id:"approach-2-optimal-binary-search"},"Approach 2: Optimal Binary Search"),(0,r.kt)("p",null,"To find the start and end indices, try to find the start index first, if it doesn't exist then the array not having the given element. So added a condition to check if the first index is not found then skip the end index block."),(0,r.kt)("p",null,"Instead of having two loops for both cases, have a flag that differentiates between the start and end index search space."),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(c,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        int[] result = {-1, -1};\n        result[0] = searchIndex(nums, target, true);\n        if (result[0] != -1) {\n            result[1] = searchIndex(nums, target, false);\n        }\n        return result;\n    }\n\n    private int searchIndex(int[] nums, int target, boolean startIndex) {\n        int low = 0, high = nums.length - 1;\n        int index = -1;\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n            if (target < nums[mid]) {\n                high = mid - 1;\n            } else if (target > nums[mid]) {\n                low = mid + 1;\n            } else {\n                index = mid;\n                if (startIndex) {\n                    high = mid - 1;\n                } else {\n                    low = mid + 1;\n                }\n            }\n        }\n        return index;\n    }\n}\n"))),(0,r.kt)(d,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Solution {\n    fun getFirstPosition(nums: IntArray, target: Int): Int {\n        var l = 0\n        var r = nums.size - 1\n        while (l < r) {\n            val m = (l + r) / 2\n            if (target > nums[m]) l = m + 1\n            else r = m\n        }\n        return if (nums[l] == target) l else -1\n    }\n    \n    fun getLastPosition(nums: IntArray, target: Int): Int {\n        var l = 0\n        var r = nums.size - 1\n        while (l < r) {\n            val m = (l + r + 1) / 2\n            if (target < nums[m]) r = m - 1\n            else l = m\n        }\n        return if (nums[l] == target) l else -1\n    }\n    \n    fun searchRange(nums: IntArray, target: Int): IntArray {\n        if (nums.size == 0) return intArrayOf(-1, -1)\n        val first = getFirstPosition(nums, target)\n        if (first == -1) return intArrayOf(-1, -1)\n        val last = getLastPosition(nums, target)\n        return intArrayOf(first, last)\n    }\n}\n")))))}f.isMDXComponent=!0}}]);