// import functions and grab DOM elements
import { fetchCameras } from './fetch-utils.js';
import { renderCameraCard } from './render-utils.js';

const cameraListEl = document.querySelector('#cameras-list-container');

// let state

//example object:
// const camera1 = {
//     id: 1,
//     name: 'Nikon F3',
//     type: '35mm SLR',
//     year: 1980,
//     blurb: ''
//      img_url: ''
// };

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//   - on load
window.addEventListener('load', async() => {
    //     - gets things from the database
    //         - use async and await - to call a function that calls the server and returns the array of things
    const camerasArr = await fetchCameras()
    ;
    //     - displays those things (loop, render, append)
    //         - for loop
    for (let eachCameraObj of camerasArr) {
         // - call render function that returns DOM node of each thing
        const cameraEl = renderCameraCard(eachCameraObj);

        //  - append to list container
        cameraListEl.append(cameraEl);
    }

});