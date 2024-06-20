"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93387],{16802:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>u,metadata:()=>m,toc:()=>t});var s=e(85893),r=e(11151);const u={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-sum-circular-subarray/",tags:["Array","Divide and Conquer","Dynamic Programming","Queue","Monotonic Queue"]},i="0918 - Maximum Sum Circular Subarray (Medium)",m={id:"0900-0999/maximum-sum-circular-subarray-medium",title:"0918 - Maximum Sum Circular Subarray (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-sum-circular-subarray/",source:"@site/solutions/0900-0999/0918-maximum-sum-circular-subarray-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/maximum-sum-circular-subarray-medium",permalink:"/solutions/0900-0999/maximum-sum-circular-subarray-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0918-maximum-sum-circular-subarray-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Divide and Conquer",permalink:"/solutions/tags/divide-and-conquer"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{inline:!0,label:"Queue",permalink:"/solutions/tags/queue"},{inline:!0,label:"Monotonic Queue",permalink:"/solutions/tags/monotonic-queue"}],version:"current",sidebarPosition:918,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-sum-circular-subarray/",tags:["Array","Divide and Conquer","Dynamic Programming","Queue","Monotonic Queue"]},sidebar:"tutorialSidebar",previous:{title:"0912 - Sort an Array (Medium)",permalink:"/solutions/0900-0999/sort-an-array-medium"},next:{title:"0926 - Flip String to Monotone Increasing (Medium)",permalink:"/solutions/0900-0999/flip-string-to-monotone-increasing-medium"}},l={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Kadane&#39;s Algorithm",id:"approach-1-kadanes-algorithm",level:2}];function o(n){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{SolutionAuthor:e,TabItem:u,Tabs:i}=a;return e||d("SolutionAuthor",!0),u||d("TabItem",!0),i||d("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"0918---maximum-sum-circular-subarray-medium",children:"0918 - Maximum Sum Circular Subarray (Medium)"}),"\n",(0,s.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://leetcode.com/problems/maximum-sum-circular-subarray/",children:"https://leetcode.com/problems/maximum-sum-circular-subarray/"})}),"\n",(0,s.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(a.p,{children:["Given a ",(0,s.jsx)(a.strong,{children:"circular integer array"})," ",(0,s.jsx)(a.code,{children:"nums"})," of length ",(0,s.jsx)(a.code,{children:"n"}),", return ",(0,s.jsxs)(a.em,{children:["the maximum possible sum of a non-empty ",(0,s.jsx)(a.strong,{children:"subarray"})," of"]}),(0,s.jsx)(a.code,{children:"nums"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["A ",(0,s.jsx)(a.strong,{children:"circular array"})," means the end of the array connects to the beginning of the array. Formally, the next element of ",(0,s.jsx)(a.code,{children:"nums[i]"})," is ",(0,s.jsx)(a.code,{children:"nums[(i + 1) % n]"})," and the previous element of ",(0,s.jsx)(a.code,{children:"nums[i]"})," is ",(0,s.jsx)(a.code,{children:"nums[(i - 1 + n) % n]"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["A ",(0,s.jsx)(a.strong,{children:"subarray"})," may only include each element of the fixed buffer ",(0,s.jsx)(a.code,{children:"nums"})," at most once. Formally, for a subarray ",(0,s.jsx)(a.code,{children:"nums[i], nums[i + 1], ..., nums[j]"}),", there does not exist ",(0,s.jsx)(a.code,{children:"i <= k1"}),", ",(0,s.jsx)(a.code,{children:"k2 <= j"})," with ",(0,s.jsx)(a.code,{children:"k1 % n == k2 % n"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Input: nums = [1,-2,3,-2]\nOutput: 3\nExplanation: Subarray [3] has maximum sum 3.\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Input: nums = [5,-3,5]\nOutput: 10\nExplanation: Subarray [5,5] has maximum sum 5 + 5 = 10.\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Input: nums = [-3,-2,-3]\nOutput: -2\nExplanation: Subarray [-2] has maximum sum -2.\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"n == nums.length"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"1 <= n <= 3 * 10^4"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.code,{children:"-3 * 10^4 <= nums[i] <= 3 * 10^4"})}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"approach-1-kadanes-algorithm",children:"Approach 1: Kadane's Algorithm"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(u,{value:"cpp",label:"C++",children:[(0,s.jsx)(e,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // kadane's algo\n   int kadane(vector<int>& nums) {\n        int local = nums[0], global = nums[0];\n        for (int i = 1; i < nums.size(); i++) {\n            local = max(nums[i], local + nums[i]);\n            global = max(global, local);\n        }\n        return global;\n    }\n    \n    // case 1: max subarray sum in [0 .. n - 1]\n    // i.e. kadane's algo\n    // case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]\n    // i.e. total sum - min subarray sum in [0 .. n - 1]\n    int maxSubarraySumCircular(vector<int>& nums) {\n        // use kadane's algo to find out max sub array sum (case 1)\n        int maxSubArraySum = kadane(nums);\n        // handle cases like [-3,-2,-3]\n        if (maxSubArraySum < 0) return maxSubArraySum;\n        // calculate the total sum\n        int totalSum = accumulate(nums.begin(), nums.end(), 0);\n        // in order to use the same kadane function, we flip the sign\n        for (auto &x : nums) x *= -1;\n        // use kadane's algo to find out min sub array sum\n        int minSubArraySum = kadane(nums) * -1;\n        // compare case 1 & case 2, take the max\n        return max(maxSubArraySum, totalSum - minSubArraySum);\n    }\n};\n"})})]}),(0,s.jsxs)(u,{value:"java",label:"Java",children:[(0,s.jsx)(e,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"class Solution {\n    // kadane's algo\n    public int kadane(int[] nums) {\n        int local = nums[0];\n        int global = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            local = Math.max(nums[i], local + nums[i]);\n            global = Math.max(global, local);\n        }\n        return global;\n    }\n\n    // case 1: max subarray sum in [0 .. n - 1]\n    // i.e. kadane's algo\n    // case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]\n    // i.e. total sum - min subarray sum in [0 .. n - 1]\n    public int maxSubarraySumCircular(int[] nums) {\n        int n = nums.length;\n        // use kadane's algo to find out max sub array sum (case 1)\n        int maxSubArraySum = kadane(nums);\n        // handle cases like [-3,-2,-3]\n        if (maxSubArraySum < 0) return maxSubArraySum;\n        // calculate the total sum\n        int totalSum = 0;\n        // in order to use the same kadane function, we flip the sign\n        for (int i = 0; i < n; i++) {\n            totalSum += nums[i];\n            nums[i] = -nums[i];\n        }\n        // use kadane's algo to find out min sub array sum\n        int minSubArraySum = kadane(nums);\n        // compare case 1 & case 2, take the max\n        return Math.max(maxSubArraySum, totalSum + minSubArraySum);\n    }\n}\n\n"})})]}),(0,s.jsxs)(u,{value:"py",label:"Python",children:[(0,s.jsx)(e,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:"class Solution:\n    def maxSubarraySumCircular(self, nums):\n        # kadane's algo\n        def kadane(nums):\n            local_sum = nums[0]\n            global_sum = nums[0]\n            for i in range(1, len(nums)):\n                local_sum = max(nums[i], local_sum + nums[i])\n                global_sum = max(global_sum, local_sum)\n            return global_sum\n        # case 1: max subarray sum in [0 .. n - 1]\n        # i.e. kadane's algo\n        # case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]\n        # i.e. total sum - min subarray sum in [0 .. n - 1]\n        n = len(nums)\n        # use kadane's algo to find out max sub array sum (case 1)\n        max_sub_array_sum = kadane(nums)\n        # handle cases like [-3,-2,-3]\n        if max_sub_array_sum < 0:\n            return max_sub_array_sum\n        # calculate the total sum\n        total_sum = sum(nums)\n        # in order to use the same kadane function, we flip the sign\n        for i in range(n):\n            nums[i] *= -1\n        # use kadane's algo to find out min sub array sum\n        min_sub_array_sum = kadane(nums) * -1\n        # compare case 1 & case 2, take the max\n        return max(max_sub_array_sum, total_sum - min_sub_array_sum)\n\n"})})]}),(0,s.jsxs)(u,{value:"rs",label:"Rust",children:[(0,s.jsx)(e,{name:"@wingkwong"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-rs",children:"use std::cmp::max;\n\nimpl Solution {\n    // kadane's algo\n    fn kadane(nums: &Vec<i32>) -> i32 {\n        let mut local = nums[0];\n        let mut global = nums[0];\n        for i in 1..nums.len() {\n            local = max(nums[i], local + nums[i]);\n            global = max(global, local);\n        }\n        return global;\n    }\n\n    // case 1: max subarray sum in [0 .. n - 1]\n    // i.e. kadane's algo\n    // case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]\n    // i.e. total sum - min subarray sum in [0 .. n - 1]\n    fn max_subarray_sum_circular(nums: Vec<i32>) -> i32 {\n        let n = nums.len();\n        // use kadane's algo to find out max sub array sum (case 1)\n        let max_sub_array_sum = Solution::kadane(&nums);\n        // handle cases like [-3,-2,-3]\n        if max_sub_array_sum < 0 {\n            return max_sub_array_sum;\n        }\n        // calculate the total sum\n        let total_sum: i32 = nums.iter().sum();\n        let mut nums = nums.clone();\n        for i in 0 .. n {\n            nums[i] = -nums[i];\n        }\n        // use kadane's algo to find out min sub array sum\n        let min_sub_array_sum = Solution::kadane(&nums);\n        // compare case 1 & case 2, take the max\n        return max(max_sub_array_sum, total_sum + min_sub_array_sum);\n    }\n\n}\n"})})]})]})]})}function c(n={}){const{wrapper:a}={...(0,r.a)(),...n.components};return a?(0,s.jsx)(a,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}function d(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,a,e)=>{e.d(a,{Z:()=>m,a:()=>i});var s=e(67294);const r={},u=s.createContext(r);function i(n){const a=s.useContext(u);return s.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function m(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(u.Provider,{value:a},n.children)}}}]);