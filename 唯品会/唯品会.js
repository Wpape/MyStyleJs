var navLeft = document.querySelector(".nav-left");
var cityHidden = document.querySelector(".city-hidden");
document.onclick = function () {
  cityHidden.style.display = "none";
  navLeft.classList.remove("nav-left-active");
};

// 导航栏左侧城市切换 点击事件
navLeft.onclick = function (ev) {
  navLeft.classList.add("nav-left-active");
  cityHidden.style.display = "block";
  ev.stopPropagation();
};

// 省份+城市 点击事件
var areaBoxs = document.querySelectorAll(".area-box");
var adsItems = document.querySelectorAll(".ads-item");
for (var i = 0; i < adsItems.length; i++) {
  var adsItem = adsItems[i];
  adsItem.index = i;
  var areaBox = areaBoxs[i];

  adsItem.onclick = function (ev) {
    for (var i = 0; i < adsItems.length; i++) {
      adsItems[i].classList.remove("ads-item-active");
      areaBoxs[i].style.display = "none";
    }
    this.classList.add("ads-item-active");
    areaBoxs[this.index].style.display = "block";
    ev.stopPropagation();
  };
}

// 具体省份+城市 点击事件
var areaDetails = document.querySelectorAll(".area-detail");
for (var i = 0; i < areaDetails.length; i++) {
  var areaDetail = areaDetails[i];
  areaDetail.index = i;

  areaDetail.onclick = function (ev) {
    for (var i = 0; i < areaDetails.length; i++) {
      areaDetails[i].classList.remove("active-area");
    }
    this.classList.add("active-area");
    ev.stopPropagation();
  };

  areaDetail.onmouseover = function () {
    this.style.borderColor = "#f10180";
  };

  areaDetail.onmouseleave = function () {
    this.style.borderColor = "transparent";
  };
}

// 当点击具体某个省份后，切换到城市列表
var proviDetails = document.querySelectorAll(".province-box .area-detail");
var adsProvince = document.querySelector(".ads-province");
var adsCity = document.querySelector(".ads-city");
var cityBox = document.querySelector(".city-box");
var provinceBox = document.querySelector(".province-box");

for (var i = 0; i < proviDetails.length; i++) {
  var proviDetail = proviDetails[i];
  proviDetail.index = i;
  proviDetail.onclick = function (ev) {
    for (var i = 0; i < proviDetails.length; i++) {
      adsCity.classList.add("ads-item-active");
      adsProvince.classList.remove("ads-item-active");
      provinceBox.style.display = "none";
      cityBox.style.display = "block";
      proviDetails[i].classList.remove("active-area");
      ev.stopPropagation();
    }
    this.classList.add("active-area");
  };
}

// 当点击某个城市后，显示到导航栏内
var cityDetails = document.querySelectorAll(".city-box .area-detail");
var alert = document.querySelector(".alert");
var preCity = document.querySelector(".present .city");
var toCity = document.querySelector(".alert .alert-cont .to-city");
for (var i = 0; i < cityDetails.length; i++) {
  var cityDetail = cityDetails[i];
  cityDetail.index = i;
  cityDetail.onclick = function () {
    for (var i = 0; i < cityDetails.length; i++) {
      cityDetails[i].classList.remove("active-area");
    }
    this.classList.add("active-area");
    document.body.style.backgroundColor = "#E5E5E5";
    toCity.innerHTML = this.innerHTML;
    //弹窗3秒过后自动消失
    alert.style.display = "block";
    if (alert) {
      setTimeout("alert.style = null", 2000);
    }
    setTimeout("document.body.style = null", 2000);

    preCity.innerHTML = this.innerHTML;
  };
}

// 导航栏右侧悬浮出现的内容
var navTitles = document.querySelectorAll(".nav-title");
var hiddenBoxes = document.querySelectorAll(".hidden-box");
var icoDises = document.querySelectorAll(".ico-dis"); //获取所有的小三角
var icoDis = [];

