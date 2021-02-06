import { mount } from '@vue/test-utils';
import TestComponent from '../src/components/TestComponent.vue';

test('renders a todo', () => {
  const wrapper = mount(TestComponent);

  const todo = wrapper.get('[data-test="todo"]');
  expect(todo.text()).toBe('Learn Vue.js 3');
});
