export default function Post(props) {
  return (
    <>
      <div
        style={{
          padding: "5px",
          border: "solid #cdc5c5 1px",
          margin: "15px 30%",
          borderRadius: "2px",
          boxShadow: "1px 2px #888888",
        }}
      >
        <header style={{ padding: "5px" }}>Your hair Style</header>
        <img
          style={{
            padding: "5px",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
          src={`http://localhost:8080/uploads/${props.file}`}
          alt=""
        />
      </div>
    </>
  );
}
