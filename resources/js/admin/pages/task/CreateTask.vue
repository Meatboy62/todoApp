<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
  export default {
    data () {
      return {
    headers: [
      {id: 'ID', value: 'id'},
      {
        text: 'Tareas',
        sortable: false,
        value: 'name',
      },
      { text: 'Descripcion de la tarea', value: 'desc' },
      { text: 'Estado de la tarea', value: 'state' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],

    methods: {
      submitTask(){

      }
     },
      }
    },
  }
</script>
