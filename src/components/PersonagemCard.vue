<template>
  <div class="container">
    <h2 class="name">Luke Skywalker</h2>
    <div class="block">
      <h3 class="subtitle">Nascimento</h3>
      <span class="birthday">DATA: 19 BBY</span>
      <span class="planet">PLANETA: TATOOINE</span>
    </div>
    <div class="block">
      <h3 class="subtitle">Nascimento</h3>
      <span class="specie">ESPÉCIE: HUMANO</span>
      <span class="height">ALTURA: 1.72 METRO</span>
    </div>
    <div class="block">
      <h3 class="subtitle">Veículos usados</h3>
      <span class="birthday">SNOWSPEEDER</span>
      <span class="planet">IMPERIAL SPEEDER BIKE</span>
    </div>
    <MyButton label="ver DETALHES" class="buttonDetalhes" />
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  name: "PeronagemCard",
  props: {
    personagem: {
      type: Object,
      required: true,
    },
  },
  components: { MyButton },
};
</script>

<style scoped>
.block span {
  font-family: var(--roboto-regular);
  color: var(--white);
  font-size: 14px;
  height: 19px;
  font-weight: 100;
}

.block h3 {
  font-family: var(--star-jedi);
  color: var(--white);
  font-size: 18px;
  height: 29px;
  font-weight: 100;
  margin-bottom: 8px;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-top: 24px;
  width: 100%;
}

.name {
  font-family: var(--star-jedi);
  color: var(--yellow);
  font-size: 24px;
  height: 38px;
  font-weight: 100;
}

.buttonDetalhes {
  color: var(--yellow);
  width: 100%;
  justify-self: flex-end;
  margin-top: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 16px;
  height: 449px;
  width: 273px;
  border: 2px solid var(--light-gray);
  background-color: var(--gray);
  box-sizing: border-box;
}
</style>