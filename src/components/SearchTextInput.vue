<template>
  <div class="container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon">
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
      />
    </svg>
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
  name: "SearchTextInput",
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

.icon {
  fill: var(--white);
  width: 17.5px;
  height: 17.5px;
  margin-right: -32.5px;
  margin-left: 16.25px;
  z-index: 2000;
}

.input {
  height: 40px;
  width: 570px;
  border: 2px solid var(--light-gray);
  background-color: var(--gray);
  padding-left: 44px;
  box-sizing: border-box;
  z-index: 1000;
  outline: none;
  color: var(--white);
  font-family: var(--roboto-regular);
  font-size: 14px;
}

.input::placeholder {
  color: var(--white);
  font-family: var(--roboto-regular);
  font-size: 14px;
  height: 19px;
  letter-spacing: 0px;
}
</style>