<template>
    <h2>Live Demos</h2>
    <div class="projectsWrapper">
        <CardLayout v-for="project in projects" :key="project.id" :project="project"></CardLayout>
    </div>
</template>

<script>
import CardLayout from './CardLayout'

export default {
    name: 'DemosPage',
    components: { CardLayout },

    setup() {
        let projects = [
            {
                id: 1,
                projectName: 'ISS Location Map',
                demoUrl: '/demos/map',
                projectImgUrl: 'issImage.jpg',
            },
        ]
        return {
            projects,
        }
    },
}
</script>

<style scoped>
.projectsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
