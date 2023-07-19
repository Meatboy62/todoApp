<template>
    <v-container fluid class="">
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="elevation-12">
        <v-card-title class="primary">
          <span class="white--text">Registro</span>
        </v-card-title>
        <v-card-text>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
              v-model="register.nombre"
              label="Nombre"
              required
              :rules="nameValidation"
            ></v-text-field>
            <v-text-field
              v-model="register.correo"
              label="Correo Electrónico"
              required
              :rules="emailValidation"
            ></v-text-field>
            <v-text-field
              v-model="register.Password"
              label="Contraseña"
              type="password"
              required
              :rules="passwordValidation"
            ></v-text-field>
            <v-btn :disabled="!valid" color="primary" @click="submitForm">Registrar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
export default {
  name: "Login",
  data: () => ({
      valid: true,
      register: {
          nombre: '',
          correo: '',
          Password: '',
      },
     
    nameValidation: [
      (v) => !!v || 'El nombre es requerido',
      (v) =>
        (v && v.length >= 2) || 'El nombre debe tener al menos 2 caracteres',
    ],
    emailValidation: [
      (v) => !!v || 'El correo electrónico es requerido',
      (v) => /.+@.+\..+/.test(v) || 'El correo electrónico no es válido',
    ],
    passwordValidation: [
      (v) => !!v || 'La contraseña es requerida',
    ],
  }),
  methods: {
  submitForm() {
    let valid =this.$refs.form.validate()
      if(valid)
      {
        localStorage.setItem("Auth",JSON.stringify(this.register));
        this.$router.push({ name: "login" });
        console.log('pasa');
      }
   
  },
},
}

</script>