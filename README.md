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

Looking back at my code for the 100th time now. 

Within my code in the for(let length = 1; length < n; length *=2). This is considered the outer loop in this code and with iteration, it does it will double the length of the array and when the length reaches the length of the array that has been inserted into the function it will stop. This will produce _O_(log n). 

The while loops within the merge function taking n iterations. Starting off with that if the start value is less than the end value it will be stored as the start value. This would be an _n_iteration. Then the second while is in charge of the shifting of the elements within the array. This is another n iteration. It will give you n x n = n^2 

We have to merge what we got for the outer and inner loop which will end up being _O_(n^2 log n). 

Sources: 
I looked at Nolan Tachbar's readme file to get a grasp on how you wanted me to write this readme for
the complexity analysis. https://github.com/COSC3020/mergesort-NolanNachbar/tree/NolanNachbar-patch-1 
I chatted with Nolan at the start of it so I could get a grasp on how to write a complexity analysis. 
I also, watched your video and some other videos online so I can understand a complexity analysis 
a lot better for the future. In the end, this took a lot longer than I thought it would. 
