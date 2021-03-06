// 导航开始
let nav1=document.querySelectorAll('.nav1');//每个导航项
let navbglogo=document.querySelector('.nav_bg_logo');//logo背景颜色
let navbglist=document.querySelector('.nav_bg_list');//列表背景颜色
let navbgcolor=['#2A9B38','#FF972D','#FF6155','#49C0E3','#00A244'];//主题色
let navbgtop=['63','169','275','381','487'];//列表背景颜色位置
let navitemi=document.querySelectorAll('.nav_item>u>i');//每个导航的图标
let navitemb=document.querySelectorAll('.nav_item>u>b');//每个导航的标题
let navitemby=[72,88,103,118,132];//每个导航标题的高度
let navitembyb=[3,-12,-28,-43,-57];//每个导航标题原来的高度
let flag=0;//哪个页面
nav1.forEach(function (element,index) {
    element.addEventListener('mouseenter',function (e) {
        navbglist.style.top=`${navbgtop[index]}px`;//列表顶部位置
        navbglist.style.background=navbgcolor[index];//列表背景颜色
        navbglogo.style.background=navbgcolor[index];//logo背景颜色
        let subnavwrap=e.target.getElementsByClassName('sub_nav_wrap')[0];
        subnavwrap.style.display='block';
        let subnav=e.target.getElementsByClassName('sub_nav')[0];
        subnav.style.background=navbgcolor[index];//菜单颜色
        subnav.style.left='0';//菜单伸缩
        let navul=e.target.getElementsByTagName('ul')[0];
        navul.style.display='block';
        let navulli=e.target.getElementsByTagName('li');
        for(let i=0;i<navulli.length;i++){
            navulli[i].style.left='0';
        }
        if(flag!=index){
            element.style.background='#ffffff';
            let navitem=e.target.getElementsByClassName('nav_item')[0];
            let navitemp=e.target.previousElementSibling.getElementsByClassName('nav_item')[0];
            navitem.style.borderBottom='1px solid transparent';
            navitemp.style.borderBottom='1px solid transparent';
            navitemi[index].style.backgroundPositionX='-45px';
            navitemb[index].style.backgroundPositionY=`${-1*navitemby[index]}px`;
            
        }//保证当前页面的样式不受影响
    });
    element.addEventListener('mouseleave',function (e) {
        let subnav=e.target.getElementsByClassName('sub_nav')[0];
        navbglist.style.background='none';//列表背景颜色
        subnav.style.left='-93px';//菜单伸缩
        // setTimeout(function () {
            let subnavwrap=e.target.getElementsByClassName('sub_nav_wrap')[0];
            subnavwrap.style.display='none';
        // },500);
        let navul=e.target.getElementsByTagName('ul')[0];
        navul.style.display='none';
        let navulli=e.target.getElementsByTagName('li');
        for(let i=0;i<navulli.length;i++){
            navulli[i].style.left='-93px';
        }
        if(flag!=index){
            element.style.background='none';
            let navitem=e.target.getElementsByClassName('nav_item')[0];
            let navitemp=e.target.previousElementSibling.getElementsByClassName('nav_item')[0];
            navitem.style.borderBottom='1px solid #898A87';
            navitemp.style.borderBottom='1px solid #898A87';
            navitemi[index].style.backgroundPositionX='0';
            navitemb[index].style.backgroundPositionY=`${navitembyb[index]}px`;

        }//保证当前页面的样式不受影响
    });
});

let nav=document.querySelector('.nav');
nav.onmouseleave=function () {
    navbglogo.style.background=navbgcolor[flag];//logo背景颜色
};//移出整体后

let subnav=document.querySelectorAll('.sub_nav');
let subnavwrap=document.querySelectorAll('.sub_nav_wrap');
subnav.forEach((element,index)=>{
    element.style.height=`${innerHeight}px`;
});//菜单背景初始化

subnavwrap.forEach((element,index)=>{
    element.style.height=`${innerHeight}px`;
    element.style.top=`${-1*navbgtop[index]-107}px`;
});//菜单背景外套初始化
// 导航结束

//banner开始
let banneritem=document.querySelectorAll('.banner_item');
banneritem.forEach((element)=>{
    element.style.height=`${innerHeight}px`;
});//初始化每页的高度


let pagewrap=document.querySelector('.page_wrap');
pagewrap.style.height=innerHeight+'px';
let vscroller=document.querySelector('.vscroller');
let scrollerpageb=document.querySelectorAll('.scroller_page b');
let waterdrops=document.querySelectorAll('.water_drop');
console.log(waterdrops)
let page=0;

setTimeout(fn,1000);
vscroller.addEventListener('mousewheel',function (e) {
    if(e.wheelDelta==-120){
        if(page>=0&&page<4){
            page++;
            vscroller.style.transform=`translateY(${innerHeight*-page}px)`;
            setTimeout(fn,500);
        }
    }else if(e.wheelDelta==120){
        if(page>0&&page<=4){
            page--;
            vscroller.style.transform=`translateY(${innerHeight*-page}px)`;
            setTimeout(fn,500);
        }
    }
    for(let i=0;i<5;i++){
        scrollerpageb[i].style.backgroundPositionX='100%';
    }
    scrollerpageb[page].style.backgroundPositionX='0';// 点

});
function fn() {
    waterdrops.forEach((element)=>{
        element.style.top=`${-200*page}px`;
    })
}

//banner结束