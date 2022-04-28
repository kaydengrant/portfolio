import React from 'react';

import GeneralButton from '../GeneralButton';
import { render, fireEvent } from '../../../utils';

describe('GeneralButton tests', () => {
  const defaultProps = {
    title: 'Test button',
    onClick: jest.fn()
  };

  it('Should render GeneralButton with title passed in as prop', () => {
    const { getByText } = render(<GeneralButton {...defaultProps}/>);

    expect(getByText(defaultProps.title)).toBeDefined();
  });

  it('Should render GeneralButton and have onPress action when pressed', () => {
    const { getByText } = render(<GeneralButton {...defaultProps}/>);

    fireEvent.click(getByText(defaultProps.title));
    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
