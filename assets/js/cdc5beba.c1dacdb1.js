"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[12823],{39838:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,suggestedProblems:()=>o,toc:()=>h});var t=a(85893),n=a(11151);const i={title:"Arrays",description:"An array is a data structure consisting of a collection of elements.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","arrays","data structure"]},r=void 0,l={id:"basic-topics/arrays",title:"Arrays",description:"An array is a data structure consisting of a collection of elements.",source:"@site/tutorials/basic-topics/arrays.md",sourceDirName:"basic-topics",slug:"/basic-topics/arrays",permalink:"/tutorials/basic-topics/arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/arrays.md",tags:[],version:"current",frontMatter:{title:"Arrays",description:"An array is a data structure consisting of a collection of elements.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","arrays","data structure"]},sidebar:"tutorialSidebar",previous:{title:"Basic Topics",permalink:"/tutorials/category/basic-topics"},next:{title:"Backtracking",permalink:"/tutorials/basic-topics/backtracking"}},c={},o=[{problemName:"1480 - Running Sum of 1d Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/running-sum-of-1d-array/",solutionLink:"../../solutions/1400-1499/running-sum-of-1d-array-easy"},{problemName:"1929 - Concatenation of Array",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/concatenation-of-array/",solutionLink:"../../solutions/1900-1999/concatenation-of-array-easy"},{problemName:"1431 - Kids With the Greatest Number of Candies",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",solutionLink:"../../solutions/1400-1499/kids-with-the-greatest-number-of-candies-easy"},{problemName:"1572 - Matrix Diagonal Sum",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/matrix-diagonal-sum/",solutionLink:"../../solutions/1500-1599/matrix-diagonal-sum-easy"},{problemName:"0036 - Valid Sudoku",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/valid-sudoku/",solutionLink:""}],h=[{value:"Overview",id:"overview",level:2},{value:"Complexity",id:"complexity",level:3}];function d(e){const s={annotation:"annotation",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{SolutionAuthor:a,TabItem:i,Table:r,Tabs:l,TutorialAuthors:c}=s;return a||x("SolutionAuthor",!0),i||x("TabItem",!0),r||x("Table",!0),l||x("Tabs",!0),c||x("TutorialAuthors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{names:"@heiheihang, @wingkwong"}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"Arrays are a common data structure used in many programming languages such as Python, C++, Java, and Javascript. They are used to store a collection of items and can be one-dimensional or multi-dimensional."}),"\n",(0,t.jsx)(s.p,{children:'In the context of LeetCode, the term "array" can refer to different data structures in different languages, such as a List in Python, Array or Vector in C++, Array or ArrayList in Java, and Array in Javascript.'}),"\n",(0,t.jsx)(s.p,{children:"Let's take a look at some examples of array:"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(a,{name:"@heiheihang"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"scores_of_students = [86, 76, 67, 98, 95]\n\nboys_and_girls_of_classes = [[10,23], [20,20], [15,12], [13,16]]\n\nbasketball_matches = [[0, 76, 86, 100],\n                       [56, 0, 87, 65],\n                       [65, 34, 0, 86],\n                       [72, 65, 78, 0]]\n"})})]}),(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(a,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"vector<int> scores_of_students = {86, 76, 67, 98, 95};\nvector<vector<int>> boys_and_girls_of_classes = {{10,23}, {20,20}, {15,12}, {13,16}};\nvector<vector<int>> basketball_matches = {{0, 76, 86, 100},\n                                          {56, 0, 87, 65},\n                                          {65, 34, 0, 86},\n                                          {72, 65, 78, 0}};\n"})})]}),(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(a,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"int[] scores_of_students = {86, 76, 67, 98, 95};\nint[][] boys_and_girls_of_classes = {{10,23}, {20,20}, {15,12}, {13,16}};\nint[][] basketball_matches = {{0, 76, 86, 100},\n                              {56, 0, 87, 65},\n                              {65, 34, 0, 86},\n                              {72, 65, 78, 0}};\n"})})]})]}),"\n",(0,t.jsx)(s.p,{children:"We have 3 types of arrays."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The syntax that we are using is Python, please refer to your own language of preference if needed."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"scores_of_students"}),": This array is an 1-d array containing the scores of each student. We can perform the following operations to obtain different information of the scores:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"max(scores_of_students)"}),": returns the highest score in the array, which is 98 in this case"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"min(scores_of_students)"}),": returns the lowest score in the array, which is 67 in this case"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"sum(scores_of_students)"}),": returns the sum of score in the array, which is 422 in this case"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"scores_of_students.sort()"}),": sort the scores in order, which is ",(0,t.jsx)(s.code,{children:"[67, 76, 86, 95, 98"}),"] in this case. Note that it is preferred to use the pre-built sorting function when you are solving a problem NOT TARGETED to teach you sorting. It will speed up your learning."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"boys_and_girls_of_classes"}),": This array is a 2-d array containing the number of boys and girls of each class. For example, the first class has 10 boys and 23 girls. We can access the number of girls in the 3rd class with ",(0,t.jsx)(s.code,{children:"boys_and_girls_of_classes[2][1]"})," . This is useful to obtain specific information. Let's take a look at several operations on this 2-d array:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"boys_and_girls_of_classes.sort()"}),": We have two elements in each entry this time. In ",(0,t.jsx)(s.code,{children:"python"})," the pre-built ",(0,t.jsx)(s.code,{children:"sort()"})," sorts by the first element, then the second element, then the third (if it exists) etc..."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"boys_and_girls_of_classes.sort(key = lambda Class : Class[1])"}),": We can use the ",(0,t.jsx)(s.code,{children:"key"})," parameter to change the ",(0,t.jsx)(s.code,{children:"sort()"})," behaviour. We declare that we want to look at the number of girls ",(0,t.jsx)(s.strong,{children:"FIRST"})," in each ",(0,t.jsx)(s.code,{children:"Class"})," in this case. There are more advanced application of ",(0,t.jsx)(s.code,{children:"sort"}),", and we will learn them in harder problems."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"list(map(lambda Class: Class[0] + Class[1], boys_and_girls_of_classes))"}),": This returns the list of the class size of each size. It is useful if we want to know the total number of students in each class."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"basketball_matches"})," : This array is a 2-d array, but it is special that its dimension is ",(0,t.jsx)(s.code,{children:"n x n"})," . These arrays (or better, matrices) usually have a special meaning. In this case, we have the scores of each team competing with each other. For example, team 1 vs team 2 has the score of ",(0,t.jsx)(s.code,{children:"76 - 56"})," . We will use for-loops to iterate these arrays."]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(a,{name:"@heiheihang"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'for i in range(len(basketball_matches)):\n    for j in range(len(basketball_matches[0])):\n        print("Team " + str(i) + " " + basketball_matches[i][j])\n        print("Against")\n        print("Team " + str(j) + " " + basketball_matches[j][i])\n'})})]}),(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(a,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:'for (int i = 0; i < basketball_matches.size(); i++) {\n    for (int j = 0; j < basketball_matches[0].size(); j++) {\n        cout << "Team " << i << " " << basketball_matches[i][j] << endl;\n        cout << "Against" << endl;\n        cout << "Team " << j << " " << basketball_matches[j][i] << endl;\n    }\n}\n'})})]}),(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(a,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'for (int i = 0; i < basketball_matches.length; i++) {\n    for (int j = 0; j < basketball_matches[0].length; j++) {\n        System.out.println("Team " + i + " " + basketball_matches[i][j]);\n        System.out.println("Against");\n        System.out.println("Team " + j + " " + basketball_matches[j][i]);\n    }\n}\n'})})]})]}),"\n",(0,t.jsx)(s.h3,{id:"complexity",children:"Complexity"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Operation"}),(0,t.jsx)(s.th,{children:"Complexity"}),(0,t.jsx)(s.th,{children:"Explanation"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Look-up (Access)"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsxs)(s.td,{children:["When we do ",(0,t.jsx)(s.code,{children:"array[1]"}),", the program can instantly find the value stored at the first location."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Add"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:"More accurately this is amortised O(1). When we add to the end of the array, it only takes constant time."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Pop"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:"When we remove the last element of the array, it takes constant time."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Insert"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:"When we insert an element to the middle of the array, it takes O(N) time. The whole array needs to be restructured to accommodate the new element."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Remove"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:"When we remove an element in the middle of the array, it takes O(N) time. The whole array needs to be restructured to replace the missing gap of the replaced element."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Len"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:"This may seem like to be O(N) as we have to go through the whole array to check its length. However, checking the length of an array in many languages should be pre-computed in their data structures, so it only takes constant time."})]})]})]}),"\n","\n",(0,t.jsx)(r,{title:"Suggested Problems",data:o})]})}function m(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function x(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>r});var t=a(67294);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);