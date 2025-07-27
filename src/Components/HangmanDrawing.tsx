type HangmanDrawingProp = {
  incorrectLetters: number
}

const HEAD = (
  <div
    key="head"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "50px",
      left: "140px",
    }}
  />
);

const BODY = (
  <div
    key="body"
    style={{
      width: "5px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "105px",
      left: "165px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    style={{
      width: "70px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "130px",
      left: "165px",
      transform: "rotate(-30deg)",
      transformOrigin: "left center",
    }}
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    style={{
      width: "70px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "130px",
      left: "95px",
      transform: "rotate(30deg)",
      transformOrigin: "right center",
    }}
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    style={{
      width: "70px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "203px",
      left: "168px",
      transform: "rotate(60deg)",
      transformOrigin: "left center",
    }}
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    style={{
      width: "70px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "203px",
      left: "98px",
      transform: "rotate(-60deg)",
      transformOrigin: "right center",
    }}
  />
);

const BODYPARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

function HangmanDrawing({ incorrectLetters }: HangmanDrawingProp) {
  return (
    <div
      style={{
        position: "relative",
        height: "350px",
        width: "250px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          height: "350px",
          width: "10px",
          background: "black",
          position: "absolute",
          left: "50px",
          bottom: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "120px",
          background: "black",
          position: "absolute",
          top: "0",
          left: "50px",
        }}
      />
      <div
        style={{
          height: "50px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: "0",
          left: "165px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      />
      {BODYPARTS.slice(0, incorrectLetters)}
    </div>
  );
}
export default HangmanDrawing;