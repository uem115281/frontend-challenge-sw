<template>
  <div class="containerListaPersonagens">
    <h1>Personagens</h1>
    <TextInput
      placeholder="FILTRE POR NOME DO PERSONAGEM"
      class="inputCadastro"
    />
    <div class="personagensList">
      <PersonagemCard
        v-for="personagem in personagens"
        :key="personagem.url"
        :personagem="personagem"
      />
    </div>
    <SelectPage class="pageSelector" :page="page" :totalPages="10" @changePage="changePageHandler" />
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import PersonagemCard from "@/components/PersonagemCard.vue";
import SelectPage from "@/components/SelectPage.vue";

export default {
  name: "ListaPersonagens",
  props: {},
  data: function() {
    return {
      page: 0
    }
  },
  methods: {
    changePageHandler(p) {
      this.page = p;
    }
  },
  components: {
    TextInput,
    PersonagemCard,
    SelectPage,
  },
  computed: {
    personagens() {
      return new Array(20).fill({});
    },
  },
};
</script>

<style scoped>
.pageSelector {
  margin-top: 33px;
}

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

.containerListaPersonagens {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-bottom: 86px;
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
