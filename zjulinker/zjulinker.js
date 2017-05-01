/**
 * Created by dongming on 2017/4/25.
 */
var menuBarToggle = false;
var listToggle = false;
console.log(window.screen.availHeight);
screenHeight = window.screen.availHeight + 'px';
function sliderPindan() {
    document.getElementById('pindanList').style.cssText = "visibility: visible";
    if (!menuBarToggle) {
        document.getElementById('pindanList').style.cssText += "top: 52px;";
        document.getElementById('pindan').style.cssText = "border-bottom: 3px solid #ea4335;";
    }
    if (menuBarToggle) {
        document.getElementById('pindanList').style.cssText += "height: 105px; z-index: 100;";
        document.getElementById('pindan').style.cssText = "border-left: 3px solid #ea4335;";
    }
}

function hideSliderPindan() {
    if (!menuBarToggle) {
        document.getElementById('pindan').style.cssText = "border-bottom: 3px solid transparent;";
        document.getElementById('pindanList').style.cssText = "visibility: hidden;";
    }
    if (menuBarToggle) {
        document.getElementById('pindan').style.cssText = "border-left: 3px solid transparent;";
        document.getElementById('pindanList').style.cssText += "visibility: hidden; height: 0;";
    }
}

function sliderZhengren() {
    document.getElementById('zhengrenList').style.cssText = "visibility: visible";
    if (!menuBarToggle) {
        document.getElementById('zhengrenList').style.cssText += "top: 52px;";
        document.getElementById('zhengren').style.cssText = "border-bottom: 3px solid #fbbc05;";
    }
    if (menuBarToggle) {
        document.getElementById('zhengrenList').style.cssText += "height: 105px; z-index: 100;";
        document.getElementById('zhengren').style.cssText = "border-left: 3px solid #fbbc05;";
    }
}

function hideSliderZhengren() {
    if (!menuBarToggle) {
        document.getElementById('zhengren').style.cssText = "border-bottom: 3px solid transparent;";
        document.getElementById('zhengrenList').style.cssText = "visibility: hidden;";
    }
    if (menuBarToggle) {
        document.getElementById('zhengren').style.cssText = "border-left: 3px solid transparent;";
        document.getElementById('zhengrenList').style.cssText += "height: 0; visibility: hidden";
    }
}

function sliderChushou() {
    document.getElementById('chushouList').style.cssText = "visibility: visible";
    if (!menuBarToggle) {
        document.getElementById('chushouList').style.cssText += "top: 52px;";
        document.getElementById('chushou').style.cssText = "border-bottom: 3px solid #34a853;";
    }
    if (menuBarToggle) {
        document.getElementById('chushouList').style.cssText += "height: 140px; z-index: 100;";
        document.getElementById('chushou').style.cssText = "border-left: 3px solid #34a853;";
    }
}

function hideSliderChushou() {
    if (!menuBarToggle) {
        document.getElementById('chushou').style.cssText = "border-bottom: 3px solid transparent;";
        document.getElementById('chushouList').style.cssText = "visibility: hidden;";
    }
    if (menuBarToggle) {
        document.getElementById('chushouList').style.cssText += "height: 0; visibility: hidden";
        document.getElementById('chushou').style.cssText = "border-left: 3px solid transparent;";
    }
}

function sliderWenda() {
    // document.getElementById('wenda').style.cssText = "border-bottom: 3px solid #4285f4;";
    document.getElementById('wenda').style.cssText = "visibility: visible";
    if (!menuBarToggle) {
        document.getElementById('wenda').style.cssText += "top: 52px;";
        document.getElementById('wenda').style.cssText = "border-bottom: 3px solid #4285f4;";
    }
    if (menuBarToggle) {
        // document.getElementById('wenda').style.cssText += "height: 140px;";
        document.getElementById('wenda').style.cssText = "border-left: 3px solid #4285f4;";
    }
}

function hideSliderWenda() {
    if (!menuBarToggle) {
        document.getElementById('wenda').style.cssText = "border-bottom: 3px solid transparent;";
    }
    if (menuBarToggle) {
        document.getElementById('wenda').style.cssText = "border-left: 3px solid transparent;";
    }
}

function toggleMenuBar() {
    var menuSlider = document.getElementsByClassName('AppHeader-nav')[0];
    var shadowbox = document.getElementsByClassName('shadowbox')[0];
    shadowbox.style.cssText = "display: block"
// var menuList = document.getElementsByClassName('menuList')[0];
    // var first_rule = document.styleSheets[0].cssRules;
    // console.log(first_rule);
    if (menuBarToggle) {
        menuSlider.style.cssText = "display: none";
        shadowbox.style.cssText = "display: none";
    } else {
        menuSlider.style.cssText = "display: block;";
        menuSlider.style.height =  screenHeight;
        shadowbox.style.height =  screenHeight;

    }
    menuBarToggle = !menuBarToggle;
}