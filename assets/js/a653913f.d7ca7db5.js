"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3285],{15330:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=s(85893),r=s(11151);const i={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/"},a="0496 - Next Greater Element I (Easy)",l={id:"0400-0499/next-greater-element-i-easy",title:"0496 - Next Greater Element I (Easy)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/",source:"@site/solutions/0400-0499/0496-next-greater-element-i-easy.md",sourceDirName:"0400-0499",slug:"/0400-0499/next-greater-element-i-easy",permalink:"/solutions/0400-0499/next-greater-element-i-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0496-next-greater-element-i-easy.md",tags:[],version:"current",sidebarPosition:496,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/"},sidebar:"tutorialSidebar",previous:{title:"0494 - Target Sum (Medium)",permalink:"/solutions/0400-0499/target-sum-medium"},next:{title:"0454 -  4Sum II (Medium)",permalink:"/solutions/0400-0499/0454-4sum-ii-medium"}},h={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map + Stack",id:"approach-1-hash-map--stack",level:2}];function o(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:a}=n;return s||d("SolutionAuthor",!0),i||d("TabItem",!0),a||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0496---next-greater-element-i-easy",children:"0496 - Next Greater Element I (Easy)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-i/",children:"https://leetcode.com/problems/next-greater-element-i/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"next greater element"})," of some element ",(0,t.jsx)(n.code,{children:"x"})," in an array is the ",(0,t.jsx)(n.strong,{children:"first greater"})," element that is ",(0,t.jsx)(n.strong,{children:"to the right"})," of ",(0,t.jsx)(n.code,{children:"x"})," in the same array."]}),"\n",(0,t.jsxs)(n.p,{children:["You are given two ",(0,t.jsx)(n.strong,{children:"distinct 0-indexed"})," integer arrays ",(0,t.jsx)(n.code,{children:"nums1"})," and ",(0,t.jsx)(n.code,{children:"nums2"}),", where ",(0,t.jsx)(n.code,{children:"nums1"})," is a subset of ",(0,t.jsx)(n.code,{children:"nums2"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For each ",(0,t.jsx)(n.code,{children:"0 <= i < nums1.length"}),", find the index ",(0,t.jsx)(n.code,{children:"j"})," such that ",(0,t.jsx)(n.code,{children:"nums1[i] == nums2[j]"})," and determine the ",(0,t.jsx)(n.strong,{children:"next greater element"})," of ",(0,t.jsx)(n.code,{children:"nums2[j]"})," in ",(0,t.jsx)(n.code,{children:"nums2"}),". If there is no next greater element, then the answer for this query is ",(0,t.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"an array"})," ",(0,t.jsx)(n.code,{children:"ans"})," ",(0,t.jsx)(n.em,{children:"of length"})," ",(0,t.jsx)(n.code,{children:"nums1.length"})," ",(0,t.jsx)(n.em,{children:"such that"})," ",(0,t.jsx)(n.code,{children:"ans[i]"})," ",(0,t.jsxs)(n.em,{children:["is the ",(0,t.jsx)(n.strong,{children:"next greater element"})," as described above."]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums1 = [4,1,2], nums2 = [1,3,4,2]\nOutput: [-1,3,-1]\nExplanation: The next greater element for each value of nums1 is as follows:\n- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.\n- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.\n- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums1 = [2,4], nums2 = [1,2,3,4]\nOutput: [3,-1]\nExplanation: The next greater element for each value of nums1 is as follows:\n- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.\n- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1. \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums1.length <= nums2.length <= 1000"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= nums1[i], nums2[i] <= 10^4"})}),"\n",(0,t.jsxs)(n.li,{children:["All integers in ",(0,t.jsx)(n.code,{children:"nums1"})," and ",(0,t.jsx)(n.code,{children:"nums2"})," are ",(0,t.jsx)(n.strong,{children:"unique"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["All the integers of ",(0,t.jsx)(n.code,{children:"nums1"})," also appear in ",(0,t.jsx)(n.code,{children:"nums2"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Follow up:"})," Could you find an ",(0,t.jsx)(n.code,{children:"O(nums1.length + nums2.length)"})," solution?"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-hash-map--stack",children:"Approach 1: Hash Map + Stack"}),"\n",(0,t.jsxs)(n.p,{children:["The first thing we need to do is to store the ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"v"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"u"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"(value, index)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"in"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," pair from ",(0,t.jsx)(n.code,{children:"nums1"})," in a hash map."]}),"\n",(0,t.jsxs)(n.p,{children:["Then we need to find the ",(0,t.jsx)(n.em,{children:"next greater element"})," of all elements in ",(0,t.jsx)(n.code,{children:"nums2"}),". This can be achieved by using a stack. If the current element is greater than the last element of the stack, we know the next greater element of the last element of the stack is the current element. We can access the index of the last element of the stack with ",(0,t.jsx)(n.code,{children:"hash_map"})," (if it exists). Then we can put the current_element in result."]}),"\n",(0,t.jsxs)(n.p,{children:["After processing ",(0,t.jsx)(n.code,{children:"nums2"}),", we need to assign ",(0,t.jsx)(n.code,{children:"-1"})," to the elements still in the stack (no ",(0,t.jsx)(n.em,{children:"next greater element"}),") with the help of ",(0,t.jsx)(n.code,{children:"hash_map"}),"."]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(s,{name:"@heiheihang"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        \n        #initialize hash map to store the (value, index) pair in nums1\n        hash_map = {}\n        \n        #put (value, index) pair of nums1 in hash_map\n        for i in range(len(nums1)):\n            hash_map[nums1[i]] = i\n        \n        \n        #initialize result list    \n        result = [0] * len(nums1)\n        \n        #initialize stack list\n        stack = []\n        \n        #iterate all elements in nums2\n        for i in range(len(nums2)):\n            \n            current_number = nums2[i]\n            \n            #if current_number is larger than the last element in stack\n            #current_number is the next greater element of the last number in stack\n            while(stack and current_number > stack[-1]):\n                \n                #we need to check if the last number in stack is in nums1 \n                if(stack[-1] in hash_map):\n                    \n                    #we can get its index from hash_map\n                    index_in_nums1 = hash_map[stack[-1]]\n                    \n                    #we then set the corresponding position in result to current_number\n                    result[index_in_nums1] = current_number\n                    \n                #remove the last element in stack after processing\n                stack.pop()\n                \n            #add current_number to stack, trying to find the next greater element\n            stack.append(current_number)\n        \n        #for the numbers that do not have a next greater element, set it to -1\n        for remaining_number in stack:\n            \n            #we need to check if remaining_number is in nums1\n            if(remaining_number in hash_map):\n                \n                #we can get its index in nums1 from hash_map\n                index_in_nums1 = hash_map[remaining_number]\n    \n                #set its position in result to -1 (no greater element)\n                result[index_in_nums1] = -1\n        \n        #return result\n        return result\n"})})]}),(0,t.jsxs)(i,{value:"rs",label:"Rust",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rs",children:"use std::collections::HashMap;\n\nimpl Solution {\n    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {\n        let mut s = Vec::new();\n        let mut m = HashMap::new();\n        let mut ans = Vec::new();\n        for x in nums2 {\n            while let Some(&top) = s.last() {\n                if x <= top {\n                    break;\n                } \n                m.insert(top, x);\n                s.pop();\n            }\n            s.push(x);\n        }\n        for x in nums1 { \n            ans.push(m.get(&x).copied().unwrap_or(-1));\n        }\n        ans\n    }\n}\n"})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(67294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);