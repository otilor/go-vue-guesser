const guessComponent = {
    template:
    `<input name="guess" class="input is-small" type="text" placeholder="Guess a number">`
}
new Vue({
    el: '#app',

    computed: {

    },
    components: {
      'guess-component': guessComponent
    }
})