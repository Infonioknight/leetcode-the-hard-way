"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69196],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=o(a),u=r,d=h["".concat(m,".").concat(u)]||h[u]||c[u]||s;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71416:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],p={description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/"},m="0208 - Implement Trie (Prefix Tree) (Medium)",o={unversionedId:"0200-0299/implement-trie-medium",id:"0200-0299/implement-trie-medium",title:"0208 - Implement Trie (Prefix Tree) (Medium)",description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",source:"@site/solutions/0200-0299/0208-implement-trie-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/implement-trie-medium",permalink:"/leetcode-the-hard-way/solutions/0200-0299/implement-trie-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0208-implement-trie-medium.md",tags:[],version:"current",sidebarPosition:208,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/"},sidebar:"tutorialSidebar",previous:{title:"0207 - Course Schedule (Medium)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/course-schedule-medium"},next:{title:"0290 - Word Pattern (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/word-pattern-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Trie Structure",id:"approach-1-trie-structure",level:2}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},u=h("Tabs"),d=h("TabItem"),k=h("SolutionAuthor"),N={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0208---implement-trie-prefix-tree-medium"},"0208 - Implement Trie (Prefix Tree) (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-trie-prefix-tree/"},"https://leetcode.com/problems/implement-trie-prefix-tree/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"trie"),' (pronounced as "try") or ',(0,s.kt)("strong",{parentName:"p"},"prefix tree")," is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker."),(0,s.kt)("p",null,"Implement the Trie class:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Trie()")," Initializes the trie object."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"void insert(String word)")," Inserts the string ",(0,s.kt)("inlineCode",{parentName:"li"},"word")," into the trie."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"boolean search(String word)")," Returns ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," if the string ",(0,s.kt)("inlineCode",{parentName:"li"},"word")," is in the trie (i.e., was inserted before), and ",(0,s.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"boolean startsWith(String prefix)")," Returns ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," if there is a previously inserted string ",(0,s.kt)("inlineCode",{parentName:"li"},"word")," that has the prefix ",(0,s.kt)("inlineCode",{parentName:"li"},"prefix"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"false")," otherwise.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input\n["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\nOutput\n[null, null, true, false, true, null, true]\n\nExplanation\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // return True\ntrie.search("app");     // return False\ntrie.startsWith("app"); // return True\ntrie.insert("app");\ntrie.search("app");     // return True\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= word.length, prefix.length <= 2000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"word")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"prefix")," consist only of lowercase English letters."),(0,s.kt)("li",{parentName:"ul"},"At most ",(0,s.kt)("inlineCode",{parentName:"li"},"3 * 10^4")," calls in total will be made to ",(0,s.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"search"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"startsWith"),".")),(0,s.kt)("h2",{id:"approach-1-trie-structure"},"Approach 1: Trie Structure"),(0,s.kt)("p",null,"A trie, or a prefix tree, is a type of search tree that is usually used to store strings. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Each path from the root to leaves forms a word."),(0,s.kt)("li",{parentName:"ul"},"Each node except for the root node contains a value."),(0,s.kt)("li",{parentName:"ul"},"All the descendants of a node share a common prefix associated to that node. ")),(0,s.kt)("p",null,"For example, when trie stores ","[ape,apple,are,art, ...]",", ",(0,s.kt)("inlineCode",{parentName:"p"},"are")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"art")," share ",(0,s.kt)("inlineCode",{parentName:"p"},"ar")," as the prefix."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"So we can form a tree of characters represents a value and connecting from top to bottom to form a string."),"\nThere are two operations provided by a trie: ",(0,s.kt)("inlineCode",{parentName:"p"},"insert")," a new string and ",(0,s.kt)("inlineCode",{parentName:"p"},"search")," for a given string. "),(0,s.kt)("p",null,"Here, we are using ASCII key based character store in tree, since the constraint given is all characters are english lowercase letters, we can covert each character to integer value represents corresponding to a char. While inserting a string, we are constructing a tree to form a string and at the end, mark the word as completes. This helps to search for a string weather it is a complete word or prefix. "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Wiki Reference - ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trie"},"https://en.wikipedia.org/wiki/Trie"))),(0,s.kt)("p",null,"Time Complexity for insert and search: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"L"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(L)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"L")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"L")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"L")))))," is the length of the word\nSpace Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"K"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(K*N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"K")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"K")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K")))))," is the no. of characters and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," is the no. of nodes in the tree. "),(0,s.kt)("p",null,"Side note, all of our Google searches performs similar to Trie structure implementation and Google search autocomplete is a great example. "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/users/images/1d1bc396-05a2-4d8c-b8b0-e707c5790fde_1604920548.2461913.png",alt:"Alt text"})),(0,s.kt)(u,{mdxType:"Tabs"},(0,s.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Trie {\n    \n    // The root of this Trie\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode('\\0'); // Forms as Root\n    }\n    \n    public void insert(String word) {\n        TrieNode current = root;\n        for (char c : word.toCharArray()) {\n            int idx = c - 'a';\n            if (current.nodes[idx] == null) {\n                current.nodes[idx] = new TrieNode(c);\n            }\n            current = current.nodes[idx];\n        }\n        current.isWord = true;\n    }\n    \n    public boolean search(String word) {\n        return contains(word, false);\n    }\n    \n    public boolean startsWith(String prefix) {\n        return contains(prefix, true);\n    }\n    \n    private boolean contains(String prefix, boolean startsWith) {\n        TrieNode current = root;\n        for (char c : prefix.toCharArray()) {\n            current = current.nodes[c - 'a'];\n            if (current == null) {\n                return false;\n            }\n        }\n        return startsWith ? true : current.isWord;\n    }\n    \n    /**\n     * Node in the Trie\n     */\n    private class TrieNode {\n        private char character;\n        private TrieNode[] nodes = new TrieNode[26];\n        private boolean isWord;\n\n        public TrieNode(char character) {\n            this.character = character;\n        }\n    }\n}\n")))))}f.isMDXComponent=!0}}]);