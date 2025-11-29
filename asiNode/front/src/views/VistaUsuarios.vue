<template>
  <div class="usuarios">
    <div class="components">
      <FormularioUsuarios @actualizar-tabla="actualizarTabla"/>
      <TablaUsuarios ref="tablaUsuarios"/>
    </div>
  </div>
</template>

<script>
import FormularioUsuarios from '@/components/FormularioUsuarios.vue';
import TablaUsuarios from '@/components/TablaUsuarios.vue';

export default {
  name: 'VistaUsuariosView',
  components: {
    FormularioUsuarios,
    TablaUsuarios
  },
  methods:{
    actualizarTabla(){
      this.$refs.tablaUsuarios.obtenerUsuarios();
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.components {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 1fr;
}

.contenedor {
  /*max-width: 400px;*/
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

h1{
  text-align: center;
  margin-bottom: 15px;
}

.form-group{
  margin-bottom: 15px;
}

form{
  padding: 2%;
}

label{
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input{
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button{
  box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background-color:#007dc1;
	border-radius:10px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-weight:bold;
	padding:8px 18px;
	text-decoration:none;
	text-shadow:0px 1px 0px #154682;
  margin: 0.3rem;
}

button:hover{
  background-color: #0056b3;
}

button:active{
  position: relative;
  top: 1px;
}

table{
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td{
  padding: 10px;
  text-align: left;
  /*border-bottom: 1px solid #ddd;*/
  border-style: solid;
}

tr{
  border-style: solid;
}

th{
  background-color: #007bff;
  color: #fff;
  border-style: solid;
}

tr:hover{
  background-color: #f5f5f5;
}
</style>
