<template>
  <v-card color="grey lighten-4" flat>
                <v-toolbar color="#fff" flat>
                  
                  <h1  class="h2 left-text pa-2">Payments</h1>
                  <v-spacer></v-spacer>
                  <v-btn class="top-btn mt-4" color="#fff"
                    ><v-icon>mdi-filter</v-icon>Filter</v-btn
                  >
                  <v-btn class="top-btn ml-2 mt-4" color="#fff"
                    ><v-icon>mdi-arrow-top-right</v-icon>Export</v-btn
                  >
                  <v-btn class="top-btn1 ml-2 mt-4" color="#5469D4"
                    ><v-icon>mdi-plus</v-icon>Create Payment</v-btn
                  >
                  

                  <template v-slot:extension>
                    <v-tabs color="#5469D4" v-model="tabs" left>
                      <v-tab class="grey--text text-capitalize"> All </v-tab>
                      <v-tab-item>
                        <v-card flat>
                         <DataTable1/>
                        </v-card>
                      </v-tab-item>

                      <v-tab class="grey--text text-capitalize">
                        Succeeded
                      </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <DataTable/>
                        </v-card>
                      </v-tab-item>
                      <v-tab class="grey--text text-capitalize">
                        Refunded
                      </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <DataTable1/>
                          
                        </v-card>
                      </v-tab-item>
                      <v-tab class="grey--text text-capitalize">
                        Uncaptured
                      </v-tab>
                      <v-tab-item>
                        <v-card flat>
                          <DataTable/>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </template>
                </v-toolbar>
              </v-card>
</template>
<script>
import DataTable from "@/components/DataTable";
import DataTable1 from "@/components/DataTable1";
export default {
  name: "Tab",
  components:{
    DataTable,
    DataTable1,
  },
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

    }
  }
};
</script>
<style scoped>
html {
  overflow-y: scroll;
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
.purple-text{
  color: #635cff;

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
</style>