for (var i = 0; i < icoDises.length; i++) {
  icoDis.push(icoDises[i]);
  // console.log("icoDis: ", icoDis);
  icoDis.index = i;
}

for (var i = 0; i < navTitles.length; i++) {
  var navTitle = navTitles[i];
  navTitle.index = i;
  var hiddenBox = hiddenBoxes[i];
  hiddenBox.index = i;
  navTitle.index = i;

    hiddenBox.onmouseover = function () {
    this.style.display = "block";
      navTitles[this.index].classList.add("nav-left-active");
  };

  hiddenBox.onmouseleave = function () {
    this.style.display = "none";
    navTitles[this.index].classList.remove("nav-left-active");
  };

  navTitle.onmouseover = function () {
    this.classList.add("nav-left-active");
    hiddenBoxes[this.index].style.display = "block";
    if (this.index > 0) {
      if (this.children[0].className === "ico-dis") {
        this.children[0].style.transform = "rotate(180deg)";
        this.children[0].style.top = "8px";
        this.children[0].style.borderColor =
          "#f10180 transparent transparent transparent";
      }
    }
  };

  navTitle.onmouseleave = function () {
    this.classList.remove("nav-left-active");
    hiddenBoxes[this.index].style.display = "none";
    if (this.index > 0) {
      if (this.children[0].className === "ico-dis") {
        this.children[0].style.transform = "rotate(360deg)";
        this.children[0].style.top = "13px";
        this.children[0].style.borderColor =
          "#999 transparent transparent transparent";
      }
    }
  };
}

var listLisShop = document.querySelector('.cate-menu');
// console.log('', listLisShop);
var listShop = [
  '女装/男装/内衣', '女鞋/男鞋/箱包', '护肤彩妆/个护', '运动户外', '家电数码', '母婴童装', '手表配饰', '居家用品', '唯品生活', '医药健康'
];
// var listSp = [];
for (let i = 0; i < listShop.length; i++){
  var listLi = document.createElement('li');
  // listSp.push(listLi)
  listLi.dataset.index = i
  listLi.className = 'cate-menu-item';
  listLi.onmouseover = moveoverFunction;
  listLi.onmouseout = moveoutFunction;
  var listSpan = document.createElement('span');
  listSpan.innerText = listShop[i];
  listSpan.style.fontSize = '12px';
  listLi.appendChild(listSpan);
  listLisShop.appendChild(listLi)
};



//商品分类绑定事件
document.querySelector('.nav-category').onmouseover = function () {
  document.querySelector('.cate-menu').style.height = '480px'
};
document.querySelector('.cate-menu').onmouseleave = function () {
  document.querySelector('.cate-menu').style.height = '0'
}

document.querySelector('.cate-menu').onmouseover = function () {
  document.querySelector('.cate-menu').style.height = '480px'
};
document.querySelector('.nav-category').onmouseleave = function () {
  document.querySelector('.cate-menu').style.height = '0'
}

//解析商品分类数据
function jiexi(i) {
  var newArrayListName = [];
for (const key in i) {
  var objeat = {};
  objeat.name = i[key].category.name
  newArrayListName.push(objeat);
  var arrayNew = [];
  var j = i[key].category.children
  arrayNew.push(j);
  objeat.children = arrayNew
  };
  return newArrayListName
}
//解析右侧小图片分类

var poponTion = document.querySelector('.cate-pop');
//解析得出代码数据 newArrayListName
var cateDetail = document.querySelector('.cate-detail');

