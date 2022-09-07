<template>
  <div class="container">
    <input
      type="text"
      class="input"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: start;
}

.input {
  height: 40px;
  width: 100%;
  border: 1px solid var(--light-gray);
  background-color: var(--light-gray-2);
  padding-left: 8px;
  box-sizing: border-box;
  outline: none;
  color: var(--white);
  font-family: var(--roboto-light);
  font-size: 14px;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.4);
  font-family: var(--roboto-light);
  font-size: 14px;
  height: 19px;
  letter-spacing: 0px;
}
</style>