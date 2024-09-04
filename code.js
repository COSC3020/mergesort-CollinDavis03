function mergesort(array) {
    let n = array.length;

    // Start the subarrays of 1 and double with each iteration 
    for(let length = 1, length < n; length *=2){
        for(let left =0; left < n - 1; left += 2 * length) {
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

    while (start <= mid && right <= right) {
        if (array[start] <= array[end]) {
            start+++; 
        } else {
            let value = array[end]; 
            let index = end; 

            while (index !== start) {
                array[index] = array[index - 1]; 
                index---; 
            }

            array[start] = value; 

            start++;
            mid++;
            end++;
        }
    }
}
