
    $(document).ready(function() {
        console.log( "Document ready funksjonen i fantasytest.js kjører!" );
    });
    let  playerJson;
    $.getJSON("https://fantasy.premierleague.com/drf/bootstrap-static?callback=?", function(json){
        playerJson = json;
        alert("Kjører!");
    });

const xhr = new XMLHttpRequest();
const url = 'https://fantasy.premierleague.com/drf/bootstrap-static';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
      const rawjson=xhr.response;
    return rawjson;
  }
};

xhr.open('GET', url);
xhr.send();
alert(rawjson);