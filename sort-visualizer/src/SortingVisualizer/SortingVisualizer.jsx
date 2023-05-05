import React from 'react';
import './SortingVisualizer.css';

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
        for (let i = 0; i < 330; i++) {
            array.push(randomIntFromInterval(5, 650));
        }
        this.setState({array});
    }

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
            </div>
        );
    }
}

// random integer between a minimum and a maximum (note: numbers smaller than 5 are harder to visualize, duplicates are also encouraged)
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}