"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[97225],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},94885:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/lexicographically-smallest-equivalent-string/",tags:["String","Union Find"]},s="1061 - Lexicographically Smallest Equivalent String (Medium)",u={unversionedId:"1000-1099/lexicographically-smallest-equivalent-string-medium",id:"1000-1099/lexicographically-smallest-equivalent-string-medium",title:"1061 - Lexicographically Smallest Equivalent String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/lexicographically-smallest-equivalent-string/",source:"@site/solutions/1000-1099/1061-lexicographically-smallest-equivalent-string-medium.md",sourceDirName:"1000-1099",slug:"/1000-1099/lexicographically-smallest-equivalent-string-medium",permalink:"/solutions/1000-1099/lexicographically-smallest-equivalent-string-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1061-lexicographically-smallest-equivalent-string-medium.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Union Find",permalink:"/solutions/tags/union-find"}],version:"current",sidebarPosition:1061,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/lexicographically-smallest-equivalent-string/",tags:["String","Union Find"]},sidebar:"tutorialSidebar",previous:{title:"1047 - Remove All Adjacent Duplicates In String (Easy)",permalink:"/solutions/1000-1099/remove-all-adjacent-duplicates-in-string-easy"},next:{title:"1066 - Campus Bikes II (Medium)",permalink:"/solutions/1000-1099/campus-bikes-ii-medium"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DSU",id:"approach-1-dsu",level:2}],c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},d=c("Tabs"),g=c("TabItem"),h=c("SolutionAuthor"),f={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1061---lexicographically-smallest-equivalent-string-medium"},"1061 - Lexicographically Smallest Equivalent String (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lexicographically-smallest-equivalent-string/"},"https://leetcode.com/problems/lexicographically-smallest-equivalent-string/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given two strings of the same length ",(0,i.kt)("inlineCode",{parentName:"p"},"s1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s2")," and a string ",(0,i.kt)("inlineCode",{parentName:"p"},"baseStr"),"."),(0,i.kt)("p",null,"We say ",(0,i.kt)("inlineCode",{parentName:"p"},"s1[i]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s2[i]")," are equivalent characters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},'s1 = "abc"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'s2 = "cde"'),", then we have ",(0,i.kt)("inlineCode",{parentName:"li"},"'a' == 'c'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'b' == 'd'"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"'c' == 'e'"),".")),(0,i.kt)("p",null,"Equivalent characters follow the usual rules of any equivalence relation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reflexivity:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"'a' == 'a'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Symmetry:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"'a' == 'b'")," implies ",(0,i.kt)("inlineCode",{parentName:"li"},"'b' == 'a'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transitivity:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"'a' == 'b'")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"'b' == 'c'")," implies ",(0,i.kt)("inlineCode",{parentName:"li"},"'a' == 'c'"),".")),(0,i.kt)("p",null,"For example, given the equivalency information from ",(0,i.kt)("inlineCode",{parentName:"p"},'s1 = "abc"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'s2 = "cde"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"acd"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"aab"')," are equivalent strings of ",(0,i.kt)("inlineCode",{parentName:"p"},'baseStr = "eed"'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'"aab"')," is the lexicographically smallest equivalent string of ",(0,i.kt)("inlineCode",{parentName:"p"},"baseStr"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the lexicographically smallest equivalent string of"),(0,i.kt)("inlineCode",{parentName:"p"},"baseStr"),(0,i.kt)("em",{parentName:"p"},"by using the equivalency information from"),(0,i.kt)("inlineCode",{parentName:"p"},"s1"),(0,i.kt)("em",{parentName:"p"},"and"),(0,i.kt)("inlineCode",{parentName:"p"},"s2"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s1 = "parker", s2 = "morris", baseStr = "parser"\nOutput: "makkek"\nExplanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].\nThe characters in each group are equivalent and sorted in lexicographical order.\nSo the answer is "makkek".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s1 = "hello", s2 = "world", baseStr = "hold"\nOutput: "hdld"\nExplanation: Based on the equivalency information in s1 and s2, we can group their characters as [h,w], [d,e,o], [l,r].\nSo only the second letter \'o\' in baseStr is changed to \'d\', the answer is "hdld".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"\nOutput: "aauaaaaada"\nExplanation: We group the equivalent characters in s1 and s2 as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in baseStr except \'u\' and \'d\' are transformed to \'a\', the answer is "aauaaaaada".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= s1.length, s2.length, baseStr <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s1.length == s2.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"s2"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"baseStr")," consist of lowercase English letters.")),(0,i.kt)("h2",{id:"approach-1-dsu"},"Approach 1: DSU"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int root[26];\n    \n    // recursively get the root element\n    int get(int x) {\n        return x == root[x] ? x : (root[x] = get(root[x]));\n    }\n    \n    // unite two elements\n    void unite(int x, int y) {\n        // find the root of x\n        x = get(x);\n        // find the root of y\n        y = get(y);\n        // if their roots are not same, we combine them\n        if (x != y) {\n            // smaller first\n            if (x < y)  root[y] = x;\n            else root[x] = y;\n        }\n        return;\n    }\n    string smallestEquivalentString(string s1, string s2, string baseStr) {\n        // dsu\n        string ans;\n        // init root. initialy each element is in its own group.\n        for (int i = 0; i < 26; i++)  root[i] = i;\n        // unite each character\n        for (int i = 0; i < s1.size(); i++) unite(s1[i] - 'a', s2[i] - 'a');\n        // build the final answer from the root element (smallest)\n        for (auto x : baseStr) ans += (char)(get(x - 'a') + 'a');\n        return ans;\n    }\n};\n"))),(0,i.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    int[] root = new int[26];\n\n    // recursively get the root element\n    int get(int x) {\n        return x == root[x] ? x : (root[x] = get(root[x]));\n    }\n\n    // unite two elements\n    void unite(int x, int y) {\n        // find the root of x\n        x = get(x);\n        // find the root of y\n        y = get(y);\n        // if their roots are not same, we combine them\n        if (x != y) {\n            // smaller first\n            if (x < y)  root[y] = x;\n            else root[x] = y;\n        }\n        return;\n    }\n    \n    public String smallestEquivalentString(String s1, String s2, String baseStr) {\n        String ans = \"\";\n        // init root. initialy each element is in its own group.\n        for (int i = 0; i < 26; i++)  root[i] = i;\n        // unite each character\n        for (int i = 0; i < s1.length(); i++) unite(s1.charAt(i) - 'a', s2.charAt(i) - 'a');\n        // build the final answer from the root element (smallest)\n        for (int i = 0; i < baseStr.length(); i++) {\n            ans += (char)(get(baseStr.charAt(i) - 'a') + 'a');\n        }\n        return ans;\n    }\n}\n"))),(0,i.kt)(g,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:\n        root = [i for i in range(26)]\n    \n        def get(x):\n            # recursively get the root element\n            if x == root[x]:\n                return x \n            else:\n                return get(root[x])\n        \n        # unite two elements\n        def unite(x, y):\n            # find the root of x and y, \n            x = get(x)\n            y = get(y)\n            # if their roots are not same, we combine them\n            if x != y:\n                if x < y:\n                    root[y] = x\n                else:\n                    root[x] = y\n            return\n        \n        ans = \"\"\n        for i in range(len(s1)):\n            unite(ord(s1[i]) - ord('a'), ord(s2[i]) - ord('a'))\n        # dsu to build the final answer from the root element (smallest)\n        for x in baseStr:\n            ans += chr(get(ord(x) - ord('a')) + ord('a'))\n        return ans\n"))),(0,i.kt)(g,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    pub fn smallest_equivalent_string(s1: String, s2: String, base_str: String) -> String {\n        let mut root: [i32; 26] = [i32::default(); 26];\n        // recursively get the root element\n        fn get(root: &mut [i32; 26], x: i32) -> i32 {\n            if x == root[x as usize] {\n                return x;\n            }\n            root[x as usize] = get(root, root[x as usize]);\n            root[x as usize]\n        }\n        // unite two elements\n        fn unite(root: &mut [i32; 26], x: i32, y: i32) {\n            // find the root of x\n            let x = get(root, x);\n            // find the root of y\n            let y = get(root, y);\n            // if their roots are not same, we combine them\n            if x != y {\n                // smaller first\n                if x < y {\n                    root[y as usize] = x;\n                } else {\n                    root[x as usize] = y;\n                }\n            }\n        }\n\n        let mut ans = String::new();\n        // init root. initialy each element is in its own group.\n        for i in 0..26 {\n            root[i] = i as i32;\n        }\n        for i in 0..s1.len() {\n            unite(&mut root, s1.as_bytes()[i] as i32 - 'a' as i32, s2.as_bytes()[i] as i32 - 'a' as i32);\n        }\n        // build the final answer from the root element (smallest)\n        for i in base_str.bytes() {\n            ans.push((get(&mut root, i as i32 - 'a' as i32) + 'a' as i32) as u8 as char);\n        }\n        ans\n    }\n}\n\n")))))}k.isMDXComponent=!0}}]);