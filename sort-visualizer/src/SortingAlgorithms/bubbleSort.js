export function bubbleSort(array) {
    const animations = [];
    let n = array.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        // Push the indices of elements being compared for color change
        animations.push([i, i + 1]);
  
        if (array[i] > array[i + 1]) {
          // Swap the elements
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
  
          // Push the indices and values of elements being swapped
          animations.push([i, i + 1, array[i], array[i + 1]]);
        }
  
        // Push the indices of elements being compared to revert their color
        animations.push([i, i + 1]);
      }
  
      n--;
    } while (swapped);
  
    const sortedArray = [...array]; // Create a copy of the array
    return { animations, sortedArray }; // Return both the animations and sortedArray
  }
  