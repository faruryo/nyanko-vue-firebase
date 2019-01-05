<template>
  <div class="nyanko-view">
    <v-app id="inspire">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="nyankos"
        :loading="isLoading"
        :search="search"
        :rows-per-page-items="[10,20,30,40,50,{'text':'All','value':-1}]"
        class="elevation-1"
      >
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td v-for="header in headers" :key="header.value">{{ props.item[header.value] }}</td>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
import Firebase from '@/plugins/firebase'
let firestore = Firebase.getFirestore()

export default {
  name: 'NyankoView',
  title: 'NyankoView',
  data () {
    return {
      headers: [],
      search: '',
      isLoading: true
    }
  },
  firestore () {
    return {
      nyankos: {
        ref: firestore.collection('Nyanko'),
        resolve: data => {
          this.isLoading = false
        },
        reject: err => {
          if (err) {
            console.log(err.stack)
          }
          this.isLoading = false
          return new Error('Error occurs in get Nyanko firestore data')
        }
      }
    }
  },
  mounted () {
    firestore
      .collection('MetaNyanko')
      .doc('headerLogicalName')
      .get()
      .then(doc => {
        this.headers = createHeaders(doc.data())
      })
  }
}

function createHeaders (headersDocData) {
  let headers = []
  for (let key in headersDocData) {
    if (typeof headersDocData[key] === 'string') {
      headers.push({
        text: headersDocData[key],
        align: 'left',
        sortable: true,
        value: key
      })
    }
  }
  return headers
}
</script>
