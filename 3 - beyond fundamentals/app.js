let vm = Vue.createApp({
  /* 1
  data() {
    return {
      message: "Hello world!",
    };
  },
  
  beforeCreate() {
    console.log("beforeCreate() function called!", this.message);
  },
  created() {
    console.log("created() function called!", this.message);
  },
  beforeMount() {
    console.log("beforeMount() function called!", this.$el);
  },
  mounted() {
    console.log("mounted() function called!", this.$el);
  },
  beforeUpdate() {
    // update from vue developer tool on browser
    console.log("beforeUpdate() function called!");
  },
  updated() {
    console.log("updated() function called!");
  },
  beforeUnmount() {
    // call vm.unmout() in browser console
    console.log("beforeUnmount() function called!");
  },
  unmounted() {
    console.log("unmounted() function called!");
  },
  */
});

vm.component("hello", {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: "Hello World!",
    };
  },
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)
