import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import ProductForm from '..';

const onSubmit = jest.fn();
const onClose = jest.fn();

describe('ProductForm component', () => {
  const props = {
    isOpen: true,
    onClose,
    onSubmit,
  };

  test('should display an error message when the Product Name is not entered', async () => {
    const { getByRole, getByPlaceholderText } = render(<ProductForm {...props} />);
    const submit = getByRole('button', { name: /Submit/i });
    const brandInput = getByPlaceholderText('Brand Name');
    const serviceInput = getByPlaceholderText('Service');

    fireEvent.change(brandInput, { target: { value: 'LG' } });
    fireEvent.change(serviceInput, { target: { value: 'Repair' } });
    fireEvent.click(submit);

    await waitFor(() => {
      const requireMessage = screen.getByText('Product Name is required.');

      expect(requireMessage).toBeTruthy();
    });
  });

  test('should display an error message when the Service is not entered', async () => {
    const { getByRole, getByPlaceholderText } = render(<ProductForm {...props} />);
    const submit = getByRole('button', { name: /Submit/i });
    const nameInput = getByPlaceholderText('Product Name');
    const brandInput = getByPlaceholderText('Brand Name');

    fireEvent.change(nameInput, { target: { value: 'Product 1' } });
    fireEvent.change(brandInput, { target: { value: 'LG' } });
    fireEvent.click(submit);

    await waitFor(() => {
      const requireMessage = screen.getByText('Service Name is required.');
      expect(requireMessage).toBeTruthy();
    });
  });

  test('should submit form', async () => {
    const { getByPlaceholderText, getByRole } = render(<ProductForm {...props} />);

    const nameInput = getByPlaceholderText('Product Name');
    const brandInput = getByPlaceholderText('Brand Name');
    const serviceInput = getByPlaceholderText('Service');
    const submit = getByRole('button', { name: /Submit/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'Product 1' } });
      fireEvent.change(brandInput, { target: { value: 'LG' } });
      fireEvent.change(serviceInput, { target: { value: 'Repair' } });
      fireEvent.click(submit);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('it matches the snapshot', () => {
    const dom = render(<ProductForm {...props} />);
    expect(dom).toMatchSnapshot();
  });
});
