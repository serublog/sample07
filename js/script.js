    $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
        $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
        $('.burger-btn').toggleClass('white');
        $('.header-nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
        $('.musk').fadeToggle(500);
        $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
    });