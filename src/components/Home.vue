<template>
  <v-container fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex shrink>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              slot="activator"
              icon
              v-bind="attrs"
              v-on="on"
              large
              href="https://github.com/faruryo/nyanko-vue-firebase"
              target="_blank"
            >
              <v-icon large>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>Source</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
