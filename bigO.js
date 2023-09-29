/* 
1. O(n + 10) -> O(n)
2. O(100 * n) -> O(n)
3. O(25) -> O(1)
4. O(n^2 + n^3) -> O(n^3)
5. O(n + n + n + n) -> O(n)
6. O(1000 * log(n) + n) -> O(n)
7. O(1000 * n * log(n) + n) -> O(n log n)
8. O(2^n + n^2) -> O(2^n)
9. O(5 + 3 + 1) -> O(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10) -> O(n^2)

function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
Time Complexity: O(n)

function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
Time Complexity: O(1)

function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
Time Complexity: O(n)

function subtotals(array) {
  let subtotalArray = [];
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray.push(subtotal);
  }
  return subtotalArray;
}
Time Complexity: O(n^2)

function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if(vowels.includes(char)) {
      if(char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}
Time Complexity: O(n) // includes is on a fixed length string // the max number of keys is 10

1. True
2. True
3. False
4. O(n)
5. O(n)
6. O(n) at least (depends on what the callback does)
7. O(n log n)
8. O(n)
9. O(1)
10. O(n) it can be O(1) if the end, but we can’t assume that
11. O(1)
12. O(n)
13. O(n)
*/