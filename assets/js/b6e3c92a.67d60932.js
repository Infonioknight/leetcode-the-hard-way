"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53427],{860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(85893),o=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/delete-columns-to-make-sorted/",tags:["Array","String"]},l="0944 - Delete Columns to Make Sorted (Easy)",i={id:"0900-0999/delete-columns-to-make-sorted-easy",title:"0944 - Delete Columns to Make Sorted (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/delete-columns-to-make-sorted/",source:"@site/solutions/0900-0999/0944-delete-columns-to-make-sorted-easy.md",sourceDirName:"0900-0999",slug:"/0900-0999/delete-columns-to-make-sorted-easy",permalink:"/solutions/0900-0999/delete-columns-to-make-sorted-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0944-delete-columns-to-make-sorted-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:944,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/delete-columns-to-make-sorted/",tags:["Array","String"]},sidebar:"tutorialSidebar",previous:{title:"0941 - Valid Mountain Array (Easy)",permalink:"/solutions/0900-0999/valid-mountain-array-easy"},next:{title:"0946 - Validate Stack Sequences (Medium)",permalink:"/solutions/0900-0999/validate-stack-sequences-medium"}},a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Matrix Traversing",id:"approach-1-matrix-traversing",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:l}=n;return t||u("SolutionAuthor",!0),r||u("TabItem",!0),l||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0944---delete-columns-to-make-sorted-easy",children:"0944 - Delete Columns to Make Sorted (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/delete-columns-to-make-sorted/",children:"https://leetcode.com/problems/delete-columns-to-make-sorted/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given an array of ",(0,s.jsx)(n.code,{children:"n"})," strings ",(0,s.jsx)(n.code,{children:"strs"}),", all of the same length."]}),"\n",(0,s.jsxs)(n.p,{children:["The strings can be arranged such that there is one on each line, making a grid. For example, ",(0,s.jsx)(n.code,{children:'strs = ["abc", "bce", "cae"]'})," can be arranged as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"abc\nbce\ncae\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You want to ",(0,s.jsx)(n.strong,{children:"delete"})," the columns that are ",(0,s.jsx)(n.strong,{children:"not sorted lexicographically"}),". In the above example (0-indexed), columns 0 (",(0,s.jsx)(n.code,{children:"'a'"}),", ",(0,s.jsx)(n.code,{children:"'b'"}),", ",(0,s.jsx)(n.code,{children:"'c'"}),") and 2 (",(0,s.jsx)(n.code,{children:"'c'"}),", ",(0,s.jsx)(n.code,{children:"'e'"}),", ",(0,s.jsx)(n.code,{children:"'e'"}),") are sorted while column 1 (",(0,s.jsx)(n.code,{children:"'b'"}),", ",(0,s.jsx)(n.code,{children:"'c'"}),", ",(0,s.jsx)(n.code,{children:"'a'"}),") is not, so you would delete column 1."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.em,{children:"the number of columns that you will delete"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: strs = ["cba","daf","ghi"]\nOutput: 1\nExplanation: The grid looks as follows:\n  cba\n  daf\n  ghi\nColumns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: strs = ["a","b"]\nOutput: 0\nExplanation: The grid looks as follows:\n  a\n  b\nColumn 0 is the only column and is sorted, so you will not delete any columns.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: strs = ["zyx","wvu","tsr"]\nOutput: 3\nExplanation: The grid looks as follows:\n  zyx\n  wvu\n  tsr\nAll 3 columns are not sorted, so you will delete all 3.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"n == strs.length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= n <= 100"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= strs[i].length <= 1000"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"strs[i]"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-matrix-traversing",children:"Approach 1: Matrix Traversing"}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minDeletionSize(vector<string>& s) {\n        int ans = 0;\n        // iterate cols\n        for (int col = 0; col < s[0].size(); col++) {\n            // iterate rows\n            for (int row = 1; row < s.size(); row++) {\n                // if the character in the previous row is greater than the character in the current row\n                // then we can delete this column\n                if (s[row - 1][col] > s[row][col]) {\n                    ans += 1;\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]}),(0,s.jsxs)(r,{value:"rs",label:"Rust",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rs",children:"impl Solution {\n    pub fn min_deletion_size(strs: Vec<String>) -> i32 {\n        let mut ans = 0;\n        // iterate cols\n        for col in 0 .. strs[0].as_bytes().len() {\n            // iterate rows\n            for row in 1 .. strs.len() {\n                // if the character in the previous row is greater than the character in the current row\n                // then we can delete this column\n                if strs[row - 1].as_bytes()[col] > strs[row].as_bytes()[col] {\n                    ans += 1;\n                    break;\n                }\n            }\n        }\n        ans\n    }\n}\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var s=t(67294);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);