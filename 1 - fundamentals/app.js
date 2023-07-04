const vm = Vue.createApp({
  /* 1
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  methods: {
    increment() {
      this.age++
    },
    updateLastName(msg, event) {      
      // console.log(msg)

      this.lastName = event.target.value
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    }
  },
  computed: {
    fullName() {
      console.log('Full name computed property was called!')

      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 3000)
    }
  }

  */
 /* 2
  data() {
    return {
      isPurple: false,
      selectedColor: '',
      size: 150
    }
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple }
    }
  }

  */

  /* 3
  data() {
    return {
      mode: 1
    }
  }
  */

  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  },
  methods: {
    move() {
      const first = this.people.shift()

      this.people.push(first)
    }
  }

}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Jane',
//       lastName: 'Doe'
//     }
//   }
// }).mount('#app2')