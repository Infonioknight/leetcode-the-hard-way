"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[49613],{22144:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(85893),t=n(11151);const i={description:"Author: @wingkwong, @ColeB2, @jit | https://leetcode.com/problems/kth-largest-element-in-an-array/",tags:["Priority Queue","Quick Select"]},l="0215 - Kth Largest Element in an Array (Medium)",r={id:"0200-0299/kth-largest-element-in-an-array-medium",title:"0215 - Kth Largest Element in an Array (Medium)",description:"Author: @wingkwong, @ColeB2, @jit | https://leetcode.com/problems/kth-largest-element-in-an-array/",source:"@site/solutions/0200-0299/0215-kth-largest-element-in-an-array-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/kth-largest-element-in-an-array-medium",permalink:"/solutions/0200-0299/kth-largest-element-in-an-array-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0215-kth-largest-element-in-an-array-medium.md",tags:[{inline:!0,label:"Priority Queue",permalink:"/solutions/tags/priority-queue"},{inline:!0,label:"Quick Select",permalink:"/solutions/tags/quick-select"}],version:"current",sidebarPosition:215,frontMatter:{description:"Author: @wingkwong, @ColeB2, @jit | https://leetcode.com/problems/kth-largest-element-in-an-array/",tags:["Priority Queue","Quick Select"]},sidebar:"tutorialSidebar",previous:{title:"0214 - Shortest Palindrome (Hard)",permalink:"/solutions/0200-0299/shortest-palindrome-hard"},next:{title:"0217 - Contains Duplicate (Easy)",permalink:"/solutions/0200-0299/contains-duplicate-easy"}},m={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2},{value:"Approach 2: STL",id:"approach-2-stl",level:2},{value:"Approach 3: Quick Select",id:"approach-3-quick-select",level:2}];function c(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n,TabItem:i,Tabs:l}=s;return n||d("SolutionAuthor",!0),i||d("TabItem",!0),l||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"0215---kth-largest-element-in-an-array-medium",children:"0215 - Kth Largest Element in an Array (Medium)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/kth-largest-element-in-an-array/",children:"https://leetcode.com/problems/kth-largest-element-in-an-array/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["Given an integer array ",(0,a.jsx)(s.code,{children:"nums"})," and an integer ",(0,a.jsx)(s.code,{children:"k"}),", return ",(0,a.jsx)(s.em,{children:"the"})," ",(0,a.jsx)(s.code,{children:"kth"})," ",(0,a.jsx)(s.em,{children:"largest element in the array"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Note that it is the ",(0,a.jsx)(s.code,{children:"kth"})," largest element in the sorted order, not the ",(0,a.jsx)(s.code,{children:"kth"})," distinct element."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: nums = [3,2,1,5,6,4], k = 2\nOutput: 5\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: nums = [3,2,3,1,2,4,5,5,6], k = 4\nOutput: 4\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= k <= nums.length <= 10^4"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"-10^4 <= nums[i] <= 10^4"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-priority-queue",children:"Approach 1: Priority Queue"}),"\n",(0,a.jsxs)(s.p,{children:["When we look for ",(0,a.jsx)(s.code,{children:"k-th"})," elements, we can think of Priority Queue as it internally sorts the container. We can check if the size exceeds ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"k"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(nlogk)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where n is the number of values in the nums array, and k is the size of our heap. We must loop through all numbers in nums which takes ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," time, but our heap can be maintained in ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mi,{children:"k"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"logk"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," time."]}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(k)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"k"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," is the size of our heap, as we are only putting ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"k"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," values inside our heap."]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // k-th largest / smallest -> think of priority queue\n    int findKthLargest(vector<int>& nums, int k) {\n        priority_queue<int> pq;\n        // push the elements to priority queue\n        for (auto x : nums) pq.push(x);\n        // e.g. [3,2,1,5,6,4] -> 1,2,3,4,5,6 (top)\n        // then we remove top k - 1 elements\n        for (int i = 0; i < k - 1; i++) pq.pop();\n        // e.g. [3,2,1,5,6,4] -> 1,2,3,4,5,6 (top)\n        // k = 2 -> we pop 2 - 1 = 1 element\n        // 1,2,3,4,5 (top)\n        // return the top which is the k-th largest element\n        return pq.top();\n    }\n};\n"})})]}),(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    # Python heapq is a minheap. Perfect for the question, as the\n    # the smallest value will always be at the top, and the first\n    # value popped off during a pop/pushpop. Leaving only the k largest\n    # inside the heap.\n    # Time: O(nlogk)\n    # Space: O(k)\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # initialize our heap\n        heap = []\n        # loop through all numbers in nums\n        for num in nums:\n            # < k values in heap we can just push\n            if len(heap) < k:\n                # python uses heapq module to build heaps\n                # heapq methods typically take to args\n                # (heap, value) where the heap is the list we are using\n                # as a heap, and the value is the value we are putting\n                # into the heap.\n                heapq.heappush(heap, num)\n            else:\n                # => k we push onto the heap then pop.\n                heapq.heappushpop(heap, num)\n        # return first value inside our heap.\n        return heap[0]\n"})})]})]}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-stl",children:"Approach 2: STL"}),"\n",(0,a.jsx)(s.p,{children:"The following STL functions can partially sort to solve the problem."}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        partial_sort(nums.begin(), nums.begin() + k, nums.end(), greater<int>());\n        return nums[k - 1];\n    }\n};\n"})}),(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        nth_element(nums.begin(), nums.begin() + k - 1, nums.end(), greater<int>());\n        return nums[k - 1];\n    }\n};\n"})})]}),(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return heapq.nlargest(k, nums)[-1]\n"})})]}),(0,a.jsxs)(i,{value:"rust",label:"Rust",children:[(0,a.jsx)(n,{name:"@jit"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-rs",children:"impl Solution {\n    pub fn find_kth_largest(mut nums: Vec<i32>, k: i32) -> i32 {\n        let n = nums.len();\n        *nums.select_nth_unstable(n - k as usize).1\n    }\n}\n"})})]})]}),"\n",(0,a.jsx)(s.h2,{id:"approach-3-quick-select",children:"Approach 3: Quick Select"}),"\n",(0,a.jsxs)(s.p,{children:["Quick Select is a partitioning pattern using in Quick Sort, which can be done on ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time on average."]}),"\n",(0,a.jsxs)(s.p,{children:["First, we need to choose a pivot value, and partition the values around the pivot (That is the larger numbers left, smaller on the right). If after the partitioning stage, we have ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k-1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," elements to the left of our partition (",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k-1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," because we are 0 indexed), it means the value at our partition index is the kth largest. If not we have to adjust our left or right pointers. Either our partition index is less than k, then we move our left pointer up ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"partition + 1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," or our right down to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"partition - 1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: Average Case ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where n is the number of values. By selecting a random pivot, we can avoid malicious inputs, and in general solve the question on ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time. Whereas if we select the worst partition at each iteration, we will approach ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time."]}),"\n",(0,a.jsxs)(s.p,{children:["Space: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". We can do this in place and just swap elements around."]}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(i,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # partitioning function. 2 parameters, l and r to represent\n        # left and right pointers inside our nums array.\n        def partition(l, r):\n            # pivot, select random value between l,r.\n            pivot = random.randint(l,r)\n            # swap our pivot to the end of our partition.\n            nums[r], nums[pivot] = nums[pivot], nums[r]\n            # initialize index to swap with as we loop.\n            i = l\n            # track our pivot value, swapped with right side already.\n            pivot_value = nums[r]\n            # loop from l to r + 1. Note r + 1 will swap our pivot \n            # back in place for us. \n            for j in range(l, r + 1):\n                # number looking at is larger than our pivot\n                if nums[j] >= pivot_value:\n                    # swap it to ith position\n                    nums[i], nums[j] = nums[j], nums[i]\n                    # increment our i swap index pointer.\n                    i += 1\n            # return - 1 as that was the last swapped pointer.\n            return i - 1\n        # start algorithm\n        # initialize left and right pointers to 0, n-1\n        # initialize our partition to n.\n        left, right, p = 0, len(nums) - 1, len(nums)\n        # run our algorithm until our partition index reaches k-1\n        # k - 1 means k elements inside our partition. We use k - 1 as\n        # we are 0th-indexed.\n        while p != k - 1:\n            # Find our partition p\n            p = partition(left,right)\n            # too few elements inside our partition\n            if p < k - 1:\n                # move left pointer up\n                left = p + 1\n            # too many\n            elif p > k - 1:\n                # move right pointer down.\n                right = p - 1\n        # p == k - 1, it means our partition is the kth largest. \n        return nums[p]\n"})})]})})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var a=n(67294);const t={},i=a.createContext(t);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);