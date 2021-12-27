<template>
    <Nyanimation></Nyanimation>
    <div class="centered-container">
        <div>
            <!--            <router-link class="link" to='/about'>/about</router-link>-->
            <!--            <router-link class="link" to=”/contact”>/contact</router-link>-->
            <router-link class="link" to="/projects">/projects</router-link>
            <router-link class="link" to="/demos">/demos</router-link>
        </div>
        <div>
            <TerminalEffect
                :prefix-effect-static-text="staticString"
                :prefix-effect-array="prefixEffectArray"
                :typeSpeed="150"
                :deleteSpeed="100"
            />
        </div>
        <div>
            <p class="follow-me-text">Find me:</p>
        </div>

        <div class="follow-me-links">
            <a href="https://github.com/austinrutledge0" target="_blank" class="link">Github</a>
            <a href="https://www.linkedin.com/in/austinrutledge/" target="_blank" class="link">LinkedIn</a>
            <a href="*" target="_blank" class="link" @click='openResume'>Resume</a>
            <a href="https://medium.com/@austinrutledge0" target="_blank" class="link">Medium Articles</a>
        </div>
    </div>
</template>

<script>
import '../styles/global.css'
import TerminalEffect from '@/components/TerminalEffect'
import Nyanimation from '@/components/nyan/Nyanimation'

export default {
    name: 'HomePage',
    components: { Nyanimation, TerminalEffect },
    setup() {
        const messages = [`Web Development by Austin Rutledge`]
        const staticString = 'Development by Austin Rutledge'
        const prefixEffectArray = ['Web', 'Desktop Application', 'Alexa Skill', 'Google Assistant']
        const openResume = () => {
           const link = document.createElement('a');
           link.href = '/AustinRutledgeResume.pdf';
           link.download = 'AustinRutledgeResume.pdf';
            link.dispatchEvent(new MouseEvent('click'));
            window.open('/AustinRutledgeResume.pdf', '_blank');


        }
        return {
            openResume,
            messages,
            staticString,
            prefixEffectArray,
        }
    },
}
</script>
<style scoped>
body {
    overflow: hidden;
}
</style>
