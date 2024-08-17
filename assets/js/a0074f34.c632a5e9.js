"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85109],{39404:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=s(85893),t=s(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/",tags:["Array","String","Backtracking"]},r="1980 - Find Unique Binary String (Medium)",l={id:"1900-1999/find-unique-binary-string-medium",title:"1980 - Find Unique Binary String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/",source:"@site/solutions/1900-1999/1980-find-unique-binary-string-medium.md",sourceDirName:"1900-1999",slug:"/1900-1999/find-unique-binary-string-medium",permalink:"/solutions/1900-1999/find-unique-binary-string-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1980-find-unique-binary-string-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:1980,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/",tags:["Array","String","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"1929 - Concatenation of Array (Easy)",permalink:"/solutions/1900-1999/concatenation-of-array-easy"},next:{title:"1992 - Find All Groups of Farmland (Medium)",permalink:"/solutions/1900-1999/find-all-groups-of-farmland-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function d(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...n.components},{SolutionAuthor:s,TabItem:a,Tabs:r}=e;return s||m("SolutionAuthor",!0),a||m("TabItem",!0),r||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1980---find-unique-binary-string-medium",children:"1980 - Find Unique Binary String (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/find-unique-binary-string/",children:"https://leetcode.com/problems/find-unique-binary-string/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Given an array of strings ",(0,i.jsx)(e.code,{children:"nums"})," containing ",(0,i.jsx)(e.code,{children:"n"})," ",(0,i.jsx)(e.strong,{children:"unique"})," binary strings each of length ",(0,i.jsx)(e.code,{children:"n"}),", return ",(0,i.jsx)(e.em,{children:"a binary string of length"})," ",(0,i.jsx)(e.code,{children:"n"})," ",(0,i.jsxs)(e.em,{children:["that ",(0,i.jsx)(e.strong,{children:"does not appear"})," in"]})," ",(0,i.jsx)(e.code,{children:"nums"}),(0,i.jsxs)(e.em,{children:[". If there are multiple answers, you may return ",(0,i.jsx)(e.strong,{children:"any"})," of them"]}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: nums = ["01","10"]\nOutput: "11"\nExplanation: "11" does not appear in nums. "00" would also be correct.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: nums = ["00","01"]\nOutput: "11"\nExplanation: "11" does not appear in nums. "10" would also be correct.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: nums = ["111","011","001"]\nOutput: "101"\nExplanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"n == nums.length"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= n <= 16"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"nums[i].length == n"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"nums[i]"})," is either ",(0,i.jsx)(e.code,{children:"'0'"})," or ",(0,i.jsx)(e.code,{children:"'1'"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["All the strings of ",(0,i.jsx)(e.code,{children:"nums"})," are ",(0,i.jsx)(e.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,i.jsx)(e.p,{children:"First we store the existing binary string into a hash map. Then we try to build all binary strings one by one and check if it exists in the hash map or not. If so, we return the answer."}),"\n",(0,i.jsxs)(e.p,{children:["As ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"n"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is at most ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"16"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"16"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"16"})]})})]}),", there would be at most ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"2"}),(0,i.jsx)(e.mn,{children:"16"})]}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"65536"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"2 ^ {16} = 65536"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"2"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"16"})})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"65536"})]})]})]})," possibilities. To find all of them, we can do the following."]}),"\n",(0,i.jsx)(r,{children:(0,i.jsxs)(a,{value:"cpp",label:"C++",children:[(0,i.jsx)(s,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// try all 2 ^ n possibilities\nfor (int i = 0; i < 1 << n; i ++) {\n    string s;\n    // if the bit is set, mark it as one\n    if (i & (1 << j)) s += '1';\n    // else mark it as zero\n    else s += '0'\n    // TODO: do something with s\n    // s here would be one of the binary string\n}\n"})})]})}),"\n",(0,i.jsx)(e.p,{children:"Here's the full solution."}),"\n",(0,i.jsx)(r,{children:(0,i.jsxs)(a,{value:"cpp",label:"C++",children:[(0,i.jsx)(s,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string findDifferentBinaryString(vector<string>& nums) {\n        string ans;\n        // put existing binary strings into a hash map\n        unordered_map<string, int> m;\n        for (auto x : nums) m[x]++;\n        int n = nums.size();\n        // build all binary strings\n        for (int i = 0; i < 1 << n; i++) {\n            string s;\n            for (int j = 0; j < n; j++) {\n                s += (i & (1 << j)) ? '1' : '0';\n            }\n            // not found in hash map -> found the answer\n            if (!m.count(s)) {\n                ans = s;\n                break;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>r});var i=s(67294);const t={},a=i.createContext(t);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);