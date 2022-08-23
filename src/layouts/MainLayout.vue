<script setup>
// Components
import BaseDrawer from 'src/components/BaseDrawer.vue';
import { ref } from 'vue';

// DRAWER
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar class="brand-bar">
        <div id="brand-frame" class="text-primary">
          <!--          BOTON MENU-->
          <q-btn
            dense
            flat
            round
            icon="menu"
            aria-label="Menú"
            title="Menú"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> CCEL </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <!--MENU LATERAL (DRAWER "gaveta") -->
    <BaseDrawer v-model="leftDrawerOpen" />

    <!-- CONTENEDOR DE PAGINAS -->
    <q-page-container class="page">
      <router-view v-slot="{ Component, route }">
        <transition>
          <keep-alive>
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-tabs align="center">
        <q-route-tab to="agenda" no-caps label="Agenda" icon="phone" />
        <q-route-tab to="shop" no-caps label="Tienda" icon="shop" />
        <q-route-tab to="main" no-caps label="Favoritos" icon="favorite" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
