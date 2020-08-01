<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <RouterLink
          v-for="link in getNavlinks"
          :key="link"
          :linkname="link"
        >
        </RouterLink>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      scroll-off-screen
      scroll-threshold="50"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Nyanko</v-toolbar-title>
      <v-spacer></v-spacer>
      <Authentication></Authentication>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import Authentication from '@/components/Authentication'
import RouterLink from '@/components/RouterLink'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Authentication,
    RouterLink
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapState('auth', {
      getNavlinks: state => {
        if (state.status) {
          return [
            'Home',
            'NyankoView'
          ]
        } else {
          return [
            'Home'
          ]
        }
      }
    })
  }
}
</script>
