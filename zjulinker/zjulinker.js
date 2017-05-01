/**
 * Created by dongming on 2017/4/25.
 */
var toggleState = false;
function sliderPindan() {
    document.getElementById('pindan').style.cssText = "border-bottom: 3px solid #ea4335;";
    document.getElementById('pindanList').style.cssText = "display:block; visibility: visible; top: 52px;";
    if (toggleState) {
        document.getElementById('pindanList').style.cssText = "display:block; visibility: visible; top: 0;";
        document.getElementsByClassName('menuList')[0].style.cssText = "height: auto;";
    }
}

function hideSliderPindan() {
    document.getElementById('pindan').style.cssText = "border-bottom: 3px solid transparent;";
    document.getElementById('pindanList').style.cssText = "display:none; visibility: hidden;";
}

function sliderZhengren() {
    document.getElementById('zhengren').style.cssText = "border-bottom: 3px solid #fbbc05;";
    document.getElementById('zhengrenList').style.cssText = "visibility: visible; top: 52px;";
}

function hideSliderZhengren() {
    document.getElementById('zhengren').style.cssText = "border-bottom: 3px solid transparent;";
    document.getElementById('zhengrenList').style.cssText = "visibility: hidden; ";
}

function sliderChushou() {
    document.getElementById('chushou').style.cssText = "border-bottom: 3px solid #34a853;";
    document.getElementById('chushouList').style.cssText = "visibility: visible; top: 52px;";}

function hideSliderChushou() {
    document.getElementById('chushou').style.cssText = "border-bottom: 3px solid transparent;";
    document.getElementById('chushouList').style.cssText = "visibility: hidden; ";
}

function sliderWenda() {
    document.getElementById('wenda').style.cssText = "border-bottom: 3px solid #4285f4;";
}

function hideSliderWenda() {
    document.getElementById('wenda').style.cssText = "border-bottom: 3px solid transparent;";
}

function toggleMenuBar() {
    var menuSlider = document.getElementsByClassName('AppHeader-nav')[0];
    // var menuList = document.getElementsByClassName('menuList')[0];
    // var first_rule = document.styleSheets[0].cssRules;
    // console.log(first_rule);
    if (toggleState) {
        menuSlider.style.cssText = "display: none";
    } else {
        menuSlider.style.cssText = "display: block";
    }
    toggleState = !toggleState;
}