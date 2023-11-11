'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

/* Variables */
const menu = select('.menu-links');
const icon = select('.hamburger-icon');


function toggleMenu() {
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}