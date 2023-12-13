import { render } from '@testing-library/react';

import { PRODUCT_HEADER_COLUMNS } from '@/constants';
import { PRODUCTS } from '@/__mocks__';

import Table from '..';

describe('Table test cases', () => {
  const props = {
    title: 'Products listing',
    columns: PRODUCT_HEADER_COLUMNS,
    data: PRODUCTS,
  };

  test('should render correctly', () => {
    const { container } = render(<Table {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render enough header elements', () => {
    const { getByRole } = render(<Table {...props} />);
    const header = getByRole('list');

    expect(header.childNodes).toHaveLength(PRODUCT_HEADER_COLUMNS.length);
  });

  test('Should render empty header elements', () => {
    const { getByRole } = render(<Table data={[]} columns={[]} title='Products listing' />);
    const header = getByRole('list');

    expect(header.childNodes).toHaveLength(0);
  });
});
