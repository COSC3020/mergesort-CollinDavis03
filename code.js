function mergesort(array) {
    let n = array.length;

    // Start the subarrays of 1 and double with each iteration 
    for(let size = 1, size < n; size *= 2){
        for(let left = 0; left < n - 1; left += 2 * size) {
            let mid = Math.min(left + size - 1, n - 1); 
            let right = Math.min(left + 2 * size - 1, n-1); 
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
