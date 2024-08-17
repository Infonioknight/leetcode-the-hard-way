"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[89773],{36001:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),t=n(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/total-appeal-of-a-string/"},l="2262 - Total Appeal of A String (Hard)",r={id:"2200-2299/total-appeal-of-a-string-hard",title:"2262 - Total Appeal of A String (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/total-appeal-of-a-string/",source:"@site/solutions/2200-2299/2262-total-appeal-of-a-string-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/total-appeal-of-a-string-hard",permalink:"/solutions/2200-2299/total-appeal-of-a-string-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2262-total-appeal-of-a-string-hard.md",tags:[],version:"current",sidebarPosition:2262,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/total-appeal-of-a-string/"},sidebar:"tutorialSidebar",previous:{title:"2261 - K Divisible Elements Subarrays (Medium)",permalink:"/solutions/2200-2299/k-divisible-elements-subarrays-medium"},next:{title:"2264 - Largest 3-Same-Digit Number in String (Easy)",permalink:"/solutions/2200-2299/largest-3-same-digit-number-in-string-easy"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"2262---total-appeal-of-a-string-hard",children:"2262 - Total Appeal of A String (Hard)"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/total-appeal-of-a-string/",children:"https://leetcode.com/problems/total-appeal-of-a-string/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.strong,{children:"appeal"})," of a string is the number of ",(0,a.jsx)(s.strong,{children:"distinct"})," characters found in the string."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["For example, the appeal of ",(0,a.jsx)(s.code,{children:'"abbca"'})," is ",(0,a.jsx)(s.code,{children:"3"})," because it has ",(0,a.jsx)(s.code,{children:"3"})," distinct characters: ",(0,a.jsx)(s.code,{children:"'a'"}),", ",(0,a.jsx)(s.code,{children:"'b'"}),", and ",(0,a.jsx)(s.code,{children:"'c'"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Given a string ",(0,a.jsx)(s.code,{children:"s"}),", return ",(0,a.jsxs)(s.em,{children:["the ",(0,a.jsx)(s.strong,{children:"total appeal of all of its substrings."})]})]}),"\n",(0,a.jsxs)(s.p,{children:["A ",(0,a.jsx)(s.strong,{children:"substring"})," is a contiguous sequence of characters within a string."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: s = "abbca"\nOutput: 28\nExplanation: The following are the substrings of "abbca":\n- Substrings of length 1: "a", "b", "b", "c", "a" have an appeal of 1, 1, 1, 1, and 1 respectively. The sum is 5.\n- Substrings of length 2: "ab", "bb", "bc", "ca" have an appeal of 2, 1, 2, and 2 respectively. The sum is 7.\n- Substrings of length 3: "abb", "bbc", "bca" have an appeal of 2, 2, and 3 respectively. The sum is 7.\n- Substrings of length 4: "abbc", "bbca" have an appeal of 3 and 3 respectively. The sum is 6.\n- Substrings of length 5: "abbca" has an appeal of 3. The sum is 3.\nThe total sum is 5 + 7 + 7 + 6 + 3 = 28.\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: s = "code"\nOutput: 20\nExplanation: The following are the substrings of "code":\n- Substrings of length 1: "c", "o", "d", "e" have an appeal of 1, 1, 1, and 1 respectively. The sum is 4.\n- Substrings of length 2: "co", "od", "de" have an appeal of 2, 2, and 2 respectively. The sum is 6.\n- Substrings of length 3: "cod", "ode" have an appeal of 3 and 3 respectively. The sum is 6.\n- Substrings of length 4: "code" has an appeal of 4. The sum is 4.\nThe total sum is 4 + 6 + 6 + 4 = 20.\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= s.length <= 10^5"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"s"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,a.jsxs)(s.p,{children:["Observation: The appeal of all substrings ending at ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"i"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]}),"-th is that ending at ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"i - 1"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),"th  plus the number of substrings that don't contain ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"s[i]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),", which can be calculated by tracking the last occurrence."]}),"\n",(0,a.jsx)(n,{name:"@wingkwong"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long appealSum(string s) {\n        long long ans = 0, cnt = 1, n = s.size();\n        unordered_map<int, int> last;\n        last[s[0]] = 1;\n        for (int i = 0; i < n; i++) {\n            cnt += i - last[s[i]] + 1;\n            last[s[i]] = i + 1;\n            ans += cnt;\n        }\n        return ans;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var a=n(67294);const t={},i=a.createContext(t);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);