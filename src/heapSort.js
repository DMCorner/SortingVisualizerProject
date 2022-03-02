export function getHeapSortAnimationArray(array) {
    const animations = [];
     // rearrange array into heap 
     for (let i = parseInt(array.length / 2 - 1); i >= 0; i--) {
         maxHeapify(array, array.length, i, animations); 
     }
     // one by one extract an element from heap 
     for (let i = array.length - 1; i >= 0; i--) { 
        // move current root to end 
        let temp = array[0]; 
        array[0] = array[i]; 
        array[i] = temp; 
        animations.push([i,array[i]])
        // call max heapify on the reduced heap 
        maxHeapify(array, i, 0, animations);
     } 
     return animations;
}

function maxHeapify(array, n, i, animations) {
  let largest = i;
  let leftchildindex = 2 * i + 1; // left child index
  let rightchildindex = 2 * i + 2; // right child index
  // if left child is smaller than root
   if (leftchildindex < n && array[leftchildindex] > array[largest]) {
         largest = leftchildindex; 
         animations.push([leftchildindex,array[i]])
   }
  
   // if right child is smaller than smallest so far 
   if (rightchildindex < n && array[rightchildindex] > array[largest]) {
        largest = rightchildindex; 
        animations.push([rightchildindex,array[i]])
   }
  
   // if smallest is not root 
   if (largest !== i) { 
        let temp = array[i]; 
        array[i] = array[largest]; 
        array[largest] = temp; 
        animations.push([i,array[i]])
        console.log(i)
        console.log(array[i])
      // recursively heapify the affected sub-tree 
      maxHeapify(array, n, largest, animations); 
    }
    return animations;
}




