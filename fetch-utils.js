// ### fetchThingArray()
//   - in seperate fetch-utils js
//   - remember: add supabase CDN script tag to head of HTML file


//   - remember: have supabase URL + Key with: const client = supabase.createClient(URL, Key)

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUyNDEzNiwiZXhwIjoxOTU1MTAwMTM2fQ.RoJQToswNQTg_HpYFxDJfQsgthtgQ_E6eOq2Hq3CkMo';

const SUPABASE_URL = 'https://kxgrnsxvarsccdnmwtci.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



//   - remember: export async function fetchThings()

export async function fetchCameras() {
    //   - const returnedStuff = await client
    //     - .from('name of table')
    //     - .select();
    const returnedArray = await client
        .from('cameras')
        .select()
        .order('make'); //sorts/orders by name instead of default ID
        // .eq('make', 'Nikon');
    
    // - return the data you want from the returned object  
    //     - return returnedStuff.data
    return returnedArray.data;
}

// ### fetchThingObject(id)
//     - use async/await function

export async function fetchCamera(id) {
    //     - const returnedStuff = await client
    //         hint: .from('name of table) .select() .match({id:id}) .single();
    const returnedObj = await client
        .from('cameras')
        .select()
        .match({ id: id })
        .single();
    // console.log(returnedObj.data);

    //     - return returnedStuff.data
    return returnedObj.data;
}

export async function fetchCamerasFilterMake(makeFilter) {
    const response = await client
        .from('cameras')
        .select()
        .order('make') //sorts/orders by name instead of default ID
        .eq('make', makeFilter);
    
    // - return the data you want from the returned object  
    //     - return returnedStuff.data
    return response.data;
}

export async function fetchCamerasSortBy(sortFilter) {
    const response = await client
        .from('cameras')
        .select()
        .order(sortFilter); //sorts/orders by name instead of default ID

    
    // - return the data you want from the returned object  
    //     - return returnedStuff.data
    return response.data;
}

export async function deleteDummy(deleteID) {
    await client
        .from('cameras')
        .delete()
        .match({ make: deleteID });
    
    // - return the data you want from the returned object  
    //     - return returnedStuff.data
    // console.log(response.data);
}

export async function createDummy() {
    await client
        .from('cameras')
        .insert([
            { make: 'Dummy', model: 'dummy', year: 9999, type: 'dummy', blurb: 'dum dum', img_url: 'https://placekitten.com/200/300' }
        ]);
    
}

// const { data, error } = await supabase
//   .from('cameras')
//   .delete()
//   .eq('some_column', 'someValue')