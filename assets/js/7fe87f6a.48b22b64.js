"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69395],{47922:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=i(85893),t=i(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-even-numbers-after-queries/",tags:["Array","Simulation"]},u="0985 - Sum of Even Numbers After Queries (Medium)",a={id:"0900-0999/sum-of-even-numbers-after-queries.medium",title:"0985 - Sum of Even Numbers After Queries (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-even-numbers-after-queries/",source:"@site/solutions/0900-0999/0985-sum-of-even-numbers-after-queries.medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/sum-of-even-numbers-after-queries.medium",permalink:"/solutions/0900-0999/sum-of-even-numbers-after-queries.medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0985-sum-of-even-numbers-after-queries.medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Simulation",permalink:"/solutions/tags/simulation"}],version:"current",sidebarPosition:985,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-even-numbers-after-queries/",tags:["Array","Simulation"]},sidebar:"tutorialSidebar",previous:{title:"0981 - Time Based Key-Value Store (Medium)",permalink:"/solutions/0900-0999/time-based-key-value-store-medium"},next:{title:"0987 - Vertical Order Traversal of a Binary Tree (Hard)",permalink:"/solutions/0900-0999/vertical-order-traversal-of-a-binary-tree-hard"}},l={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2},{value:"Approach 2: Segment Tree",id:"approach-2-segment-tree",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:i,TabItem:r,Tabs:u}=n;return i||c("SolutionAuthor",!0),r||c("TabItem",!0),u||c("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0985---sum-of-even-numbers-after-queries-medium",children:"0985 - Sum of Even Numbers After Queries (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/sum-of-even-numbers-after-queries/",children:"https://leetcode.com/problems/sum-of-even-numbers-after-queries/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given an integer array ",(0,s.jsx)(n.code,{children:"nums"})," and an array ",(0,s.jsx)(n.code,{children:"queries"})," where ",(0,s.jsx)(n.code,{children:"queries[i] = [vali, indexi]"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For each query ",(0,s.jsx)(n.code,{children:"i"}),", first, apply ",(0,s.jsx)(n.code,{children:"nums[indexi] = nums[indexi] + vali"}),", then print the sum of the even values of ",(0,s.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.em,{children:"an integer array"}),(0,s.jsx)(n.code,{children:"answer"}),(0,s.jsx)(n.em,{children:"where"}),(0,s.jsx)(n.code,{children:"answer[i]"}),(0,s.jsx)(n.em,{children:"is the answer to the"}),(0,s.jsx)(n.code,{children:"ith"}),(0,s.jsx)(n.em,{children:"query"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]\nOutput: [8,6,2,4]\nExplanation: At the beginning, the array is [1,2,3,4].\nAfter adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.\nAfter adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.\nAfter adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.\nAfter adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1], queries = [[4,0]]\nOutput: [0]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums.length <= 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-10^4 <= nums[i] <= 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= queries.length <= 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-10^4 <= vali <= 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= indexi < nums.length"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,s.jsxs)(u,{children:[(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(i,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // the idea is we don't calculate the even sum from scratch for each query\n    // instead, we calculate it at the beginning\n    // since each query only updates one value, \n    // so we can adjust the even sum base on the original value and new value\n    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {\n        int evenSum = 0;\n        // calculate the sum of all even numbers\n        for (auto x : nums) {\n            if (x % 2 == 0) {\n                evenSum += x;\n            }\n        }\n        vector<int> ans;\n        for (auto q : queries) {\n            int val = q[0], idx = q[1];\n            // if original nums[idx] is even, then we deduct it from evenSum\n            if (nums[idx] % 2 == 0) evenSum -= nums[idx];\n            // in-place update nums\n            nums[idx] += val;\n            // check if we need to update evenSum for the new value\n            if (nums[idx] % 2 == 0) evenSum += nums[idx];\n            // then we have evenSum after this query, push it to ans \n            ans.push_back(evenSum);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,s.jsxs)(r,{value:"py",label:"Python",children:[(0,s.jsx)(i,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class Solution:\n    # the idea is we don't calculate the even sum from scratch for each query\n    # instead, we calculate it at the beginning\n    # since each query only updates one value, \n    # so we can adjust the even sum base on the original value and new value\n    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:\n        # calculate the sum of all even numbers\n        evenSum = sum(x for x in nums if x % 2 == 0)\n        ans = []\n        for val, idx in queries:\n            # if original nums[idx] is even, then we deduct it from evenSum\n            if nums[idx] % 2 == 0: evenSum -= nums[idx]\n            # in-place update nums\n            nums[idx] += val\n            # check if we need to update evenSum for the new value\n            if nums[idx] % 2 == 0: evenSum += nums[idx]\n            # then we have evenSum after this query, push it to ans \n            ans.append(evenSum)\n        return ans\n"})})]}),(0,s.jsxs)(r,{value:"java",label:"Java",children:[(0,s.jsx)(i,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Solution {\n    // the idea is we don't calculate the even sum from scratch for each query\n    // instead, we calculate it at the beginning\n    // since each query only updates one value, \n    // so we can adjust the even sum base on the original value and new value\n    public int[] sumEvenAfterQueries(int[] nums, int[][] queries) {\n        int evenSum = 0, n = queries.length;\n        // calculate the sum of all even numbers\n        for (int x : nums) {\n            if (x % 2 == 0) {\n                evenSum += x;\n            }\n        }\n        int[] ans = new int[n];\n        for (int i = 0; i < n; i++) {\n            int val = queries[i][0], idx = queries[i][1];\n            // if original nums[idx] is even, then we deduct it from evenSum\n            if (nums[idx] % 2 == 0) evenSum -= nums[idx];\n            // in-place update nums\n            nums[idx] += val;\n            // check if we need to update evenSum for the new value\n            if (nums[idx] % 2 == 0) evenSum += nums[idx];\n            // then we have evenSum after this query, push it to ans \n            ans[i] = evenSum;\n        }\n        return ans;\n    }\n}\n"})})]}),(0,s.jsxs)(r,{value:"go",label:"Go",children:[(0,s.jsx)(i,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// the idea is we don't calculate the even sum from scratch for each query\n// instead, we calculate it at the beginning\n// since each query only updates one value, \n// so we can adjust the even sum base on the original value and new value\nfunc sumEvenAfterQueries(nums []int, queries [][]int) []int {\n    evenSum := 0\n    // calculate the sum of all even numbers\n    for _, val := range nums {\n        if val % 2 == 0 {\n            evenSum += val\n        }\n    }\n    ans := make([]int, len(queries))\n    for i, q := range queries {\n        val, idx := q[0], q[1]\n        // if original nums[idx] is even, then we deduct it from evenSum\n        if nums[idx] % 2 == 0 {\n            evenSum -= nums[idx]\n        }\n        // in-place update nums\n        nums[idx] += val\n        // check if we need to update evenSum for the new value\n        if nums[idx] % 2 == 0 {\n            evenSum += nums[idx]\n        }\n        // then we have evenSum after this query, push it to ans \n        ans[i] = evenSum\n    }\n    return ans\n}\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-segment-tree",children:"Approach 2: Segment Tree"}),"\n",(0,s.jsx)(n.p,{children:"It's kind of overkill and not necessary. Here's the code if you're interested."}),"\n",(0,s.jsx)(u,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(i,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"struct segtree {\n    int size;\n    // used to store even sum\n    vector<int> sums;\n\n    void init(int n) {\n        size = 1;\n        while (size < n) size *= 2;\n        sums.assign(2 * size, 0);\n    }\n\n    void set(int i, int v, int x, int lx, int rx) {\n        if (rx - lx == 1){\n            // set sums[x] to v only if v is even\n            sums[x] = v % 2 == 0 ? v : 0;\n            return;\n        }\n        int m = (lx + rx) / 2;\n        if (i < m) set(i, v, 2 * x + 1, lx, m);\n        else set(i, v, 2 * x + 2, m, rx);\n        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];\n    }\n\n    void set(int i, int v) {\n        set(i, v, 0, 0, size);\n    }\n\n    int sum(int l, int r, int x, int lx, int rx) {\n        // no intersection\n        if (lx >= r || l >= rx) return 0;\n        // inside\n        if (lx >= l && rx <= r) return sums[x];\n        // go to both left and right side\n        int m = (lx + rx) / 2;\n        int s1 = sum(l, r, 2 * x + 1, lx, m);\n        int s2 = sum(l, r, 2 * x + 2, m, rx);\n        return s1 + s2;\n    }\n\n    int sum(int l, int r) {\n        return sum(l, r, 0, 0, size);\n    }\n};\n\nclass Solution {\npublic:\n    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {\n        int n = nums.size();\n        // init segment tree\n        segtree st;\n        st.init(n);\n        // set each number in segment tree\n        for (int i = 0; i < n; i++) st.set(i, nums[i]);\n        vector<int> ans;\n        for (auto q : queries) {\n            int val = q[0], idx = q[1];\n            // update segment tree\n            st.set(idx, nums[idx] += val);\n            // query segement tree\n            ans.push_back(st.sum(0, n));\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>u});var s=i(67294);const t={},r=s.createContext(t);function u(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);