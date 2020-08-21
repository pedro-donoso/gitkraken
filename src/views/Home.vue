<template>
  <div class="home">
    <h2>{{ title.toUpperCase() }}</h2>
    <h5>{{ company }}</h5>

    <hr />

    <h4>Agrega tu propio texto:</h4>

    <input type="text" v-model="title" class="mb-5" />

    <!--<button @click="updateTitle(newTitle)" class="btn btn-success">Quiero cambiar título</button>-->
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    const title = "Este título cambiará";
    return {
      title,
      newTitle: title,

      company: "Company Inc 2020",
    };
  },
  // ciclo de vida de los componentes

  //ciclo de vida
  mounted() {
    console.log("Componente home montado");
  },

  destroyed() {
    console.log("Componente Home destruido");
  },

  created() {
    setTimeout(() => {
      this.title = "El título ha cambiado!";
    }, 3000);
  },
  // ciclo de vida de los componentes

  methods: {
    updateTitle(title) {
      this.title = title;
    },
  },

  components: {},
};
</script>
