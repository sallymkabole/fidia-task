<!-- eslint-disable -->
<template>
<div class="background">
  <div class="top"></div>
    <div class="bottom"></div>
 <v-row justify="center" align="center" class="txt ">
    <v-col cols="12" sm="12" md="12">
        <v-card class="signup">
          <h1 class="display-1 text-center black--text font-weight-bold mb-2">SIGN UP </h1>
        <h2 class="text-left ">Email</h2>
        <v-text-field
          v-model="email"
          :rules="[emailrules.required, emailrules.email]"
         color="#ec6382"
          outlined
          placeholder="Email"
        ></v-text-field>
        <div class=""> <h2 class="text-left ">Password</h2>
        <h2 class="text-right ">Forgot Password?</h2></div>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          color="#ec6382"
          outlined
          placeholder="Password"
        ></v-text-field>

                  <v-btn @click="checkForm" color="#635CFF" class="btn"> NEXT</v-btn>
 </v-card>
    </v-col>
    </v-row>
</div>
</template>
<script>
export default {
  name: 'SignUp',
  layout: 'auth',
  data() {
    return {
      errors: [],
      email: '',
      emailrules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
      show1: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        // emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
<style scoped>
html {
  overflow-y: scroll;
}
.background {
        position: absolute;
        width: 100%;
        margin: 0 auto;
    }

    .top {
        height: 250px;
        background-color: #F7FAFC;
    }

    .bottom {
        width: 100%;
        height: 500px;
        background: linear-gradient(to right bottom, #F7FAFC 50%, transparent 50%);
    }
.txt {
  font-family: "Jomhuria", cursive;
  letter-spacing: 2px;
}
a {
  text-decoration: none;
  color: #ec6382;
  transition: 0.5s ease;
}
a:hover {
  color: #dfd3d3;
}

.btn {
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13.5px 10px;

position: static;
width: 406px;
height: 46px;
left: 0px;
top: 264px;

/* Purple */

background: #635CFF;
border-radius: 5px;

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 28px 0px;
}
.signup {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 48px 68px 72px;
position: absolute;
top: 50%;
left: 50%;
width: 542px;
height: 537px;
left: calc(50% - 542px/2);
top: calc(50% - 537px/2 - 45px);

background: #FFFFFF;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);
border-radius: 4px;
}

.v-text-field >>> input {
}
.text-white input {
  color: white !important;
}
</style>
