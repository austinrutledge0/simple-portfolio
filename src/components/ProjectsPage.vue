<template>
    <h2>Projects</h2>
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
                projectUrl: 'https://pawru.com/',
                projectRepoUrl: '',
                projectDescription:
                    'Pawru is a still unreleased platform meant to replace Petpro Connect. I was hired to build the telemedicine video player for this product. I used the Vonage OpenTok api to handle theconnection and built custom React components for all of the controls. This product was especially challenging to build as the designs were updated daily. I had to continuously redesign my components to fi t the changes.',
                builtWith: ['React,', 'Carbon UI,', 'Typescript,', 'Node.js,', 'Vonage OpenTok Api'],
                projectImgUrl: 'PawruLogo.svg',
            },
            {
                id: 2,
                projectName: 'CFN Travelcard Fuel Portal',
                projectUrl: 'https://portal.travelcardfuels.com/',
                projectRepoUrl: '',
                projectDescription:
                    'The card management portal for the CFN Cardlock system in the Pacific Northwest. I was in charge of desigining and building the entire front end and back end.',
                builtWith: ['React,', 'Material UI,', 'Typescript,', 'Node.js'],
                projectImgUrl: 'TravelCardLogo.png',
            },
            {
                id: 3,
                projectName: 'OpenEugene Marketing Site',
                projectUrl: 'https://portal.travelcardfuels.com/',
                projectRepoUrl: 'https://github.com/austinrutledge0/openeugene-marketing-site',
                projectDescription:
                    'Open Eugene was a Code for America Brigade that I used to be a part of in Eugene, Oregon. This used to be thier marketing website. I built the entire site. The only part of the application that was not mine was the Kubernetes integration.',
                builtWith: ['React,', 'Material UI,', 'Typescript'],
                projectImgUrl: 'OpenEugeneLogo.png',
            },
            {
                id: 4,
                projectName: 'intoCareers Marketing Site',
                projectUrl: 'https://intocareers.org/',
                projectRepoUrl: null,
                projectDescription:
                    'For part of my degree internship I decided to step out of my comfort zone and learn Vue.js. The university wanted this rendered server side so I also had to learn Nuxt.js. Thisapplication was an excellent early learning opportunity for me because it helped me break into the world of progressive web applications and server side rendering at the same time. Ithelped me provide more value in my contract work at the time and helped me learn the basics of being a full stack web developer.',
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
