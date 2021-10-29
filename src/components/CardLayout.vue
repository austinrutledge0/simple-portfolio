<template>
    <div class="project">
        <modal v-show="isModalVisible" :toggleModal="toggleModal">
            <template v-slot:header>
                <h3>{{ projectName }}</h3>
            </template>
            <template v-slot:body>
                <p class="projectDescription">{{ projectDescription }}</p>
            </template>
            <template v-slot:builtWith>
                <div class="builtWithRow">
                    <p>Built with:</p>
                    <p v-for="mw of madeWith" :key="mw">{{ mw }}</p>
                </div>
            </template>
        </modal>
        <img :src="require('@/assets/images/' + projectImgUrl)" class="projectImage" />
        <h3>{{ projectName }}</h3>
        <div class="buttonRow">
            <router-link v-if="demoUrl" :to="demoUrl">
                <button class="button">Live Demo</button>
            </router-link>
            <button v-if="projectUrl" class="button" @click="navigateToProjectSite">Project Site</button>
            <button v-if="projectDescription" class="button right" @click="toggleModal">Project Details</button>
            <button v-if="projectRepoUrl" class="button right" @click="navigateToProjectRepo">
                Project Repository
            </button>
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
    .project {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #00ff01;
        width: 100%;
    }
}
.button {
    font-family: 'IBM Plex Mono', monospace;
    width: 100px;
    height: 50px;
    cursor: pointer;
    border: 1px solid #00ff01;
    background-color: transparent;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #00ff01;
}
.buttonRow {
    display: flex;
    flex-direction: row;
}
.right {
    margin-left: 10px;
}
.projectImage {
    width: 100%;
    height: 250px !important;
}
.builtWithRow {
    display: flex;
    flex-direction: row;
    font-size: 14px;
}
.project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid #00ff01;
    width: calc((100% - 16px) / 3);
}
@media (max-width: 600px) {
    .project {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        border: 1px solid #00ff01;
        width: 100%;
    }
}
.projectDescription {
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
import Modal from '@/components/Modal'

export default {
    name: 'Project',
    components: { Modal },
    props: {
        project: {
            type: Object,
        },
    },

    setup(props) {
        const projectName = ref(props.project.projectName)
        const projectDescription = ref(props.project.projectDescription)
        const projectImgUrl = ref(props.project.projectImgUrl)
        const projectUrl = ref(props.project.projectUrl)
        const demoUrl = ref(props.project.demoUrl)
        const madeWith = ref(props.project.builtWith)
        const projectRepoUrl = ref(props.project.projectRepoUrl)
        let isModalVisible = ref(false)

        // const modalOpen = ref(false)
        console.log(props.project.builtWith)

        const toggleModal = () => {
            isModalVisible.value = !isModalVisible.value
        }
        const navigateToProjectSite = () => {
            window.open(projectUrl.value)
        }

        const navigateToProjectRepo = () => {
            window.open(projectRepoUrl.value)
        }

        const backgroundColors = ['#D000C3', '#FF40FF', '#00FCD3', '#00FE8D', '#00FE6E']
        return {
            projectDescription,
            backgroundColors,
            projectName,
            projectImgUrl,
            props,
            projectUrl,
            madeWith,
            toggleModal,
            isModalVisible,
            navigateToProjectSite,
            navigateToProjectRepo,
            projectRepoUrl,
            demoUrl,
        }
    },
}
</script>
