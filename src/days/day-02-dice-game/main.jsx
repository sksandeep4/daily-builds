import { useState } from "react";

export const Day02DiceGame = () => {
  const [player1Roll, setPlayer1Roll] = useState(1);
  const [player2Roll, setPlayer2Roll] = useState(1);
  const [winner, setWinner] = useState("");
  const rollDice = () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    setPlayer1Roll(roll1);
    setPlayer2Roll(roll2);
    if (roll1 > roll2) setWinner("The Winner is Player 1");
    else if (roll2 > roll1) setWinner("The Winner is Player 2");
    else setWinner("It's a Draw!");
  };
  return (
    <div className="h-screen bg-[#393E46] font-atma">
      <div className="flex flex-col items-center justify-center text-[#4ECCA3] font-bold">
        <h1 className="mt-32 text-5xl">Dice Game</h1>
        <div className="flex mt-16 flex-row justify-center text-2xl">
          <div className="flex flex-col justify-center mx-5 items-center ">
            <h3 className="m-2">Player 1</h3>
            <img
              src={`/src/days/day-02-dice-game/images/dice${player1Roll}.png`}
              alt={`Dice showing ${player1Roll}`}
            />
          </div>

          <div className="flex flex-col justify-center mx-5 items-center ">
            <h3 className="m-2">Player 2</h3>
            <img
              src={`/src/days/day-02-dice-game/images/dice${player2Roll}.png`}
              alt={`Dice showing ${player1Roll}`}
            />
          </div>
        </div>
        <button
          className="my-5 border border-[#4ECCA3] p-5 px-8 text-2xl"
          onClick={rollDice}
        >
          {winner == "" ? "Roll Dice" : "Roll Dice Again"}
        </button>
        <h1 className="text-6xl">{winner}</h1>
      </div>
    </div>
  );
};
