import React from 'react'
import { TotalValue } from './TotalValue'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('Renders Total Value component with correct value passed as props', () => {
  const { getByTestId } = render(<TotalValue total={1}></TotalValue>)
  expect(getByTestId('totalValue')).getAttribute(value).toEqual(1)
})
