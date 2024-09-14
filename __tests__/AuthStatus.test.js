import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AuthStatus from '../src/components/AuthStatus.vue';

describe('AuthStatus.vue', () => {
  it('displays login prompt when not authenticated', () => {
    const wrapper = mount(AuthStatus);
    expect(wrapper.text()).toContain('Please log in.');
  });

  it('displays welcome message when authenticated', async () => {
    const wrapper = mount(AuthStatus);
    wrapper.vm.isAuthenticated = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Welcome back, user!');
  });
});
