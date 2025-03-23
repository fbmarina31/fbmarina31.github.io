<template>
  <q-page> 
    <div class="row justify-center">
      
  <div class="q-pa-md"  >
    <div class="text-h2 q-pa-xs text-grey-9 text-center	">Herzlich<br>Willkommen<br> bei LuMia kreativ  </div>
    <div class="text-subtitle1 q-pa-xs text-grey-9 text-center	">Wir erstellen mit 🤍 handgemachtes<br> für dein Zuhause, dein Event oder deine Liebsten.</div>
  </div>
  <div><img src=public/logo/logo_mit_Beschreibung.png
              class="q-mt-md q-pb-none"
              style="height: 250px"
            /></div>
</div>
<div class="q-pa-md q-ma-sm">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      style="height: 300px; width: 100%"
    >
      <q-carousel-slide :name="1" img-src="public/images_carousel-slide/20250219_200855332_iOS.jpg" fit="cointain" />
      <q-carousel-slide :name="2" img-src="public/images_carousel-slide/20250219_201012875_iOS.jpg" />
      <q-carousel-slide :name="3" img-src="public/images_carousel-slide/20250219_201151406_iOS.jpg" />
      <q-carousel-slide :name="4" img-src="public/images_carousel-slide/20250309_112236759_iOS.jpg" />
      <q-carousel-slide :name="5" img-src="public/images_carousel-slide/20250309_112304614_iOS.jpg" />
    </q-carousel>
  </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1)
</script>
