<template>
  <div id="app">
    <div>
      <tab-compontent v-model="tabData">
        <template slot="tab-content" slot-scope="{ tab }">
          <submit-form :form-info="tab" @salary-submitted="addSalary"></submit-form>
        </template>
      </tab-compontent>
      <dialog-component :is-success="isSuccess" :phrase="phrase" :tab-data="tabData" ref="dialog"></dialog-component>
    </div>
  </div>
</template>

<script>
import TabCompontent from "./components/Tabs";
import SubmitForm from "./components/Form";
import DialogComponent from "./components/Dialog";
export default {
  name: "App",
  components: { TabCompontent, SubmitForm, DialogComponent },
  data() {
    return {
      tabData: [
        {
          label: "Employer",
          id: "employer-tab",
          price: 0
        },
        {
          label: "Employee",
          id: "employee-tab",
          price: 0
        }
      ]
    };
  },
  methods: {
    addSalary(priceInfo) {
      this.tabData.find(element => element.id === priceInfo.tab.id).price =
        priceInfo.price;
    }
  },
  computed: {
    dataFilled() {
      return !!(this.employeeData.price && this.employerData.price);
    },
    isSuccess() {
      return this.employeeData.price < this.employerData.price;
    },
    phrase() {
      return this.isSuccess ? "Success!" : "Failure!";
    },
    employeeData() {
      return this.tabData.find(item => item.id === "employee-tab");
    },
    employerData() {
      return this.tabData.find(item => item.id === "employer-tab");
    }
  },
  watch: {
    dataFilled(newVal, oldVal) {
      this.$refs.dialog.isOpen = true;
    }
  }
};
</script>