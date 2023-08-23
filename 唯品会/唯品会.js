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
  console.log("icoDis: ", icoDis);
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
