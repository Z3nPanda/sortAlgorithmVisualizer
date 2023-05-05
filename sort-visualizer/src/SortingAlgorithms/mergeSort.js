// Merge Sort algorithm borrowed from https://www.youtube.com/watch?v=pFXYym4Wbkc

export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // these are the values we're comparing, push them once to change their color
        animations.push([i, j]);
        // these are the values that we're comparing, push them a second time to revert their color
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // overwrite the value at index k in the original array with value at index i in auxiliary array
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // overwrite the value at index k in the original array with value at index j in auxiliary array
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // these are the values that we're comparing, push them once to change their color
        animations.push([i, i]);
        // these are the values that we're comparing, push them a second time to revert their color
        animations.push([i, i]);
        // we overwrite the value at index k in the original array with the value at index i in the auxiliary array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        // these are the values that we're comparing, push them once to change their color
        animations.push([j, j]);
        // these are the values that we're comparing, push them a second time to revert their color
        animations.push([j, j]);
        // we overwrite the value at index k in the original array with the value at index j in the auxiliary array
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}