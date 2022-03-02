import React from 'react';
import { getMergeSortAnimations } from './mergeSort';
import { getBubbleSortAnimationArray } from './bubbleSort';
import { getHeapSortAnimationArray } from './heapSort';
import { quickSortAnimations } from './quickSort'
import './MySort.css'


const arraybarnumber = 100

const PRIMARY_COLOR = "gray"

const ANIMATION_SPEED_MS = 5;

export default class MySort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.generateArray();
    }

    // creates a random array
    generateArray() {
        const array = [];
        for (let i = 0; i < arraybarnumber; i++) {
            array.push(randomNumberGenerator(10,750))
        }
        this.setState({array})
        console.log(array)
    }


  animateMergeSort() {
    // sets animations to relevant algorithm animations on the generated array
    const animations = getMergeSortAnimations(this.state.array);
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      // creates arrayBars that have css 'array-bar' properties
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i<= animations.length) {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          // transfers the javascript array value to the css array bar height
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          // artificial delay
        }, i * ANIMATION_SPEED_MS);        
      }
    }
  }


  animateBubbleSort() {
    const animations = getBubbleSortAnimationArray(this.state.array);
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i<= animations.length) {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);        
      }
    }
  }

  animateHeapSort() {
    const animations = getHeapSortAnimationArray(this.state.array);
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i<= animations.length) {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  animateQuickSort() {
    const animations = quickSortAnimations(this.state.array, 0, arraybarnumber - 1);
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i<= animations.length) {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

    render() {
        const {array} = this.state;
        return (
            <div className="holistic-container">
              <div className='button-container'> <br></br>
                <button onClick={() => window.location.reload(false)}>New Array</button>
                <button onClick={() => this.animateMergeSort()}>Merge Sort</button>
                <button onClick={() => this.animateHeapSort()}>Heap Sort</button>
                <button onClick={() => this.animateQuickSort()}>Quick Sort</button>
                <button onClick={() => this.animateBubbleSort()}>Bubble Sort</button>
                </div>
                <div className='pillar'>
                </div>
                {array.map((value, idx) => (
                <div className="array-bar"
                key={idx}
                style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                }}></div>
                ))}
                <div className='boundary-one'>
                  <br></br>
                  Made by Daniel Corner <br></br>
                  Project inspired by Clement Mihailescu <br></br>
                  <a href="https://www.youtube.com/watch?v=pFXYym4Wbkc"> https://www.youtube.com/watch?v=pFXYym4Wbkc</a>
                </div>
            </div>
        )
    }
}


function randomNumberGenerator(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min );
}
