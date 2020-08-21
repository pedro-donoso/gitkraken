<template>
  <div class="users">
      <ul v-if="users.length >= 5">
          <li v-for="user in users" :key="user.id">
              {{user.name}}
          </li>
      </ul>
      <p v-else>
          No hay más de 6 usuarios
      </p>
      <br>
  </div>
</template>



<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
        { id: 3, name: "test3" },
        { id: 4, name: "test4" },
        { id: 5, name: "test5" }
      ],
    };
  },

  //ciclo de vida
  mounted() {
    console.log("Componente Users montado");
  },
  destroyed() {
    console.log("Componente Users destruido");
  },
};
</script>

<style lang="sass" scoped>

</style>