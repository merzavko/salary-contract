<template>
  <div>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab v-for="tab in tabSettings" :key="tab.id" :id="tab.id" :md-label="tab.label">
        <slot name="tab-content" :tab="tab">Tab content</slot>
      </md-tab>
    </md-tabs>
  </div>
</template>
<script>
export default {
  name: "tab-component",
  props: {
    value: {
      type: Array
    }
  },
  created() {
    this.tabSettings = { ...this.value };
  }
};
</script>