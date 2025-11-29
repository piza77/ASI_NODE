<template>
  <div class="contenedor">
    <h1>FORMULARIO INGRESO USUARIOS</h1>

    <form id="formulario__usuarios" @submit.prevent="guardar">
      <div class="form-group">
        <label for="idUsuarios">ID USUARIO</label>
        <input type="number" id="idUsuarios" required v-model="idUsuarios" />
      </div>

      <div class="form-group">
        <label for="nomUsuario">NOMBRE USUARIO</label>
        <input type="text" id="nomUsuario" required v-model="nomUsuario" />
      </div>

      <div class="form-group">
        <label for="password">CONTRASEÑA</label>
        <input type="text" autocomplete="off" id="password" required v-model="password" />
      </div>

      <div class="form-group">
        <label for="email">CORREO ELECTRONICO</label>
        <input type="text" id="email" required v-model="email" />
      </div>

      <div class="form-group">
        <label for="numIdentificacion">NUMERO IDENTIFICACION</label>
        <input type="number" id="numIdentificacion" required v-model="numIdentificacion" />
      </div>

      <div class="form-group">
        <label for="estadousuario">ESTADO USUARIO</label>
        <input type="number" id="estadousuario" required v-model="estadousuario" />
      </div>

      <div class="form-group">
        <label for="rolUsuario">ROL USUARIO</label>
        <input type="number" id="rolUsuario" required v-model="rolUsuario" />
      </div>

      <button type="submit">Guardar</button>
      <button type="button" @click="eliminar">Eliminar</button>
      <button type="button" @click="actualizar">Actualizar</button>
      <button type="button" @click="consultar">Consultar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      idUsuarios: "",
      nomUsuario: "",
      password: "",
      email: "",
      numIdentificacion: "",
      estadousuario: "",
      rolUsuario: "",
    };
  },

  methods: {
    guardar() {
      axios.post("http://192.168.20.22:8080/api/usuarios", {
        idUsuarios: this.idUsuarios,
        nomUsuario: this.nomUsuario,
        password: this.password,
        email: this.email,
        numIdentificacion: this.numIdentificacion,
        estadousuario: this.estadousuario,
        rolUsuario: this.rolUsuario,
      })
      .then((response) => {
        console.log("USUARIO REGISTRADO CON EXITO", response.data);
        alert("EL USUARIO SE REGISTRO CON EXITO");
        this.limpiarFormulario();
        this.$emit("actualizar-tabla");
      })
      .catch((error) => {
        console.error("ERROR EN REGISTRO DE USUARIO", error);
      });
    },

    consultar() {
      axios.get(`http://192.168.20.22:8080/api/usuarios/${this.idUsuarios}`)
      .then((response) => {
        const data = response.data;
        this.idUsuarios = data.idUsuarios;
        this.nomUsuario = data.nomUsuario;
        this.password = data.password;
        this.email = data.email;
        this.numIdentificacion = data.numIdentificacion;
        this.estadousuario = data.estadousuario;
        this.rolUsuario = data.rolUsuario;
      })
      .catch((error) => {
        console.error("ERROR AL CONSULTAR USUARIO", error);
      });
    },

    actualizar() {
      axios.put(`http://192.168.20.22:8080/api/usuarios/actualizar/${this.idUsuarios}`, {
        idUsuarios: this.idUsuarios,
        nomUsuario: this.nomUsuario,
        password: this.password,
        email: this.email,
        numIdentificacion: this.numIdentificacion,
        estadousuario: this.estadousuario,
        rolUsuario: this.rolUsuario,
      })
      .then((response) => {
        console.log("USUARIO ACTUALIZADO", response.data);
        alert("USUARIO HA SIDO ACTUALIZADO");
        this.$emit("actualizar-tabla");
      })
      .catch((error) => {
        console.error("USUARIO NO FUE ACTUALIZADO", error);
      });
    },

    eliminar() {
      axios.delete(`http://192.168.20.22:8080/api/usuarios/${this.idUsuarios}`)
      .then(() => {
        alert("USUARIO ELIMINADO");
        this.limpiarFormulario();
        this.$emit("actualizar-tabla");
      })
      .catch((error) => {
        console.error("USUARIO NO PUDO SER ELIMINADO", error);
      });
    },

    limpiarFormulario() {
      this.idUsuarios = "";
      this.nomUsuario = "";
      this.password = "";
      this.email = "";
      this.numIdentificacion = "";
      this.estadousuario = "";
      this.rolUsuario = "";
    }
  },
};
</script>
