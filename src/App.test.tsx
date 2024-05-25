import { render, screen, RenderResult } from '@testing-library/react';
import App from './App';
import React = require('react');
test('renders learn react link', (): void => {
  const appRenderResult: RenderResult = render(<App />);
  const linkElement: HTMLElement | null = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
