import Actor from '../../components/Actor/Actor'

import { render } from '@testing-library/react'

describe('Test component Grid', () => {
    it('should be render Actor', () => {
        const { getByTestId, getByText, debug, findByTestId } = render(
            <Actor 
                character="Test Character" 
                name={"Nome do ator"} 
                image={"http://image.tmdb.org/t/p/w780/rOy7EkU7Yu8NMLTmecyNOexv5Ql.jpg"}
            />
        );

        expect(getByText("Test Character"))

        expect(getByText("Nome do ator"))

        expect(getByTestId('img').src).toEqual("http://image.tmdb.org/t/p/w780/rOy7EkU7Yu8NMLTmecyNOexv5Ql.jpg");

        const rend = render(
            <Actor 
                character="Test Character" 
                name={"Nome do ator"} 
                image={"http://image.tmdb.org/t/p/w780/rOy7EkU7Yu8NMLTmecyNOexv5Ql.jpg"}
            />
        );

        expect(rend).toMatchSnapshot();

    })
})