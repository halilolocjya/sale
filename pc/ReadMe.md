# PC 侧边栏导航

滚动到当前楼层时对应导航栏条目高亮。
点击导航栏某一条跳到对应楼层。

```
<!--S导航条模板-->
<div class="lift_nav" id="rightNav">
    <div class="flag"></div>
    <div class="lift_bd">
        <ul id="rightNavUl">
            <li class="qr_code_lift">
                <div class="code_img">
                    <img src="//img.mdcdn.cn/pc/img/act/treasure/code.png?t=111" alt="">
                </div>
                <p class="code_des_1">这是一个</p>
                <p class="code_des_2">demo</p>
            </li>

            <li class="bd js_nav_li">
                <a href="#p1">楼层1 <i></i></a>
            </li>
            <li class="bd js_nav_li">
                <a href="#p2" >楼层2 <i></i></a>
            </li>
            <li class="bd js_nav_li">
                <a href="#p3">楼层3 <i></i></a>
            </li>
            <li class="bd js_nav_li">
                <a href="#p4">楼层4 <i></i></a>
            </li>
            <li class="bd js_nav_li">
                <a href="#p5">楼层5 <i></i></a>
            </li>


            <li class="bd js_nav_li">
                <a href="#">逛逛商城 <i></i></a>
            </li>
            <li class="bd js_nav_li">
                <a href="#">活动规则 <i></i></a>
            </li>
            <li class="to_top js_nav_li">
                <a href="#">
                    <i><span></span></i>
                    <em>回到顶部</em>
                </a>
            </li>
        </ul>
    </div>

</div>

<!--E导航条模板-->
```


参数说明：
```
var nav=require('../module/nav');

nav.sideBarInit({
    floorIdArrAsc:['#p1','#p2','#p3','#p4','#p5'],
    sideBarId:'rightNav',
    sideBarUlId:'rightNavUl',
    curSideItemClass:'active',
});

// JS 参数说明:
floorIdArrAsc:导航条上的每个锚点的ID，从上往下依次排列数组。
sideBarId:导航条ID
sideBarUlId：导航条UlID
curSideItemClass：导航条上的当前锚点所在<a></a>标签高亮时的class。

```
