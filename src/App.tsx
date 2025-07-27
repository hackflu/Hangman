// App.tsx
import { useState } from "react";
import words from "./wordlist.json";
import Keyboard from "./Components/Keyboard";
import HangmanDrawing from "./Components/HangmanDrawing";
import Input from "./Components/Input";

function App() {
  const [wordsToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordsToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordsToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordsToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter));
  const isOver = isLoser || isWinner
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div>
        {isLoser && (
          <p
            style={{
              color: "white",
              backgroundColor: "red",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            You lose, try again after refresh
          </p>
        )}
        {isWinner && (
          <p
            style={{
              color: "white",
              backgroundColor: "green",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            You Won!
          </p>
        )}
      </div>
      <HangmanDrawing incorrectLetters={incorrectLetters.length} />
      <Input guessedLetters={guessedLetters} wordsToGuess={wordsToGuess} />
      <Keyboard
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        disable={isOver}
      />
    </div>
  );
}
export default App;