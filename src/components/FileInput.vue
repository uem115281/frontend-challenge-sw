<template>
  <div class="container">
    <input type="button" value="Escolher arquivo" class="button" @click="handleClick"/>
    <span class="text">{{ text }}</span>
    <input type="file" ref="input" @change="handleChange">
  </div>
</template>

<script>
export default {
    name: "FileInput",
    props: {},
    data: function() {
      return {
        text: "Nenhum arquivo selecionado"
      }
    },
    methods: {
      handleChange(evt) {
        this.text = evt.target.value;
        this.$emit("changeFile", evt);
      },
      handleClick() {
        this.$refs.input.click();
      }
    }
};
</script>

<style scoped>

  .text {
    color: var(--white);
    font-family: var(--roboto-light);
    font-size: 12px;
    height: 16px;
  }

  input[type=file] {
    display: none;
  }

  .button {
    height: 25px;
    border: 1px solid var(--yellow);
    background-color: transparent;
    padding: 0px 8px 4px 8px;
    box-sizing: border-box;
    font-family: var(--star-jedi);
    color: var(--white);
    font-size: 10px;
    font-weight: 100;
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>