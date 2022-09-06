<template>
  <div class="appContainer">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

@font-face {
  font-family: "Star Jedi Regular";
  src: url("./assets/fonts/Starjedi.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto Medium";
  src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto Regular";
  src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
}

:root {
  --yellow: #ffe81f;
  --gray: #303030;
  --light-gray: #606060;
  --white: #fafafa;
  --dark: #0f0f0f;
  --star-jedi: "Star Jedi Regular";
  --roboto-medium: "Roboto Medium";
  --roboto-regular: "Roboto Regular";
}

.appContainer {
  min-height: 100vh;
  background-color: #000;
}
</style>
