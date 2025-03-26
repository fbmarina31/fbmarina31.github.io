<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <q-header :class="$q.dark.isActive ? 'bg-secondary' : 'bg-white'">
        <q-toolbar class="q-pl-lg  q-pb-sm">
          <a href="/">
            <img src=\logo\logo_mit_Beschreibung.png
              class="q-mt-md q-pb-none"
              style="width: 180px"
            />
          </a>
          <q-space ></q-space>
          <q-btn flat dense class="q-mt-xl q-pl-md"  clickable type="a" href="mailto:lumiakreativ@gmail.com">
            <img src=\logo\Mail.png style="width: 35px"/>
            <q-tooltip>lumiakreativ@gmail.com</q-tooltip></q-btn>
            <q-btn flat dense class="q-mt-xl q-pl-md" clickable type="a" href="https://www.instagram.com/lumia_kreativ/?igshid=YmMyMTA2M2Y%3D" target="blank">
              <img src=\logo\Instagram.png  style="width: 28px"/>
              <q-tooltip>Instagram</q-tooltip></q-btn>
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

<script setup lang="ts">
</script>
