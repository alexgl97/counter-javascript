let count = 0;

let value = document.getElementById('value');

let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      var el = e.currentTarget.classList;
      if(el.contains('decrease')){
        count--;
      }else if(el.contains('increase')) {
        count++;
      }else {
        count = 0;
      }
      if(count > 0){
        value.style.color = 'green';
      }if (count < 0){
        value.style.color = 'red';
      }if(count === 0){
        value.style.color = 'black';
      }
      value.textContent = count;
    });
});

