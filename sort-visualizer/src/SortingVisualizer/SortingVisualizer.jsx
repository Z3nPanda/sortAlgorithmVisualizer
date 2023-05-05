import React from 'react';
import * as mergeSortAlg from '../SortingAlgorithms/mergeSort';
import './SortingVisualizer.css';

// Animation speed value
const ANIMATION_SPEED_MS = 1;

// Number of array bars
const NUMBER_OF_ARRAY_BARS = 330;

// Max array value
const MAX_ARRAY_VALUE = 650;

// Min array value
const MIN_ARRAY_VALUE = 5;

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        // store our sorting array in the app state
        this.state = {
            array: [],
        };
    }

    // when the app loads, reset the array
    componentDidMount(){
        this.resetArray();
    }

    // create array of random 100 integer elements
    resetArray(){
        const array = [];
        // TODO: currently values are hard encoded to fit screen, will need to update to be more reactive
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(MIN_ARRAY_VALUE, MAX_ARRAY_VALUE));
        }
        this.setState({array});
    }

    // sort algorithm routines

    bubbleSort() {}

    heapSort() {}

    mergeSort() {
        // const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b); // duplicate array for testing sort algorithm

        const animations = mergeSortAlg.mergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i  % 3 === 0 ? 'red' : 'black'; // NOTE: red bars are currently being sorted, black bars are idle bars in wait 
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

        // console.log(arraysAreEqual(javaScriptSortedArray, animations)); // log statement for ensuring arrays are equal
    }

    quickSort() {}

    // render to array to screen
    render () {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}></div>
                ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            </div>
        );
    }
}

// random integer between a minimum and a maximum (note: numbers smaller than 5 are harder to visualize, duplicates are also encouraged)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ensures the two sorted arrays are equal, used to ensure my sort algorithms are consistent with built-in sort algorithms
function arraysAreEqual(arrayOne, arrayTwo) {
    if(arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}