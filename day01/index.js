import a from './a';
import b from './b';
import pic from './img/banner.jpg';
import './index.css'
import './index.scss'

var img = new Image();
img.src = pic;
img.classList.add('pic')
var root = document.querySelector('#root');
root.append(img);

console.log(pic);

// 既然webpack默认只认识js模块，那么遇到非js模块该怎么办？
a();
b();

function kkb(){
    console.log("hello webpack");
}

kkb();