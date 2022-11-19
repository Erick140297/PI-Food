import { render, screen } from '@testing-library/react'
import Error from '../components/Error/Error'

describe('Error component', ()=>{
  test('The error message should be displayed', () => {
    render(<Error message={'Error message'}/>)
    const text = screen.getByText('Error: Error message')
    expect(text).toBeInTheDocument()
  })
})