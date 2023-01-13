const app = Vue.createApp({
  data() {
    return {
      seatStates: {
        sold: {
          text: 'Sold',
          color: '#ff0000',
        },
        available: {
          text: 'Available',
          color: '#fff',
        },
        booked: {
          text: 'booked',
          color: 'gray',
        },
        selected: {
          text: 'Selected',
          color: '#00ff00',
        },
      },
    }
  },
  computed: {},
  methods: {},
  watch: {},
})

app.mount('#app')
