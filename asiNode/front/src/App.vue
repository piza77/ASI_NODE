<template>
  <div>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/usuarios">Usuarios</router-link> |
      <router-link to="/register">Registro</router-link> |

      <!-- Botón de Logout -->
      <button @click="logout" v-if="isLogged">Salir</button>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    // Saber si hay un usuario en localStorage
    isLogged() {
      return localStorage.getItem("usuario") !== null;
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("usuario");
      this.$router.push("/login");
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
