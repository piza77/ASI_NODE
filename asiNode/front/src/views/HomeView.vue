<template>
  <div>
    <h1>Bienvenido, {{ usuario.username }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {},
    };
  },

  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("usuario")) || {};
  },
};
</script>