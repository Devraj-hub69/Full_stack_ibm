// delivery.js file h
// const socket = new WebSocket("ws://localhost:3000"); // WebSocket Server Se Connect

let map, deliveryMarker, customerMarker, routePath, socket;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 20.5937, lng: 78.9629},
        zoom: 12,
    });

    deliveryMarker = new google.maps.Marker({
        position: { lat: 22.760974, lng: 88.37024},
        map: map,
        title: 'Delivery Partner',
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        label: {
            text: "Pick_up",
            color: "yellow",
            fontWeight: "bold",
            fontSize: "14px",
        },
    });
    

    customerMarker = new google.maps.Marker({
        position: { lat: 22.7595, lng: 88.3956},
        map: map,
        title: 'Customer Location',
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        label: {
            text: "Drop_Off",
            color: "yellow",
            fontWeight: "bold",
            fontSize: "14px",
        },
    });

      routePath = new google.maps.Polyline({
        path: [
            {  lat: 22.760974, lng: 88.37024 }, // Pickup location (Kolkata)
            { lat: 22.7595, lng: 88.3956 } // drop location
        ],
        geodasic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [{
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 2,  // Dotted size
                fillColor: 'yellow',
                fillOpacity: 1,
                strokeColor: 'green',
                strokeOpacity: 1
            },
            offset: '0',
            repeat: '10px' // Distance between dots
        }]
     });
    routePath.setMap(map);

    initializeSearchBoxes();
    connectWebSocket();
}


function initializeSearchBoxes() {
    let fromInput = document.getElementById('from');
    let toInput = document.getElementById('to');

    let fromSearchBox = new google.maps.places.SearchBox(fromInput);
    let toSearchBox = new google.maps.places.SearchBox(toInput);

    fromSearchBox.addListener("places_changed", () => {
        let places = fromSearchBox.getPlaces();
        if (places.length === 0) return;
        let place = places[0];

        deliveryMarker.setPosition(place.geometry.location);
        // map.setCenter(place.geometry.location);
        updateRoute();

        // Send location update to WebSocket
        // sendLocationUpdate(place.geometry.location.lat(), place.geometry.location.lng());
        // updateRoute();
        
    });

    toSearchBox.addListener("places_changed", () => {
        let places = toSearchBox.getPlaces();
        if (places.length === 0) return;
        let place = places[0];

        customerMarker.setPosition(place.geometry.location);
        updateRoute();
    });
}

function connectWebSocket() {
    socket = new WebSocket("ws://localhost:3000");  // WebSocket server se connect karo

    socket.onopen = () => {
        console.log("WebSocket connected successfully.");
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Received Data:", event.data);

        // Customer ka location update karein
        if (data.latitude && data.longitude) {
            customerMarker.setPosition(new google.maps.LatLng(data.latitude, data.longitude));
            updateRoute();
        }
    };

    // socket.onerror = (error) => {
    //     console.error("WebSocket error:", error);
    // };

    socket.onclose = () => {
        console.log("WebSocket connection closed. Reconnecting in 3 seconds...");
        setTimeout(connectWebSocket, 3000);  // 3 seconds ke baad reconnect karega
    };
}

function startTracking() {
    // console.log("click")
    if(navigator.geolocation){
     navigator.geolocation.watchPosition(
            (position) => {
                const locationData = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                console.log("Sending Location:", locationData);
                socket.send(JSON.stringify(locationData)); // Server ko location send karna
                // sendLocationUpdate(locationData.latitude, locationData.longitude);
                // updateRoute();
            },
            (error) => {
                console.error("Error Getting Location:", error);
                enableHighAccuracy: true ;
            }
        );
    } else {
        console.log("Geolocation not supported by this browser.");
    }
}

// function sendLocationUpdate(lat, lng) {
//     if (socket.readyState === WebSocket.OPEN) {
//         socket.send(JSON.stringify({ latitude: lat, longitude: lng }));
//     }
// }

function updateRoute() {
    if (deliveryMarker.getPosition() && customerMarker.getPosition()) {
        let path = [deliveryMarker.getPosition(), customerMarker.getPosition()];
        routePath.setPath(path);
    }
}
window.initMap = initMap;

// function sendLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.watchPosition(
//             (position) => {
//                 const locationData = {
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                 };
//                 console.log("Sending Location:", locationData);
//                 socket.send(JSON.stringify(locationData)); // Server ko location send karna
//             },
//             (error) => {
//                 console.error("Error Getting Location:", error);
//             }
//         );
//     } else {
//         console.log("Geolocation not supported by this browser.");
//     }
// }

// // Page Load hone par location bhejna shuru kare
// sendLocation();

// let watchId = null;


// connectWebSocket();

// window.initializeSearchBoxes = initializeSearchBoxes;