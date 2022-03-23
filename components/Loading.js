import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          height={100}
          style={{ marginBottom: "3em" }}
        />
        <CircularProgress color="success" />
      </div>
    </center>
  );
};

export default Loading;
