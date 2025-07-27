import Box from "./Box";

type KeyboardProp = {
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  disable?:boolean
}

function Keyboard({ guessedLetters, setGuessedLetters ,disable}: KeyboardProp) {
  const text = "abcdefghijklmnopqrstuvwxyz";
  
  const handleGuessLetter = (letter: string): void => {
    // Check if letter is already guessed to prevent duplicates
    if (disable || guessedLetters.includes(letter.toLowerCase())) {
      return;
    }
    setGuessedLetters([...guessedLetters, letter.toLowerCase()]);
  };

  return (
    <div className="container">
      {text
        .toUpperCase()
        .split("")
        .map((item, index) => (
          <Box 
            value={item} 
            key={index} 
            sendToParent={handleGuessLetter}
            isDisabled={guessedLetters.includes(item.toLowerCase())}
          />
        ))}
    </div>
  );
}
export default Keyboard;