<template>
  <div class="q-pa-sm">
    <q-layout view="hHh Lpr lff">
      <q-header :class="$q.dark.isActive ? 'bg-secondary' : 'bg-white'">
        <q-toolbar class="q-pl-lg q-pb-sm">
          <a href="/">
            <img src=public\icons\favicon-128x128.png
              class="q-mt-md q-pb-none"
              style="width: 70px"
            />
          </a>
          <q-space ></q-space>
          <q-btn flat round dense icon="language" color="grey-8" class="q-mt-xl q-pl-md" />
          <q-btn flat round dense icon="phone" color="grey-8" class="q-mt-xl q-pl-md" />
          <q-btn flat round dense icon="mail" color="grey-8" class="q-mt-xl q-pl-md" />
        </q-toolbar>
        <q-tabs align="left" class="text-grey-9 bg-grey-3">
          <q-route-tab to="/home" label="Home" />
          <q-route-tab to="/products" name="videos" label="Produkte" />
          <q-route-tab to="/about" name="articles" label=" Über uns" />
          <q-route-tab to="/contact" name="contact" label="Kontakt" />
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer class="bg-grey-3">
        <q-toolbar>
          <q-toolbar-title class="text-caption text-grey-8 text-right"
            >Raaf und Hochstatter GbR I Pfarrgasse 6 I 73460 Hüttlingen</q-toolbar-title
          >
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts"></script>
