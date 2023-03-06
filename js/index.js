let a1 =  document.querySelector(`#a_1`);
let a2 =  document.querySelector(`#a_2`);
let a3 =  document.querySelector(`#a_3`);
let a4 =  document.querySelector(`#a_4`);
let a5 =  document.querySelector(`#a_5`);
let a6 =  document.querySelector(`#a_6`);
let prevNode;

document.querySelector(`.s-2`).addEventListener(`mousemove`, function () {
    prevNode.style.borderBottomWidth = 0;
    prevNode = a1;
    a1.style.borderBottom = '4px';
});