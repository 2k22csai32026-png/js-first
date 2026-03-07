// document.querySelector('body')
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach((ele) => {
  console.log(ele);
  ele.addEventListener('click', function (e) {
    console.log(e.target); //from where we get the event
    console.log(e);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
