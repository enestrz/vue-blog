<template>
  <nav>
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link to="/admin">Admin</router-link>
  </nav>
  <router-view/>
</template>

<style>
html{
  font-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
