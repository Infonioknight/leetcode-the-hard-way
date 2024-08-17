"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[87405],{51741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(85893),o=t(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-primes/"},s="0204 - Count Primes",c={id:"0200-0299/count-primes",title:"0204 - Count Primes",description:"Author: @wingkwong | https://leetcode.com/problems/count-primes/",source:"@site/solutions/0200-0299/0204-count-primes.md",sourceDirName:"0200-0299",slug:"/0200-0299/count-primes",permalink:"/solutions/0200-0299/count-primes",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0204-count-primes.md",tags:[],version:"current",sidebarPosition:204,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-primes/"},sidebar:"tutorialSidebar",previous:{title:"0202 - Happy Number (Easy)",permalink:"/solutions/0200-0299/happy-number-easy"},next:{title:"0205 - Isomorphic Strings (Easy)",permalink:"/solutions/0200-0299/isomorphic-strings-easy"}},l={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sieve of Eratosthenes",id:"approach-1-sieve-of-eratosthenes",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0204---count-primes",children:"0204 - Count Primes"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/count-primes/",children:"https://leetcode.com/problems/count-primes/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer ",(0,r.jsx)(n.code,{children:"n"}),", return ",(0,r.jsx)(n.em,{children:"the number of prime numbers that are strictly less than"})," ",(0,r.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 10\nOutput: 4\nExplanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 0\nOutput: 0\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 1\nOutput: 0 \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= n <= 5 * 10^6"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-sieve-of-eratosthenes",children:"Approach 1: Sieve of Eratosthenes"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"../../tutorials/math/number-theory/sieve-of-eratosthenes",children:"Sieve of Eratosthenes"}),"."]}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<bool> seiveOfEratosthenes(const int n) {\n      vector<bool> isPrime(n + 1, true);\n      isPrime[0] = isPrime[1] = 0;\n      for (int i = 2; i * i <= n; i++) {\n        if (isPrime[i]) {\n          for (int j = i * i; j <= n; j += i) {\n            isPrime[j] = false;\n          }\n        }\n      }\n      return isPrime;\n    }\n\n    int countPrimes(int n) {\n        if(n < 2) return 0;\n        vector<bool> isPrime = seiveOfEratosthenes(n - 1);\n        int cnt = 0;\n        for(int i = 2; i < n; i++) cnt += isPrime[i] == true;\n        return cnt;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);