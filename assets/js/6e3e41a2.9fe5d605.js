"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[82952],{40141:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=a(85893),t=a(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"},r="2201 - Count Artifacts That Can Be Extracted (Medium)",c={id:"2100-2199/count-artifacts-that-can-be-extracted-medium",title:"2201 - Count Artifacts That Can Be Extracted (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-artifacts-that-can-be-extracted/",source:"@site/solutions/2100-2199/2201-count-artifacts-that-can-be-extracted-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/count-artifacts-that-can-be-extracted-medium",permalink:"/solutions/2100-2199/count-artifacts-that-can-be-extracted-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2201-count-artifacts-that-can-be-extracted-medium.md",tags:[],version:"current",sidebarPosition:2201,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"},sidebar:"tutorialSidebar",previous:{title:"2200 - Find All K-Distant Indices in an Array (Easy)",permalink:"/solutions/2100-2199/find-all-k-distant-indices-in-an-array-easy"},next:{title:"2202 - Maximize the Topmost Element After K Moves (Medium)",permalink:"/solutions/2100-2199/maximize-the-topmost-element-after-k-moves-medium"}},l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Loops",id:"approach-1-loops",level:2}];function d(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components},{SolutionAuthor:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"2201---count-artifacts-that-can-be-extracted-medium",children:"2201 - Count Artifacts That Can Be Extracted (Medium)"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/count-artifacts-that-can-be-extracted/",children:"https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["There is an ",(0,n.jsx)(e.code,{children:"n x n"})," ",(0,n.jsx)(e.strong,{children:"0-indexed"})," grid with some artifacts buried in it. You are given the integer ",(0,n.jsx)(e.code,{children:"n"})," and a ",(0,n.jsx)(e.strong,{children:"0-indexed"})," 2D integer array ",(0,n.jsx)(e.code,{children:"artifacts"})," describing the positions of the rectangular artifacts where ",(0,n.jsx)(e.code,{children:"artifacts[i] = [r1i, c1i, r2i, c2i]"})," denotes that the ",(0,n.jsx)(e.code,{children:"ith"})," artifact is buried in the subgrid where:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"(r1i, c1i)"})," is the coordinate of the ",(0,n.jsx)(e.strong,{children:"top-left"})," cell of the ",(0,n.jsx)(e.code,{children:"ith"})," artifact and"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"(r2i, c2i)"})," is the coordinate of the ",(0,n.jsx)(e.strong,{children:"bottom-right"})," cell of the ",(0,n.jsx)(e.code,{children:"ith"})," artifact."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"You will excavate some cells of the grid and remove all the mud from them. If the cell has a part of an artifact buried underneath, it will be uncovered. If all the parts of an artifact are uncovered, you can extract it."}),"\n",(0,n.jsxs)(e.p,{children:["Given a ",(0,n.jsx)(e.strong,{children:"0-indexed"})," 2D integer array ",(0,n.jsx)(e.code,{children:"dig"})," where ",(0,n.jsx)(e.code,{children:"dig[i] = [ri, ci]"})," indicates that you will excavate the cell ",(0,n.jsx)(e.code,{children:"(ri, ci)"}),", return ",(0,n.jsx)(e.em,{children:"the number of artifacts that you can extract"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"The test cases are generated such that:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"No two artifacts overlap."}),"\n",(0,n.jsxs)(e.li,{children:["Each artifact only covers at most ",(0,n.jsx)(e.code,{children:"4"})," cells."]}),"\n",(0,n.jsxs)(e.li,{children:["The entries of ",(0,n.jsx)(e.code,{children:"dig"})," are unique."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/09/16/untitled-diagram.jpg",alt:""})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1]]\nOutput: 1\nExplanation: \nThe different colors represent different artifacts. Excavated cells are labeled with a 'D' in the grid.\nThere is 1 artifact that can be extracted, namely the red artifact.\nThe blue artifact has one part in cell (1,1) which remains uncovered, so we cannot extract it.\nThus, we return 1.\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/09/16/untitled-diagram-1.jpg",alt:""})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1],[1,1]]\nOutput: 2\nExplanation: Both the red and blue artifacts have all parts uncovered (labeled with a 'D') and can be extracted, so we return 2. \n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= n <= 1000"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= artifacts.length, dig.length <= min(n2, 10^5)"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"artifacts[i].length == 4"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"dig[i].length == 2"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"0 <= r1i, c1i, r2i, c2i, ri, ci <= n - 1"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"r1i <= r2i"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"c1i <= c2i"})}),"\n",(0,n.jsx)(e.li,{children:"No two artifacts will overlap."}),"\n",(0,n.jsxs)(e.li,{children:["The number of cells covered by an artifact is ",(0,n.jsx)(e.strong,{children:"at most"})," ",(0,n.jsx)(e.code,{children:"4"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["The entries of ",(0,n.jsx)(e.code,{children:"dig"})," are unique."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-loops",children:"Approach 1: Loops"}),"\n",(0,n.jsxs)(e.p,{children:["Check if each cell from ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(r1_i, c1_i)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," to ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(r2_i, c2_i)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," in ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"artifacts[i]"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," are all dug or not. If so, increase ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"s"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," by ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"1"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,n.jsx)(a,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int digArtifacts(int n, vector<vector<int>>& art, vector<vector<int>>& dig) {\n        int ans = 0;\n        vector<vector<int>> isDug(n, vector<int>(n));\n        for (auto x : dig) isDug[x[0]][x[1]] = 1;\n        for (auto x : art) {\n            int ok = 1;\n            for (int i = x[0]; i <= x[2] && ok; i++) {\n                for (int j = x[1]; j <= x[3] && ok; j++) {\n                    if (!isDug[i][j]) {\n                        ok = 0;\n                    }\n                }\n            }\n            ans += ok;\n        }\n        return ans;\n    }\n};\n"})})]})}function m(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>r});var n=a(67294);const t={},i=n.createContext(t);function r(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);