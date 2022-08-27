import { defineStore } from 'pinia';
export interface USSDObject {number: string, label: string, id: string, type: string}

export const useCounterStore = defineStore('counter', {
  state: () => ({
    ussds: [
      {
        number: '222',
        label: 'Consulta de saldo',
        id: 'c-saldo',
        type: 'check',
      },
    ],
  }),
  getters: {
    dial: (number) => `*${number}#`,
  },
  actions: {
    addUSSD(newUSSD:USSDObject) {
      this.ussds.push(newUSSD)
    },
  },
});
