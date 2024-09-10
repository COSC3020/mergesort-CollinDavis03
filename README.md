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
Here is my code for the activity. 
function mergesort(array) {
    let n = array.length;

    // Start the subarrays of 1 and double with each iteration 
    for(let length = 1; length < n; length *= 2){
        for(let left = 0; left < n - 1; left += 2 * length) {
            let mid = Math.min(left + length - 1, n - 1); 
            let right = Math.min(left + 2 * length - 1, n-1); 
            merge(array, left, mid, right);
        }
    }
    
    return array;
}

function merge(array, left, mid, right) {
    let start = left; 
    let end = mid + 1; 

    while (start <= mid && end <= right) {
        if (array[start] <= array[end]) {
            start++; 
        } else {
            let value = array[end]; 
            let index = end; 

            while (index !== start) {
                array[index] = array[index - 1]; 
                index--; 
            }

            array[start] = value; 

            start++;
            mid++;
            end++;
        }
    }
}

Looking at this code I have an outer and inner loop in the mergesort function. 
The outer loop takes n as the length of the array given and the length set as 1. If the length is less than n, it will double the size of the length until it is greater than n. which would generate the log(n) time because of the way the function works.

The inner loop pretty much is set to take all the subarrays that have been created and compare the sizes of the elements to one another if one is greater than the other it will swap them but if it is less than the other it will keep it. Which will connect to the merge function and start to merge all the subarrays once it has been organized. 

Pretty much we have two loops working together to sort and organize the arrays to be sorted. With them working together it means worst case possible it is exponentially changing. Which equals (n^2) is the
worst-case scenario. 

With knowing the runtime of the inner and outer function. We have to mulitple them together. The results 
of the runtime analysis should be theta(n^2log(n)) 

Sources: 
I looked at Nolan Tachbar's readme file to get a grasp on how you wanted me to write this readme for
the complexity analysis. https://github.com/COSC3020/mergesort-NolanNachbar/tree/NolanNachbar-patch-1 
I also chatted with him to help explain to me how he got there. Everything else done in here was by me. 
To be honest this took me a lot longer to do because I did not really understand the grasp 
of runtime analysis. 
