/**
 * Created by dongming on 2017/4/25.
 */
function sliderPindan() {
    document.getElementById('pindan').style.cssText = "border-bottom: 3px solid #4285f4;";
    document.getElementById('pindanList').style.cssText = "visibility: visible; top: 52px;";
}

function hideSliderPindan() {
    document.getElementById('pindan').style.cssText = "border-bottom: 3px solid transparent;";
    document.getElementById('pindanList').style.cssText = "visibility: hidden;";
}

function sliderZhengren() {
    document.getElementById('zhengren').style.cssText = "border-bottom: 3px solid #4285f4;";
    document.getElementById('zhengrenList').style.cssText = "visibility: visible; top: 52px;";
}

function hideSliderZhengren() {
    document.getElementById('zhengren').style.cssText = "border-bottom: 3px solid transparent;";
    document.getElementById('zhengrenList').style.cssText = "visibility: hidden; ";
}

function sliderChushou() {
    document.getElementById('chushou').style.cssText = "border-bottom: 3px solid #4285f4;";
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