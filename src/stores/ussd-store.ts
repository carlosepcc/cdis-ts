import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar'

export interface USSDObject {number: string, label: string, id: string, type: string}

const useUSSDStore = defineStore('ussd', {
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
    saveInLocalStorage(){
      LocalStorage.set('localUSSDs', this.ussds)
    },
    loadFromLocalStorage(){
      return LocalStorage.getItem('localUSSDs')
    }
  },
});

export default useUSSDStore
