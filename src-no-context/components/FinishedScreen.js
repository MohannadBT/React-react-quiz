import { preconnect } from "react-dom";

function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (preconnect === 100) emoji = "🥇";
  if (preconnect > 80 && preconnect < 100) emoji = "🥈";
  if (preconnect > 50 && preconnect < 80) emoji = "🎉";
  else emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Try again
      </button>
    </>
  );
}

export default FinishedScreen;
