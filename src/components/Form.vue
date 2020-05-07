<template>
  <form @submit.prevent="submitForm" class="md-layout md-alignment-top-center">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-content>
        <md-field v-if="!formInfo.price">
          <label>
            <slot name="input-label">Price</slot>
          </label>
          <md-input v-model="price" type="number" required></md-input>
        </md-field>
        <md-button
          @click="submitForm"
          :disabled="!!formInfo.price"
          class="md-raised md-primary"
        >Submit</md-button>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "submit-form",
  props: ["formInfo"],
  data() {
    return {
      price: null,
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.$emit("salary-submitted", {
        tab: this.formInfo,
        price: this.price
      });
    }
  }
};
</script>