const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
    bodyColor: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'), 
};

// -------//---------------
refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);


function changeBackground(color) {
  refs.bodyColor.style.backgroundColor = color;
}
let intervalColorChange = undefined;
function start() {
  intervalColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
    changeBackground(colors[randomNumber]);
  }, 1000);

}
function stop() {
  clearInterval(intervalColorChange);
}


var x;
console.log(x);

var obj = { a: 1 };
(function (obj) {
    obj = { a: 2};
})(obj);
console.log(obj.a);


var foo = { n: 1 };
var bar = foo;
console.log(foo.x = foo = { n: 2 });


var func = [];
for (var i = 0; i < 5; i++) {
    func[i] = function () {
        console.log(i);
    }
}
func[3]();

// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 1000);
// setTimeout(function () {
//     console.log(3);
// }, 0);
// console.log(4);


// var a = 1;
// function b(){
//     a = 10;
//     return;
//     function a(){
//     }
// }
// b();
// console.log(a);

var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);


(function () {
    f();
    f = function () {
        console.log(1);
    }
})();
function f() {
     console.log(2);
}
f();

