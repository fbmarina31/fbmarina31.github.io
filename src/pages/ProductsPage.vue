<template>
  <q-page padding>
    <div class="q-pa-md text-weight-light">Interesse an unseren Produkten? <br> Kontaktiere uns gerne über unsere Kontaktoptionen.</div>
    <q-select class="q-pl-md q-pt-sm" borderless v-model="selectedCategory" :options="categories" label="Kategorie" style="width: 335px;" />
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        flat
        bordered
        style="width: 150px; height: 400px"
        v-for="product in filteredProducts"
        :key="product.id"
      >
      <q-carousel
  v-if="product.images && product.images.length > 1"
  v-model="carouselModel[product.id]"
  arrows
  control-color="grey-9"
  infinite
  swipeable
  animated
  height="150px"
  class="bg-grey-3"
>
<q-carousel-slide
    v-for="(img, index) in product.images"
    :key="index"
    :name="img"
    :img-src="img"
    @click="openImageDialog(img, product.images)"
    style="cursor: pointer;"
  />
</q-carousel>

<img
  v-else
  :src="product.image"
  style="width: 100%; height: 150px; object-fit: cover; cursor: pointer;"
  @click="openImageDialog(product.image, product.images)"
/>

        <q-list>
          <q-item-section>
            <q-item-label 
              style="height: 40px; display: flex; align-items: center; justify-content: center;" 
              class="text-text-subtitle2 text-weight-bold bg-grey-3 q-pa-xs text-center">
              {{ product.title }}
            </q-item-label>
            <div class="row q-pa-xs q-mt-sm text-grey-9">
              <div class="q-px-xs text-grey-9">Nr.</div>
              <div class="q-px-xs text-weight-bold text-grey-9">{{ product.id }}</div>
            </div>
            <div class="row q-pa-xs text-grey-9">
              <div class="q-px-xs text-grey-9">Preis</div>
              <div class="q-px-xs text-weight-bold text-grey-9">{{ product.price }} €</div>
            </div>
            <div v-if="product.size" class="row q-pa-xs text-grey-9">
              <div class="q-px-xs text-grey-9">Maße</div>
              <div class="q-px-xs text-weight-bold text-grey-9">{{ product.size }} cm</div>
            </div>
            <div class="row q-pa-xs text-grey-9">
              <div class="q-px-xs text-grey-9">Beschreibung</div>
              <div class="q-px-xs text-weight-bold text-grey-9">
                {{ product.description }}
              </div>
            </div>
          </q-item-section>
        </q-list>
      </q-card>
    </div>

    <q-dialog
  v-model="dialogVisible"
  transition-show="fade"
  transition-hide="fade"
  @hide="dialogImage = undefined"
>
  <q-card
    class="bg-white q-pa-none"
    style="
      width: 90vw;
      max-width: 600px;
      aspect-ratio: 1 / 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <!-- Close-Button oben rechts -->
    <q-btn
      flat
      round
      icon="close"
      color="grey-7"
      class="absolute-top-right q-ma-sm z-top"
      @click="dialogVisible = false"
    />
<q-carousel
  v-if="dialogImages.length > 1"
  v-model="dialogImage"
  arrows
  control-color="grey-9"
  infinite
  animated
  swipeable
  style="width: 100%; height: 100%;"
  >
  <q-carousel-slide
    v-for="(img, index) in dialogImages"
    :key="index"
    :name="img"
    :img-src="img"
    @click="dialogImage && openImageDialog(dialogImage, dialogImages)"
    />
</q-carousel>
<q-img
  v-else
    :src="dialogImage"
    spinner-color="primary"
    style="width: 100%; height: 100%; object-fit: cover;"
    class="rounded-borders"
    @click="dialogImage && openImageDialog(dialogImage, dialogImages)"
    />
  </q-card>
</q-dialog>

  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface Product {
  id: string;
  title: string;
  price: number;
  size: string;
  description: string;
  image: string;            // Default image
  images?: string[];        // Optionales Bilder-Array
  categories: string[];
}

const carouselModel = ref<Record<string, string>>({});
const products = ref<Product[]>([]);
const categories = ref<string[]>([]);
const selectedCategory = ref<string | null>(null);
const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value;
  return products.value.filter((product) => product.categories.includes(selectedCategory.value!));
});

onMounted(async () => {
  await fetch('./products.json')
    .then((response) => response.json())
    .then((data) => {
      products.value = data.products;
      categories.value = data.categories;
      selectedCategory.value = data.defaultCategory;

      // Setze Default-Image für Carousel (damit gleich angezeigt wird)
      data.products.forEach((product: Product) => {
        carouselModel.value[product.id] = product.image;
      });
    });
});


const dialogImages = ref<string[]>([]);
const dialogImage = ref<string | undefined>();
const dialogVisible = ref(false);
function openImageDialog(imageUrl: string, images?: string[]){
  dialogImages.value = images && images.length > 1 ? images : [imageUrl];
  dialogImage.value = imageUrl;
  dialogVisible.value = true;
}

</script>