var newArrayListName;
function moveoverFunction() {
  this.style.backgroundColor = 'white';
  this.style.color = ' #f10180';
  poponTion.style.display = 'block'
  if (this.dataset.index == 0) {
    newArrayListName = jiexi(listSoptjson);
  } else if (this.dataset.index == 1) {
    newArrayListName = jiexi(sectionList);
  } else if (this.dataset.index == 2) {
    newArrayListName = jiexi(ficeList);
  } else if (this.dataset.index == 3) {
    newArrayListName = jiexi(timetionList);
  } else if (this.dataset.index == 4) {
    newArrayListName = jiexi(ponetionList);
  } else if (this.dataset.index == 5) {
    newArrayListName = jiexi(tongzhuang);
  } else if (this.dataset.index == 6) {
    newArrayListName = jiexi(handlist);
  } else if (this.dataset.index == 7) {
    newArrayListName = jiexi(ximengsi);
  } else if (this.dataset.index == 8) {
    newArrayListName = jiexi(liveList);
  } else if (this.dataset.index == 9) {
    newArrayListName = jiexi(heatlist);
  }
    // newArrayListName = jiexi(a);
  var pObjs = cateDetail.childNodes;
    for (var i = pObjs.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
      cateDetail.removeChild(pObjs[i]);
  }
  adder(newArrayListName);
}
function moveoutFunction() {
  this.style.backgroundColor = '';
  this.style.color = ''
  // poponTion.style.display = 'none'
}
var listName = [];
var listchildren = [];
function adder(arr) {
  var imgArrChild = arr[arr.length - 1].children[0];
 

  var catePartCol2 = document.querySelector('.cate-part-col2');
  var pddObjs = catePartCol2.childNodes;
  for (var i = pddObjs.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
    catePartCol2.removeChild(pddObjs[i]);
  }
  var divChild1 = document.createElement('div');
  divChild1.className = 'brand-title';
  divChild1.innerText = '品牌推荐'
  catePartCol2.appendChild(divChild1)
  for (const key in imgArrChild) {
    var textImgChild = document.createElement('span');
    var imageChild = document.createElement('img');
    var aChild = document.createElement('a');
    var divChild = document.createElement('div');
    aChild.style.border = '1px solid transparent'
    aChild.onmouseover = function () {
     this.style.border = '1px solid #f10180'
    }
    aChild.onmouseleave = function () {
     this.style.borderColor = 'transparent'
    }

    divChild.className = 'cate-brand'
    textImgChild.innerText = imgArrChild[key].name;
    imageChild.src = imgArrChild[key].image;

    aChild.append(textImgChild,imageChild)
    divChild.append(aChild);
    catePartCol2.appendChild(divChild)
  };
  
  // console.log('',imageChild);
  for (let i = 0; i < arr.length; i++){
    //初始化
    var cateDl = document.createElement('dl');
    cateDl.className = 'cate-detail-item'
    var cateDt = document.createElement('dt');
    cateDt.className = 'cate-detail-tit'
    var cateDd = document.createElement('dd');
    cateDd.className = 'cate-detail-con'
    var cateDti = document.createElement('i');
    cateDti.innerText = '>'
    var cateDtspan = document.createElement('span');
    cateDtspan.innerText = arr[i].name
    listName.push(arr[i].name)
    //  操作dd标签内的a
    var abcdefg = arr[i].children[0];
    for (let j = 0; j < abcdefg.length;j++){
      // console.log('', abcdefg[j].name);
      var catea = document.createElement('a');
      
      catea.href = 'https://list.vip.com/autolist.html?rule_id=53986307&title=%E8%BF%9E%E8%A1%A3%E8%A3%99&refer_url=https%3A%2F%2Fcategory.vip.com%2Fhome';
      catea.innerText = abcdefg[j].name;
      listchildren.push(abcdefg[j].name)
  
      cateDd.appendChild(catea);
    }
  
    //放入
    cateDt.append(cateDti,cateDtspan)
    cateDl.append(cateDt, cateDd);
    cateDetail.appendChild(cateDl);
  }
}
poponTion.onmouseover = function () {
  document.querySelector('.cate-menu').style.height = '480px'
}
poponTion.onmouseleave = function () {
  document.querySelector('.cate-menu').style.height = '0';
  var pObjs = cateDetail.childNodes;
    for (var i = pObjs.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
      cateDetail.removeChild(pObjs[i]);
  }
  poponTion.style.display = 'none'
}
document.querySelector('.nav-category-data').onmouseleave = function () {
  poponTion.style.display = 'none'
}