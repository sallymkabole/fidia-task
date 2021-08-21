<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-btn small color="success">Sucess <v-icon>mdi-check</v-icon></v-btn>
      </template>
    </v-data-table>
    <div class="d-flex d-inline pa-4">
      <v-btn color="" text> 10 Results </v-btn>
      <v-spacer />
      <div class="table-footer-prepend d-flex">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="white" disabled class="mr-3 top-btn" v-on="on">
              Previous
            </v-btn>
          </template>
          <span>Back</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="#fff" class="mr-3 top-btn" v-on="on"> Next</v-btn>
          </template>
          <span>Next</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DataTable",
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
        { text: "", value: "action", sortable: false },
        { text: "DESCRIPTION", value: "description" },
        { text: "CUSTOMER", value: "customer" },
        { text: "DATE", value: "date" },
      ],
      items: [
        {
          name: "US$352.22 ",
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
    };
  },
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
.purple-text {
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
</style>
