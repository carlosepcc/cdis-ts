<script setup>
import DrawerItem from 'components/DrawerItem.vue';
import { ref } from 'vue';

// DRAWER
const miniState = ref(true);

const drawerItems = [
  { title: 'Inicio', icon: 'home', alt: 'n', to: '/' },

  {
    title: 'Tienda',
    icon: 'shop',
    to: 'shop',
  },
  {
    title: 'Servicios por SMS',
    icon: 'message',
    to: 'sms',
  },
  {
    title: 'Servicios',
    icon: 'money',
    to: 'services',
  },
  {
    title: 'Agenda',
    icon: 'phone',
    to: 'agenda',
  },
  {
    title: 'Información extra',
    icon: 'info',
    to: 'info',
  },
  { title: 'Ajustes', icon: 'settings', to: 'settings', separate: true },
  { title: 'Ayuda', icon: 'help', to: 'help' },
  { title: 'Acerca de CCEL', icon: 'info', to: 'about' },
];
</script>

<template>
  <!--MENU LATERAL (DRAWER "gaveta") -->
  <q-drawer
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    mini-to-overlay
    :breakpoint="500"
    bordered
    side="left"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template
          v-for="drawerItem in drawerItems"
          v-bind:key="drawerItem.title"
        >
          <DrawerItem v-bind="drawerItem" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
