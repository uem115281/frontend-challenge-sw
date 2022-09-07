<template>
  <div class="container">
    <h1>Personagens</h1>
    <TextInput
      placeholder="FILTRE POR NOME DO PERSONAGEM"
      class="inputCadastro"
    />
    <div class="personagensList">
      <PersonagemCard v-for="personagem in personagens" :key="personagem.url" :personagem="personagem" />
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import PersonagemCard from "@/components/PersonagemCard.vue";

export default {
  name: "ListaPersonagens",
  props: {},
  components: {
    TextInput,
    PersonagemCard
},
  computed: {
    personagens() {
      return new Array(20).fill({});
    }
  }
};
</script>

<style scoped>
.personagensList {
  display: grid;
  grid-template-columns: 273px 273px 273px 273px;
  gap: 24px;
  column-gap: 24px;
  margin-top: 32px;
}

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
