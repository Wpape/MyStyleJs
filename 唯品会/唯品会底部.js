var channelItem = document.querySelector('.brand-item-page');
var mordDasta = document.createElement('div');
var mordDastaSpan = document.createElement('span');
mordDasta.style.margin = '10px auto';
mordDastaSpan.className = 'index_more'
for (let i = 0; i < 20; i++){
    
    var channeItemChildren = document.createElement('div');
    channeItemChildren.className = 'brand-channelb-item'
    channeItemChildren.innerHTML = `
    <a href="#">
            <img src="https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2021/12/31/41/ias_2e93bf4b35d8a6a2c5b36f4d996e638d_1135x545_85.jpg" alt="">
            <div class="brand-name">
                <span>2.3</span><span>折起</span>
                <span>匡威converse运动户外专场</span>
            </div>
        </a>
    `

    channelItem.append(channeItemChildren);
}

mordDastaSpan.innerText = '点击查看更多 >>';
mordDasta.append(mordDastaSpan);
channelItem.appendChild(mordDasta);




var footerVip = document.querySelector('.footer-vip');
var footerList = [];
var position = 0;
for (let i = 0; i < 7; i++){
    var footerLi = document.createElement('li');
    footerList.push(footerLi);
    footerVip.append(footerLi)
};
for (let i = 0; i < footerList.length; i++){
    if (i == 0) {
       
    } else {
        footerList[i].style.backgroundPositionX = `${position -= 121}px`
   }
}



// var footerDlA = document.createElement('.footer-list');
// for (let i = 0; i < 6; i++){
//     var footerDl = document.createElement('dl');
//     footerDl.className = 'link-anim'
// }

var linkAList = document.querySelectorAll('.link-anim');
// console.log('', linkAList);
 
