# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Complexity Analysis: 
The runtime for this version of mergesort without the recursive stuff. The runtime is practically the same as the original because it is doing the same thing as the normal mergesort. Now if we were to divide it into bigger 
subarrays then that would change the runtime analysis. In the end, the runtime analysis should be $\Theta$ (nlogn) is what the runtime is. With divide and conquer that is going to be different because that algorithm is 
dividing everything into three subarrays. This mergesort is the same as it is listed in the slides provided to us by Professor Lars. 
