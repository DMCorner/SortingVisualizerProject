export function quickSortAnimations(array) {
    var animations = [];
    quickSort(array, 0, array.length - 1, animations)
    return animations;
}

// simply swaps selected values and adds them to the animation array
function swap(array, leftIndex, rightIndex, animations){
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    animations.push([leftIndex, array[leftIndex]])
    animations.push([rightIndex, array[rightIndex]])

}

function partition(array, left, right, animations) {
    var pivot   = array[Math.floor((right + left) / 2)], // middle element
        i       = left, // left pointer
        j       = right; // right pointer
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j, animations); // swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right, animations) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right, animations); // index returned from partition
        if (left < index - 1) { // more elements on the left side of the pivot
            quickSort(array, left, index - 1, animations);
        }
        if (index < right) { // more elements on the right side of the pivot
            quickSort(array, index, right, animations);
        }
    }
    return array;
}
