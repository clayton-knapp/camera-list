// ### renderListOfThings


export function renderCameraCard(cameraObj) {
    // - creates DOM elements
    const anchorEl = document.createElement('a');
    const cardDiv = document.createElement('div');
    const cameraNameEl = document.createElement('p');
    const cameraImgEl = document.createElement('img');
    
    // - sets textContent and other properties equal to data in object
    cameraNameEl.textContent = cameraObj.make + ' ' + cameraObj.model;
    cameraImgEl.src = cameraObj.img_url;
    
    //     - remember: set href of anchor tag to './detail/?=${id}' using query string
    anchorEl.href = `./detail/?id=${cameraObj.id}`;
    
    //     - add classlists
    cardDiv.classList.add('card');

    //     - appends in Div
    cardDiv.append(cameraNameEl, cameraImgEl);

    //append in anchor
    anchorEl.append(cardDiv);

    //     - returns DOM node
    return anchorEl;
}


// ### renderDetailOfThing

export function renderCameraDetails(cameraObj) {
    //     - create DOM elements
    const bigContainerDiv = document.createElement('div');
    const typeAndYearDiv = document.createElement('div');
    const nameEl = document.createElement('h2');
    const typeEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const blurbEl = document.createElement('p');
    const imgEl = document.createElement('img');

    //     - sets textContent and other properties
    nameEl.textContent = cameraObj.make + ' ' + cameraObj.model;
    typeEl.textContent = `Type: ${cameraObj.type}`;
    yearEl.textContent = `Year released: ${cameraObj.year}`;
    imgEl.src = cameraObj.img_url;
    blurbEl.textContent = cameraObj.blurb;
    
    //     - add classLists
    bigContainerDiv.classList.add('detail-container');
    nameEl.classList.add('detail-name');
    typeEl.classList.add('detail-text');
    yearEl.classList.add('detail-text');
    blurbEl.classList.add('detail-text');
    imgEl.classList.add('detail-img');
    
    //     - append in Div
    typeAndYearDiv.append(typeEl, yearEl);

    bigContainerDiv.append(nameEl, imgEl, typeAndYearDiv, blurbEl);

    //     - return DOM node
    return bigContainerDiv;
}