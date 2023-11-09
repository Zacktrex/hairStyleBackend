import Post from "../post";
import { useEffect, useState } from "react";
import Header from "../header";
import InputBox from "../box";
import MultiSelectCheckbox from "../checkBox";
import ImageUpload from "./UploadImage";
import "./home.css";

export default function Home() {
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("http://localhost:8080/images") // Replace with the actual URL of your Node.js server
      .then((response) => response.json())
      .then((data) => {
        setFileList(data.files);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [fileList]);

  return (
    <>
      <Header />
      <ImageUpload />
      {/* <InputBox/>
      <MultiSelectCheckbox/> */}
      <div className="flex-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          fileList.map((file, index) => <Post key={index} file={file} />)
        )}
      </div>
    </>
  );
}
