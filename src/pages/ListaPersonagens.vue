<template>
  <div class="container">
    <h1>Personagens</h1>
    <TextInput
      placeholder="FILTRE POR NOME DO PERSONAGEM"
      class="inputCadastro"
    />
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

export default {
  name: "ListaPersonagens",
  props: {},
  components: {
    TextInput,
  },
};
</script>

<style scoped>
.inputCadastro {
  margin-top: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.container h1 {
  font-family: var(--star-jedi);
  color: var(--yellow);
  height: 64px;
  font-size: 40px;
  letter-spacing: 1.6px;
  margin-top: 48px;
}
</style>
