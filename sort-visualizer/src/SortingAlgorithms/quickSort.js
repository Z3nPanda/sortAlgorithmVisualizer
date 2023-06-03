export function quickSort(array) {
    const animations = [];
    const sortedArray = [...array];
    
    sort(array, 0, array.length - 1, animations);
  
    return { animations, sortedArray };
  }
  
function sort(array, low, high, animations) {
    if (low < high) {
        const partitionIndex = partition(array, low, high, animations);

        sort(array, low, partitionIndex - 1, animations);
        sort(array, partitionIndex + 1, high, animations);
    }
}
  
function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        // push the indices for color change animation (comparing elements with pivot)
        animations.push([j, high]);
        animations.push([j, high]);

        if (array[j] < pivot) {
        i++;
        swap(array, i, j);

        // push the indices for swap animation
        animations.push([i, j]);
        }
    }

    swap(array, i + 1, high);

    // push the indices for swap animation (pivot with the correctly positioned element)
    animations.push([i + 1, high]);

    return i + 1;
}
  
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
  