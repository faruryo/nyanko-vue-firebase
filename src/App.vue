<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
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
    <v-toolbar
      fixed
      clipped-left
      app
      scroll-off-screen
      :scroll-threshold="50"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Nyanko</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Authentication></Authentication>

    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
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
  data () {
    return {
      drawer: null
    }
  },
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
