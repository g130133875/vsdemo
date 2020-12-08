window.addEventListener('load',function(){
    var left = document.querySelector('.arrow-l');
    var right = document.querySelector('.arrow-r');
    var ul = document.querySelector('ul');
    var focusWidth = document.querySelector('.focus').offsetWidth;
    var box = document.querySelector('.focus');
    var ol = document.querySelector('ol');
    box.addEventListener('mouseenter',function(){
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    box.addEventListener('mouseleave',function(){
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function(){
            right.click();
        },2000)
    })
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

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var nums = 0;
    var circle = 0;
    var flag = true;
    right.addEventListener('click',function() {
        if(flag){
            flag = false;
            if(nums == ul.children.length-1){
                ul.style.left = 0;
                nums = 0;
            }
            nums++;
            animation(ul,-nums*focusWidth,function(){
                flag = true;
            });
            circle++;
            if(circle == ol.children.length){
                circle = 0;
            }
            for(var i=0; i<ol.children.length; i++){
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    });
    left.addEventListener('click',function(){
       if(flag){
            flag = false;
            if(nums == 0){
                nums = ul.children.length - 1;
                ul.style.left = `${-nums * focusWidth}px`;
            }
            nums--;
            animation(ul,-nums*focusWidth,function(){
                flag = true;
            });
            circle--;
            circle = circle<0? ol.children.length-1 : circle;
            for(var i=0; i<ol.children.length; i++){
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    });
    var timer = setInterval(function(){
        right.click();
    },2000);
})