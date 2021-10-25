const app = Vue.createApp({
  data() {
    return {
      firstName: "Martín",
      lastName: "De Angelis",
      email: "madeangelis@gmail.com",
      gender: "male",
      picture: "./img/me.png",
    };
  },
  methods: {
    async getUser() {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();
      console.log(results);
      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount("#app");
