import { render } from '@testing-library/react';

import Dropdown from '../index';

describe('Dropdown test cases', () => {
  const props = {
    name: 'John',
    avatar: '/assets/images/empty-avatar.svg',
  };

  test('should render correctly', () => {
    const { container } = render(<Dropdown {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('get list options in dropdown component', () => {
    const { getByTestId } = render(<Dropdown {...props} />);

    const avatar = getByTestId('dropdown-options');
    expect(avatar).toBeTruthy();
  });
});
