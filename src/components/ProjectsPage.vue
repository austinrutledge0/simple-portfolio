<template>
    <h2>My Recent Projects</h2>
    <div class="projectsWrapper">
        <CardLayout v-for="project in projects" :key="project.id" :project="project"></CardLayout>
    </div>
</template>

<script>
import CardLayout from './CardLayout'

export default {
    name: 'ProjectsPage',
    components: { CardLayout },

    setup() {
        let projects = [
            {
                id: 1,
                projectName: 'Pawru Telemedicine Video Portal',
                projectUrl: 'https://petproconnect.com/',
                projectRepoUrl: '',
                projectDescription:
                    'I built the front end components for the next generation Petpro telemedicine video player. Soon to be rebranded as Pawru. I used the Vonage OpenTok api to generate and stream sessions. This component was also integrated with their billing system to ensure that customers were charged accurately for the length of their appointments.',
                builtWith: ['React,', 'Carbon UI,', 'Typescript,', 'Node.js,', 'Vonage OpenTok Api'],
                projectImgUrl: 'PawruLogo.svg',
            },
            {
                id: 2,
                projectName: 'Travelcard Fuel Portal',
                projectUrl: 'https://portal.travelcardfuels.com/',
                projectRepoUrl: '',
                projectDescription:
                    'The account management portal for the Travelcard fuel system. Part of the CFN network. This portal allows clients to login and view their purchase history, view their active fuel cards, modify and cancel fuel cards, and create/modify sub-users for their account.',
                builtWith: ['React,', 'Material UI,', 'Typescript,', 'Node.js'],
                projectImgUrl: 'TravelCardLogo.png',
            },
            {
                id: 3,
                projectName: 'OpenEugene Marketing Site',
                projectUrl: 'http://openeugene.programminghippie.com/',
                projectRepoUrl: 'https://github.com/austinrutledge0/openeugene-marketing-site',
                projectDescription:
                    'Open Eugene was a Code for America Brigade that I used to be a part of in Eugene, Oregon. This was a marketing website that I built for them while sharpening my React skills.',
                builtWith: ['React,', 'Material UI,', 'Typescript'],
                projectImgUrl: 'OpenEugeneLogo.png',
            },
            {
                id: 4,
                projectName: 'intoCareers Marketing Site',
                projectUrl: 'https://intocareers.org/',
                projectRepoUrl: null,
                projectDescription:
                    'For part of my degree internship I decided to step out of my comfort zone and learn Vue. The entire application is rendered server-side with Nuxt.js. Building this application allowed me to accelerate my early learning in single page applications and helped shape the developer I am today',
                builtWith: ['Vue.js,', 'Nuxt.js'],
                projectImgUrl: 'intoCareersLogo.png',
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
