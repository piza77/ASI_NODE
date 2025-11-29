<template>
  <div class="register-container">

    <h2>Crear Cuenta</h2>

    <form @submit.prevent="register">

      <input 
        type="text" 
        v-model="username" 
        placeholder="Usuario"
        required
      />

      <input 
        type="password" 
        v-model="password" 
        placeholder="Contraseña"
        required
      />

      <input 
        type="password" 
        v-model="confirmPassword" 
        placeholder="Confirmar Contraseña"
        required
      />

      <button type="submit">Registrar</button>

    </form>

    <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
    <p v-if="successMessage" style="color:green">{{ successMessage }}</p>

    <router-link to="/login">¿Ya tienes cuenta? Inicia sesión</router-link>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: ""
    };
  },

  methods: {
    async register() {
      // 🔥 Validación front-end
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Las contraseñas no coinciden";
        this.successMessage = "";
        return;
      }

      try {
        await axios.post(
          "http://localhost:8080/api/users/register",
          {
            username: this.username,
            password: this.password
          }
        );

        this.successMessage = "Usuario registrado correctamente";
        this.errorMessage = "";

        this.username = "";
        this.password = "";
        this.confirmPassword = "";

      } catch (error) {
        this.successMessage = "";
        this.errorMessage = "El usuario ya existe";
      }
    }
  }
};
</script>

<style>
.register-container {
  width: 300px;
  margin: 50px auto;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 8px;
}

button {
  padding: 10px;
  width: 100%;
}
</style>