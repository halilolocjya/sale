'use strict';
//引用css文件，支持css、scss、less
var $ = window.jQuery = require('jquery');

/**
 * @des 侧导航事件
 * */
var navInit=function (obj) {
    var opt=$.extend({
        floorIdArrAsc:[],
        sideBarId:'',
        sideBarUlId:'',
        curSideItemClass:'',

    },obj);

    this.floorIdArrAsc=opt.floorIdArrAsc;
    this.$sideBar=$('#'+opt.sideBarId);
    this.$ulId=$('#'+opt.sideBarUlId);
    this.curSideItemClass=opt.curSideItemClass;
};
navInit.prototype={
    constructor:navInit,
    init:function () {
        var nObj=this;
        nObj.showOrHideOnScroll();
        nObj.clickTitle();
    },
    showOrHideOnScroll:function () {
        var nObj=this;var $s=nObj.$sideBar;
        var sidebarFixedTop=($(window).height() - $s.height()) / 2;
        //滚动出现
        $s.css('top', sidebarFixedTop);//垂直居中
        $(window).on('scroll', function() {
            clearTimeout(window.sidebar_timer);
            var scrollTop=$(window).scrollTop();
            window.sidebar_timer = setTimeout(function() {
                if (scrollTop >= $(nObj.floorIdArrAsc[0]).offset().top) {//滚动距离大于第一个模块所在Y轴的值
                    $s.show(300);
                    nObj.titleScroll(scrollTop);
                } else {
                    $s.hide(300);
                }
            }, 50);
        });
    },
    clickTitle:function () {
        var nObj=this;
        var $s=nObj.$sideBar;
        $s.on('click',"a",function(){
//        $(this).addClass('active');
            $(this).parents('li').siblings().find('a').removeClass(nObj.curSideItemClass);
        });
    },
    titleScroll:function (scrollTop) {
        //导航内容随着页面滚动而滚动
        var nObj=this,$ulDom=nObj.$ulId;
        var items = nObj.floorIdArrAsc;
        var curId = "";

        for(var i=0;i<items.length;i++){
            var m = $(items[i]);
            var itemsTop = m.offset().top;
            if(scrollTop > itemsTop-100){
                curId = items[i];

            }else{
              break;
            }
        }
        //给相应的楼层设置active,取消其他楼层的active
        var curLink = $ulDom.find("."+nObj.curSideItemClass);
        if( curId.length>0  ){
            if( curLink.length>0){
                if(curLink.attr("href")!= curId){
                    curLink.removeClass("active");
                    $ulDom.find("[href='"+curId+"']").addClass(nObj.curSideItemClass);

                }
            }else{
                $ulDom.find("[href='"+curId+"']").addClass(nObj.curSideItemClass);
            }

        }
    }

};

module.exports = {
    sideBarInit: function (obj) {
        var nObj=new navInit(obj);
        nObj.init();
    }
}
