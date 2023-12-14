import { render } from '@testing-library/react';
import Input from '..';

describe('Input component', () => {
  test('should show error message when reive error', () => {
    const props = {
      error: 'Error message',
    };

    const { getByText } = render(<Input {...props} />);
    const error = getByText('Error message');

    expect(error).toBeTruthy();
  });

  test('should show label', () => {
    const props = {
      label: 'Name',
    };
    const { getByText } = render(<Input {...props} />);
    const target = getByText('Name');

    expect(target).toBeTruthy();
  });

  test('match snapshot', () => {
    const props = {
      error: 'Error message',
      label: 'Name',
    };
    const { container } = render(<Input {...props} />);

    expect(container).toMatchSnapshot();
  });
});
