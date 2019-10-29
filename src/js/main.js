(function(){
    var index = 0;
    var count = 0;
    var length = 3
    var width = $('.d-list li').eq(0).width();
    console.log(width);
    // console.log(length);
    for(var i=0;i<length;i++){
        var olLi = document.createElement('li');
        $('.d-propagation > ol').append(olLi);
    }
    $('.d-propagation ol > li').eq(0).addClass('active');

    function setPoints(num){
        $('.d-propagation ol li').eq(num).addClass('active').siblings().removeClass('active');
    }

    function autoplay(){
        index ++;
        if(index > length){
            $('.d-list').css('marginLeft','0px');
            index = 1;
        }
        $('.d-list').stop().animate({marginLeft:-index * width},1000);
        count ++;
        count = count > length - 1 ? 0 : count;
        setPoints(count);
    }

    var timer = setInterval(autoplay,1500);

    $('.d-propagation ol > li').click(function(){
        var current = $(this).index();
        index = current;
        setPoints(index);
        $('.d-list').stop().animate({marginLeft:-index * width},1000);
    })

    $('.d-banner').on('touchstart',function(){
        clearInterval(timer);
    })
    $('.d-banner').on('touchend',function(){
        clearInterval(timer);
        timer = setInterval(autoplay,1500);
    })
})()