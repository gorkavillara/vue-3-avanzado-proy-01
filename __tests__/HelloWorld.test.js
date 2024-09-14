import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HelloWorld from "../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: "Hola mundo",
      },
    });
    expect(wrapper.text()).toContain("Hola mundo");
  });
});
