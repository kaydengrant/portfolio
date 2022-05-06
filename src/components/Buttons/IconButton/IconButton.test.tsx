import React from 'react';

import IconButton from '../IconButton';
import sun from '../../../../public/sun.svg';
import { render, fireEvent } from '../../../utils';

describe('IconButton tests', () => {
  const defaultProps = {
    image: sun,
    onClick: jest.fn()
  };

  it('Should render IconButton with image passed in as prop', () => {
    const { getByText } = render(<IconButton {...defaultProps}/>);

    expect(getByText(defaultProps.image)).toBeDefined();
  });

});
