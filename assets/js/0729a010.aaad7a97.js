"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34556],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(f,o(o({ref:e},u),{},{components:n})):i.createElement(f,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88890:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-duplicate-file-in-system/",tags:["Array","Hash Table","String"]},s="0609 - Find Duplicate File in System (Medium)",p={unversionedId:"0600-0699/find-duplicate-file-in-system-medium",id:"0600-0699/find-duplicate-file-in-system-medium",title:"0609 - Find Duplicate File in System (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-duplicate-file-in-system/",source:"@site/solutions/0600-0699/0609-find-duplicate-file-in-system-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/find-duplicate-file-in-system-medium",permalink:"/solutions/0600-0699/find-duplicate-file-in-system-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0609-find-duplicate-file-in-system-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:609,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-duplicate-file-in-system/",tags:["Array","Hash Table","String"]},sidebar:"tutorialSidebar",previous:{title:"0606 - Construct String from Binary Tree (Easy)",permalink:"/solutions/0600-0699/construct-string-from-binary-tree-easy"},next:{title:"0622 - Design Circular Queue (Medium)",permalink:"/solutions/0600-0699/design-circular-queue-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: HashMap",id:"approach-1-hashmap",level:2}],m=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}},d=m("Tabs"),f=m("TabItem"),h=m("SolutionAuthor"),y={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0609---find-duplicate-file-in-system-medium"},"0609 - Find Duplicate File in System (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-duplicate-file-in-system/"},"https://leetcode.com/problems/find-duplicate-file-in-system/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a list ",(0,a.kt)("inlineCode",{parentName:"p"},"paths")," of directory info, including the directory path, and all the files with contents in this directory, return ",(0,a.kt)("em",{parentName:"p"},"all the duplicate files in the file system in terms of their paths"),". You may return the answer in ",(0,a.kt)("strong",{parentName:"p"},"any order"),"."),(0,a.kt)("p",null,"A group of duplicate files consists of at least two files that have the same content."),(0,a.kt)("p",null,"A single directory info string in the input list has the following format:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"'))),(0,a.kt)("p",null,"It means there are ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," files ",(0,a.kt)("inlineCode",{parentName:"p"},"(f1.txt, f2.txt ... fn.txt)")," with content ",(0,a.kt)("inlineCode",{parentName:"p"},"(f1_content, f2_content ... fn_content)"),' respectively in the directory "',(0,a.kt)("inlineCode",{parentName:"p"},'root/d1/d2/.../dm"'),". Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"n >= 1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"m >= 0"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"m = 0"),", it means the directory is just the root directory."),(0,a.kt)("p",null,"The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"directory_path/file_name.txt"'))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]\nOutput: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]\nOutput: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= paths.length <= 2 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= paths[i].length <= 3000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= sum(paths[i].length) <= 5 * 105")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"paths[i]")," consist of English letters, digits, ",(0,a.kt)("inlineCode",{parentName:"li"},"'/'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'.'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'('"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"')'"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"' '"),"."),(0,a.kt)("li",{parentName:"ul"},"You may assume no files or directories share the same name in the same directory."),(0,a.kt)("li",{parentName:"ul"},"You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Imagine you are given a real file system, how will you search files? DFS or BFS?"),(0,a.kt)("li",{parentName:"ul"},"If the file content is very large (GB level), how will you modify your solution?"),(0,a.kt)("li",{parentName:"ul"},"If you can only read the file by 1kb each time, how will you modify your solution?"),(0,a.kt)("li",{parentName:"ul"},"What is the time complexity of your modified solution? What is the most time-consuming part and memory-consuming part of it? How to optimize?"),(0,a.kt)("li",{parentName:"ul"},"How to make sure the duplicated files you find are not false positive?")),(0,a.kt)("h2",{id:"approach-1-hashmap"},"Approach 1: HashMap"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    // custom split template\n    vector<string> split(string str, char delim) {\n        string line;\n        vector<string> res;\n        stringstream ss(str);\n        while (getline(ss, line, delim)) res.push_back(line);\n        return res;\n    }\n    \n    // steps\n    // 1. for each path, split by the \' \', then get the directory path, file name and file content\n    // 2. combine the directory path and file name\n    // 3. group directoryPath/fileName by file content using hash map\n    // 4. build the final ans \n    vector<vector<string>> findDuplicate(vector<string>& paths) {\n        vector<vector<string>> ans;\n        unordered_map<string, vector<string>> m;\n        for (auto p : paths) {\n            vector<string> path = split(p, \' \');\n            string directoryPath;\n            for (int i = 0; i < path.size(); i++) {\n                if (i == 0) {\n                    directoryPath = path[i];\n                } else {\n                    // e.g. 1.txt\n                    string fileName = path[i].substr(0, path[i].find(\'(\'));\n                    // e.g. abcd\n                    string fileContent =  path[i].substr(path[i].find(\'(\') + 1, path[i].find(\')\') - path[i].find(\'(\') - 1);\n                    // e.g. efgh: ["root/a/2.txt","root/c/d/4.txt","root/4.txt"]\n                    m[fileContent].push_back(directoryPath + "/" + fileName);\n                }\n            }\n        }\n        // build the final answer\n        for (auto x : m) {\n            // check if there is duplicate\n            // e.g. ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]\n            if (x.second.size() > 1) {\n                // x.second is already the full list of paths\n                ans.push_back(x.second);    \n            }\n        }\n        return ans;\n    }\n};\n'))),(0,a.kt)(f,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def findDuplicate(self, paths: List[str]) -> List[List[str]]:\n        m = defaultdict(list)\n        for p in paths:\n            # 1. split the string by ' '\n            path = p.split()\n            # the first string is the directory path\n            # the rest of them are just file names with content\n            directoryPath, rest = path[0], path[1:]\n            # for each file names with content\n            for f in rest:\n                # we retrieve the file name and the file content\n                fileName, fileContent = f.split('(')[0], f.split('(')[1][:-1]\n                # then group {directoryPath}/{fileName} by file content\n                m[fileContent].append(\"{}/{}\".format(directoryPath, fileName))\n        # return the file list only when the size is greater than 1, meaning they are duplicate files\n        return [m[k] for k in m.keys() if len(m[k]) > 1]\n")))))}g.isMDXComponent=!0}}]);