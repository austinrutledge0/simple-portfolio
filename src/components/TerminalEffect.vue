<template>
  <div class="typewriter-animation-container">
  <p class="name-text">{{displayedString}}</p>
    <p class="typewriter-underscore" v-if="!props.nounderscore">_</p>
  </div>
</template>

<script>
import '../styles/global.css'
import {onMounted} from "vue";
import { ref } from "vue";
// import {onMounted} from "vue";

export default {
  name: 'TerminalEffect',
  props: {
    words: {
      type: Array,
      required: true
    },
    norepeat:{
      type: Boolean
    },
    nounderscore:{
      type: Boolean
    },
    typeSpeed:{
      type: Number,
      required: true
    },
    deleteSpeed:{
      type: Number,
      required: true
    }
  },
  setup (props) {
    let displayedString = ref('');
    let currentWordIndex = 0;
    let newCharacterIndex = 0;
    const typeMessage = () => {
      const currentWord = props.words[currentWordIndex];
      if(displayedString.value.length === 0)
      {
        displayedString.value += currentWord.charAt(0)
        setTimeout(typeMessage, props.typeSpeed)
          return
      }

       if(displayedString.value.length !== props.words[currentWordIndex].length)
      {
        const charactersLeft = currentWord.length - displayedString.value.length;
        const nextIndex = currentWord.length - charactersLeft
        newCharacterIndex = nextIndex
        displayedString.value += currentWord.charAt(newCharacterIndex)
        setTimeout(typeMessage, props.typeSpeed)
      }
      else {
         if(props.norepeat && currentWordIndex + 1 === props.words.length)
         {
           return
         }
      else {
           setTimeout(deleteMessage, props.deleteSpeed)
         }
        if(currentWordIndex + 1  !== props.words.length)
        {
          currentWordIndex++
        }
      else {
        if(!props.norepeat)
        {
          currentWordIndex = 0;
        }
    return
        }
      }
    }

    const deleteMessage = () => {
      if(currentWordIndex !== props.words.length)
      {
        if(displayedString.value.length > 0 )
        {
          displayedString.value = displayedString.value.slice(0, displayedString.value.length - 1);
          setTimeout(deleteMessage, props.deleteSpeed)
          return
        }
        else
        {
          setTimeout(typeMessage, props.typeSpeed)
        }
      }
      else {
        if(!props.norepeat)
        {
          setTimeout(typeMessage, props.typeSpeed)
        }
        return

      }

    }

    onMounted(() => {
      setTimeout(typeMessage, props.typeSpeed)
    })



    return {
      displayedString,
      currentWordIndex,
      props
    }
  },

}
</script>
