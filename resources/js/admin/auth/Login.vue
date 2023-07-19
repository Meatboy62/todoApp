<template>
    <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="text-center">
        <h2>Iniciar sesión</h2>
      </v-card-title>
      <v-card-text>
        <v-form 
         ref="form"
         v-model="valid"
         lazy-validation>
          <v-text-field
            v-model="email"
            label="Correo electrónico"
            required
            :rules="rules.email"
          ></v-text-field>
          <v-text-field
            v-model="pass"
            label="Contraseña"
            type="password"
            required
            :rules="rules.password"
          ></v-text-field>
          <v-btn :disabled="!valid" color="primary" @click="submitForm" >Iniciar sesión</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <router-link :to="{ name: 'register'}">Registrarse</router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
    name: "Login",
    data: () => ({
        valid: true,
        email: '',
        pass: '',
        rules:{
          pass: [
          (v) => !!v || 'La contraseña es requerida',
          ],
          email:[
          (v) => !!v || 'El correo electrónico es requerido',
          (v) => /.+@.+\..+/.test(v) || 'El correo electrónico no es válido',
          ]
        },

    }),
    methods: {
    submitForm() {
      let valid =this.$refs.form.validate();
      const authUser = JSON.parse(localStorage.getItem('Auth'));
      if(valid)
      {
        if(authUser.correo == this.email && authUser.pass == this.password) {
          localStorage.setItem('AuthConfirm', true);
          this.$router.push({ name: 'list-task' });
        }else{
          console.log('Invalid Password');
        }  
      }
     
    },
  },
}

</script>