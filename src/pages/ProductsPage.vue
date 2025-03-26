<template>
  <q-page padding>
    <q-select class="q-pl-md q-pt-sm" borderless v-model="selectedCategory" :options="categories" label="Kategorie" style="width: 340px;" />
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        flat
        bordered
        style="width: 300px; height: 550px"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <img :src="product.image" />

        <q-list>
          <q-item-section>
            <q-item-label class="text-h5 bg-grey-3 q-pa-xs text-center">{{
              product.title
            }}</q-item-label>
            <div class="row q-pa-xs q-mt-sm text-grey-9">
              <div class="q-px-xs text-grey-9">Nr.</div>
              <div class="q-px-xs text-weight-bold text-grey-9">{{ product.id }}</div>
            </div>
            <div class="row q-pa-xs text-grey-9">
              <div class="q-px-xs text-grey-9">Preis</div>
              <div class="q-px-xs text-weight-bold text-grey-9">{{ product.price }} €</div>
            </div>
            <div class="row q-pa-xs text-grey-9">
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
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface Product {
  id: number;
  title: string;
  price: number;
  size: string;
  description: string;
  image: string;
  categories: string[];
}

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
    });
});
</script>
