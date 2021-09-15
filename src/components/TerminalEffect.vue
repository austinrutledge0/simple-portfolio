<template>
    <div class="typewriter-animation-container">
        <p class="name-text">{{ displayedString }}</p>
        <p class="typewriter-underscore" v-if="!props.nounderscore">_</p>
    </div>
</template>

<script>
import '../styles/global.css'
import { onMounted } from 'vue'
import { ref } from 'vue'

export default {
    name: 'TerminalEffect',
    props: {
        words: {
            type: Array,
        },
        norepeat: {
            type: Boolean,
        },
        nounderscore: {
            type: Boolean,
        },
        prefixEffectStaticText: {
            type: String,
        },
        prefixEffectArray: {
            type: Array,
        },
        timeBetweenPrefixWordChanges: {
            type: Number,
        },
        typeSpeed: {
            type: Number,
            required: true,
        },
        deleteSpeed: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        let displayedString = ref('')
        let currentWordIndex = 0
        let newCharacterIndex = 0
        let isFirstPass = true

        const typePrefixEffectMessage = () => {
            const currentWord = props.prefixEffectArray[currentWordIndex] + ' ' + props.prefixEffectStaticText
            let shouldAppend = false

            if (currentWord.length !== displayedString.value.length) {
                shouldAppend = true
            }
            if (shouldAppend) {
                let indexToAppend

                if (isFirstPass) {
                    indexToAppend = Math.abs(currentWord.length - displayedString.value.length - currentWord.length)
                } else {
                    indexToAppend = Math.abs(
                        currentWord.length -
                            (displayedString.value.length - props.prefixEffectStaticText.length) -
                            currentWord.length
                    )
                }

                if (isFirstPass) {
                    displayedString.value += currentWord.charAt(indexToAppend)
                } else {
                    displayedString.value = [
                        displayedString.value.slice(0, indexToAppend),
                        currentWord.charAt(indexToAppend),
                        displayedString.value.slice(indexToAppend),
                    ].join('')
                }
                setTimeout(typePrefixEffectMessage, props.typeSpeed)
                return
            } else {
                if (isFirstPass) {
                    isFirstPass = false
                }
                deletePrefixMessage()
                return
            }
        }
        const deletePrefixMessage = () => {
            if (displayedString.value.length >= props.prefixEffectStaticText.length + 1) {
                displayedString.value = displayedString.value.substring(1)
                setTimeout(deletePrefixMessage, props.typeSpeed)
            } else {
                if (currentWordIndex + 1 === props.prefixEffectArray.length) {
                    currentWordIndex = 0
                } else {
                    currentWordIndex++
                }
                typePrefixEffectMessage()
                return
            }
        }
        const typeMessage = () => {
          const displayedStringLength = displayedString.value.length;
            const currentWord = props.words[currentWordIndex]

            if (displayedStringLength === 0) {
                displayedString.value += currentWord.charAt(0)
                setTimeout(typeMessage, props.typeSpeed)
                return
            }

            if (displayedStringLength !== currentWord.length) {
                const charactersLeft = currentWord.length - displayedStringLength
                const nextIndex = currentWord.length - charactersLeft
                newCharacterIndex = nextIndex
                displayedString.value += currentWord.charAt(newCharacterIndex)
                setTimeout(typeMessage, props.typeSpeed)
            } else {
                if (props.norepeat && currentWordIndex + 1 === props.words.length) {
                    return
                } else {
                    setTimeout(deleteMessage, props.deleteSpeed)
                }
                if (currentWordIndex + 1 !== props.words.length) {
                    currentWordIndex++
                } else {
                    if (!props.norepeat) {
                        currentWordIndex = 0
                    }
                    return
                }
            }
        }

        const deleteMessage = () => {
            if (currentWordIndex !== props.words.length) {
                if (displayedString.value.length > 0) {
                    displayedString.value = displayedString.value.slice(0, displayedString.value.length - 1)
                    setTimeout(deleteMessage, props.deleteSpeed)
                    return
                } else {
                    setTimeout(typeMessage, props.typeSpeed)
                }
            } else {
                if (!props.norepeat) {
                    setTimeout(typeMessage, props.typeSpeed)
                }
                return
            }
        }

        onMounted(() => {
            props.prefixEffectStaticText && props.prefixEffectArray
                ? setTimeout(typePrefixEffectMessage, props.typeSpeed)
                : setTimeout(typeMessage, props.typeSpeed)
        })

        return {
            displayedString,
            currentWordIndex,
            props,
        }
    },
}
</script>
