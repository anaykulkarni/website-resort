
var tc = document.getElementById('tc-check');

var btn = document.getElementById('submit-button');
btn.style.cssText = "color: rgba(255, 255, 255, 0.6); border-color: rgba(255, 255, 255, 0.6)" ;


btn.onclick = function checkForm( event ) {
    var fname = document.forms["myForm"]["firstName"];
    var lname = document.forms["myForm"]["lastName"];
    var date = document.forms["myForm"]["date"];
    var gender = document.forms["myForm"]["radio"];
    var email = document.forms["myForm"]["email"];
    var mobile = document.forms["myForm"]["mobile"];
    var state = document.forms["myForm"]["_state"];
    var city = document.forms["myForm"]["city"];
    var nationality = document.forms["myForm"]["nationality"];
    var address1 = document.forms["myForm"]["address1"];
    var address2 = document.forms["myForm"]["address2"];
    var zip = document.forms["myForm"]["zip"];

    if (fname.value == "") {
        var alert = document.getElementById('nameAlert1');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        fname.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;               
    }
    if (lname.value.length === 0) {
        alert = document.getElementById('nameAlert2');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        lname.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";  
        return false;      
    }
    if (date.value.length === 0) {
        alert = document.getElementById('dateAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        date.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;        
    }
    if (gender1.checked == false && gender2.checked == false) {
        alert = document.getElementById('genderAlert');
        alert.outerHTML = '<div style = " padding-left: 10px;font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        return false;
    }
    if (email.value.length === 0) {
        alert = document.getElementById('emailAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        email.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    if (mobile.value.length === 0) {
        alert = document.getElementById('mobileAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        mobile.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    if (city.value.length === 0) {
        alert = document.getElementById('cityAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        city.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    if (state.value.length === 0) {
        alert = document.getElementById('stateAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        state.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    if (nationality.value.length === 0) {
        alert = document.getElementById('nationalityAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        nationality.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    if (address1.value.length === 0 || address2.value.length === 0) {
        alert = document.getElementById('addressAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        address1.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        address2.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    if (zip.value.length === 0) {
        alert = document.getElementById('zipAlert');
        alert.outerHTML = '<div style = "font-size: 12px; text-align: left; color: rgba(255, 0, 0, 0.5)">Field empty</div>';
        zip.style.cssText = "border-color: rgba(255, 0, 0, 0.5)";
        return false;
    }
    return true;
}

tc.onclick = function checkTc() {
    if(tc.checked == true) {
        btn.disabled = false;
        btn.style.cssText = ".btn:hover{ color: #f39c12; border-color: #f39c12}";
    }
    else{
        btn.disabled = true;
        btn.style.cssText = "color: rgba(255, 255, 255, 0.6); border-color: rgba(255, 255, 255, 0.6)" ;
    }
}