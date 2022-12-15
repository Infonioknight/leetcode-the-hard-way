---
description: 'Author: @wingkwong, @ganajayant, @radojicic23| https://leetcode.com/problems/search-a-2d-matrix/'
tags: [Array, Binary Search, Matrix]
---

# 0074 - Search a 2D Matrix (Medium) 

## Problem Link

https://leetcode.com/problems/search-a-2d-matrix/

## Problem Statement

Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

**Example 1:**

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```

**Example 2:**

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-104 <= matrix[i][j], target <= 104`

## Approach 1: Searching Row & Column

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n = matrix.size(), m = matrix[0].size(), j = 0;
        // search for the target row
        for (int i = 0; i < n; i++) {
            // if the target is within [matrix[i][0], matrix[i][m - 1]],
            // the target is possible in row i
            if (target >= matrix[i][0] && target <= matrix[i][m - 1]) {
                j = i;
                break;
            }
        }
        // iterate each column on row j
        for (int i = 0; i < m; i++) {
            // check if target exists
            if (matrix[j][i] == target) {
                return true;
            }
        }
        return false;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

Find which row and coloumn the element belongs to by using Binary Search

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        for (int i = 0; i < matrix.length; i++) {
            int low = 0;
            int high = matrix[i].length - 1;
            while (low <= high) {
                int mid = (low + high) / 2;
                if (matrix[i][mid] == target) {
                    return true;
                } else if (matrix[i][mid] > target) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        return false;
    }
}
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
# Time Complexity: O(log n)
# Space Complexity: O(1)
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # initialize rows and cols 
        rows, cols = len(matrix), len(matrix[0]) 
        # top row and bottom row
        top, bot = 0, rows - 1
        
        # binary search
        while top <= bot: 
            # compute the middle row
            mid = (top + bot) // 2
            # if this target value is greater then 
            # the largest value in the middle row
            if target > matrix[mid][-1]:
                # look at rows with larger value
                top = mid + 1
            # if this target value is smaller then 
            # the smallest value in this row
            elif target < matrix[mid][0]:
                # look at rows with smaller value
                bot = mid - 1
            else:
                break 
            
        if not (top <= bot):
            return False
        
        # second binary search portion
        # run binary search on the current (middle row)
        mid = (top + bot) // 2
        # leftmost value and rightmost value
        l, r = 0, cols - 1
        while l <= r:
            # compute the middle value
            m = (l + r) // 2
            if target > matrix[mid][m]:
                l = m + 1
            elif target < matrix[mid][m]:
                r = m - 1
            else:
                return True
        
        return False
```

</TabItem>
</Tabs>