import { readPage, constructPage } from "./templatingEngine.js";

const index = readPage('./public/pages/index/index.html');
export const indexPage = constructPage(index, {
    documentTitle: 'Frontpage'
});

const weekOne = readPage('./public/pages/weekone/weekone.html');
export const weekOnePage = constructPage(weekOne, {
    documentTitle: 'Week 1 - Introduction to JS'
});

const weekTwo = readPage('./public/pages/weektwo/weektwo.html');
export const weekTwoPage = constructPage(weekTwo, {
    documentTitle: 'Week 2 - First server with express'
});

const weekThree = readPage('./public/pages/weekthree/weekthree.html');
export const weekThreePage = constructPage(weekThree, {
    documentTitle: 'Week 3 - Movies REST API'
});

const weekFour = readPage('./public/pages/weekfour/weekfour.html');
export const weekFourPage = constructPage(weekFour, {
    documentTitle: 'Week 4 - Date'
});

const weekFive = readPage('./public/pages/weekfive/weekfive.html');
export const weekFivePage = constructPage(weekFive, {
    documentTitle: 'Week 5 - HTML Server'
});

const weekSix = readPage('./public/pages/weeksix/weeksix.html');
export const weekSixPage = constructPage(weekSix, {
    documentTitle: 'Week 6 - Online Node.js REPL + SSR'
});