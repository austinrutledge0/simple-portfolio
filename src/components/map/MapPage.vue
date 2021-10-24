<template>
    <div  v-if='centerCoordinates.lng !== 0 && centerCoordinates.lat !== 0 && issCoordinates.lat !== 0 && issCoordinates.lng !== 0'>
        <h2>Need A Custom Map? No Problem!</h2>
        <p>
            This map uses live data from the ISS Location Rest API to continuously track and mark the location of the International Space Station above Earth.
        </p>
    <GoogleMap
        :api-key="apiKey"
        style="width: 100%; height: 500px"
        :center="issCoordinates"
        :zoom="15"
    >

        <Marker :options="{icon: SatelliteIcon , position: issCoordinates, size: '16px'}" />
            <Marker  v-for="marker in markers" :key="marker.lat" :options="{icon: SatelliteIcon , position: marker}" />

    </GoogleMap>
    </div>
    <div v-else>
    <h2>Please enable location to render map</h2>
    </div>
</template>
<script>
import { GoogleMap, Marker } from 'vue3-google-map'
import SatelliteIcon from "@/assets/images/SatelliteIcon.svg"
import { defineComponent, inject, onMounted, reactive, ref } from 'vue'
export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const injectAxios = inject('axios')  // inject axios
        console.log(process.env.VUE_APP_NASA_API_KEY)
        const apiKey = ref(process.env.VUE_APP_NASA_API_KEY)
        const centerCoordinates = reactive({lat:0, lng: 0})
        const issCoordinates = reactive({lat:0, lng: 0})
        let geolocation = ref('');
        const markers = ref([]);


        const getIssLocation = async () => {
            await injectAxios.get('http://api.open-notify.org/iss-now.json').then((response) => {
                console.log(response)
                Object.assign(issCoordinates, {lat:Number(response.data.iss_position.latitude), lng: Number(response.data.iss_position.longitude)})
                markers.value.push({lat:Number(response.data.iss_position.latitude), lng: Number(response.data.iss_position.longitude)})

            })

        };


         const getLocation = () => {
            if (navigator.geolocation) {
                geolocation = navigator.geolocation;
                navigator.geolocation.watchPosition(changeLocation);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
         const changeLocation = (position) => {
             Object.assign(centerCoordinates, {lat:position.coords.latitude, lng: position.coords.longitude})
        }

        onMounted(() => {
            getLocation();
            getIssLocation();

            setInterval(() => {getIssLocation()}, 5000);

        })

        return {geolocation, centerCoordinates, issCoordinates, SatelliteIcon, markers, apiKey}
    },
})
</script>

<style scoped>

</style>