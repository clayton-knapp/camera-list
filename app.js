// import functions and grab DOM elements
import { fetchCameras, fetchCamerasFilterMake, fetchCamerasSortBy, deleteDummy, createDummy } from './fetch-utils.js';
import { renderCameraCard } from './render-utils.js';

const cameraListEl = document.querySelector('#cameras-list-container');
const makeDropdown = document.querySelector('#make-dropdown');
const sortDropdown = document.querySelector('#sort-dropdown');
const deleteDummyButton = document.querySelector('#delete-dummy');
const createDummyButton = document.querySelector('#create-dummy');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//   - on load
window.addEventListener('load', async() => {
    //     - gets things from the database
    //         - use async and await - to call a function that calls the server and returns the array of things
    const camerasArr = await fetchCameras();

    //     - displays those things (loop, render, append)
    //         - for loop
    for (let eachCameraObj of camerasArr) {
         // - call render function that returns DOM node of each thing
        const cameraEl = renderCameraCard(eachCameraObj);

        //  - append to list container
        cameraListEl.append(cameraEl);
    }
});

makeDropdown.addEventListener('change', async() => {
    //Clear the DOM
    cameraListEl.textContent = '';

    const makeFilter = makeDropdown.value;
    // console.log(make);
    if (makeFilter === 'All') {
        const camerasArr = await fetchCameras();

        //     - displays those things (loop, render, append)
        //         - for loop
        for (let eachCameraObj of camerasArr) {
             // - call render function that returns DOM node of each thing
            const cameraEl = renderCameraCard(eachCameraObj);
    
            //  - append to list container
            cameraListEl.append(cameraEl);
        }    
    } else {
        const cameras = await fetchCamerasFilterMake(makeFilter);
    
        for (let eachCamera of cameras) {
            // - call render function that returns DOM node of each thing
            const cameraEl = renderCameraCard(eachCamera);
    
           //  - append to list container
            cameraListEl.append(cameraEl);
        }
    }
});

sortDropdown.addEventListener('change', async() => {
    //Clear the DOM
    cameraListEl.textContent = '';

    const sortFilter = sortDropdown.value;

    const cameras = await fetchCamerasSortBy(sortFilter);
    
    for (let eachCamera of cameras) {
        // - call render function that returns DOM node of each thing
        const cameraEl = renderCameraCard(eachCamera);

       //  - append to list container
        cameraListEl.append(cameraEl);
    }
});

deleteDummyButton.addEventListener('click', async() =>{ 
    //Clear the DOM
    cameraListEl.textContent = '';

    const deleteID = 'Dummy';

    await deleteDummy(deleteID);

    const cameras = await fetchCameras();

    for (let eachCamera of cameras) {
        // - call render function that returns DOM node of each thing
        const cameraEl = renderCameraCard(eachCamera);

       //  - append to list container
        cameraListEl.append(cameraEl);
    }


});

createDummyButton.addEventListener('click', async() =>{ 
    //Clear the DOM
    cameraListEl.textContent = '';

    //calls create function
    await createDummy();

    //re displays the cards
    const cameras = await fetchCameras();

    for (let eachCamera of cameras) {
        // - call render function that returns DOM node of each thing
        const cameraEl = renderCameraCard(eachCamera);

       //  - append to list container
        cameraListEl.append(cameraEl);
    }


});