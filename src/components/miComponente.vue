<template>
  <div class="miComponente">
      <h1>{{ msg }}</h1>
      <button @click="$emit('onClicked', msg)" class="btn btn-danger mb-5">Propiedad Computada</button>
      <!-- Propiedad Computada -->
      <p>{{fullName}}</p>
      <!-- Propiedad Computada -->
      <br>
  </div>
</template>

<script>
export default {
    name: 'miComponente',
    props: {
        msg: String
    },
    data(){
        return {
            name: 'esto es una',
            surname: 'Propiedad Computada'
        }
    },
    // utiliza comillas especiales ``
    computed: {
        fullName(){
            return `${this.name} ${this.surname}`;
        }
    }
     // utiliza comillas especiales ``
}
</script>

<style lang="sass" scoped>

</style>