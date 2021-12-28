<template>
    <div v-if="centerCoordinates.lng !== 0 && centerCoordinates.lat !== 0">
        <h2>Need A Custom Map? No Problem!</h2>
        <p>
            This map uses live data from the
            <a href="http://open-notify.org/Open-Notify-API/ISS-Location-Now/">ISS Location Rest API</a> to continuously
            track and mark the location of the International Space Station above Earth.
        </p>
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="centerCoordinates" :zoom="8">
            <Marker :options="satelliteMarkerOptions" />
            <Marker
                v-for="marker in trackingMarkers"
                :key="marker.lat"
                :options="{ icon: DotIcon, position: marker }"
            />
        </GoogleMap>
    </div>
    <div v-else>
        <h2>Map could not be loaded</h2>
    </div>
</template>
<script>
import { GoogleMap, Marker } from 'vue3-google-map'
import DotIcon from '@/assets/images/TrackingDot.svg'
import SatelliteIcon from '@/assets/images/SatelliteIcon.svg'
import { defineComponent, inject, onMounted, ref } from 'vue'
export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const injectAxios = inject('axios')
        const apiKey = ref(process.env.VUE_APP_NASA_API_KEY)
        const centerCoordinates = ref({ lat: 0, lng: 0 })
        const satelliteMarkerOptions = ref({ icon: SatelliteIcon, position: { lat: 0, lng: 0 } })
        const trackingMarkers = ref([])

        const getIssLocation = async () => {
            await injectAxios.get('http://api.open-notify.org/iss-now.json').then((response) => {
                // prevent the default marker location from being marked on the map
                if (
                    satelliteMarkerOptions.value.position.lat !== 0 &&
                    satelliteMarkerOptions.value.position.lng !== 0
                ) {
                    trackingMarkers.value.push(satelliteMarkerOptions.value.position)
                }

                centerCoordinates.value = {
                    lat: Number(response.data.iss_position.latitude),
                    lng: Number(response.data.iss_position.longitude),
                }
                satelliteMarkerOptions.value = {
                    icon: SatelliteIcon,
                    position: {
                        lat: Number(response.data.iss_position.latitude),
                        lng: Number(response.data.iss_position.longitude),
                    },
                }
            })
        }

        onMounted(() => {
            getIssLocation()
            // Poll the ISS coordinates every 5 seconds. This is the fastest poll rate approved by the docs. Please be respectful of their limitations when forking this code
            setInterval(() => {
                getIssLocation()
            }, 5000)
        })

        return { centerCoordinates, SatelliteIcon, DotIcon, trackingMarkers, apiKey, satelliteMarkerOptions }
    },
})
</script>
