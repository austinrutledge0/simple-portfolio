<template>
    <div class="projectsWrapper">
        <Project v-for="project in projects" :key="project.id" :project="project"></Project>
    </div>
</template>

<script>
import Project from './Project'



export default {
    name: 'ProjectsPage',
    components: { Project },

    setup() {
        let projects = [
            {
                id: 1,
                projectName: 'Pawru',
                projectUrl: 'https://pawru.com/',
                projectRepoUrl: '',
                projectDescription:
                    'A new player in the Veterinary Telemecicine industry Pawru makes booking and accessing appointments easy. I was in charge of building the entire telemedicine suite for this application using the Vonage Opentok API',
                builtWith: ['React', 'Carbon UI', 'Typescript', 'Node.js', 'Vonage OpenTok'],
                projectImgUrl: 'PawruLogo.svg'
            },
            {
                id: 2,
                projectName: 'CFN Travelcard Fuel System',
                projectUrl: 'https://portal.travelcardfuels.com/',
                projectRepoUrl: '',
                projectDescription:
                    'The card management portal for the CFN Cardlock system in the Pacific Northwest. I was in charge of desigining and building the entire front end and back end.',
                builtWith: ['React', 'Material UI', 'Typescript', 'Node.js'],
                projectImgUrl: '../assets/images/TravelCardLogo.png'
            },
            {
                id: 3,
                projectName: 'OpenEugene Marketing Site',
                projectUrl: 'https://portal.travelcardfuels.com/',
                projectRepoUrl: 'https://github.com/austinrutledge0/openeugene-marketing-site',
                projectDescription:
                    'Open Eugene was a Code for America Brigade that I used to be a part of in Eugene, Oregon. This used to be thier marketing website. I built the entire site. The only part of the application that was not mine was the Kubernetes integration.',
                builtWith: ['React', 'Material UI', 'Typescript'],
                projectImgUrl: '../assets/images/OpenEugeneLogo.png'
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
}
</style>
