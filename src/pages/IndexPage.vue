<template>
  <q-page>
    <div class="row justify-center">
  <div class="q-pa-md">
    <div class="text-h2 q-pa-xs text-grey-9 text-center	">Herzlich Willkommen<br> bei LuMia kreativ  </div>
  <div>
    <div class="q-pa-md q-ma-sm row justify-center">
    <q-carousel
      animated
      swipeable
      v-model="slide"
      arrows
      navigation
      control-color="grey-9"
      infinite
      style="height: 340px; width: 340px;"
    >
      <q-carousel-slide :name="1" img-src="/images_carousel-slide/weihnachten_wichtelhaus.jpg" fit="cover"/>
      <q-carousel-slide :name="2" img-src="/images_carousel-slide/weihnachten_krippe_rahmen.jpg" fit="cover"/>
      <q-carousel-slide :name="3" img-src="/images_carousel-slide/weihnachten_hirschkranz.jpg" fit="cover"/>
      <q-carousel-slide :name="4" img-src="/images_carousel-slide/weihnachten_frohe_weihnachten_kranz.jpg" fit="cover"/>
      <q-carousel-slide :name="5" img-src="/images_carousel-slide/weihnachten_krippe_teelicht.jpg" fit="cover"/>
    </q-carousel>
  </div>
  </div>
  <div class="text-subtitle1 q-pa-xs text-grey-9 text-center q-px-md">   Du bist auf der Suche nach einer Kleinigkeit für dich oder zum verschenken? Dann wirst du
      hoffentlich bei uns fündig.<br> Gerne erstellen und personalisieren wir auch etwas nach deinen Wünschen. <br><br>
      Melde Dich gerne bei uns über die oben rechts aufgeführten Kontaktmöglichkeiten.</div>
  </div>
  </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1)
</script>
