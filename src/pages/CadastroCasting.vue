<template>
  <div class="containerCadastro">
    <h1>Participe do próximo filme</h1>
    <form action="#" class="formularioCadastro">
      <h2>Digite suas informações</h2>
      <div class="firstSubDivForm">
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
      <div class="secondSubDivForm">
        <h3>Sobre o seu contato com Star Wars</h3>
        <div class="selectField">
          <label>QUAL SEU PERSONAGEM FAVORITO?</label>
          <MySelect
            :data="personagens"
            placeholder="Selecione seu personagem"
            class="selectPersonagem"
          />
        </div>
        <div class="textField">
          <label>UM RESUMO DA SUA CARREIRA ARTISTICA</label>
          <MyTextarea
            class="textResumo"
            placeholder="Escreva aqui o resumo"
          />
        </div>
        <div class="fileField">
          <label for="curriculo">ANEXE SEU CURRÍCULO</label>
          <FileInput @changeFile="handleChange"></FileInput>
        </div>
      </div>
      <MyButton label="Enviar" class="buttonSend" />
    </form>
  </div>
</template>
  
<script>
import TextInput from "@/components/TextInput.vue";
import MySelect from "@/components/MySelect.vue";
import FileInput from "@/components/FileInput.vue";
import MyTextarea from "@/components/MyTextarea.vue";
import MyButton from "@/components/MyButton.vue";
export default {
  name: "CadastroCasting",
  props: {},
  components: { TextInput, MySelect, FileInput, MyTextarea, MyButton },
  data: function () {
    return {
      nome: "",
      nascimento: "",
      email: "",
      telefone: "",
      senha: "",
      confirmarSenha: "",
      personagens: [{
        value: 1,
        label: 'personagem 1'
      }, {
        value: 2,
        label: 'personagem 2'
      }, {
        value: 3,
        label: 'personagem 3'
      }, {
        value: 4,
        label: 'personagem 4'
      }]
    };
  },
  methods: {
    handleChange(evt) {
      console.log(evt);
    }
  }
};
</script>
  
<style scoped>
.buttonSend {
  align-self: center;
  margin-top: 24px;
  color: var(--yellow);
  height: 42px;
  width: 372px;
}

.selectPersonagem {
  width: 257px;
}

.textField input {
  width: 100%;
}

.textField label, .selectField label, .fileField label {
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

.secondSubDivForm h3 {
  margin-bottom: -8px;
}

.firstSubDivForm h3, .secondSubDivForm h3 {
  grid-column: 1 / 3;
  font-family: var(--star-jedi);
  color: var(--white);
  font-size: 18px;
  height: 29px;
  font-weight: 100;
}

.secondSubDivForm {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
}

.firstSubDivForm {
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
  margin-bottom: 40px;
}
</style>
  