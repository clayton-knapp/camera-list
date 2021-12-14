// ### renderListOfThings


export function renderCameraCard(cameraObj) {
    // - creates DOM elements
    const anchorEl = document.createElement('a');
    const cardDiv = document.createElement('div');
    const cameraNameEl = document.createElement('p');
    const cameraImgEl = document.createElement('img');
    
    // - sets textContent and other properties equal to data in object
    cameraNameEl.textContent = cameraObj.name;
    cameraImgEl.src = cameraObj.img_url;
    
    //     - remember: set href of anchor tag to './detail/?=${id}' using query string
    anchorEl.href = `./detail/?=${cameraObj.id}`;
    
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
    const nameEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const blurbEl = document.createElement('p');
    const imgEl = document.createElement('img');

    //     - sets textContent and other properties
    nameEl.textContent = cameraObj.name;
    typeEl.textContent = `Type: ${cameraObj.type}`;
    yearEl.textContent = `Year released: ${cameraObj.year}`;
    imgEl.src = cameraObj.img_url;
    blurbEl.textContent = cameraObj.blurb;
    
    //     - add classLists

    //     - append in Div
    typeAndYearDiv.append(typeEl, yearEl);

    bigContainerDiv.append(nameEl, imgEl, typeAndYearDiv, blurbEl);

    //     - return DOM node
    return bigContainerDiv;
}