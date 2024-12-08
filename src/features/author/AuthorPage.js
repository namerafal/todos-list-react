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

                    <b>Od wielu lat pasjonuję się elektroniką</b>, która stała się moim hobby. <br />
                    Interesuję się także technologią, fotografią oraz muzyką; jestem samoukiem w grze na perkusji,
                    która dodaje mi energii i pozytywnych wrażeń, obecnie jest to moje ulubione hobby. <br />
                    Choć obecnie nie mam okazji kontynuować swoich działań w dziedzinie elektroniki,
                    programowanie wciąż fascynuje mnie od momentu, gdy po raz pierwszy sięgnąłem po <i>Arduino</i>.

                    <h3>Dlaczego programowanie?</h3>

                    Programowanie stało się moim sposobem na spędzanie czasu. Kiedy siadam do komputera, <br />
                    czas mija niezauważalnie, co potwierdza moją pasję do tej dziedziny.<br />
                    Obecnie korzystam z kursu w szkole <b>YouCode</b>, co daje mi <em>możliwość rozwijania umiejętności</em><br />
                    i mam nadzieję na <em>zmianę swojego stylu życia oraz dalszy rozwój</em> w obszarze technologii.

                </>
            }
        />
    </MainContainer>
);

export default Author