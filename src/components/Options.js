import { useQuiz } from "../contexts/QuizContext";

function Option({ question }) {
  const { answer, newAnswer } = useQuiz();
  const hadAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hadAnswer
              ? index === question.correctOption
                ? " correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hadAnswer}
          onClick={() => newAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
