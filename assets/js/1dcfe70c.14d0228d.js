"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72269],{47979:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(85893),s=i(11151);const o={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/"},t="0278 - First Bad Version (Easy)",a={id:"0200-0299/first-bad-version-easy",title:"0278 - First Bad Version (Easy)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/",source:"@site/solutions/0200-0299/0278-first-bad-version-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/first-bad-version-easy",permalink:"/solutions/0200-0299/first-bad-version-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0278-first-bad-version-easy.md",tags:[],version:"current",sidebarPosition:278,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/"},sidebar:"tutorialSidebar",previous:{title:"0268 - Missing Number (Easy)",permalink:"/solutions/0200-0299/missing-number-easy"},next:{title:"0283 - Move Zeroes (Easy)",permalink:"/solutions/0200-0299/move-zeroes-easy"}},l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:i,TabItem:o,Tabs:t}=n;return i||u("SolutionAuthor",!0),o||u("TabItem",!0),t||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0278---first-bad-version-easy",children:"0278 - First Bad Version (Easy)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/first-bad-version/",children:"https://leetcode.com/problems/first-bad-version/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(n.p,{children:"You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad."}),"\n",(0,r.jsxs)(n.p,{children:["Suppose you have ",(0,r.jsx)(n.code,{children:"n"})," versions ",(0,r.jsx)(n.code,{children:"[1, 2, ..., n]"})," and you want to find out the first bad one, which causes all the following ones to be bad."]}),"\n",(0,r.jsxs)(n.p,{children:["You are given an API ",(0,r.jsx)(n.code,{children:"bool isBadVersion(version)"})," which returns whether ",(0,r.jsx)(n.code,{children:"version"})," is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 5, bad = 4\nOutput: 4\nExplanation:\ncall isBadVersion(3) -> false\ncall isBadVersion(5) -> true\ncall isBadVersion(4) -> true\nThen 4 is the first bad version.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 1, bad = 1\nOutput: 1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= bad <= n <= 2^31 - 1"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,r.jsx)(n.admonition,{title:"Prerequisite",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../tutorials/basic-topics/binary-search",children:"Binary Search"})}),"\n"]})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)(o,{value:"c++",label:"C++",children:[(0,r.jsx)(i,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);\n\nclass Solution {\npublic:\n    int firstBadVersion(int n) {\n        // init possible range\n        int l = 1, r = n;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            // [F,F,..,F,T,T,T,..,T]\n            // exclude m\n            if (!isBadVersion(m)) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n"})})]}),(0,r.jsxs)(o,{value:"javascript",label:"JavaScript",children:[(0,r.jsx)(i,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * Definition for isBadVersion()\n * \n * @param {integer} version number\n * @return {boolean} whether the version is bad\n * isBadVersion = function(version) {\n *     ...\n * };\n */\n\n/**\n * @param {function} isBadVersion()\n * @return {function}\n */\nvar solution = function(isBadVersion) {\n    /**\n     * @param {integer} n Total versions\n     * @return {integer} The first bad version\n     */\n    return function(n) {\n        let l = 1;\n        let r = n;\n        while (l < r) {\n            let mid = Math.floor((l + r) / 2);\n            if (!isBadVersion(mid)) l = mid + 1;\n            else r = mid;\n        }\n        return l;\n    };\n};\n"})})]}),(0,r.jsxs)(o,{value:"python",label:"Python",children:[(0,r.jsx)(i,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# The isBadVersion API is already defined for you.\n# def isBadVersion(version: int) -> bool:\n\nclass Solution:\n    def firstBadVersion(self, n: int) -> int:\n        l, r = 1, n\n        while l < r:\n            mid = (l + r) // 2\n            if (isBadVersion(mid)):\n                r = mid\n            else:\n                l = mid + 1\n        return l \n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>t});var r=i(67294);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);