<template>
  <div class="contenedor">
    <h1>TABLA USUARIOS</h1>
    <table>
      <thead>
        <tr>
          <th>Id Usuarios</th>
          <th>Nombre Usuario</th>
          <th>Password</th>
          <th>Email</th>
          <th>Identificacion</th>
          <th>Estado Usuario</th>
          <th>Rol Usuario</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="u in usuarios" :key="u.idUsuarios">
          <td>{{u.idUsuarios}}</td>
          <td>{{u.nomUsuario}}</td>
          <td>{{u.password}}</td>
          <td>{{u.email}}</td>
          <td>{{u.numIdentificacion}}</td>
          <td>{{u.estadousuario}}</td>
          <td>{{u.rolUsuario}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from "axios";
export default{
  data(){
    return{
      usuarios:[],
    };
  },
  methods:{
    obtenerUsuarios(){
      axios.get("http://192.168.20.22:8080/api/usuarios/listar")
      .then((response)=>{
        this.usuarios=response.data;
      })
      .catch((error)=>{
        console.error("ERROR AL LISTAR USUARIOS",error);
      });
    },
  },
  mounted(){
    this.obtenerUsuarios();
  },
};

</script>
