//Utgave med native/vanilla JS. JS-data tilgjengelig som rawjson. Vet ikke hvordan man sender det til en vanlig variabel utenfor funksjonen.
const xhr = new XMLHttpRequest();
//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const proxy = 'https://cors-anywhere.herokuapp.com/'; 
const url_0 = 'https://fantasy.premierleague.com/drf/bootstrap-static';
const url = proxy+url_0;
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
      const rawjson=xhr.response;
      alert(rawjson.elements[0].web_name); 
//    return rawjson;
  }
};
xhr.open('GET', url);
xhr.send();
//alert(typeof(xhr.responseText));
//var nyjson = JSON.parse(xhr.responseText);
//alert(nyjson.elements[1].web_name);
//alert(xhr.response.elements[1].web_name);


$(document).ready(function() {
    console.log( "Document ready funksjonen i fantasytest.js kjører!" );
});
let  playerJson;
// Utgave med jQuery. playerJson inneholder alle dataene. Kan brukes som man vil. vet ikke hvordan jeg elgger det til 
// variabel utenfor.
$.getJSON(url, function(json){
    playerJson = json;
//    nyjson = playerJson;
 //   alert("Kjører!");
    alert(playerJson.elements[1].web_name);
});
//alert(playerJson.elements[1].web_name);
