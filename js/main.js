function generadeUsid() {
    var outLabel = document.getElementById("usid-out");
    var cc = document.getElementById("countrycode").value;
    var oc = document.getElementById("organisationcode").value;
    var sn = document.getElementById("serialnumber").value;
    var ot = document.getElementById("organisationtime").value;
    var rn = document.getElementById("randomnumber").value;
    outLabel.innerHTML = cc+oc+sn+ot+rn;
}

function populateCCDropdown(){
    var jsonData = JSON.parse(readJSON('js/iso2codes.json'))
    jsonData.forEach(element => {
        console.log(element.Code);
    });
}

function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

