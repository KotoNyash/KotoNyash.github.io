const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');

var titleStr = "";
switch (title){
    case "1":{
        titleStr = "Здарова";
        break;
    }
    case "2":{
        titleStr = "Здарова";
        break;
    }
}

document.getElementById("title").innerHTML = titleStr;
