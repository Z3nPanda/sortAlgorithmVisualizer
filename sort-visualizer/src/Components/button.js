import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../StyleFeatures/theme';
import '../SortingVisualizer/SortingVisualizer.css';

function ButtonGroup(props) {
    const { resetArray, bubbleSort, heapSort, mergeSort, quickSort } = props;
  
    return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" color="primary" onClick={resetArray}>
            Generate New Array
          </Button>
          <Button variant="contained" onClick={bubbleSort} style={{ marginLeft: '8px', marginRight: '8px' }}>
            Bubble Sort
          </Button>
          <Button variant="contained" onClick={heapSort} style={{ marginLeft: '8px', marginRight: '8px' }}>
            Heap Sort
          </Button>
          <Button variant="contained" onClick={mergeSort} style={{ marginLeft: '8px', marginRight: '8px' }}>
            Merge Sort
          </Button>
          <Button variant="contained" onClick={quickSort}>
            Quick Sort
          </Button>
        </div>
      </ThemeProvider>
    );
  }
  
  export default ButtonGroup;
