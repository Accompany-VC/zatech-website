export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Zatech website!</p>

      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/Ze_C-Fwz_Ec"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}
