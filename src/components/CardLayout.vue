<template>
    <div>
        <modal
            v-show="isModalVisible"
            :toggleModal="toggleModal"
        />
        <img :src="require('@/assets/images/' + projectImgUrl)" class='projectImage'>
        <h3>{{ projectName }}</h3>
        <p class='projectDescription'>{{ projectDescription }}</p>
        <div class="githubButton">
            <div class="builtWithRow">
                <p>Built with:</p>

               <p v-for='mw of madeWith' :key='mw'>{{mw}}</p>
            </div>
            <div class="linkButtonContainer">
                <a :href="projectUrl" target='_blank'>Check out {{ projectName }}</a>
            </div>
        </div>
        <button @click="toggleModal"></button>
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
    width: 100%;
    height: 250px !important;
}
.builtWithRow{
    display: flex;
    flex-direction: row;
    font-size: 14px;
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
    width:calc((100% - 16px) / 3)
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
import {  ref } from 'vue'
import modal from '@/components/Modal';
import Modal from '@/components/Modal'

export default {
    name: 'Project',
    components: { Modal },
    props: {
        project: {
            type: Object,
        },
        components:{
            modal
        }

    },

    setup(props) {
        const projectName = ref(props.project.projectName)
        const projectDescription = ref(props.project.projectDescription)
        const projectImgUrl = ref(props.project.projectImgUrl)
        const projectUrl= ref(props.project.projectUrl)
        const madeWith = ref(props.project.builtWith)
        let isModalVisible = ref(false);

       // const modalOpen = ref(false)
        console.log(props.project.builtWith)
        const toggleModal = () => {
            isModalVisible.value = !isModalVisible.value;
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
            isModalVisible


        }
    },
}
</script>
