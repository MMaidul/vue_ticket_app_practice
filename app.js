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
      seats: [
        {
          name: 'A1',
          type: 'available',
          price: 500,
        },
        {
          name: 'A2',
          type: 'available',
          price: 500,
        },
        {
          name: 'A3',
          type: 'available',
          price: 500,
        },
        {
          name: 'A4',
          type: 'available',
          price: 500,
        },
        {
          name: 'B1',
          type: 'available',
          price: 450,
        },
        {
          name: 'B2',
          type: 'available',
          price: 450,
        },
        {
          name: 'B3',
          type: 'available',
          price: 450,
        },
        {
          name: 'B4',
          type: 'available',
          price: 450,
        },
        {
          name: 'C1',
          type: 'sold',
          price: 500,
        },
        {
          name: 'C2',
          type: 'sold',
          price: 500,
        },
        {
          name: 'C3',
          type: 'sold',
          price: 500,
        },
        {
          name: 'C4',
          type: 'sold',
          price: 500,
        },
        {
          name: 'D1',
          type: 'available',
          price: 400,
        },
        {
          name: 'D2',
          type: 'available',
          price: 400,
        },
        {
          name: 'D3',
          type: 'available',
          price: 400,
        },
        {
          name: 'D4',
          type: 'available',
          price: 400,
        },
        {
          name: 'E1',
          type: 'available',
          price: 300,
        },
        {
          name: 'E2',
          type: 'available',
          price: 300,
        },
        {
          name: 'E3',
          type: 'booked',
          price: 300,
        },
        {
          name: 'E4',
          type: 'booked',
          price: 300,
        },
        {
          name: 'F1',
          type: 'available',
          price: 300,
        },
        {
          name: 'F2',
          type: 'available',
          price: 300,
        },
        {
          name: 'F3',
          type: 'available',
          price: 300,
        },
        {
          name: 'F4',
          type: 'available',
          price: 300,
        },
      ],
    }
  },
  computed: {},
  methods: {
    handleClick(i) {
      let clickedSeat = this.seats[i]

      if (clickedSeat.type === 'sold' || clickedSeat.type === 'booked') {
        alert('You can not select this seat')
        return
      }
      clickedSeat.type =
        clickedSeat.type === 'selected' ? 'available' : 'selected'
      console.log(clickedSeat)
    },
  },
  watch: {},
})

app.mount('#app')
