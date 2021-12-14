import { fetchCamera } from '../fetch-utils.js';
import { renderCameraDetails } from '../render-utils.js';

const cameraDetailsContainer = document.querySelector('#camera-details-container');

// ## EVENTS - details page
// - on load
window.addEventListener('load', async()=> {
    //     - figures out which thing object to fetch based on URL query string
    //     - use URLSearchParams to grab the ID of the desired object from the URL. hint: new URLSearchParams(window.location.search), then use .get('id')
//     - then you have the id
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    //     - fetch the specific thing object from the database\
    const cameraObj = fetchCamera(id);

    //     - display this single thing info
    //         - call render function to return DOM node of thing's details
    const cameraDetailsEl = renderCameraDetails(cameraObj);

    //         - append DOM node to details container
    cameraDetailsContainer.append(cameraDetailsEl);

});