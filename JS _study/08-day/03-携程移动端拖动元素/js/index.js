window.addEventListener('load',function(){
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    var lis = focus.querySelector('ol').querySelectorAll('li');
    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute('index',i);
        lis[i].addEventListener('click',function(){
            console.log(this.getAttribute('index'));
        })
    }
})