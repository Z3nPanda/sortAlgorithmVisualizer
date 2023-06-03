export function heapSort(array) {
    const animations = [];
    const n = array.length;
  
    // heapify the array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i, animations);
    }
  
    // extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // swap the root (largest element) with the last element
      animations.push([0, i]);
      swap(array, 0, i);
      animations.push([0, i]);
  
      // heapify the reduced heap
      heapify(array, i, 0, animations);
    }
  
    const sortedArray = [...array];
    return { animations, sortedArray };
}
  

function heapify(array, n, i, animations) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // push the indices for color change animation (parent and largest child)
        animations.push([i, largest]);

        // swap the elements
        swap(array, i, largest);

        // push the indices for swap animation
        animations.push([i, largest]);

        heapify(array, n, largest, animations);
    } else {
        // push the indices for color change animation (parent and largest child)
        animations.push([i, largest]);
    }
}  

 
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
  
  