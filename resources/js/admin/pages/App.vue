<template>
    <v-app>
     <sidebar/>
     <v-main>
       <v-container>
         <router-view></router-view>
       </v-container>
     </v-main>
   </v-app>
 </template>
 
 <script>
 import sidebar from '../commons/sidebar.vue';
 export default {
     name: "App",
     components: {
         sidebar
     }
 }
 
 </script>
 
 <style>
 
 
 </style>