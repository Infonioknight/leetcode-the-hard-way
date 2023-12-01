"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45849],{58969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/",tags:["Array","Backtracking","Bit Manipulation"]},a="0078 - Subsets (Medium)",o={id:"0000-0099/subsets-medium",title:"0078 - Subsets (Medium)",description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/",source:"@site/solutions/0000-0099/0078-subsets-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/subsets-medium",permalink:"/solutions/0000-0099/subsets-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0078-subsets-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"},{label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"}],version:"current",sidebarPosition:78,frontMatter:{description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/",tags:["Array","Backtracking","Bit Manipulation"]},sidebar:"tutorialSidebar",previous:{title:"0077 - Combinations (Medium)",permalink:"/solutions/0000-0099/combinations-medium"},next:{title:"0079 - Word Search (Medium)",permalink:"/solutions/0000-0099/word-search-medium"}},u={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit  Manipulation",id:"approach-1-bit--manipulation",level:2},{value:"Approach 2: Backtracking",id:"approach-2-backtracking",level:2},{value:"Approach 3: Iterative",id:"approach-3-iterative",level:2},{value:"Approach 4: Recursion",id:"approach-4-recursion",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:a}=n;return t||p("SolutionAuthor",!0),r||p("TabItem",!0),a||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0078---subsets-medium",children:"0078 - Subsets (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/subsets/",children:"https://leetcode.com/problems/subsets/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given an integer array ",(0,s.jsx)(n.code,{children:"nums"})," of ",(0,s.jsx)(n.strong,{children:"unique"})," elements, return ",(0,s.jsx)(n.em,{children:"all possible subsets (the power set)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The solution set ",(0,s.jsx)(n.strong,{children:"must not"})," contain duplicate subsets. Return the solution in ",(0,s.jsx)(n.strong,{children:"any order"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3]\nOutput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [0]\nOutput: [[],[0]] \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums.length <= 10"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-10 <= nums[i] <= 10"})}),"\n",(0,s.jsxs)(n.li,{children:["All the numbers of ",(0,s.jsx)(n.code,{children:"nums"})," are ",(0,s.jsx)(n.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-bit--manipulation",children:"Approach 1: Bit  Manipulation"}),"\n",(0,s.jsx)(n.p,{children:"We can try all the possible combinations of the numbers. For each number there are only two options - you either take the number or not. If the bit is set as 1, then it means this number needs to be taken. If the bit is set as 0, we don't take this number."}),"\n",(0,s.jsx)(a,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        int n = nums.size();\n        // number of subsets for n elements would be 2 ^ n\n        // because for each element, you can choose to take it or not\n        // if take = 1, don't take = 0, then we can use bit manipulation \n        int p = 1 << n; // 1 * 2 ^ n\n        vector<vector<int>> ans;\n        for(int i = 0; i < p; i++){\n            vector<int> t; \n            for(int j = 0; j < n; j++){\n               if((1 << j) & i) t.emplace_back(nums[j]); \n            }\n            ans.emplace_back(t);\n        }\n        return ans;\n    }\n};\n"})})]})}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-backtracking",children:"Approach 2: Backtracking"}),"\n",(0,s.jsxs)(n.p,{children:["Standard ",(0,s.jsx)(n.a,{href:"../../tutorials/basic-topics/backtracking",children:"Backtracking"})," problem."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void backtrack(vector<vector<int>>& ans, vector<int>& tmp, vector<int>& nums, int start) {\n        ans.push_back(tmp);    \n        for(int i = start; i < nums.size(); i++) {\n            tmp.push_back(nums[i]);\n            backtrack(ans, tmp, nums, i + 1);\n            tmp.pop_back();\n        }\n    }\n    \n    vector<vector<int>> subsets(vector<int>& nums) {\n        vector<vector<int>> ans;\n        vector<int> tmp;\n        sort(nums.begin(), nums.end());\n        backtrack(ans, tmp, nums,  0);\n        return ans;\n    }\n};\n"})})]}),(0,s.jsxs)(r,{value:"java",label:"java",children:[(0,s.jsx)(t,{name:"@vigneshshiv"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// n - # of subsets\n// Time complexity: O(n * 2^n)\n// Space complexity: O(n * 2^n), where n is space taken by each subset, 2^n is the total subset\nclass Solution {\n    \n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> subsets = new ArrayList<>();\n        subsetsBacktrack(subsets, new ArrayList<>(), nums, 0);\n        return subsets;\n    }\n    \n    // Input: nums - [1, 2], idx 0\n    private void subsetsBacktrack(List<List<Integer>> subsets, List<Integer> sets, int[] nums, int idx) {\n        // index 0, [] added to result { [] }\n        // index 1, { [], [1] }\n        // index 2, { [], [1], [1, 2] } - index 2 is out of range, so it won't enter into loop\n        subsets.add(new ArrayList<>(sets));\n        for (int i = idx; i < nums.length; i++) {\n            // index 0, sets add [1]\n            // index 1, sets add, [1, 2]\n            /* \n             * index 1, (actually index 0 call stack), so it's add [2] in sets\n             * So, it calls subsets again and it to result set\n             * Finally, result set is like - { [], [1], [1, 2], [2] }\n             */\n            sets.add(nums[i]);\n            // index 0 - calling subsets - { [] }, sets - [1], index - 1\n            // index 1 - calling subsets - { [], [1] }, sets - [1, 2], index 2\n            subsetsBacktrack(subsets, sets, nums, i + 1);\n            // index 1, sets removed it's last element 2, so sets [1], for loops end with 1\n            // index 0, sets removed it's last element 1, so sets [], it can continue with index 1\n            sets.remove(sets.size() - 1);\n        }\n    }\n}\n"})})]}),(0,s.jsxs)(r,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class Solution:\n    # Iterative Back Tracking approach using a set to catch any dupes.\n    # Initialize with empty tuple, and during each iteration of our \n    # nums array, choose to both add the current number to the tuple,\n    # and not add the number to the tuple.\n    # Time: O(n*2^n) to generate all subsets and copy them into our\n    # power set.\n    # Space: O(n*2^n) for all of our subsets.\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        # initialize our set to prevent duplicates.\n        power_set = set()\n        # initialize our stack for backtracking\n        # we start with an empty tuple for hashing and idx of where \n        # we are at in our nums array.\n        stack = [((),0)]\n        while stack:\n            # pop off the current subset and index inside nums.\n            subset, idx = stack.pop()\n            # add it to our power set, since its a set it will ignore dupes.\n            power_set.add(subset)\n            # only if our idx is in bounds.\n            if idx < len(nums):\n                # add the current subset when we don't take the\n                # number to the stack for backtracking.\n                stack.append((subset, idx+1))\n                # add the subset when we do add the number to the stack\n                # for backtracking.\n                stack.append((subset + (nums[idx],), idx+ 1))\n        # Convert powerset back to a list and return.\n        return list(power_set)\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-3-iterative",children:"Approach 3: Iterative"}),"\n",(0,s.jsx)(a,{children:(0,s.jsxs)(r,{value:"java",label:"java",children:[(0,s.jsx)(t,{name:"@vigneshshiv"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// n - # of subsets\n// Time complexity: O(n * 2^n)\n// Space complexity: O(n * 2^n), where n is space taken by each subset, 2^n is the total subset\nclass Solution {\n    \n    // Input: nums - [1, 2]\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> subsets = new ArrayList<>();\n        List<Integer> sets = new ArrayList<>();\n        // Initial - { [] }\n        subsets.add(sets);\n        for (int num : nums) {\n            // num - 1 & n is 1 ( subsets - { [] } )\n            // num - 2 & n is 2 ( subsets - { [], [1] } )\n            int n = subsets.size();\n            for (int i = 0; i < n; i++) {\n                // num - 1 & i = 0, []\n                // num - 2 & i = 0, []\n                // num - 2 & i = 1, [1]\n                List<Integer> item = new ArrayList<>(subsets.get(i));\n                item.add(num);\n                // num - 1 & i = 0, { [], [1] }\n                // num - 2 & i = 0, { [], [1], [2] }\n                // num - 2 & i = 1, { [], [1], [2], [1, 2] } -- Final Result\n                subsets.add(item);\n            }\n        }\n        return subsets;\n    }\n}\n"})})]})}),"\n",(0,s.jsx)(n.h2,{id:"approach-4-recursion",children:"Approach 4: Recursion"}),"\n",(0,s.jsx)(n.p,{children:"Not required to pass result list OR temp list as a argument, just build the result sets from the previous returned values."}),"\n",(0,s.jsx)(n.p,{children:"Implemented using Java 8 functional-programming style."}),"\n",(0,s.jsx)(a,{children:(0,s.jsxs)(r,{value:"java",label:"java",children:[(0,s.jsx)(t,{name:"@vigneshshiv"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Solution {\n    \n    // Just a supplier function, provides the result\n    Supplier<List<List<Integer>>> empty2DList = () -> {\n        List<List<Integer>> sets = new ArrayList<>();\n        sets.add(new ArrayList<>());\n        return sets;\n    };\n\n    // Takes, subsets (2D List) and item as an input and provides output as 2D List\n    BiFunction<List<List<Integer>>, Integer, List<List<Integer>>> combiner = (subsets, item) -> {\n        List<List<Integer>> result = new ArrayList<>();\n        // Java Stream API to traverse list elements and keep generating new list and add it to the result\n        result.addAll(subsets.stream().map(ArrayList::new).collect(Collectors.toList()));\n        // Add item to each result set\n        result.forEach(set -> set.add(0, item));\n        return result;\n    };\n\n    public List<List<Integer>> subsets(int[] nums) {\n        return getSubsets(nums, 0);\n    }\n\n    public List<List<Integer>> getSubsets(int[] nums, int index) {\n        if (nums.length == index) {\n            return empty2DList.get();\n        }\n        List<List<Integer>> result = getSubsets(nums, index + 1);\n        result.addAll(combiner.apply(result, nums[index]));\n        return result;\n    }\n}\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);