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

Looking back at my outer loop function the length doubles with every iteration done. This will execute log_(2)n times in the runtime analysis. With that execution, it will create _O_(log n) for all the iterations done. 

Since the inner loop is shifting the elements around the run time should be _O_(n). This is with respect to n. This is from the processing of individual elements. 

The standard runtime comes from the (n) is the sorting of elements or the merging. The log n comes from the spliting of the arrays. 

The standard time for the runtime with mergesort is _O_(n log n). With the inner loop being _O_(n). We have to merge them together. Which will look like _O_(n x n log n) = _O_(n^2 log n). 

The worst-case scenario runtime is theta(n^2 log n) 

Sources: 
I looked at Nolan Tachbar's readme file to get a grasp on how you wanted me to write this readme for
the complexity analysis. https://github.com/COSC3020/mergesort-NolanNachbar/tree/NolanNachbar-patch-1 
I chatted with Nolan at the start of it so I could get a grasp on how to write a complexity analysis. 
I also, watched your video and some other videos online so I can understand a complexity analysis 
a lot better for the future. In the end, this took a lot longer than I thought it would. 
