import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue functions", () => {
  it("set price value", () => {
    const wrapper = shallowMount(App);
    const testData = {
      tab: {
        label: "Employer",
        id: "employer-tab",
        price: 0,
      },
      price: 300,
    };
    const expectedVal = {
      label: "Employer",
      id: "employer-tab",
      price: 300,
    };
    const testInctance = wrapper.vm;
    testInctance.addSalary(testData);
    expect(testInctance.tabData).to.deep.include(expectedVal);
  });

  it("get dataFilled computed value", () => {
    const wrapper = shallowMount(App);
    const testDataEmployer = {
      tab: {
        label: "Employer",
        id: "employer-tab",
        price: 0,
      },
      price: 300,
    };
    const testDataEmployee = {
      tab: {
        label: "Employee",
        id: "employee-tab",
        price: 0,
      },
      price: 200,
    };
    const testInctance = wrapper.vm;
    testInctance.addSalary(testDataEmployer);
    testInctance.addSalary(testDataEmployee);
    expect(testInctance.dataFilled).to.be.true;
  });
});
