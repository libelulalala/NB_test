var headerHeight = 59;
var headerMargin = 0;
var maxCookieDays = 30;

var cookiesCityKey = "city";

var dollarID = "R01235";
var grivnaID = "R01720";
var belrublID = "R01090";

var moscowCityName = "moscow";
var minskCityName = "minsk";
var kievCityName = "kiev";


function getIDByCity(currentCity){
    switch (currentCity) {

        case moscowCityName:
            return dollarID;
            break;
        case minskCityName:
            return belrublID;
            break;
        case kievCityName:
            return grivnaID;
            break;

    }
}

// Sticky Header
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        var elem =  $('#fix-search');
        if (top+headerMargin < headerHeight){
            elem.css('top', (headerHeight - top));
        } else {
            elem.css('top', headerMargin);
        }
    });
});


// Изображение доллара
function getDollar() {
    return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzEuOTk5OTk4IgogICBoZWlnaHQ9IjMxLjk5OTk5OCIKICAgdmlld0JveD0iMCAwIDMxLjk5OTk5OSAzMS45OTk5OTkiCiAgIGlkPSJzdmc0NDU2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNDQ1OCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMC4zNSIKICAgICBpbmtzY2FwZTpjeD0iLTMxNi4xNDI4NiIKICAgICBpbmtzY2FwZTpjeT0iMTkzLjE0Mjg4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIHVuaXRzPSJweCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODM4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDYxIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQxLjE0Mjg2LC02OTMuNTA1MDgpIj4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzcwLjEyNzE2LDEyMzIuMTQyOSkiCiAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiCiAgICAgICBpZD0iZzQ0MjciPgogICAgICA8dGV4dAogICAgICAgICBzb2RpcG9kaTpsaW5lc3BhY2luZz0iMTI1JSIKICAgICAgICAgaWQ9InRleHQ0MzE1IgogICAgICAgICB5PSItNTE1LjIyMjA1IgogICAgICAgICB4PSIxMDE5LjI0MzkiCiAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI1cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbgogICAgICAgICAgIHk9Ii01MTUuMjIyMDUiCiAgICAgICAgICAgeD0iMTAxOS4yNDM5IgogICAgICAgICAgIGlkPSJ0c3BhbjQzMTciCiAgICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+JDwvdHNwYW4+PC90ZXh0PgogICAgICA8Y2lyY2xlCiAgICAgICAgIHI9IjE1LjA1ODgyNCIKICAgICAgICAgY3k9Ii01MjIuNjM3ODIiCiAgICAgICAgIGN4PSIxMDI3LjI3IgogICAgICAgICBpZD0icGF0aDQzMTMtNyIKICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuODgyMzUyOTU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=";
}

// Изображение рубля
function getRuble() {
    return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iOS4wMzExMTA4bW0iCiAgIGhlaWdodD0iOS4wMzExMTA4bW0iCiAgIHZpZXdCb3g9IjAgMCAzMS45OTk5OTkgMzEuOTk5OTk5IgogICBpZD0ic3ZnNTAwOSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczUwMTEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuMzUiCiAgICAgaW5rc2NhcGU6Y3g9Ii0xNDEuODU3MTQiCiAgICAgaW5rc2NhcGU6Y3k9IjEwNC41NzE0OCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODM4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1MDE0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDY2Ljg1NzE0LC02MDQuOTMzNjgpIj4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ0LjQxMjg4LDExNDMuNTcxNSkiCiAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiCiAgICAgICBpZD0iZzQ5NDQiPgogICAgICA8Y2lyY2xlCiAgICAgICAgIHI9IjE1LjA1ODgyNCIKICAgICAgICAgY3k9Ii01MjIuNjM3ODIiCiAgICAgICAgIGN4PSIxMDI3LjI3IgogICAgICAgICBpZD0icGF0aDQzMTMtNyIKICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuODgyMzUyOTU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZCIKICAgICAgICAgZD0ibSAxMDIxLjgyNywtNTMyLjA1OTU2IDcuNjE5MywwIGEgNS4yMzgyNTU1LDQuOTQzMjk1IDAgMCAxIDAsOS44ODY1OSBsIC01LjcxNDUsMCAwLDEuMDc4NTMgNy4yMzgzLDAgMCwxLjc5NzU3IC03LjIzODMsMCAwLDUuMjEyOTIgLTEuOTA0OCwwIDAsLTUuMjEyOTIgLTAuOTUyNCwwIDAsLTEuNzk3NTcgMC45NTI0LDAgMCwtMS4wNzg1MyAtMC45NTI0LDAgMCwtMS43OTc1NiAwLjk1MjQsMCB6IG0gMS45MDQ4LDEuNzk3NTcgNS43MTQ1LDAgYSAzLjMzMzQzNDMsMy4xNDU3MzIzIDAgMCAxIDAsNi4yOTE0NiBsIC01LjcxNDUsMCB6IgogICAgICAgICBpZD0icGF0aDQ5MjciIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K";
}

