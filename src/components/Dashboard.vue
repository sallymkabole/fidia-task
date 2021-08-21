<template>
  <div>
    <v-app>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        color="#F7FAFC"
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
      >
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
          <v-list>
            <v-list-item v-for="i in plist" :key="i.title" link :to="i.href">
              <v-list-item-icon>
                <v-icon color="primary">{{ i.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="primary--text">{{
                  i.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <v-container class="px-4 py-2 fill-height" fluid>
          <v-layout row>
            <v-app-bar app flat color="#fff">
              <v-text-field
                prepend-inner-icon="mdi-magnify"
                flat
                full-width
                hide-details
                label="Search..."
                solo
                class="hr" 
              >
                <template slot="append">
                  <v-icon color="#A3ACB9">mdi-bell</v-icon>
                  <v-icon color="#A3ACB9">mdi-help-circle</v-icon>
                  <v-icon color="#A3ACB9">mdi-account</v-icon>
                </template>
                
                </v-text-field
              >
            </v-app-bar>

            <v-col md="12" xs="12" sm="12">
              <v-card color="grey lighten-4" flat>
                <v-toolbar color="#fff" flat>
                  <h1 class="h2 pa-2">Payments</h1>
                  <v-spacer></v-spacer>
                  <v-btn class="top-btn" color="#fff"
                    ><v-icon>mdi-filter</v-icon>Filter</v-btn
                  >
                  <v-btn class="top-btn ml-2" color="#fff"
                    ><v-icon>mdi-arrow-top-right</v-icon>Export</v-btn
                  >
                  <v-btn class="top-btn1 ml-2" color="#5469D4"
                    ><v-icon>mdi-plus</v-icon>Create Payment</v-btn
                  >

                  <template v-slot:extension>
                    <v-tabs color="#5469D4" v-model="tabs" left>
                      <v-tab class="grey--text text-capitalize"> All </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <v-card-title class="text-h5">
                            An even better title
                          </v-card-title>
                          <v-card-text>
                            <p>
                              Maecenas ullamcorper, dui et placerat feugiat,
                              eros pede varius nisi, condimentum viverra felis
                              nunc et lorem. Sed hendrerit. Maecenas malesuada.
                              Vestibulum ullamcorper mauris at ligula. Proin
                              faucibus arcu quis ante.
                            </p>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>

                      <v-tab class="grey--text text-capitalize">
                        Succeeded
                      </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <v-data-table
                            v-model="selected"
                            :headers="headers"
                            :single-select="singleSelect"
                            :items="users"
                            item-key="name"
                            :items-per-page="10"
                            show-select
                            class="elevation-1"
                            :hide-default-footer="true"
                          >
                          </v-data-table>
                          <div class="d-flex d-inline pa-4">
                            <v-btn color="" text> 10 Results </v-btn>
                            <v-spacer />
                            <div class="table-footer-prepend d-flex">
                              <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    color="white"
                                    disabled
                                    class="mr-3 top-btn"
                                    v-on="on"
                                  >
                                    Previous
                                  </v-btn>
                                </template>
                                <span>Back</span>
                              </v-tooltip>
                              <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    color="#fff"
                                    class="mr-3 top-btn"
                                    v-on="on"
                                  >
                                    Next</v-btn
                                  >
                                </template>
                                <span>Next</span>
                              </v-tooltip>
                            </div>
                          </div>
                        </v-card>
                      </v-tab-item>
                      <v-tab class="grey--text text-capitalize">
                        Refunded
                      </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <v-card-title class="text-h5">
                            An even better title
                          </v-card-title>
                          <v-card-text>
                            <p>
                              Maecenas ullamcorper, dui et placerat feugiat,
                              eros pede varius nisi, condimentum viverra felis
                              nunc et lorem. Sed hendrerit. Maecenas malesuada.
                              Vestibulum ullamcorper mauris at ligula. Proin
                              faucibus arcu quis ante.
                            </p>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                      <v-tab class="grey--text text-capitalize">
                        Uncaptured
                      </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <v-card-title class="text-h5">
                            An even better title
                          </v-card-title>
                          <v-card-text>
                            <p>
                              Maecenas ullamcorper, dui et placerat feugiat,
                              eros pede varius nisi, condimentum viverra felis
                              nunc et lorem. Sed hendrerit. Maecenas malesuada.
                              Vestibulum ullamcorper mauris at ligula. Proin
                              faucibus arcu quis ante.
                            </p>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </template>
                </v-toolbar>
              </v-card>
            </v-col>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
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
.top-btn {
  color: #3c4257 !important;
  text-transform: capitalize;
}
.top-btn1 {
  color: #fff !important;
  text-transform: capitalize;
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
.hr {
  border-bottom: 1px solid #E3E8EE;
  width: 100%;
}
</style>
