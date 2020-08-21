<template>
  <div class="proximo">
    <!-- referencia con _ -->
    <miComponente ref="mi_componente" :msg="msg" @onClicked="btnClicked($event)" />
    <!-- referencia con _ -->
  </div>
</template>

<script>
import miComponente from "../components/miComponente";

export default {
  name: "proximo",
  components: {
    miComponente,
  },
  data() {
    return {
      msg: "Este mensaje se cargó en la data",
    };
  },

  //ciclo de vida
  mounted() {
    console.log("Componente Proximo montado");
  },
  destroyed() {
    console.log("Componente Proximo destruido");
  },

  // accedo a propiedad computada
  methods: {
    btnClicked($event) {
      alert(this.$refs.mi_componente.fullName);
    },
  },
  // accedo a propiedad computada
};
</script>

<style lang="sass" scoped>
</style>