<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/proximo">Próximo</router-link> |
      <router-link to="/users">Usuarios</router-link>
    </div>
    <!--permite ver contenido vue -->
    <router-view/>
    <!--permite ver contenido vue -->
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blueviolet;
  background: yellowgreen;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: orangered;
    }
  }
}

html{
  background: black
}

</style>
