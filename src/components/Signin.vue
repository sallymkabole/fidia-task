<template>
  <div class="background">
    <div class="top"></div>
    <div class="bottom"></div>
    <v-row justify="center" align="center" class="txt">
      <v-col cols="12" sm="12" md="12">
        <v-card class="signup">
          <h1 class="display-1 text-center black--text font-weight-bold mb-2">
            Sign in to your account
          </h1>
          <h2 class="text-left">Email</h2>
          <v-text-field
            v-model="email"
            :rules="[emailrules.required, emailrules.email]"
            color="#ec6382"
            outlined
            placeholder="jane.doe@gmail.com"
          ></v-text-field>

          <v-layout>
            <v-flex xs12 sm12 md6>
              <h2 class="text-left">Password</h2>
            </v-flex>
            <v-flex xs12 sm12 md6>
              <h2 class="text-right">Forgot Password?</h2>
            </v-flex>
          </v-layout>
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
          <v-icon>mdi-checkbox-marked</v-icon>
          <p>Stay signed in for a week</p>

          <v-btn @click="checkForm" color="#635CFF" class="btn">
            Continue</v-btn
          >
          <p>Use single sign-on(SSO) instead</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Signin",
  data() {
    return {
      errors: [],
      email: "",
      emailrules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
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
  background-color: #f7fafc;
}

.bottom {
  width: 100%;
  height: 500px;
  background: linear-gradient(to right bottom, #f7fafc 50%, transparent 50%);
}
h1 {
  position: static;
  width: 361px;
  height: 46px;
  left: 68px;
  top: 48px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  /* Grey 800 */

  color: #3c4257;
}
h2 {
  height: 17px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #3c4257;
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
  color: #fff !important ;
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

  background: #635cff;
  border-radius: 5px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 28px 0px;
  text-transform: capitalize;
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
  left: calc(50% - 542px / 2);
  top: calc(50% - 537px / 2 - 45px);

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12),
    0px 15px 35px rgba(60, 66, 87, 0.08);
  border-radius: 4px;
}
.v-text-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13.5px 12px 13.5px 16px;

  position: static;
  width: 406px;
  height: 46px;
  left: 0px;
  top: 29px;
}
</style>
