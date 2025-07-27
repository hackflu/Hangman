type InputProp = {
  guessedLetters: string[];
  wordsToGuess: string;
};

function Input({ guessedLetters, wordsToGuess }: InputProp) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5em",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "2rem",
      }}
    >
      {wordsToGuess.split("").map((item, index) => {
        return (
          <span
            style={{
              borderBottom: ".1em solid black",
            }}
            key={index}
          >
            <input
              type="text"
              value={item}
              key={index}
              disabled
              style={{
                border: "none",
                width: "60px",
                height: "80px",
                textAlign: "center",
                background: "transparent",
                fontSize: "3rem",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "black",
                visibility: guessedLetters.includes(item.toLowerCase()) ? "visible" : "hidden"
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
export default Input;