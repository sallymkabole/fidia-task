<template>
  <v-app>
    <v-content>
      <v-container class="px-4 py-2" fluid>
        <v-layout row>
          <div class="background">
            <div class="top">
              <div class="box">
                <div class="wrapper"></div>
              </div>
              <div class="box1">
                <div class="wrapper1"></div>
              </div>
              <div class="box2">
                <div class="wrapper2"></div>
              </div>
            </div>
            <div class="bottom">
              
              <div class="d-flex d-inline-flex">
                <p  class="stripe-headline ">Stripe</p>
              <p class="stripe-signup">
                Don't have an Account?<span class="pur">Signup</span>
              </p>
              <p class="stripe-footer grey--text">
                &copy;<a
                  href="https://stripe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="grey-text"
                >
                  Stripe </a
                >.
                <a
                  href="https://stripe.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="grey-text"
                >
                  Contact </a
                >.<a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="grey-text"
                >
                  Privacy&Terms
                </a>
              </p>
              </div>
            </div>

            <v-row justify="center" align="center" class="txt">
              <v-col cols="12" sm="12" md="12" >
                <v-card class="signup ">
                  <v-col cols="12">
                    <h1 class="display-1 black--text font-weight-bold mb-2">
                      Sign in to your account
                    </h1>

                    <h2 class="text-left">Email</h2>
                    <v-text-field
                      dense
                      v-model="email"
                      :rules="[emailrules.required, emailrules.email]"
                      color="#B0D8F0" 
                      outlined
                      placeholder="jane.doe@gmail.com"
                    ></v-text-field>

                    <h2 class="left-text">Password</h2>
                    <h2 class="right-text pur">Forgot Password?</h2>

                    <v-text-field
                      dense
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                      color="#B0D8F0"
                      outlined
                      placeholder="Password"
                    ></v-text-field>
                    <v-icon color="#635CFF">mdi-checkbox-marked</v-icon
                    ><span>Stay signed in for a week</span>

                    <v-btn @click="$router.push('dashboard')" color ="#635CFF" block class="btn">
                      Continue</v-btn
                    >
                    <div>
                      <p class="text-center pur">
                        Use single sign-on(SSO) instead
                      </p>
                    </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "Signin",
  data() {
    return {
      tabs: null,
      sidebarMenu: true,
      toggleMini: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "AMOUNT",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "DESCRIPTION", value: "description" },
        { text: "CUSTOMER", value: "customer" },
        { text: "DATE", value: "date" },
      ],
      users: [
        {
          name: "US$352.22 ",
          icon: "mdi-account",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "0d7b6ac7-dbda-4157-bae9-e64749e538f5",
          customer: "johndoe@gmail.com",
          date: "7 Jul, 14:01",
        },
        {
          name: "US$39.99",
          description: "eca84b25-0324-4f31-b9fb-d489048b77ae",
          customer: "jfamosinhoaraca@iseo...",
          date: "7 Jul, 13:28",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$352.22",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "0d7b6ac7-dbda-4157-bae9-e64749e538f5",
          customer: "johndoe@gmail.com",
          date: "7 Jul, 14:01",
        },
        {
          name: "US$39.99",
          description: "eca84b25-0324-4f31-b9fb-d489048b77ae",
          customer: "jfamosinhoaraca@iseo...",
          date: "7 Jul, 13:28",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },

        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$39.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
        {
          name: "US$339.99",
          description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
          customer: "hefovo87@ereyemind",
          date: "7 Jul, 14:04",
        },
      ],

      items: [
        {
          action: "mdi-cash-multiple",
          items: [
            { title: "Reviews" },
            { title: "Disputes" },
            { title: "Top-ups" },
            { title: "Collected fees" },
            { title: "Transfers" },
            { title: "Payouts" },
            { title: "All transactions" },
          ],
          title: "Payments",
        },
      ],
      plist: [
        { title: "Balances", href: "/comp", icon: "mdi-swap-vertical" },
        {
          title: "Customers",
          href: "/customers",
          icon: "mdi-account-search-outline",
        },
        {
          title: "Connected Accounts",
          href: "/orders",
          icon: "mdi-account-supervisor-circle",
        },
        { title: "Product", href: "/product", icon: "mdi-archive" },
        { title: "Reports", href: "/reports", icon: "mdi-file-chart" },
        { title: "Developers", href: "/developers", icon: "mdi-cash-multiple" },
        {
          title: "View test data",
          href: "/view-test-data",
          icon: "mdi-toggle-switch-off-outline",
        },
        { title: "Settings", href: "/settings", icon: "mdi-cog-outline" },
      ],
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
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    z-index: 13;
}

.top {
  height: 250px;
  background-color: #f7fafc;
}

.bottom {
  width: 100%;
  height: 400px;
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
  position: static;
  height: 17px;
  left: 0px;
  top: 0px;

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Grey 800 */

  color: #3c4257;

  /* Inside Auto Layout */
}
.stripe-headline {
  position: absolute;
  top: 7%;
  left: 37.4%;
  color: #000000;
  font-weight: 600;
  font-size: 22px;
}
.stripe-signup {
  position: absolute;
  top: 80%;
  left: 38%;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
}
.stripe-footer {
  position: absolute;
  bottom: 11%;
  left: 38%;
  color:gray !important;
  font-weight: 400;
  font-size: 14px;
}
.left-text {
  display: inline-block;
}
.right-text {
  float: right;
}

a {
  text-decoration: none;
  color: #697386;
  transition: 0.5s ease;
}
a:hover {
  color: #dfd3d3;
}
.pur {
  color: #635cff;
}

.btn {
  color: #fff !important ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13.5px 10px;

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
  left: 50%;
  top: 44%;
  transform: translate(-50%, -50%);
  width: 537px;
  height: 542px;
  

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12),
    0px 15px 35px rgba(60, 66, 87, 0.08);
  border-radius: 4px;
}
.v-text-field {
  width: 406px !important;
}
.v-text-field:hover {
  color: #b0d8f0 !important;
}
.box {
  position: absolute;
  left: 73.19%;
  top: 23.93%;
  bottom: 59.98%;
  height: 40px;
  width: 950px;
  background: rgba(12, 0, 250, 0.5);

  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-12deg);
  -ms-transform: skewY(-12deg);
  -o-transform: skewY(-12deg);
  transform: skewY(-12deg);
}

.box > .wrapper {
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
}
.box1 {
  position: absolute;
  right: 78.19%;
  left: -0.03%;
  bottom: 32.33%;
  top: 65.78%;
  height: 40px;
  width: 560px;
  background: rgba(12, 0, 250, 0.5);

  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-11.5deg);
  -ms-transform: skewY(-11.5deg);
  -o-transform: skewY(-11.5deg);
  transform: skewY(-11.5deg);
}

.box1 > .wrapper1 {
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
}
.box2 {
  position: absolute;
  left: 1.46%;
  right: 87.5%;
  top: 65.82%;
  bottom: 32.61%;
  height: 50px;
  opacity: 0.5;
  background: #81e9ff;

  -webkit-transform: skewY(-5deg);
  -moz-transform: skewY(-12deg);
  -ms-transform: skewY(-12deg);
  -o-transform: skewY(-12deg);
  transform: skewY(-12deg);
}

.box2 > .wrapper1 {
  -webkit-transform: skewY(5deg);
  -moz-transform: skewY(5deg);
  -ms-transform: skewY(5deg);
  -o-transform: skewY(5deg);
  transform: skewY(5deg);
}
.grey-text{
  color: #697386;
}
</style>
