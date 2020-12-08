window.addEventListener('load',function(){
    var nav = document.querySelector('.c-nav');
    var cloud = document.querySelector('.cloud');
    var lis = nav.querySelectorAll('li');
    var current = 0;
    for(var i=0; i<lis.length; i++){
        lis[i].addEventListener('mouseenter',function(){
            animation(cloud,this.offsetLeft);
        });
        lis[i].addEventListener('mouseleave',function(){
            animation(cloud,current);
        });
        lis[i].addEventListener('click',function(){
            current = this.offsetLeft;
        })
    }
})