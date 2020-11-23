import Grid from '../../components/Grid/Grid'

import { fireEvent, render } from '@testing-library/react'

describe('Test component Grid', () => {
    it('should be able to add new item', () => {
        const { getByTestId, getByText, getByLabelText } = render(<Grid header={"Filmes Populares"} />);

        expect(getByText("Filmes Populares"))
    })
})