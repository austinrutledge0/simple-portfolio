<template>
    <div v-if="centerCoordinates.lng !== 0 && centerCoordinates.lat !== 0">
        <h2>Need A Custom Map? No Problem!</h2>
        <p>
            This map uses the
            <a href="https://wheretheiss.at/w/developer">Where Is The ISS At? REST API</a> to continuously
            track and mark the location of the International Space Station above Earth. The data is updated every 2 seconds.
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
            await injectAxios.get('https://api.wheretheiss.at/v1/satellites/25544').then((response) => {
                // prevent the default marker location from being marked on the map
                if (
                    satelliteMarkerOptions.value.position.lat !== 0 &&
                    satelliteMarkerOptions.value.position.lng !== 0
                ) {
                    trackingMarkers.value.push(satelliteMarkerOptions.value.position)
                }

                centerCoordinates.value = {
                    lat: Number(response.data.latitude),
                    lng: Number(response.data.longitude),
                }
                satelliteMarkerOptions.value = {
                    icon: SatelliteIcon,
                    position: {
                        lat: Number(response.data.latitude),
                        lng: Number(response.data.longitude),
                    },
                }
            })
        }

        onMounted(() => {
            getIssLocation()
            // Poll the ISS coordinates every second. This is the fastest poll rate approved by the docs. Please be respectful of their limitations when forking this code
            setInterval(() => {
                getIssLocation()
            }, 2000)
        })

        return { centerCoordinates, SatelliteIcon, DotIcon, trackingMarkers, apiKey, satelliteMarkerOptions }
    },
})
</script>
