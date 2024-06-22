import React from 'react';
import { render, screen } from '@testing-library/react';

import Root from './root.component';

describe('Root component', () => {
  it('should be in the document', async () => {
    // ARRANGE
    render(<Root name="Testapp" />);
    await screen.findByTestId('root');

    // ASSERT
    expect(screen.getByText(/Testapp is mounted!/i)).toBeDefined();
  });
});
