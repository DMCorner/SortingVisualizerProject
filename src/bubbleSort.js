export function getBubbleSortAnimationArray(array) {
    let auxiliaryArray = array.slice()
    // increase length of array so that it is compatible with j+1 computation
    auxiliaryArray.push(0)
    const animations = [];
        for (var i=0; i<auxiliaryArray.length; i++) {
            for(var j = 0; j < ( auxiliaryArray.length - i - 1); j++){
               if (auxiliaryArray[j]<auxiliaryArray[j+1]) {
                   animations.push([j,auxiliaryArray[j]])
               } else {
                // swap values
                var temp = auxiliaryArray[j]
                auxiliaryArray[j] = auxiliaryArray[j + 1]
                auxiliaryArray[j+1] = temp
                animations.push([j,auxiliaryArray[j+1]])
                // stops the algorithm setting all values to 0
                if (auxiliaryArray[j] === 0) {
                } else {
                    animations.push([j,auxiliaryArray[j]])
                }
      }
    }}
    return animations;
}