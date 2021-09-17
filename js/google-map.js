// Initialize and add the map
function initMap() {
    // The location
    const BitMesra = { lat: 23.4143, lng:  85.4401 };
    // The map, centered at Bit mesra
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: BitMesra,
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
      position: BitMesra,
      map: map,
    });
  }