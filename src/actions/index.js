import axios from "axios";

export const changeLoc = (newLoc) => {
    return {
        type: 'LOC_CHANGED',
        payload: newLoc
    };
};

export const changePage = (newPage) => {
    return {
        type: 'PAGE_CHANGED',
        payload: newPage
    };
};

export const changeDist = (newDist) => {
    return {
        type: 'DIST_CHANGED',
        payload: newDist
    };
};

export const changeCat = (newCat) => {
    return {
        type: 'CAT_CHANGED',
        payload: newCat
    };
};

export const changePrice = (newPrice) => {
    return {
        type: 'PRICE_CHANGED',
        payload: newPrice
    };
};

export const changeResult = (newResult) => {
    return {
        type: 'RESULT_CHANGED',
        payload: newResult
    };
};

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

