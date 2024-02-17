interface IStartPage {
    startQuiz: () => void;
}

const StartPage:React.FC<IStartPage> = ({startQuiz}) => {
    return (
        <section className="container" id="start-container">
            <h1>Hi, welcome to this page!</h1>
            <p>
            Today is your birthday! Voordat jij je birthday wishes mag bekijken
            moet je een kleine quiz ondergaan voor fun. <br/>&#40;Don&#39;t panic about
            the quiz, it is not a exam &#59;p&#41;
            </p>
            <h3>Are u ready?</h3>
            <button id="start-quiz-btn" onClick={ () => startQuiz() }>
            Start de Quiz
            </button>
        </section>
    )
}

export default StartPage;