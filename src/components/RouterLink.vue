<template>
  <v-list-item :to="{path: getRoute(linkname)['path']}">
    <v-list-item-action>
      <v-icon>{{ getRoute(linkname)['meta']['icon'] }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ getRoute(linkname)['name'] }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'routerlink',
  props: {
    linkname: String
  },
  methods: {
    getRoute (name) {
      for (let i = 0; i < this.$router.options.routes.length; i++) {
        if (this.$router.options.routes[i].name === name) {
          return this.$router.options.routes[i]
        }
      }
    }
  }
}
</script>
