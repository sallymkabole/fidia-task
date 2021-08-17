<template>
  <div>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
    >
      <v-list dense color="primary">
        <v-list-item>
          <v-list-item-action>
               <v-btn icon small>
          <v-icon @click.stop="sidebarMenu = !sidebarMenu">mdi-store</v-icon>
        </v-btn>
            
          </v-list-item-action>
          <v-list-item-content> Store Name </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item class="px-2" @click="toggleMini = !toggleMini">
        <v-list-item-avatar>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">
          Store Name
        </v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-list-item>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.href"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="primary--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container class="px-4 py-0 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <v-icon>mdi-magnify</v-icon> <span class="h2">Search</span>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      sidebarMenu: true,
      toggleMini: false,
      items: [
        { title: "Home", href: "/", icon: "mdi-home-outline" },
        {
          title: "Detections",
          href: "/detections",
          icon: "mdi-shield-account",
        },
        { title: "Components", href: "/comp", icon: "mdi-palette-swatch" },
        {
          title: "Customers",
          href: "/customers",
          icon: "mdi-account-search-outline",
        },
        { title: "Orders", href: "/orders", icon: "mdi-bus-clock" },
        { title: "Settings", href: "/settings", icon: "mdi-settings-outline" },
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
  top: 3%;
  left: 38%;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
}
.stripe-signup {
  position: absolute;
  bottom: 13%;
  left: 38%;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
}
.stripe-footer {
  position: absolute;
  bottom: 9%;
  left: 38%;
  color: #000000;
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
  width: 406px !important;
}
.v-text-field:hover {
  color: #b0d8f0 !important;
}
</style>