// Смена изображения и курса в зависимости от селекта
$('.main-header__select').change(function() {

    if(this.value == moscowCityName) {
        document.querySelector(".exchange-rate__icon").src = getDollar();
    }else if(this.value == kievCityName) {
        document.querySelector(".exchange-rate__icon").src = getRuble();
    }else if(this.value == minskCityName) {
        document.querySelector(".exchange-rate__icon").src = getRuble();
    }
    // Сохранение Cookie при выборе селекта:
    createCookie(cookiesCityKey, this.value, maxCookieDays);
    getMoneyXml(getIDByCity(this.value));
});



// При загрузке проверяем, какой город сохранен в Cookiе и установим выбранный город в качестве выбранного значения в селекте
function onLoadBody() {
    var currentCity = readCookie(cookiesCityKey);

    //todo send req && get values
     if(currentCity== null || currentCity == moscowCityName) {
         document.querySelector(".exchange-rate__icon").src = getDollar();
         currentCity = moscowCityName;
     }else if(currentCity == minskCityName) {
         document.querySelector(".exchange-rate__icon").src = getRuble();
     }else if(currentCity == kievCityName) {
         document.querySelector(".exchange-rate__icon").src = getRuble();
     }

      document.querySelector(".exchange-rate__text").textContent = " 0.0";
      document.getElementById("current-city-id").value = currentCity;

     getMoneyXml(getIDByCity(currentCity));




};


// Функция для создания Cookiе
function createCookie(city,value,days) {

    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = city+"="+value+expires+"; path=/";
}
// Функция для чтения Cookiе
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
// Функция для удаления Cookiе
function eraseCookie(name) {
    createCookie(name,"",-1);
}



  //
  //
  // // Функция для парсинга XML


  function getMoneyXml(id){

          //todo раскомментировать в релиз-версии
        //    $.ajax({
        //        type: "GET",
        //        url: "http://testnet.cyber-park.ru/currency.xml",
        //        dataType: "xml",
        //        success:  function(data){
        //          xmlParser(data, id)
        //        }
        //
        //    });

        readXml(id);

  }

function readXml(id){
    // var markers = null;
    $(document).ready(function () {
        $.get("../currency.xml", {}, function (xml){
            xmlParser(xml, id);
        });
    });
}


  function xmlParser(xml, id) {

      // перебираем все теги Valute
      $(xml).find("Valute").each(function(){

          if($(this).attr("ID") == id){
              var nominal = parseInt($(this).find("Nominal").html()); //  значение тега nominal
              var value = parseInt($(this).find("Value").html()); //  значение тега value
              convertValute(id, nominal, value);
            //   alert("xmlParser " +  nominal + " " + value + " " + value / nominal);
          }


        // alert("xmlParser" +  $(this).attr("ID"));

      });
  }

function convertValute(id, nominal, value){
    if(id == dollarID) {
         setCurrentRate(value / nominal);
    }else {
         setCurrentRate(nominal / value);
    }
}

function setCurrentRate(rate){
    document.querySelector(".exchange-rate__text").textContent = " " + parseFloat(rate).toFixed(2);
}





  // Элементы Image
