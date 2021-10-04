<template>
    <div class="project">
        <img :src="require('@/../../assets/images/' + projectImgUrl + '')" class='projectImage'>
        <h3>{{ projectName }}</h3>
        <p class='projectDescription'>{{ projectDescription }}</p>
        <div class="githubButton">
            <div class="linkButtonContainer">
                <a href="*">Check out {{ projectName }}</a>
            </div>
        </div>
    </div>
</template>

<style>
@media (max-width: 600px) {
    .projectImage {
        width: 100%;
    }
    .githubButton {
        padding-bottom: 20px;
    }
}
.projectImage {
    flex: 1;
    width: 100%;
    max-height: 250px;
    height: 100%;
}
.noProjectImage {
    display: flex;
    width: 500px;
    height: 250px;
    justify-content: center;
    align-items: center;
}
.project{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid #00ff01;
    max-width: 500px;
}
.projectDescription{
   margin-left: 25px;
    margin-right: 25px;
    flex: 1;
    flex-direction: column;
}

.linkButtonContainer {
    padding-bottom: 0px;
}

.noImageBackgroundTitle {
    color: white;
    font-size: 2.5rem;
}
</style>

<script>
import '../styles/global.css'
import { ref } from 'vue'
export default {
    name: 'Project',
    props: {
        project: {
            type: Object,
        },
    },

    setup(props) {
        console.log(props)
        console.log(props.project.projectDescription)
        let projectName = ref(props.project.projectName)
        let projectDescription = ref(props.project.projectDescription)
        let projectImgUrl = ref(props.project.projectImgUrl)
        const backgroundColors = ['#D000C3', '#FF40FF', '#00FCD3', '#00FE8D', '#00FE6E']
        return {
            projectDescription,
            backgroundColors,
            projectName,
            projectImgUrl,
            props,
        }
    },
}
</script>
