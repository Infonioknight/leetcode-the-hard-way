"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[91522],{29818:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(85893),t=n(11151);const r={description:"Author: @vigneshshiv | https://leetcode.com/problems/concatenated-words/"},i="0472 - Concatenated Words (Hard)",l={id:"0400-0499/concatenated-words-hard",title:"0472 - Concatenated Words (Hard)",description:"Author: @vigneshshiv | https://leetcode.com/problems/concatenated-words/",source:"@site/solutions/0400-0499/0472-concatenated-words-hard.md",sourceDirName:"0400-0499",slug:"/0400-0499/concatenated-words-hard",permalink:"/solutions/0400-0499/concatenated-words-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0472-concatenated-words-hard.md",tags:[],version:"current",sidebarPosition:472,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/concatenated-words/"},sidebar:"tutorialSidebar",previous:{title:"0465 - Optimal Account Balancing (Hard)",permalink:"/solutions/0400-0499/optimal-account-balancing-hard"},next:{title:"0473 - Matchsticks to Square (Medium)",permalink:"/solutions/0400-0499/matchsticks-to-square-medium"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Trie Structure",id:"approach-1-trie-structure",level:2},{value:"Approach 2: HashSet with Iterative Solution",id:"approach-2-hashset-with-iterative-solution",level:2}];function d(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components},{SolutionAuthor:n,TabItem:r,Tabs:i}=e;return n||m("SolutionAuthor",!0),r||m("TabItem",!0),i||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"0472---concatenated-words-hard",children:"0472 - Concatenated Words (Hard)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/concatenated-words/",children:"https://leetcode.com/problems/concatenated-words/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given an array of strings ",(0,a.jsx)(e.code,{children:"words"})," (",(0,a.jsx)(e.strong,{children:"without duplicates"}),"), return ",(0,a.jsx)(e.em,{children:"all the"})," ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.em,{children:"concatenated words"})})," ",(0,a.jsx)(e.em,{children:"in the given list of"})," ",(0,a.jsx)(e.code,{children:"words"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["A ",(0,a.jsx)(e.strong,{children:"concatenated word"})," is defined as a string that is comprised entirely of at least two shorter words in the given array."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]\nOutput: ["catsdogcats","dogcatsdog","ratcatdogcat"]\nExplanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; \n"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; \n"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: words = ["cat","dog","catdog"]\nOutput: ["catdog"]\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= words.length <= 10^4"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= words[i].length <= 30"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"words[i]"})," consists of only lowercase English letters."]}),"\n",(0,a.jsxs)(e.li,{children:["All the strings of ",(0,a.jsx)(e.code,{children:"words"})," are ",(0,a.jsx)(e.strong,{children:"unique"}),"."]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= sum(words[i].length) <= 10^5"})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-trie-structure",children:"Approach 1: Trie Structure"}),"\n",(0,a.jsx)(e.p,{children:"Construct a list of string as a tree (similar to trie) and check whether larger string consist of atleast two or more than two strings."}),"\n",(0,a.jsxs)(e.p,{children:["So lets break down problem statement, a concatenated words is combined with ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"2"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"})]})})]})," or more than ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"2"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"})]})})]})," words from the list to forms a large string. Let's take above example ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"2"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"})]})})]}),", ",(0,a.jsx)(e.em,{children:"catdog"})," is concatenated strings of ",(0,a.jsx)(e.em,{children:"cat"})," and ",(0,a.jsx)(e.em,{children:"dog"})," from the list."]}),"\n",(0,a.jsxs)(e.p,{children:["Simpler appraoch to solve this, by taking larger string, check index by index with other strings in the list to ",(0,a.jsx)(e.em,{children:"match prefix of larger string to forms a complete word"}),". If larger string has a remaining substring, iterate through the same process to find the next half of the string in the list."]}),"\n",(0,a.jsxs)(e.p,{children:["Here, the second string may be a another string in the list (",(0,a.jsx)(e.em,{children:"dog"}),") or it may be on the same string then the larger consist of ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"3"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"3"})]})})]})," strings."]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"First, builds a trie structure, to forms string tree structure."}),"\n",(0,a.jsx)(e.li,{children:"Iterate through the list of words and check the prefix and suffix forms a complete word either two or more than two strings (as mentioned above)."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Time Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"s"}),(0,a.jsx)(e.mn,{children:"3"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * s^3)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," - # of words, ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"s"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," - the highest length of the word"]}),"\n",(0,a.jsxs)(e.p,{children:["Space Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"java",label:"Java",children:[(0,a.jsx)(n,{name:"@vigneshshiv"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    \n    class TrieNode {\n        private char character;\n        private TrieNode[] nodes = new TrieNode[26];\n        private boolean completeWord;\n\n        public TrieNode(char character) {\n            this.character = character;\n        }\n\n        public void setWordCompletion(boolean complete) {\n            this.completeWord = complete;\n        }\n\n        public boolean isCompleteWord() {\n            return completeWord;\n        }\n    }\n    \n    public List<String> findAllConcatenatedWordsInADict(String[] words) {\n        List<String> result = new ArrayList<>();\n        TrieNode root = buildsTrie(words);\n        for (String word : words) {\n            if (canForm(root, word, 0, word.length() - 1)) {\n                result.add(word);\n            }\n        }\n        return result;\n    }\n    \n    public TrieNode buildsTrie(String[] words) {\n        // Forms as Root\n        TrieNode root = new TrieNode('\\0');\n        for (String word : words) {\n            TrieNode current = root;\n            for (char c : word.toCharArray()) {\n                int idx = c - 'a';\n                if (current.nodes[idx] == null) {\n                    current.nodes[idx] = new TrieNode(c);\n                }\n                current = current.nodes[idx];\n            }\n            if (current != null) {\n                current.setWordCompletion(true);\n            }\n        }\n        return root;\n    }\n    \n    public boolean canForm(TrieNode root, String word, int start, int end) {\n        TrieNode current = root;\n        for (int i = start; i <= end; i++) {\n            char c = word.charAt(i);\n            current = current.nodes[c - 'a'];\n            if (current == null) return false;\n            // Prefix word\n            if (current.isCompleteWord()) {\n                if (hasWord(root, word, i + 1, end) || canForm(root, word, i + 1, end)) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n\n    public boolean hasWord(TrieNode root, String word, int start, int end) {\n        TrieNode current = root;\n        for (int i = start; i <= end; i++) {\n            char c = word.charAt(i);\n            current = current.nodes[c - 'a'];\n            if (current == null) return false;\n        }\n        return current.isCompleteWord();\n    }\n}\n"})})]})}),"\n",(0,a.jsx)(e.h2,{id:"approach-2-hashset-with-iterative-solution",children:"Approach 2: HashSet with Iterative Solution"}),"\n",(0,a.jsx)(e.p,{children:"Construct a list of string as a collection store in Set, and check whether larger string consist of atleast two or more than two strings."}),"\n",(0,a.jsx)(e.p,{children:"HashSet preferred instead of list, it avoids duplicate string in the collection of objects when we iterate through the list and store suffix string as a memoization for faster lookup. Consider the below example why suffix stored as a memoized value in the list,"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:'["cat","cats","rat","ratcatsdog","dog","dogcatsdog"]'})}),"\n",(0,a.jsxs)(e.p,{children:["When iterating on ",(0,a.jsx)(e.code,{children:"ratcatsdog"})," string, as soon as the ",(0,a.jsx)(e.code,{children:"rat"})," get matched, the suffix ",(0,a.jsx)(e.code,{children:"catsdog"})," string is look for matching string. Since it can be formed by ",(0,a.jsx)(e.code,{children:"cats"})," and ",(0,a.jsx)(e.code,{children:"dog"})," and string, this suffix ",(0,a.jsx)(e.code,{children:"catsdog"})," will be added to the HashSet. So when, ",(0,a.jsx)(e.code,{children:"dogcatsdog"})," iteration, the prefix ",(0,a.jsx)(e.code,{children:"dog"})," is found the list, so the suffix ",(0,a.jsx)(e.code,{children:"catsdog"})," is also available in the list, since we added as memoized record for future conditions to run as optimal solution."]}),"\n",(0,a.jsx)(e.p,{children:"Solve this by,"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"First, builds a HashSet store with all the words"}),"\n",(0,a.jsx)(e.li,{children:"Iterate through the list of words and check the prefix and suffix forms a complete word either two or more than two strings."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Time Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"s"}),(0,a.jsx)(e.mn,{children:"3"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * s^3)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," - # of words, ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"s"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," - the highest length of the word"]}),"\n",(0,a.jsxs)(e.p,{children:["Space Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"java",label:"Java",children:[(0,a.jsx)(n,{name:"@vigneshshiv"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public List<String> findAllConcatenatedWordsInADict(String[] words) {\n        List<String> result = new ArrayList<>();\n        Set<String> store = new HashSet<>(Arrays.asList(words));\n        for (String word : words) {\n            if (hasWord(word, store)) result.add(word);\n        }\n        return result;\n    }\n    \n    public boolean hasWord(String word, Set<String> store) {\n        for (int i = 1; i < word.length(); i++) {\n            if (store.contains(word.substring(0, i))) {\n                String suffix = word.substring(i);\n                if (store.contains(suffix) || hasWord(suffix, store)) {\n                    // memoization - concatenated word for look up at later stage\n                    store.add(suffix);\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n}\n"})})]})})]})}function h(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(d,{...s})}):d(s)}function m(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,n)=>{n.d(e,{Z:()=>l,a:()=>i});var a=n(67294);const t={},r=a.createContext(t);function i(s){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:i(s.components),a.createElement(r.Provider,{value:e},s.children)}}}]);