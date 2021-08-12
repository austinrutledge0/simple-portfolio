<template>
  <p class="name-text">{{displayedString}}</p>




</template>

<script>
import '../styles/global.css'
import {onMounted} from "vue";
import { ref } from "vue";
// import {onMounted} from "vue";

export default {
  name: 'TerminalEffect',
  props: {
    // messageArray: null
  },
  setup (props) {
    console.log(props)




    // onMounted(async () => {
    //   console.log(props)
    //   const currentLetterIndex = 69
    //
    //
    //   for (let i = 0; i < this.message.length; i++) {
    //     this.displayedString.concat(this.message.charAt(i))
    //     this.sleep(2000)
    //   }
    // },
    //
    // ),
    let displayedString = ref('');
    const words = ['word', 'sucky sucky']
    let currentWordIndex = 0;
    let newCharacterIndex = 0;
    const typeMessage = () => {
      console.log(130);
      const currentWord = words[currentWordIndex];
      // if(displayedString.length > 0){
      //   displayedString
      // }
      // else {
      //   displayedString += words[currentWordIndex]
      // }
      console.log(13);
      console.log(displayedString.value.length);
      console.log(words[currentWordIndex].length)

      if(displayedString.value.length !== words[currentWordIndex].length)
      {
        console.log(14);
        if(displayedString.value.length !== 0)
        {
          const charactersLeft = currentWord.length - displayedString.value.length;
          const nextIndex = currentWord.length - charactersLeft
          newCharacterIndex = nextIndex
        }

        displayedString.value += currentWord.charAt(newCharacterIndex)
        console.log(displayedString.value)
        if(displayedString.value.length !== words[currentWordIndex].length)
        typeMessage()
      }
      else {
        if(words.length === currentWordIndex + 1)
            console.log('ded')
        currentWordIndex++;
        newCharacterIndex = 0;
        typeMessage()
      }

    }
    onMounted(() => {
      typeMessage()
    })

    return {
      displayedString,
      currentWordIndex
    }
  },

}
</script>
