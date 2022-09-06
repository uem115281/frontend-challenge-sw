<template>
  <div class="container">
    <h1>Personagens</h1>
  </div>
</template>
  
  <script>
export default {
  name: "ListaPersonagens",
  props: {},
};
</script>
  
<style scoped>
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
  