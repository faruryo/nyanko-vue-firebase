<template>
  <v-list-tile :to="{path: getRoute(linkname)['path']}">
    <v-list-tile-action>
      <v-icon>{{ getRoute(linkname)['meta']['icon'] }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ getRoute(linkname)['name'] }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'routerlink',
  props: {
    linkname: String
  },
  methods: {
    getRoute (name) {
      for (var i = 0; i < this.$router.options.routes.length; i++) {
        if (this.$router.options.routes[i].name === name) {
          return this.$router.options.routes[i]
        }
      }
    }
  }
}
</script>
