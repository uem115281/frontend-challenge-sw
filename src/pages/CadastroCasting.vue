<template>
  <div class="containerCadastro">
    <h1>Participe do próximo filme</h1>
    <form action="#" class="formularioCadastro">
      <h2>Digite suas informações</h2>
      <div class="subDivForm">
        <h3>informações Gerais</h3>
        <div class="column">
          <div class="textField">
            <label for="nome">NOME</label>
            <TextInput id="nome" placeholder="Digite seu nome" :value="nome" />
          </div>
          <div class="textField">
            <label for="email">EMAIL</label>
            <TextInput
              id="email"
              placeholder="Digite seu email comercial"
              :value="email"
            />
          </div>
          <div class="textField">
            <label for="senha">CRIE SUA SENHA</label>
            <TextInput
              id="senha"
              placeholder="Digite sua senha"
              :value="senha"
            />
          </div>
        </div>
        <div class="column">
          <div class="textField">
            <label for="nascimento">DATA DE NASCIMENTO</label>
            <TextInput
              id="nascimento"
              placeholder="Digite sua data de nascimento"
              :value="nascimento"
            />
          </div>
          <div class="textField">
            <label for="telefone">TELEFONE</label>
            <TextInput
              id="telefone"
              placeholder="Digite seu telefone"
              :value="telefone"
            />
          </div>
          <div class="textField">
            <label for="confirmarSenha">CONFIRME SUA SENHA</label>
            <TextInput
              id="confirmarSenha"
              placeholder="Repita sua senha"
              :value="confirmarSenha"
            />
          </div>
        </div>
      </div>
      <div class="subDivForm">
        <h3>Sobre o seu contato com Star Wars</h3>
      </div>
    </form>
  </div>
</template>
  
<script>
import TextInput from "@/components/TextInput.vue";
export default {
  name: "CadastroCasting",
  props: {},
  components: { TextInput },
  data: function () {
    return {
      nome: "",
      nascimento: "",
      email: "",
      telefone: "",
      senha: "",
      confirmarSenha: "",
    };
  },
};
</script>
  
<style scoped>
.textField input {
  width: 100%;
}

.textField label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--white);
  font-family: var(--roboto-regular);
  height: 19px;
  margin-bottom: 8px;
}

.textField {
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.subDivForm h3 {
  grid-column: 1 / 3;
  font-family: var(--star-jedi);
  color: var(--white);
  font-size: 18px;
  height: 29px;
  font-weight: 100;
}

.subDivForm {
  display: grid;
  grid-template-columns: 257px 257px;
  gap: 24px;
  row-gap: 8px;
  width: 100%;
  margin-top: 24px;
}

.formularioCadastro h2 {
  font-family: var(--star-jedi);
  color: var(--yellow);
  font-size: 24px;
  height: 38px;
}

.formularioCadastro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  background-color: var(--gray);
  border: 2px solid var(--light-gray);
  width: 570px;
  padding: 24px 16px;
  box-sizing: border-box;
}

.containerCadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-bottom: 86px;
}

.containerCadastro h1 {
  font-family: var(--star-jedi);
  color: var(--yellow);
  height: 64px;
  font-size: 40px;
  letter-spacing: 1.6px;
  margin-top: 48px;
}
</style>
  