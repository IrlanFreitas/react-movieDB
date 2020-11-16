import React, { useEffect, useState, useRef } from 'react';

import { Wrapper, Content } from './styles.js';

import SearchIcon from '../../assets/images/search-icon.svg'

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('')

    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    const testeDoSearchTerm = (event) => {
        setState(event.currentTarget.value);
        setSearchTerm(state);
    };

    return (
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt="search-icon" />
                <input
                    value={state}
                    type="text"
                    name="search"
                    id="search-input"
                    placeholder="Procurar Filmes"
                    onChange={(e) => testeDoSearchTerm(e)} />
            </Content>
        </Wrapper>
    )
};


export default SearchBar;