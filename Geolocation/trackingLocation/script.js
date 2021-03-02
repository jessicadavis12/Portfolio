var trackId = null;
var locations = [];

function displayLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var googleLoc = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude);
    locations.push(googleLoc);

    var pLocation = document.getElementById("location");
    pLocation.innerHTML+= latitude + ","+ longitude + "<br>";

    // var pInfo = document.getElementById('info');
    // var date = new Date(position.timestamp);
    // pInfo.innerHTML = "Location timestamp " + date + "<br>";
    // pInfo.innerHTML += "Accuracy of location: " + position.coords.accuracy + "meters<br>";

    // if (position.coords.altitude){
    //     pInfo.innerHTML += "Altitude:" + position.coords.altitude;
    //     } else {
    //     console.log("Altitude:", position.coords.altitude);
    //     }
    //     if (position.coords.altitudeAccuracy){
    //         pInfo.innerHTML += "with accuracy" + position.coords.altitudeAccuracy + "in meters";
    //         } else {
    //         console.log("Altitude accuracy:", position.coords.altitudeAccuracy);
    //         }
    // pInfo.innerHTML +="<br>";

    // if (position.coords.heading){
    //     pInfo.innerHTML += "heading:" + position.coords.heading +"<br>";
    //     } else {
    //     console.log("Heading:", position.coords.heading);
    //     }

    // if (position.coords.speed){
    //     pInfo.innerHTML += "Speed:" + position.coords.speed  +"<br>";
    //     } else {
    //     console.log("Speed:", position.coords.speed);
    //     }
}

function displayError(error) {
    var errors = ["Unknown error", "Permission Denied by user", "Position not available", "Timeout error"];
    var message = errors[error.code];
    console.warn("Error in getting your location: " + message, error.message);
}

function trackMe(){
    trackId = navigator.geolocation.watchPosition(displayLocation, displayError)
}

function clearTracking(){
    if (trackId){
        navigator.geolocation.clearWatch(trackId);
        trackId = null;
    }
}

function computeTotalDistance(){
    var totalDistance = 0;

    if (locations.length >1){
        for (var i=1; i< locations.length; i++){
            totalDistance += google.maps.geometry.spherical.computeDistanceBetween(locations[i=1], locations[i]);
        }
    }
    return totalDistance
}


window.onload = function() {
    var pDistance = document.getElementById('distance');
    var trackButton = document.querySelector("button");
    trackButton.onclick = function(e) {
        e.preventDefault();
        if (trackButton.innerHTML==="Start"){
            trackButton.innerHTML="Stop";
            trackMe();
        } else {
            trackButton.innerHTML = "Start";
            clearTracking();
            var d = computeTotalDistance();
            if (d>0){
                d=Math.round(d*1000)/1000;
                pDistance.innerHTML = "Total distance traveled: " +d + "km";
            } else {
                pDistance.innerHTML = "You didn't travel anywhere";
            }
        }
    };
}