export default function Post(props) {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-green-500">
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
