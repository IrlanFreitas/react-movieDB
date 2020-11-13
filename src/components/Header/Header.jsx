import React from 'react'
import RMDBLogo from '../../assets/images/react-movie-logo.svg'
import TMDBLogo from '../../assets/images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './styles.js'

export default function Header() {
    return (<Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="rmdb-logo" />
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Content>
    </Wrapper>
    )
}

// ! Outras formas de fazer
// export const Header1 = () => (<Wrapper>
//     <Content>
//         <LogoImg src={RMDBLogo} alt="rmdb-logo" />
//         <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
//     </Content>
// </Wrapper>)

// * Outros componentes dentro do arquivo
// export const Header2 = () => (<Wrapper>
//     <Content>
//         <LogoImg src={RMDBLogo} alt="rmdb-logo" />
//         <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
//     </Content>
// </Wrapper>)

// ? Exportando
//TODO
// export default Header;