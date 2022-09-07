<template>
  <div class="containerListaFilmes">
    <h1>Filmes</h1>
    <TextInput
      placeholder="FILTRE POR NOME DO FILME"
      class="inputCadastro"
    />
    <div class="filmesList">
      <FilmeCard
        v-for="filme in filmes"
        :key="filme.url"
        :filme="filme"
      />
    </div>
    <SelectPage class="pageSelector" :page="page" :totalPages="10" @changePage="changePageHandler" />
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import FilmeCard from "@/components/FilmeCard.vue";
import SelectPage from "@/components/SelectPage.vue";

export default {
  name: "ListaFilmes",
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
    FilmeCard,
    SelectPage,
  },
  computed: {
    filmes() {
      return new Array(20).fill({});
    },
  },
};
</script>

<style scoped>
.pageSelector {
  margin-top: 33px;
}

.filmesList {
  display: grid;
  grid-template-columns: 273px 273px 273px 273px;
  gap: 24px;
  column-gap: 24px;
  margin-top: 32px;
}

.inputCadastro {
  margin-top: 50px;
}

.containerListaFilmes {
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
