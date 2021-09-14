<template>
    <div class="pikachu">
        <p class="pikachu-text">
            ⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ ⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿ ⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
            ⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀
        </p>
    </div>

    <div class="centered-container">
        <div>
            <a href="*" target="_blank" class="link">/about</a>
            <a href="*" target="_blank" class="link">/contact</a>
            <a href="*" target="_blank" class="link">/projects</a>
        </div>
        <div>
            <TerminalEffect
                :prefix-effect-static-text="staticString"
                :prefix-effect-array="prefixEffectArray"
                :typeSpeed="200"
                :deleteSpeed="1000"
                :words="messages"
            />
            <p class="follow-me-text">Find me on the interwebz:</p>
        </div>

        <div class="follow-me-links">
            <a href="https://github.com/austinrutledge0" target="_blank" class="link">Github</a>
            <a href="https://www.linkedin.com/in/austinrutledge/" target="_blank" class="link">LinkedIn</a>
            <a href="*" target="_blank" class="link">Resume</a>
        </div>
    </div>
</template>

<script>
import '../styles/global.css'
import TerminalEffect from '@/components/TerminalEffect'
export default {
    name: 'HomePage',
    components: { TerminalEffect },
    setup() {
        const messages = [`Web Development by Austin Rutledge`]
        const staticString = 'Development by Austin Rutledge'
        const prefixEffectArray = ['Web', 'Desktop Application']
        console.log(messages)

        return {
            messages,
            staticString,
            prefixEffectArray,
        }
    },
}
</script>
