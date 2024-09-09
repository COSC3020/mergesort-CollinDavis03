# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyze the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Complexity Analysis: 
Looking back at my mergesort function. My mergesort function takes the value of one and keeps doubling the subarrays until it gets to the correct 
size of subarrays needed to sort the function in the correct order. With that, that value would be theta(n) and with the normal mergesort function,
it is theta(nlogn). With the original mergesort function, I need to apply the theta(n) to that function. Which I would end up with theta(n^2logn) 
This is my runtime analysis for this mergesort because the n value is doubling so it is an exponent. I do not know how to do the complicated 
math function in github. 
The Runtime analysis: T(n) fork pointing right Theta(n^2logn) 
