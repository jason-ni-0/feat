const initialState = {
    location: null,
    page: 'start',
    distance: 40000,
    categories: [],
    price: [],
    result: "",
    res_page: 0,
    latitude: null,
    longitude: null
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
    case 'LOC_CHANGED': 
    // do something
    return {
        ...state, 
        location: action.payload
    };

    case 'PAGE_CHANGED': 
    return {
        ...state, 
        page: action.payload
    };

    case 'RES_PAGE_CHANGED': 
    return {
        ...state, 
        res_page: action.payload
    };

    case 'DIST_CHANGED': 
    return {
        ...state, 
        distance: action.payload
    };

    case 'CAT_CHANGED': 
    return {
        ...state, 
        categories: action.payload
    };

    case 'CAT_ADDED': 
    return {
        ...state,
        categories: [...state.cat, action.payload]
    };

    case 'CAT_DELETED': 
    return {
        ...state,
        categories: state.cat.filter(data => data !== action.payload)
    };
    
    case 'PRICE_CHANGED': 
    return {
        ...state, 
        price: action.payload
    };

    case 'RESULT_CHANGED': 
    return {
        ...state, 
        result: action.payload
    };

    case 'LAT_CHANGED': 
    return {
        ...state, 
        latitude: action.payload
    };

    case 'LNG_CHANGED': 
    return {
        ...state, 
        longitude: action.payload
    };

    default:
    return state;
    }
}

export default appReducer;