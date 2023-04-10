"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/reverse-words-in-a-string-iii/",tags:["Two Pointers","String"]},a="0557 - Reverse Words in a String III (Easy)",o={unversionedId:"0500-0599/reverse-words-in-a-string-iii-easy",id:"0500-0599/reverse-words-in-a-string-iii-easy",title:"0557 - Reverse Words in a String III (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/reverse-words-in-a-string-iii/",source:"@site/solutions/0500-0599/0557-reverse-words-in-a-string-iii-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/reverse-words-in-a-string-iii-easy",permalink:"/solutions/0500-0599/reverse-words-in-a-string-iii-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0557-reverse-words-in-a-string-iii-easy.md",tags:[{label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:557,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/reverse-words-in-a-string-iii/",tags:["Two Pointers","String"]},sidebar:"tutorialSidebar",previous:{title:"0543 - Diameter of Binary Tree (Easy)",permalink:"/solutions/0500-0599/diameter-of-binary-tree-easy"},next:{title:"0559 - Maximum Depth of N-ary Tree (Easy)",permalink:"/solutions/0500-0599/maximum-depth-of-n-ary-tree-easy"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Split and Reverse",id:"approach-1-split-and-reverse",level:2},{value:"Approach 2: Two Pointers",id:"approach-2-two-pointers",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m=c("SolutionAuthor"),g={toc:p},h="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0557---reverse-words-in-a-string-iii-easy"},"0557 - Reverse Words in a String III (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-words-in-a-string-iii/"},"https://leetcode.com/problems/reverse-words-in-a-string-iii/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),", reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "Let\'s take LeetCode contest"\nOutput: "s\'teL ekat edoCteeL tsetnoc"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "God Ding"\nOutput: "doG gniD"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 5 * 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," contains printable ",(0,i.kt)("strong",{parentName:"li"},"ASCII")," characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," does not contain any leading or trailing spaces."),(0,i.kt)("li",{parentName:"ul"},"There is ",(0,i.kt)("strong",{parentName:"li"},"at least one")," word in ",(0,i.kt)("inlineCode",{parentName:"li"},"s"),"."),(0,i.kt)("li",{parentName:"ul"},"All the words in ",(0,i.kt)("inlineCode",{parentName:"li"},"s")," are separated by a single space.")),(0,i.kt)("h2",{id:"approach-1-split-and-reverse"},"Approach 1: Split and Reverse"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // custom split template\n    vector<string> split(string str, char delim) {\n        string line;\n        vector<string> res;\n        stringstream ss(str);\n        while (getline(ss, line, delim)) res.push_back(line);\n        return res;\n    }\n\n    string reverseWords(string s) {\n        // split by ' '\n        vector<string> v = split(s, ' ');\n        // reverse each string\n        for(auto &x : v) reverse(x.begin(), x.end());\n        // construct the answer\n        string ans;\n        for(int i = 0; i < v.size(); i++) {\n            ans += v[i];\n            // add space after each string except the last one\n            if(i != v.size() - 1) ans += \" \";\n        } \n        return ans;\n    }\n};\n"))),(0,i.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def reverseWords(self, s: str) -> str:\n        # step1: split the string\n        #   split() = ["Let\'s","take","LeetCode","contest"]\n        # step2: reverse the list \n        #   s.split()[::-1] = ["contest","LeetCode","take","Let\'s"]\n        # step3: convert each element to string separated by space\n        #   \' \'.join(s.split()[::-1]) = "contest LeetCode take Let\'s"\n        # step4: reverse the string \n        #   \' \'.join(s.split()[::-1])[::-1] = "s\'teL ekat edoCteeL tsetnoc"\n        return \' \'.join(s.split()[::-1])[::-1]\n'))),(0,i.kt)(u,{value:"kt",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    fun reverseWords(s: String): String {\n        // step 1: split by space\n        // s.split(" ") = [Let\'s, take, LeetCode, contest]\n        // step 2: reverse each element\n        // s.split(" ").map { it.reversed() } = [s\'teL, ekat, edoCteeL, tsetnoc]\n        // step 3: join them back\n        // s.split(" ").map { it.reversed() }.joinToString(" ") = "s\'teL ekat edoCteeL tsetnoc"\n        return s.split(" ").map { it.reversed() }.joinToString(" ");\n    }\n}\n'))),(0,i.kt)(u,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function reverseWords(s: string): string {\n    // step 1: split by space\n    //  s.split(' ') = [ \"Let's\", 'take', 'LeetCode', 'contest' ]\n    // step 2: for each element, reverse it \n    //  s.split(' ').map(w => w.split('').reverse().join('')) = [ \"s'teL\", 'ekat', 'edoCteeL', 'tsetnoc' ]\n    // step 3: join them back\n    //  s.split(' ').map(w => w.split('').reverse().join('')).join(' ') = \"s'teL ekat edoCteeL tsetnoc\"\n    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ')\n};\n"))),(0,i.kt)(u,{value:"go",label:"Go",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func reverseWords(s string) string {\n    // split by space\n    w := strings.Split(s, " ")\n    // iterate each word\n    for k, v := range w {\n        // convert to bytes array\n        b := []byte(v)\n        // length of current word\n        n := len(v)\n        // for each word, we iterate n / 2 times\n        for i := 0; i < n / 2; i++ {\n            // swap the characters\n            b[i], b[n - 1 - i] = b[n - 1 - i], b[i]\n            // w[k] here is the reversed version of v\n            w[k] = string(b)\n        }\n    }\n    // build the final string\n    return strings.Join(w, " ")\n')))),(0,i.kt)("h2",{id:"approach-2-two-pointers"},"Approach 2: Two Pointers"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string reverseWords(string s) {\n        int l = 0, r = 0, n = s.size();\n        for (int i = 0; i < n; i++) {\n            // looking for the space index\n            if (s[i] == ' ' || i == n - 1) {\n                // r is the index before the space\n                // if s[i] is space, then we want to reverse s[l : i - 1]\n                // if s[i] is the last character, then we want to reverse s[l : i]\n                r = i == n - 1 ? i : i - 1;\n                // swap the character\n                // e.g. s = `Let's` where l is 0 and r is 4\n                // Let's -> set'L -> s'teL\n                while (l < r) swap(s[l++], s[r--]);\n                // update left pointer which is i + 1\n                // i.e. the first index of the next word if applicable\n                l = i + 1;\n            }\n        }\n        return s;\n    }\n};\n"))),(0,i.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public String reverseWords(String s) {\n        int l = 0, r = 0, n = s.length();\n        char[] c = s.toCharArray();\n        for (int i = 0; i < n; i++) {\n            // looking for the space index\n            if (c[i] == ' ' || i == n - 1) {\n                // r is the index before the space\n                // if s[i] is space, then we want to reverse s[l : i - 1]\n                // if s[i] is the last character, then we want to reverse s[l : i]\n                r = i == n - 1 ? i : i - 1;\n                // swap the character\n                // e.g. s = `Let's` where l is 0 and r is 4\n                // Let's -> set'L -> s'teL\n                while (l < r) {\n                    char tmp = c[l];\n                    c[l] = c[r];\n                    c[r] = tmp;\n                    l++;\n                    r--;\n                }\n                // update left pointer which is i + 1\n                // i.e. the first index of the next word if applicable\n                l = i + 1;\n            }\n        }\n        return new String(c);\n    }\n}\n")))))}k.isMDXComponent=!0}}]);