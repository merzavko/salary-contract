import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Dialog from "@/components/Dialog.vue";

describe("Dialog.vue", () => {
  it("renders props.phrase when passed", () => {
    const phrase = "Success!";
    const wrapper = shallowMount(Dialog, {
      propsData: { phrase },
    });
    expect(wrapper.text()).to.include(phrase);
  });

  it("renders props.tabData when isSuccess passed", () => {
    const isSuccess = true;
    const tabData = [
      {
        label: "Employer",
        id: "empoyer-tab",
        price: 312,
      },
      {
        label: "Employee",
        id: "empoyee-tab",
        price: 123,
      },
    ];
    const wrapper = shallowMount(Dialog, {
      propsData: { tabData, isSuccess },
    });
    expect(wrapper.text()).to.include(123);
  });
});
