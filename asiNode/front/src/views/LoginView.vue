<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Iniciar Sesión</h2>

      <label>Usuario:</label>
      <input type="text" v-model="username" />

      <label>Contraseña:</label>
      <input type="password" v-model="password" />

      <button @click="login">Ingresar</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginView',

  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },

  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
          username: this.username,
          password: this.password
        });

        console.log("Login OK:", response.data);

        // Guardar usuario en el navegador
        localStorage.setItem("usuario", JSON.stringify(response.data));

        // Redirigir al Home
        this.$router.push('/home');

      } catch (error) {
        console.log(error);
        this.errorMessage = "Usuario o contraseña incorrectos";
      }
    }
  }
}
</script>

<style>
.login-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.login-box {
  padding: 20px;
  width: 350px;
  background: #f3f3f3;
  border-radius: 12px;
  text-align: center;
}

.login-box input {
  width: 90%;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
}

button {
  background-color: #007acc;
  color: white;
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.error {
  margin-top: 10px;
  color: red;
}
</style>