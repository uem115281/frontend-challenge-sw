<template>
  <div class="container">
    <h2 class="name">A Ameaça Fantasma</h2>
    <span class="small">Episódio I</span>
    <div class="block">
      <h3 class="subtitle">informações</h3>
      <span class="birthday">LANÇADO EM: 19/05/1999</span>
      <span class="planet">DIRIGIDO POR: GEORGE LUCAS</span>
    </div>
    <MyButton label="ver DETALHES" class="buttonDetalhes" />
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  name: "FilmeCard",
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

.small {
  font-family: var(--roboto-medium);
  color: var(--white);
  font-size: 12px;
  height: 30px;
}

.name {
  font-family: var(--star-jedi);
  color: var(--yellow);
  font-size: 24px;
  line-height: 24px;
  width: 100%;
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
  height: 291px;
  width: 273px;
  border: 2px solid var(--light-gray);
  background-color: var(--gray);
  box-sizing: border-box;
}
</style>