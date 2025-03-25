// customer.js file h
let map, customerMarker, socket;

// const socket = new WebSocket('ws://localhost:3000');

function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 20.5937, lng: 78.9629},
        zoom: 12,
    });

    customerMarker = new google.maps.Marker({
        map,
        title: "Customer",
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    });

    // deliveryMarker = new google.maps.Marker({
    //     map,
    //     title: "Delivery",
    //     icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    // });

    connectWebSocket();

}

function connectWebSocket() {
    socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => console.log("WebSocket connected.");

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Received Location:", data);

        if (data.latitude && data.longitude) {
            customerMarker.setPosition(new google.maps.LatLng(data.latitude, data.longitude));
            map.setCenter(customerMarker.getPosition());
        }
    };

    socket.onclose = () => {
        console.log("WebSocket disconnected. Reconnecting...");
        setTimeout(connectWebSocket, 3000);
    };
}

window.initMap = initMap;



    // deliveryMarker = new google.maps.Marker({
    //     position: {lat: 0, lng: 0},
    //     map: map,
    //     title: 'Delivery Partner',
    //     icon: {
    //         url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    //           labelOrigin: new google.maps.Point(15, 40)
    //         },
    //         label: {
    //             text: "Pick_up",
    //             color: "yellow",
    //             fontWeight: "bold",
    //             fontSize: "14px",
    //         },
    // });

    // customerMarker = new google.maps.Marker({
    //     position: {lat: 0, lng: 0},
    //     map: map,
    //     title: 'Customer Location',
    //     icon: {
    //         url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    //         labelOrigin: new google.maps.Point(15, 40)
    //     },
    //     label: {
    //         text: "Drop_off",
    //         color: "yellow",
    //         fontWeight: "bold",
    //         fontSize: "14px",
    //     },

    // });



    // routePath = new google.maps.Polyline({
    //     path: [
    //         { lat: 0, lng: 0 }, // Pickup location (Kolkata)
    //         { lat: 0, lng: 0 } // drop location
    //     ],
    //     geodasic: true,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 2,
    //     icons: [{
    //         icon: {
    //             path: google.maps.SymbolPath.CIRCLE,
    //             scale: 2,  // Dotted size
    //             fillColor: '#000000',
    //             fillOpacity: 1,
    //             strokeColor: '#000000',
    //             strokeOpacity: 1
    //         },
    //         offset: '0',
    //         repeat: '10px' // Distance between dots
    //     }]
    // });
    // routePath.setMap(map);



    // // from 
    // const fromInput = document.getElementById('from');
    // fromSearchBox = new google.maps.places.SearchBox(fromInput);

    // // to
    // const toInput = document.getElementById('to');
    // toSearchBox = new google.maps.places.SearchBox(toInput);


    // map.addListener("bounds_changed", () =>{ // search box ke bounds ko map ke sath adjust 
    //     fromSearchBox.setBounds(map.getBounds());
    //     toSearchBox.setBounds(map.getBounds());
    // });

    // fromSearchBox.addListener("Place_changed", () =>{
    //     // const places = fromSearchBox.getPlace();
    //     // if (places.length === 0) return;

    //     const place =fromSearchBox.getPlace();
    //     if (!place || !place.geometry || !place.geometry.location) return;

    //     deliveryMarker.setPosition(place.geometry.location);
    //     map.setCenter(place.geometry.location);
    //     updateRoute(); // Route Update
    // });
    
    // //  To Location Select Kare
    // toSearchBox.addListener("place_changed", () => {
    //     // const place = toSearchBox.getPlaces();
    //     // if (places.length === 0) return;

    //     const place = toSearchBox.getPlace();
    //     if (!place || !place.geometry || !place.geometry.location) return;

    //     customerMarker.setPosition(place.geometry.location);
    //     updateRoute(); // Route Update
    // });




    // // const ws = new WebSocket('ws://localhost:3000');

    // socket.onmessage = (event) => {
    //     const locationData = JSON.parse(event.data);
    //     console.log('Location received:', locationData);

    //     if(locationData.type === 'delivery'){
    //         const newPosition = {
    //             lat: locationData.latitude,
    //             lng: locationData.longitude,
    //         };
    //         // maker ko naye position pr sset karna
    //         deliveryMarker.setPosition(newPosition);
    //         map.setCenter(newPosition);
    //     }
    // };

    // // Route Update Function
    // function updateRoute() {
    //     if (!deliveryMarker.getPosition() || !customerMarker.getPosition()) return;
        
    //     routePath.setPath([
    //         deliveryMarker.getPosition(),
    //         customerMarker.getPosition()
    //     ]);
    // }

    
    
    // // function initMap() {
    // //     map = new google.maps.Map(document.getElementById("map"), {
    // //         center: { lat: 0, lng: 0 },
    // //         zoom: 15,
    // //     });
    
    // //     marker = new google.maps.Marker({
    // //         position: { lat: 0, lng: 0 },
    // //         map: map,
    // //         title: "Delivery Partner",
    // //     });
    // // };
    // window.initMap = initMap;
