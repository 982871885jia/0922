/**
 * Created by 佳晓 on 2016/9/7.
 */

//新闻处的切换
var lis0 = document.getElementById('first0').getElementsByTagName('li');
for(var i = 0;i<lis0.length;i++){
    lis0[i].id = i;
    lis0[i].onmousemove = function () {
        move0(this.id);
    }
}

var divs0 = document.getElementById('tab0_title').getElementsByTagName('div');
function move0(obj){
    for(var j=0;j<lis0.length;j++){
        if(obj==j){
            lis0[j].className = 'tab'
            divs0[j].style.display = 'block';
        }else{
            lis0[j].className = '';
            divs0[j].style.display = 'none';

        }
    }
}

//赛事处的切换
var lis1 = document.getElementById('first1').getElementsByTagName('li');
for(var i=0; i<lis1.length;i++){
    lis1[i].id=i;
    lis1[i].onmousemove = function () {
        move1(this.id);
    }
}

var divs1 = document.getElementById('tab1_title').getElementsByTagName('div');
function move1(obj){
    for(var j=0;j<lis1.length;j++){
        if(obj==j){
            lis1[j].className = 'sai'
            divs1[j].style.display = 'block';
        }else{
            lis1[j].className = '';
            divs1[j].style.display = 'none';

        }
    }
}


//视频处的切换

var lis = document.getElementById('first2').getElementsByTagName('li');
for(var i=0; i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmousemove = function () {
        move3(this.id);
    }
}

var divs = document.getElementById('tab2_title').getElementsByTagName('div');
function move3(obj){
    for(var j=0;j<lis.length;j++){
        if(obj==j){
            lis[j].className = 'show'
            divs[j].style.display = 'block';
        }else{
            lis[j].className = '';
            divs[j].style.display = 'none';

        }
    }
}


//媒体处的切换
var lis4 = document.getElementById('first4').getElementsByTagName('li');
for(var i=0; i<lis4.length;i++){
    lis4[i].id=i;
    lis4[i].onmousemove = function () {
        move4(this.id);
    }
}

var divs4 = document.getElementById('tab4_title').getElementsByTagName('div');
function move4(obj){
    for(var j=0;j<lis4.length;j++){
        if(obj==j){
            lis4[j].className = 'media'
            divs4[j].style.display = 'block';
        }else{
            lis4[j].className = '';
            divs4[j].style.display = 'none';

        }
    }
}

//轮播前提的切换
//var show = document.getElementById('show_img');  //获取展示框
//var imgs = document.getElementById('inner').getElementsByTagName('img');//获取轮播图片
//var spanList=document.getElementById("paganation").getElementsByTagName("span");//得到圆点按钮
//  for(var i=0;i<spanList.length;i++){
//      spanList[i].id=i;
//      spanList[i].onmousemove=function(){
//          move(this.id);
//      }
//  }
//function move(obj){
//    for(var j=0;j<spanList.length;j++){
//        if(obj==j){
//            spanList[j].className='selected';
//            imgs[j].style.display='block';
//        }else{
//            spanList[j].className='';
//            imgs[j].style.display='none';
//        }
//    }
//}


