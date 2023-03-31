import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it } from 'vitest';
import App, { routesConfig } from './App';

describe('App', () => {
  it('Renders Hello World', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    );
  });

  it('Renders not found page if invalid path', () => {
    const badRoute = createMemoryRouter(routesConfig, {
      initialEntries: ['/not-exist-page'],
    });

    render(<RouterProvider router={badRoute} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not Found'
    );
  });
});
