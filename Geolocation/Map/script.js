var map;
var infoWindow;
var markers=[];
var service;
var curentCoords = { };


function displayLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;


    var pLocation = document.getElementById("location");
    pLocation.innerHTML+= latitude + ","+ longitude + "<br>";

    showMap(position.coords);
}

function showMap(coords){
    curentCoords.latitude = coords.latitude;
    curentCoords.longitude = coords.longitude;

    var googleLatLong = new google.maps.LatLng(
        coords.latitude,
        coords.longitude);
    
    var mapOptions = {
        zoom:11, 
        center: googleLatLong,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var mapDiv=document.getElementById('map');
    map=new google.maps.Map(mapDiv, mapOptions);
    service = new google.maps.places.PlacesService(map);
    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, "click", function(event){
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        curentCoords.latitude = latitude;
        curentCoords.longitude = longitude;

        var pLocation=document.getElementById('location');
        pLocation.innerHTML=latitude+","+longitude;
        map.panTo(event.latLng)

        createMarker(event.latLng);
    });
    showForm();
}

function makePlacesRequest(lat, lng){
    var query = document.getElementById("query").value;
    if (query){
        var placesRequest = {
            location: new google.maps.LatLng(lat, lng),
            radius: 1000,
            keyword: query
        }
        service.nearbySearch(placesRequest, function(results, status){
        
            if (status == google.maps.places.PlacesServicesStatus.OK){
                results.forEach(function(place){
                    console.log(place);
                 //create a marker for each place
                 });
            }
        });
    }else{
        console.log("No query entered for places to search")
    }
}



function  createMarker(latLng){
    var markerOptions = {
        position:latLng,
        map:map,
        clickable:true
    };

    var marker = new google.maps.Marker(markerOptions);
    marker.push(marker);

    google.maps.event.addListener(marker, "click", function(event){
        infoWindow.setContent("Location" + event.latLng.lat().toFixed(2) + "," + event.latLng.lng().toFixed(2));
        infoWindow.open(map, marker)
    });
}

function showForm(){
    var searchForm = document.getElementById("search");
    searchForm.style.visibility="visible";
    var button = document.querySelector('button');
    button.onclick = function(e){
        e.preventDefault();
        //make a places search request
        makePlacesRequest(curentCoords.latitude, curentCoords.longitude);

        console.log("Clicked the search button");
    };
}


function displayError(error) {
    var errors = ["Unknown error", "Permission Denied by user", "Position not available", "Timeout error"];
    var message = errors[error.code];
    console.warn("Error in getting your location: " + message, error.message);
}

window.onload = function(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    } else {
        alert("Sory, this browser doesn't support geolocation!");
    }
}