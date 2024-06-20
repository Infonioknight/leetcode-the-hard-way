"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[84715],{92477:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(85893),t=i(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/closest-prime-numbers-in-range/",tags:["Math","Number Theory"]},o="2523 - Closest Prime Numbers in Range (Medium)",l={id:"2500-2599/closest-prime-numbers-in-range-medium",title:"2523 - Closest Prime Numbers in Range (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/closest-prime-numbers-in-range/",source:"@site/solutions/2500-2599/2523-closest-prime-numbers-in-range-medium.md",sourceDirName:"2500-2599",slug:"/2500-2599/closest-prime-numbers-in-range-medium",permalink:"/solutions/2500-2599/closest-prime-numbers-in-range-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2523-closest-prime-numbers-in-range-medium.md",tags:[{inline:!0,label:"Math",permalink:"/solutions/tags/math"},{inline:!0,label:"Number Theory",permalink:"/solutions/tags/number-theory"}],version:"current",sidebarPosition:2523,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/closest-prime-numbers-in-range/",tags:["Math","Number Theory"]},sidebar:"tutorialSidebar",previous:{title:"2521 - Distinct Prime Factors of Product of Array (Medium)",permalink:"/solutions/2500-2599/distinct-prime-factors-of-product-of-array-medium"},next:{title:"2529 - Maximum Count of Positive Integer and Negative Integer (Easy)",permalink:"/solutions/2500-2599/maximum-count-of-positive-integer-and-negative-integer-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prime Sieve",id:"approach-1-prime-sieve",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:i,TabItem:s,Tabs:o}=n;return i||h("SolutionAuthor",!0),s||h("TabItem",!0),o||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2523---closest-prime-numbers-in-range-medium",children:"2523 - Closest Prime Numbers in Range (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/closest-prime-numbers-in-range/",children:"https://leetcode.com/problems/closest-prime-numbers-in-range/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given two positive integers ",(0,r.jsx)(n.code,{children:"left"})," and ",(0,r.jsx)(n.code,{children:"right"}),", find the two integers ",(0,r.jsx)(n.code,{children:"num1"})," and ",(0,r.jsx)(n.code,{children:"num2"})," such that:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"left <= nums1 < nums2 <= right"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nums1"})," and ",(0,r.jsx)(n.code,{children:"nums2"})," are both ",(0,r.jsx)(n.strong,{children:"prime"})," numbers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nums2 - nums1"})," is the ",(0,r.jsx)(n.strong,{children:"minimum"})," amongst all other pairs satisfying the above conditions."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.em,{children:"the positive integer array"})," ",(0,r.jsx)(n.code,{children:"ans = [nums1, nums2]"}),". ",(0,r.jsx)(n.em,{children:"If there are multiple pairs satisfying these conditions, return the one with the minimum"})," ",(0,r.jsx)(n.code,{children:"nums1"})," ",(0,r.jsx)(n.em,{children:"value or"})," ",(0,r.jsx)(n.code,{children:"[-1, -1]"})," ",(0,r.jsx)(n.em,{children:"if such numbers do not exist."})]}),"\n",(0,r.jsxs)(n.p,{children:["A number greater than ",(0,r.jsx)(n.code,{children:"1"})," is called ",(0,r.jsx)(n.strong,{children:"prime"})," if it is only divisible by ",(0,r.jsx)(n.code,{children:"1"})," and itself."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: left = 10, right = 19\nOutput: [11,13]\nExplanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.\nThe closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].\nSince 11 is smaller than 17, we return the first pair.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: left = 4, right = 6\nOutput: [-1,-1]\nExplanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= left <= right <= 10^6"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-prime-sieve",children:"Approach 1: Prime Sieve"}),"\n",(0,r.jsx)(o,{children:(0,r.jsxs)(s,{value:"cpp",label:"C++",children:[(0,r.jsx)(i,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> primes;\n    vector<bool> is_prime;\n    void prime_sieve(int n) {\n        is_prime.assign(n + 1, 1);\n        is_prime[0] = is_prime[1] = 0;\n        for (int i = 4; i <= n; i += 2) is_prime[i] = 0;\n        for (int i = 3; i * i <= n; i += 2) {\n          if (is_prime[i]) {\n            for (int j = i * i; j <= n; j += i * 2) {\n              is_prime[j] = 0;\n            }\n          }   \n        } \n        primes.push_back(2);\n        for (int i = 3; i <= n; i += 2) {\n            if (is_prime[i]) {\n              primes.push_back(i);\n            }\n        }\n    }\n    \n    vector<int> closestPrimes(int left, int right) {\n        // generate prime numbers\n        prime_sieve(right);\n        int l = -1, r = -1, mi = INT_MAX;\n        // for each prime number\n        for (int i = 1; i < primes.size(); i++) {\n            // if it is within the target range\n            if (left <= primes[i - 1] && primes[i] <= right) {\n                // we calculate the difference\n                int d = primes[i] - primes[i - 1];\n                // if it is less than the min one\n                if (d < mi) {\n                    // update min\n                    mi = d;\n                    // set l and r\n                    l = primes[i - 1];\n                    r = primes[i];\n                }   \n            }\n        }\n        // if both l and r are set, then return {l, r}\n        // else return {-1, -1}\n        return l != -1 && r != 1 ? vector<int>{l, r} : vector<int>{-1, -1};\n    }\n};\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var r=i(67294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);