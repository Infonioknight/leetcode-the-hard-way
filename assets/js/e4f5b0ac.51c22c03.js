"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54010],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,h=c["".concat(i,".").concat(d)]||c[d]||u[d]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],m={description:"Author: @DoubleSpicy, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/contains-duplicate/"},i="0217 - Contains Duplicate (Easy)",l={unversionedId:"0200-0299/contains-duplicate-easy",id:"0200-0299/contains-duplicate-easy",title:"0217 - Contains Duplicate (Easy)",description:"Author: @DoubleSpicy, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/contains-duplicate/",source:"@site/solutions/0200-0299/0217-contains-duplicate-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/contains-duplicate-easy",permalink:"/solutions/0200-0299/contains-duplicate-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0217-contains-duplicate-easy.md",tags:[],version:"current",sidebarPosition:217,frontMatter:{description:"Author: @DoubleSpicy, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/contains-duplicate/"},sidebar:"tutorialSidebar",previous:{title:"0215 - Kth Largest Element in an Array (Medium)",permalink:"/solutions/0200-0299/kth-largest-element-in-an-array-medium"},next:{title:"0219 - Contains Duplicate II (Easy)",permalink:"/solutions/0200-0299/contains-duplicate-ii-easy"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Count number of appearance using std::unordered_set",id:"approach-1-count-number-of-appearance-using-stdunordered_set",level:2},{value:"Approach 2: Sort, then see if next element is the same",id:"approach-2-sort-then-see-if-next-element-is-the-same",level:2},{value:"Beginner Python Solution",id:"beginner-python-solution",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},d=c("Tabs"),h=c("TabItem"),k=c("SolutionAuthor"),N={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0217---contains-duplicate-easy"},"0217 - Contains Duplicate (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/contains-duplicate/"},"https://leetcode.com/problems/contains-duplicate/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if any value appears ",(0,s.kt)("strong",{parentName:"p"},"at least twice")," in the array, and return ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," if every element is distinct."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1]\nOutput: true\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4]\nOutput: false\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums[i] <= 10^9"))),(0,s.kt)("h2",{id:"approach-1-count-number-of-appearance-using-stdunordered_set"},"Approach 1: Count number of appearance using std::unordered","_","set"),(0,s.kt)("p",null,"Perhaps the most straight forward way to find out duplicated elements since nothing could be added into a set when the same value is inside the set already. Then we could compare the number of distinct elements vs. number of elements in nums to judge if there is duplicates."),(0,s.kt)("p",null,"Some further optimizations could be done. First, we could stop early once we have find a duplicate. Also note that ",(0,s.kt)("inlineCode",{parentName:"p"},"std::unordered_set::insert")," returns a pair object which is an iterator pointing to the newly added element or the element with the same key, followed by a boolean variable telling you that a element is newly inserted or not. There is no need to use ",(0,s.kt)("inlineCode",{parentName:"p"},"std::unordered_set::find")," before insertion."),(0,s.kt)("p",null,"Both time and space complexity is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(h,{value:"c++",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@DoubleSpicy",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // store distinct elements in nums,\n        // and temporary insertion result.\n        unordered_set<int> appears;\n        pair<unordered_set<int>::iterator, bool> result;\n\n        for (auto const & num: nums){\n            result = appears.insert(num);\n            if (result.second == false){ \n                // stop early once we find a duplicate.\n                return true;\n            }\n        }\n        return false;\n    }\n};\n"))),(0,s.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // HashSet for efficient lookup / add method itself provides true or false based on the key.\n        Set<Integer> table = new HashSet<>();\n        for (int num : nums) {\n            // Returns true - if key is added to the Set \n            // otherwise false if the key is already present.\n            if (!table.add(num)) return true;\n        }\n        return false;\n    }\n}\n"))),(0,s.kt)(h,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    let hash_set = new Set();\n    for (n of nums) {\n        if (hash_set.has(n)) return true;\n        hash_set.add(n);\n    }\n    return false;\n};\n"))),(0,s.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        hash_set = set()\n        for n in nums:\n            if n in hash_set:\n                return True\n            hash_set.add(n)\n        return False \n")))),(0,s.kt)("h2",{id:"approach-2-sort-then-see-if-next-element-is-the-same"},"Approach 2: Sort, then see if next element is the same"),(0,s.kt)("p",null,"Another approach is to sort ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," and then see for each element, whether next element has the same value. For example sorting ",(0,s.kt)("inlineCode",{parentName:"p"},"1, 2, 5, 5, 4")," gives ",(0,s.kt)("inlineCode",{parentName:"p"},"1, 2, 4, 5, 5"),"."),(0,s.kt)("p",null,"This approach is more memory efficient (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),") then approach 1 since it doesn't need to make copies of input values stored in a set but comes at a price of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(NlogN)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"Nl"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," time complexity."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(h,{value:"c++",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@DoubleSpicy",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // sort nums first.\n        // make a variable to store the last value read.\n        sort(nums.begin(), nums.end());\n        int last = nums[0];\n        // for each element, see if the value is equal to last value.\n        for (int i = 1; i < nums.size(); i++){\n            if (last == nums[i])\n                return true;\n            else\n                last = nums[i];\n        }\n        return false;\n    }\n};\n"))),(0,s.kt)(h,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    nums.sort();\n    let last_num = nums[0];\n    for (i = 1; i < nums.length; i++) {\n        if (last_num == nums[i]) return true;\n        else last_num = nums[i];\n    }\n    return false;\n};\n"))),(0,s.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        nums.sort()\n        last_num = nums[0]\n        for i in range(1, len(nums)):\n            if last_num == nums[i]:\n                return True\n            else:\n                last_num = nums[i]\n        return False \n")))),(0,s.kt)("h2",{id:"beginner-python-solution"},"Beginner Python Solution"),(0,s.kt)("p",null,"In general, we want to make use of ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultdict")," in python."),(0,s.kt)("p",null,"We can declare ",(0,s.kt)("inlineCode",{parentName:"p"},"dictionary = defaultdict(int)")," to keep track of what elements we have seen so far."),(0,s.kt)("p",null,"You might be thinking: Why can't we simply loop the array for each element to check if there is duplicate? It is less time efficient if we do not use a ",(0,s.kt)("inlineCode",{parentName:"p"},"dictionary"),".\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24492138/170910845-58aaea00-3a90-4c15-9ca2-fdf9e473baa5.jpg",alt:"1"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24492138/170910857-5bcbaf02-22f7-4d31-8b93-94784fa2be73.jpg",alt:"2"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24492138/170910863-48ac46bf-dae8-423e-809a-22ec32466b06.jpg",alt:"3"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24492138/170910866-22f6ed1d-b58c-4e6a-8e32-11ba7e0b6b29.jpg",alt:"4"})),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@DoubleSpicy",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"hashNum = defaultdict(int)\nfor i in nums:\n  if i not in hashNum:\n    hashNum[i] = 1\n  else:\n    return True\nreturn False\n"))),(0,s.kt)(h,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    let hash_map = new Object();\n    for (n of nums) {\n        if (hash_map.hasOwnProperty(n)) return true;\n        hash_map[n] = 1;\n    }\n    return false;\n};\n")))))}f.isMDXComponent=!0}}]);