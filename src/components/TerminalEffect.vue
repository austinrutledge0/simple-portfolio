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
    let displayedString = ref('');
    const words = ['wordwordwordwordwordword', 'sic']
    let currentWordIndex = 0;
    let newCharacterIndex = 0;
    const characterTypingDelay = 100
    const typeMessage = () => {
       console.log(1);

      const currentWord = words[currentWordIndex];
      // console.log(`Current word ${currentWord}`)
      // console.log(displayedString.value.length === 0)
      console.log(2)
      if(displayedString.value.length === 0)
      {
        console.log(3);
        // console.log('Charat ' + currentWord.charAt(0))
        console.log('1st iteration')
        console.log(currentWord.charAt(0))
        displayedString.value += currentWord.charAt(0)
        console.log(4);
        setTimeout(typeMessage, characterTypingDelay)
          return
      }
      console.log(`Displayed length ${displayedString.value.length }`)
      console.log(6);
      // console.log(`Word length ${words[currentWordIndex].length)}`)

       if(displayedString.value.length !== words[currentWordIndex].length)
      {
        console.log(7);
        console.log(`${displayedString.value.length} iteration`)
        console.log(8);
        const charactersLeft = currentWord.length - displayedString.value.length;
        const nextIndex = currentWord.length - charactersLeft
        newCharacterIndex = nextIndex
        console.log(9);
        console.log(`Appending ${currentWord.charAt(newCharacterIndex)} to ${displayedString.value} `)
        displayedString.value += currentWord.charAt(newCharacterIndex)
        console.log(10);


        setTimeout(typeMessage, characterTypingDelay)
        console.log(11);
      }
      else {
        console.log('end of word')
         console.log(12);
        console.log(currentWordIndex !== words.length)
         console.log(13);
        console.log(currentWordIndex)
         console.log(14);
        console.log(words.length)
        if(currentWordIndex + 1 !== words.length)
        {
          console.log(15);
          displayedString.value = ''
          currentWordIndex++
          console.log(16);
        setTimeout(typeMessage, characterTypingDelay)
        }
      else {
        console.log('FIN')
          console.log(17);
          return
        }


          // currentWordIndex++;
        //  newCharacterIndex = 0;
       //   deleteMessage()
      //    setInterval(() => {typeMessage()}, characterTypingDelay)

        // else {
        //   console.log('End of word')
        //   currentWordIndex = 0;
        //   newCharacterIndex = 0;
        //   deleteMessage()
        //   displayedString = ''
        // }

      }

    }

    //
    // const deleteMessage = () => {
    //   console.log('DELETE TYPED')
    //   const wordLength = displayedString.value.length
    //   for(let i = wordLength; i > 0; i--)
    //   {
    //     displayedString.value = displayedString.value.slice(displayedString.value.length, i) + displayedString.value.slice(i - 1);
    //   }
    //
    // }
    onMounted(() => {
      console.log('Mounted')
      setTimeout(typeMessage, characterTypingDelay)
    })



    return {
      displayedString,
      currentWordIndex
    }
  },

}
</script>
