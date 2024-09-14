import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AgeCheck from '../src/components/AgeCheck.vue';

describe('AgeCheck.vue', () => {
  it('renders correctly with a valid age', () => {
    const wrapper = mount(AgeCheck, {
      props: { age: 25 },
    });
    expect(wrapper.text()).toContain('Your age is: 25');
  });

  it('renders an error message with an invalid age', () => {
    const wrapper = mount(AgeCheck, {
      props: { age: -5 },
    });
    expect(wrapper.text()).toContain('Invalid age');
  });
});
