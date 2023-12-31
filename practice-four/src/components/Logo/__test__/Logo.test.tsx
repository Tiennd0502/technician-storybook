import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Logo from '../index';

test('renders Logo with content', () => {
  const { container } = render(
    <MemoryRouter>
      <Logo />,
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
