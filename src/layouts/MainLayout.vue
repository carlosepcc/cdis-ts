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

    <q-footer reveal class="bg-primary text-white q-pa-xs q-px-sm">
      <q-avatar size="sm">
        <img
          src="https://raw.githubusercontent.com/carlosepcc/cdis-quasar-vite/main/src/public/brand/imagotipo-mini.png"
          style="opacity: 0.5"
          alt
        />
      </q-avatar>
      <span style="color: #fffa" class="text-caption q-ml-sm"
        >Universidad de las Ciencias Informáticas. XAUCE, CDIS. ©
        2021-2022</span
      >
    </q-footer>
  </q-layout>
</template>
