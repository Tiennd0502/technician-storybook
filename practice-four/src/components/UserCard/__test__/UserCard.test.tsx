import { render } from '@testing-library/react';

import UserCard from '../index';

describe('UserCard test cases', () => {
  const props = {
    name: 'John',
    avatar: '/assets/images/empty-avatar.svg',
  };

  test('should render correctly', () => {
    const { container } = render(<UserCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
