import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component correctly', () => {
  render(<App />);
  screen.debug();
});

test('renders title correctly', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Pekerjaan Rumah Yang Perlu Dilakukan/i);
  expect(title).toBeInTheDocument();
});

test('create successful', async () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText('Pekerjaan rumah'), {
    target: {
      value: 'Mengepel lantai'
    }
  });

  fireEvent.click(screen.getByText('Tambah'));

  expect(await screen.findByText(/Mengepel lantai/i)).toBeInTheDocument();
});

test('update successful', async () => {
  render(<App />);

  fireEvent.click(screen.getAllByText('Edit')[0]);

  fireEvent.change(screen.getByPlaceholderText(''), {
    target: {
      value: 'Perbaiki AC'
    }
  });

  fireEvent.click(screen.getAllByText('Edit')[0]);

  expect(await screen.findByText(/Perbaiki AC/i)).toBeInTheDocument();
});

test('delete successful', () => {
  render(<App />);

  fireEvent.click(screen.getAllByText('Hapus')[0]);

  expect(screen.getAllByText('Hapus')).toHaveLength(1);
});