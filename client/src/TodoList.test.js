import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Renders Todo List Correctly', () => {
  const { getByText } = render(<TodoList tasks={["mencuci piring", "mengepel lantai"]} />);
  const task1 = getByText(/mencuci piring/i);
  expect(task1).toBeInTheDocument();

  const task2 = getByText(/mengepel lantai/i);
  expect(task2).toBeInTheDocument();
});
