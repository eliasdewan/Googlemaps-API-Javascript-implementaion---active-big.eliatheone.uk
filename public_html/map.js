/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global google */

var latlng = new google.maps.LatLng(-34.397, 150.644);
var typeId = google.maps.MapTypeId.ROADMAP;
var mapOptions =
        {
            center: latlng,
            zoom: 8,
            mapTypeId: typeId,
            disableDefaultUI: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP,
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.HYBRID,
                    google.maps.MapTypeId.SATELLITE,
                    google.maps.MapTypeId.TERRAIN
                ]
            }
        };
var map; // Main map variable
function initialize() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, mapOptions);

    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: latlng,
        radius: 5000
    });
    var marker = new google.maps.Marker({
        position: {lat: -34.4, lng: 150.6},
        map: map,
        title: 'I am here',
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 15
        }
    });


    var markerGreen = new google.maps.Marker({
        position: {lat: -34.5, lng: 150.5},
        map: map,
        title: 'I am here Green',
        icon: ' http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                //can be pink, yellow or purple
    });
    var InfoWindow = new google.maps.InfoWindow({content: 'This is my green marker!'});
    // we can use full html divs and set their class and customise in html style tags,(the class)
    google.maps.event.addListener(markerGreen, 'click', function () {
        InfoWindow.open(map, markerGreen);
    });

}
;





// -- action and buttons code -- //
function lock0()
{
    var mapOptions = {
        // coordinates for hydepark
        center: new google.maps.LatLng(51.51, -0.17),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

function africa() {
    map.panTo(new google.maps.LatLng(5, 20));
    map.setZoom(3);
}
//Loacation pan to and marker
var randomCount = 1;
function random() {
    var latitude = Math.floor(Math.random() * 90 * 2 * 10000) / 10000 - 90; // -90 to 90
    var longitude = Math.floor(Math.random() * 180 * 2 * 10000) / 10000 - 180; // -180 to 90
    map.panTo(new google.maps.LatLng(latitude, longitude));
    // map.setZoom(3);

    //alert(latitude+" "+longitude);

    // adding the marker
    var randomMarker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map,
        title: "Randmo marker " + randomCount

    });

    //Message
    var InfoWindow = new google.maps.InfoWindow({content: 'This is random marker n ' + randomCount + ' !'});
    // we can use full html divs and set their class and customise in html style tags,(the class)
    google.maps.event.addListener(randomMarker, 'click', function () {
        InfoWindow.open(map, randomMarker);
    });
    randomCount++;
}


function toSatellite() {
    map.setMapTypeId('satellite');
}
function toRoadmap() {
    map.setMapTypeId('roadmap');
}
function toHybrid() {
    map.setMapTypeId('hybrid');
}
function toTerrain() {
    map.setMapTypeId('terrain');
}
function zoomIn() {
    map.setZoom(map.getZoom() + 1);
}
function zoomOut() {
    map.setZoom(map.getZoom() - 1);
}

function circle() {
    var lat = -34.397;
    var lng = 150.644;
    map.setZoom(6);

    map.panTo({lat: lat - 1, lng: lng - 1});
    new google.maps.Marker({position: {lat: lat - 1, lng: lng - 1}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat - 2, lng: lng - 2}), 1000);
    new google.maps.Marker({position: {lat: lat - 2, lng: lng - 2}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat - 3, lng: lng - 1}), 2000);
    new google.maps.Marker({position: {lat: lat - 3, lng: lng - 1}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat - 4, lng: lng}), 3000);
    new google.maps.Marker({position: {lat: lat - 4, lng: lng}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat - 3, lng: lng + 1}), 4000);
    new google.maps.Marker({position: {lat: lat - 3, lng: lng + 1}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat - 2, lng: lng + 2}), 5000);
    new google.maps.Marker({position: {lat: lat - 2, lng: lng + 2}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat - 1, lng: lng + 1}), 6000);
    new google.maps.Marker({position: {lat: lat - 1, lng: lng + 1}, map, title: "Randmo marker "});
    setTimeout(() => map.panTo({lat: lat, lng: lng}), 7000);
    new google.maps.Marker({position: {lat: lat, lng: lng}, map, title: "Randmo marker "});
}




function rectangle() {
//alert("for showing message");
    var lat = -34.397;
    var lng = 150.644;
    //var position = {lat: lat, lng: lng};
    //map.panTo(position);
    map.panTo({lat: lat - 1, lng: lng});
    setTimeout(() => map.panTo({lat: lat - 1, lng: lng - 1}), 1000);
    setTimeout(() => map.panTo({lat: lat, lng: lng - 1}), 2000);
    setTimeout(() => map.panTo({lat: lat, lng: lng}), 3000);
}

//X = 5 + cos(5) * 5;
//Y = 5 + sin(5) * 5;

//X := originX + cos(angle)*radius;
//Y := originY + sin(angle)*radius;
function randomMarker() {
    //alert("started");
    var angle = 0;
    var radius = 1;
    var orilat = -34.397;
    var orilng = 150.644;
    var delay = 500;
    map.panTo({lat: orilat, lng: orilng});
    // angle - radius - orginal lat and length - delay and pan to original location
    //  while (angle < 359) {
    //alert("workig" + angle);
    setInterval()(function () {
        var location = {lat: orilat + Math.cos(angle) * radius, lng: orilng + Math.cos(angle) * radius};
        new google.maps.Marker({position: location, map, title: "Randmo marker " + angle});
        angle++;
        delay += 500;
    }, delay);


    //var location = {lng: orilat + Math.cos(angle) * radius, lat: orilng + Math.cos(angle) * radius};
    //map.panTo(location);
    //}


    // setInterval(function () {alert("check" + angle);}, delay);
}




function setCoordinate() {
    var lon = prompt('Longitude');
    var lat = prompt('Latitude');
    map.panTo(new google.maps.LatLng(lon, lat));
    map.setMapTypeId('terrain');
    document.getElementById('coordbutton').innerHTML = 'Change coordinate | ' + lon + ',' + lat;
}



// -- dom actuib listeber
google.maps.event.addDomListener(window, 'load', initialize);




