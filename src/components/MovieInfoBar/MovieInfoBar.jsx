import React from 'react';

import { calcTime, convertMoney } from '../../helpers/helpers';

import { Wrapper, Content } from './styles.js';

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Tempo de duração: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Orçamento: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Lucro: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;