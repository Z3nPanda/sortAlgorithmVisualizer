import React from 'react';
import * as mergeSortAlg from '../SortingAlgorithms/mergeSort';
import * as heapSortAlg from '../SortingAlgorithms/heapSort';
import * as bubbleSortAlg from '../SortingAlgorithms/bubbleSort';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../StyleFeatures/theme';
import ButtonGroup from '../Components/button';

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

        // bind the methods to the component instance
        this.resetArray = this.resetArray.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.heapSort = this.heapSort.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.quickSort = this.quickSort.bind(this);
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
        // merge sort implementation from following https://www.youtube.com/watch?v=pFXYym4Wbkc tutorial to learn basic setup for sort visualization

        // call merge sort to produce an array that represents the series of comparisons/swaps made during sort process
        const animations = mergeSortAlg.mergeSort(this.state.array);

        // display sequence of animations made during merge sort process
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            // Check if color needs to be updated
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i  % 3 === 0 ? 'red' : 'black'; // NOTE: red bars are currently being sorted (0), black bars are idle bars in wait
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            // Else height needs to be changed
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
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
            <ThemeProvider theme={theme}>
                <ButtonGroup
                    resetArray={this.resetArray}
                    bubbleSort={this.bubbleSort}
                    heapSort={this.heapSort}
                    mergeSort={this.mergeSort}
                    quickSort={this.quickSort}
                />
            </ThemeProvider>
            </div>
        );
    }
}

// random integer between a minimum and a maximum (note: numbers smaller than 5 are harder to visualize, duplicates are also encouraged)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}