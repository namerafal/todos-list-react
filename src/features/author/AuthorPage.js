import Header from "../../common/Header";
import AppSection from "../../common/Section";
import { MainContainer } from "../../GlobalStyle";



const Author = () => (
    <MainContainer>
        <Header title="O autorze" />
        <AppSection
            title="Rafał Olewicz"

            body={
                <>
                    <p>
                        <b>Od dawna interesowałem się elektroniką</b>, jest to moim hobby (jak tylko mam czas).<br />
                        Zainteresowania mam dość szerokie; technologie, muzyka (od roku jestem samoukiem perkusyjnym), fotografia,
                        programowanie (zafascynowało mnie od momentu sięgnięcia do <i>Arduino</i>).
                    </p>

                    <h3>Dlaczego programowanie?</h3>

                    <p>
                        Programowanie spodobało mi się tak bardzo, że kiedy siadam do komputera, nie zauważam jak szybko mija
                        czas.<br />
                        Postanowiłem rozejrzeć się za kursami, wtedy trafiła do mnie zachęcająca prezentacja
                        <b>YouCode</b>, mam nadzieję,
                        że dzięki temu będę miał szansę <em>zmienić styl życia</em>.
                    </p>
                </>
            }
        />
    </MainContainer>
);

export default Author