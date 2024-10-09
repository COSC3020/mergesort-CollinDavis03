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

Looking through my code again deeply I know there are two components to this function. Which are the outer loops and the merge function. 

With the merge function, this could have a loop. We can look at it in a loop logic thought process. A loop inside of a loop is just n * n as the worst-case scenario. 

The outer loop will keep doubling from 1 until it gets to the size of the array which is an exponent-like reaction. 

The merge function just merges the array in order and will move the element if it is greater than the one that it is being compared to. This function will have a runtime of n depending on the length of the array. 

Then the inner loop pretty much creates two arrays and has the value in one of the arrays and compares it to the value in the other array and switches with it if is less than that other value and keeps moving down the array until it can not be switched anymore. This follows the n value again too. This is where I get n * n because of the two loops in the merge function. 

The worst case for this is n^2 because we multiply the loops together. 

With each division of the array until it gets to 1 is where _O_(log n) comes from. 

We have to multiply this into the loops. With that, we should get $\Theta (n^2log(n))$ as the worst-case scenario. 


Sources: 
I looked at Nolan Tachbar's readme file to get a grasp on how you wanted me to write this readme for
the complexity analysis. https://github.com/COSC3020/mergesort-NolanNachbar/tree/NolanNachbar-patch-1 
I chatted with Nolan at the start of it so I could get a grasp on how to write a complexity analysis. 
I also, watched your video and some other videos online so I can understand a complexity analysis 
a lot better for the future. In the end, this took a lot longer than I thought it would. 
