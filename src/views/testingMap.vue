<template>
    <div ref="map" style="height: 400px;"></div>
  </template>

  <script>
  export default {
    mounted() {
      const google = window.google;

      // Create a map instance
      const map = new google.maps.Map(this.$refs.map, {
        center: { lat: 0, lng: 0 }, // Default center coordinates
        zoom: 13 // Default zoom level
      });

      // Generate random latitude and longitude for user's location and job location
      const randomLat = () => (Math.random() * (180 - (-180)) - 180).toFixed(6); // Random latitude range: -180 to 180
      const randomLng = () => (Math.random() * (90 - (-90)) - 90).toFixed(6); // Random longitude range: -90 to 90

      const userLat = 5.398290;
      const userLng = 7.006740;
      const jobLat = 5.132230;
      const jobLng = 7.342310;

      // Create instances for user marker and job marker
      const userMarker = new google.maps.Marker({
        position: { lat: parseFloat(userLat), lng: parseFloat(userLng) },
        map: map,
        title: 'Your Current Location'
      });

      const jobMarker = new google.maps.Marker({
        position: { lat: parseFloat(jobLat), lng: parseFloat(jobLng) },
        map: map,
        title: 'Job Location'
      });

      // Create a DirectionsService object to use the route from user's location to job location
      const directionsService = new google.maps.DirectionsService();

      // Create a DirectionsRenderer object to display the route
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
          strokeColor: 'red',
          strokeOpacity: 0.7,
          strokeWeight: 5
        }
      });

      // Set the route between user's location and job location
      const request = {
        origin: { lat: parseFloat(userLat), lng: parseFloat(userLng) },
        destination: { lat: parseFloat(jobLat), lng: parseFloat(jobLng) },
        travelMode: google.maps.TravelMode.DRIVING // Specify the travel mode
      };

      directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
        } else {
          console.error('Error:', status);
        }
      });
    }
  };
  </script>