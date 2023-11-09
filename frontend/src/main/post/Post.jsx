export default function Post(props) {
  return (
    <>
      <div >
        <div >
          {" "}
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
      </div>
    </>
  );
}
