<template>
  <div class="headerContainer">
    <h1 class="title">Star<br />Wars</h1>
    <h1 class="subtitle">Casting</h1>
    <HeaderPageButton
      label="PERSoNAGENS"
      path="/personagens"
      class="buttonPersonagens"
    />
    <HeaderPageButton label="FiLMES" path="/filmes" class="buttonFilmes" />
    <MyButton label="Cadastrar-se" class="buttonCadastrar" />
  </div>
</template>

<script>
import HeaderPageButton from "./HeaderPageButton.vue";
import MyButton from "./MyButton.vue";
export default {
  name: "HeaderComponent",
  props: {},
  components: {
    HeaderPageButton,
    MyButton,
  },
};
</script>

<style scoped>
.buttonFilmes {
  margin-left: 24px;
}

.buttonPersonagens {
  margin-left: 69px;
}

.buttonCadastrar {
  justify-self: end;
  margin-left: auto;
}

.subtitle {
  font-family: var(--star-jedi);
  margin-left: 16px;
  font-size: 24px;
  color: var(--yellow);
  letter-spacing: 0.96px;
  margin-bottom: -5px;
}

.title {
  text-align: center;
  font-size: 32px;
  font-family: var(--star-jedi);
  line-height: 25px;
  letter-spacing: 1.28px;
  color: var(--yellow);
}

.headerContainer {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0px 100px 0px 100px;
  box-sizing: border-box;
  width: 100vw;
  height: 100px;
  background-color: var(--dark);
}
</style>
