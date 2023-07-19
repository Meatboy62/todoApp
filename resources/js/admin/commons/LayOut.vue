<template>
    <div>
        <h1>Layout Main</h1>
    <v-container>
        <sidebar/>
      </v-container>
    </div>
</template>

<script>
import sidebar from '../commons/sidebar.vue';
export default {
    name: 'layout',
    components: {
        sidebar
    }
}

</script>