"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69196],{31802:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(85893),t=r(11151);const i={description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",tags:["Hash Table","String","Design","Trie"]},a="0208 - Implement Trie (Prefix Tree) (Medium)",o={id:"0200-0299/implement-trie-medium",title:"0208 - Implement Trie (Prefix Tree) (Medium)",description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",source:"@site/solutions/0200-0299/0208-implement-trie-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/implement-trie-medium",permalink:"/solutions/0200-0299/implement-trie-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0208-implement-trie-medium.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Trie",permalink:"/solutions/tags/trie"}],version:"current",sidebarPosition:208,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",tags:["Hash Table","String","Design","Trie"]},sidebar:"tutorialSidebar",previous:{title:"0207 - Course Schedule (Medium)",permalink:"/solutions/0200-0299/course-schedule-medium"},next:{title:"0210 - Course Schedule II (Medium)",permalink:"/solutions/0200-0299/course-schedule-ii-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Trie Structure",id:"approach-1-trie-structure",level:2}];function h(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:r,TabItem:i,Tabs:a}=n;return r||m("SolutionAuthor",!0),i||m("TabItem",!0),a||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0208---implement-trie-prefix-tree-medium",children:"0208 - Implement Trie (Prefix Tree) (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/implement-trie-prefix-tree/",children:"https://leetcode.com/problems/implement-trie-prefix-tree/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"trie"}),' (pronounced as "try") or ',(0,s.jsx)(n.strong,{children:"prefix tree"})," is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker."]}),"\n",(0,s.jsx)(n.p,{children:"Implement the Trie class:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Trie()"})," Initializes the trie object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"void insert(String word)"})," Inserts the string ",(0,s.jsx)(n.code,{children:"word"})," into the trie."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"boolean search(String word)"})," Returns ",(0,s.jsx)(n.code,{children:"true"})," if the string ",(0,s.jsx)(n.code,{children:"word"})," is in the trie (i.e., was inserted before), and ",(0,s.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"boolean startsWith(String prefix)"})," Returns ",(0,s.jsx)(n.code,{children:"true"})," if there is a previously inserted string ",(0,s.jsx)(n.code,{children:"word"})," that has the prefix ",(0,s.jsx)(n.code,{children:"prefix"}),", and ",(0,s.jsx)(n.code,{children:"false"})," otherwise."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input\n["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\nOutput\n[null, null, true, false, true, null, true]\n\nExplanation\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // return True\ntrie.search("app");     // return False\ntrie.startsWith("app"); // return True\ntrie.insert("app");\ntrie.search("app");     // return True\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= word.length, prefix.length <= 2000"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"word"})," and ",(0,s.jsx)(n.code,{children:"prefix"})," consist only of lowercase English letters."]}),"\n",(0,s.jsxs)(n.li,{children:["At most ",(0,s.jsx)(n.code,{children:"3 * 10^4"})," calls in total will be made to ",(0,s.jsx)(n.code,{children:"insert"}),", ",(0,s.jsx)(n.code,{children:"search"}),", and ",(0,s.jsx)(n.code,{children:"startsWith"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-trie-structure",children:"Approach 1: Trie Structure"}),"\n",(0,s.jsx)(n.p,{children:"A trie, or a prefix tree, is a type of search tree that is usually used to store strings."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each path from the root to leaves forms a word."}),"\n",(0,s.jsx)(n.li,{children:"Each node except for the root node contains a value."}),"\n",(0,s.jsx)(n.li,{children:"All the descendants of a node share a common prefix associated to that node."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, when trie stores [ape,apple,are,art, ...], ",(0,s.jsx)(n.code,{children:"are"})," and ",(0,s.jsx)(n.code,{children:"art"})," share ",(0,s.jsx)(n.code,{children:"ar"})," as the prefix."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"So we can form a tree of characters represents a value and connecting from top to bottom to form a string."}),"\nThere are two operations provided by a trie: ",(0,s.jsx)(n.code,{children:"insert"})," a new string and ",(0,s.jsx)(n.code,{children:"search"})," for a given string."]}),"\n",(0,s.jsx)(n.p,{children:"Here, we are using ASCII key based character store in tree, since the constraint given is all characters are english lowercase letters, we can covert each character to integer value represents corresponding to a char. While inserting a string, we are constructing a tree to form a string and at the end, mark the word as completes. This helps to search for a string weather it is a complete word or prefix."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Wiki Reference - ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Trie",children:"https://en.wikipedia.org/wiki/Trie"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity for insert and search: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"L"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(L)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"L"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"L"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"L"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"L"})]})})]})," is the length of the word\nSpace Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"K"}),(0,s.jsx)(n.mo,{children:"\u2217"}),(0,s.jsx)(n.mi,{children:"N"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(K*N)"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"K"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," is the no. of characters and ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"N"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," is the no. of nodes in the tree."]}),"\n",(0,s.jsx)(n.p,{children:"Side note, all of our Google searches performs similar to Trie structure implementation and Google search autocomplete is a great example."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/users/images/1d1bc396-05a2-4d8c-b8b0-e707c5790fde_1604920548.2461913.png",alt:"Alt text"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsxs)(i,{value:"java",label:"Java",children:[(0,s.jsx)(r,{name:"@vigneshshiv"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Trie {\n    \n    // The root of this Trie\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode('\\0'); // Forms as Root\n    }\n    \n    public void insert(String word) {\n        TrieNode current = root;\n        for (char c : word.toCharArray()) {\n            int idx = c - 'a';\n            if (current.nodes[idx] == null) {\n                current.nodes[idx] = new TrieNode(c);\n            }\n            current = current.nodes[idx];\n        }\n        current.isWord = true;\n    }\n    \n    public boolean search(String word) {\n        return contains(word, false);\n    }\n    \n    public boolean startsWith(String prefix) {\n        return contains(prefix, true);\n    }\n    \n    private boolean contains(String prefix, boolean startsWith) {\n        TrieNode current = root;\n        for (char c : prefix.toCharArray()) {\n            current = current.nodes[c - 'a'];\n            if (current == null) {\n                return false;\n            }\n        }\n        return startsWith ? true : current.isWord;\n    }\n    \n    /**\n     * Node in the Trie\n     */\n    private class TrieNode {\n        private char character;\n        private TrieNode[] nodes = new TrieNode[26];\n        private boolean isWord;\n\n        public TrieNode(char character) {\n            this.character = character;\n        }\n    }\n}\n"})})]}),(0,s.jsxs)(i,{value:"python",label:"Python",children:[(0,s.jsx)(r,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class TrieNode:\n    # Utilize a linked list DS --\x3e One where the next\n    # nodes can be reached via a hash map\n    # Contains a char as an optional parameter\n    # Also utilizes attributes of is_word to denote\n    # whether it is a word. \n    # Ex: If we have the word apple in our trie. a->p->p->l->e\n    # 'e' node will have is_word = True, to denote that\n    # apple is a word in our map. Letters, a,p,p,l,e won't be True\n    # as they are not complete words in our Trie.\n    def __init__(self, char=None):\n        self.char = char\n        self.is_word = False\n        self.nodes = {}\n        \nclass Trie:\n    # Total Space Complexity\n    # O(k*n) where k is the number of characters we insert into our hashmap.\n    # where n is the number of nodes in our Trie.\n    def __init__(self):\n        # initialize root as a TrieNode with None char.\n        self.root = TrieNode()\n        \n\n    def insert(self, word: str) -> None:\n        # Time: O(l) where l is the length of the word.\n        # a current node pointer to trace our linked list\n        node = self.root\n        # iterate through every character in the word, word.\n        for ch in word:\n            # current character is not in current TrieNode's\n            # hashmap of nodes -> create that node and add\n            # it to the hash map.\n            if ch not in node.nodes:\n                node.nodes[ch] = TrieNode(ch)\n            # move our current node pointer to the character\n            # we are looking at's node.\n            node = node.nodes[ch]\n        # When we reached the end set the is_word boolean to True.\n        node.is_word = True\n        \n\n    def search(self, word: str) -> bool:\n        # Time: O(l) where l is the length of the word.\n        # current node pointer to trace our linked list.\n        node = self.root\n        # iterate each character in word.\n        for ch in word:\n            # if character is not in the current nodes hashmap of nodes.\n            if ch not in node.nodes:\n                # That means word won't be in the Trie, return False\n                return False\n            # move our current node pointer to next ch node.\n            node = node.nodes[ch]\n        # Reached end of word, return boolean is_word.\n        return node.is_word\n        \n\n    def startsWith(self, prefix: str) -> bool:\n        # Time: O(l) where l is length of the prefix\n        # current node pointer to track our linked list/\n        node = self.root\n        # iterate each character in prefix\n        for ch in prefix:\n            # character is not in the nodes hash map\n            if ch not in node.nodes:\n                # return false isn't a prefix\n                return False\n            # move our current node pointer\n            node = node.nodes[ch]\n        # Reached the end, it means all characters of prefix exist\n        # inside our Trie --\x3e return True.\n        return True\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var s=r(67294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);