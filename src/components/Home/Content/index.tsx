import { ContentDiv, FirstMainTitle, MainTitle, SecondaryContent } from './styles';

export default function MainContent(){
    return(
        <ContentDiv>
            <FirstMainTitle>Our mission is</FirstMainTitle>
            <SecondaryContent>Nossa missão é</SecondaryContent>
            <MainTitle>to transform the world</MainTitle>
            <SecondaryContent>transformar o mundo</SecondaryContent>
            <MainTitle>building digital experiences</MainTitle>
            <SecondaryContent>construindo experiências digitais</SecondaryContent>
            {/*eslint-disable-next-line quotes*/}
            <MainTitle>{`that enable our client's growth`}</MainTitle>
            <SecondaryContent>que permitam o crescimento dos nossos clientes</SecondaryContent>
        </ContentDiv>
    )
}