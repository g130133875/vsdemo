window.addEventListener('load',function(){
    var left = document.querySelector('.arrow-l');
    var right = document.querySelector('.arrow-r');
    var ul = document.querySelector('ul');
    var focusWidth = document.querySelector('.focus').offsetWidth;

    var ol = document.querySelector('ol');
    for(var i=0;i < ul.children.length;i++){
        var li = document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i=0; i<ol.children.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animation(ul,-index*focusWidth);
        })
    }

    var nums = 0;
    left.addEventListener('click',function() {
        animation(ul,-focusWidth);
    })
})