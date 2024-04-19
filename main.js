const app = Vue.createApp({
  data() {
    return {
      name: "John",
      address: "145 Oak Street, Springfield, IL 62701, United States",
      dob: "2002-06-29",
      age: null,
      isValid: false,
      showValidationText: false,
      users: [
        { name: `Rahul`, age: 24, imageUrl: "./images/image1.jpeg" },
        { name: `Rohit`, age: 20, imageUrl: "./images/image2.jpeg" },
        { name: `Jack`, age: 18, imageUrl: "./images/image3.jpeg" },
      ],
    };
  },
  methods: {
    getAge() {
      const age = Math.floor(
        (new Date() - new Date(this.dob).getTime()) / 3.15576e10
      );
      this.age = age;
    },
    validateAge() {
      this.showValidationText = true;
      this.isValid = this.age < 18 ? false : true;
    },
  },
});

app.mount("#app");
