function onPageLoad(){
    populateCCDropdown();
    setRandomField();
    startTime();
}

function generateRandomNumberField(){
    var s = "";
    for (var index = 0; index < 9; index++) {
        var rand = generateRandomNumber();
        s = s+rand;
    }

    return s;
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 9) + 1;
}

function getCurrentTime(){
    var timeField = document.getElementById("organisationtime");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);
    return String(h) + String(m) + String(s);
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function generadeUsid() {
    var outLabel = document.getElementById("usid-out");
    var cc = document.getElementById("countrycode").value;
    var oc = document.getElementById("organisationcode").value;
    var sn = document.getElementById("serialnumber").value;
    var ot = document.getElementById("organisationtime").value;
    var rn = document.getElementById("randomnumber").value;
    if(validateUsid(cc,oc,sn,ot,rn) === false) {
        outLabel.innerHTML = "Inputs are not valid.";
        console.log(cc+oc+sn+ot+rn)
    }
    else {outLabel.innerHTML = cc+oc+sn+ot+rn;}
    setRandomField();
}

function setRandomField(){
    var rn = document.getElementById("randomnumber");
    var random = generateRandomNumberField();
    rn.value = random;
    return random;
}

function startTime(){
    var ot = document.getElementById("organisationtime");
    var time = getCurrentTime();
    ot.value = time;
    t = setTimeout(function(){
        startTime()
    }, 100); 
}

function validateUsid(cc,oc,sn,ot,rn){
    if(oc.length != 3) return false;
    if(sn.length != 12) return false;
    if(rn.length != 9) return false;
    if((cc+oc+sn+ot+rn).length != 32) return false;
    return true;
}

function populateCCDropdown(){
    var jsonData = JSON.parse(readJSON('js/iso2codes.json'))
    const sb = document.getElementById('countrycode')
    jsonData.forEach(element => {
        var option = document.createElement("option");
        option.text = element.Name;
        option.value = element.Code;
        sb.appendChild(option)
    });
}

function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

