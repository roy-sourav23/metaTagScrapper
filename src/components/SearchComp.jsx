import axios from "axios";
import React, { useState } from "react";
import instance from "../api";

const SearchComp = () => {
  const [searchText, setSearchText] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
    image: "",
  });

  console.log("metadata", metaData);

  const urlRegex = "https?://[a-z]{2,}.[a-z]{1,}.?[a-z]+";

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
    if (!searchText.match(urlRegex)) {
      setError("it is not a url");
      setIsError(true);
    } else {
      setError("");
      setIsError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      //   const response = await instance.get(searchText);
      const response = await axios.get(
        searchText,
        // `https://cors-anywhere.herokuapp.com/${searchText}`,
        {
          headers: {
            "Access-Control-Allow-Origin": false,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      //   console.log("Response:", response);
      //   console.log("Data:", response.data);

      // Parse the HTML content
      const htmlContent = response.data;
      const doc = new DOMParser().parseFromString(htmlContent, "text/html");

      // Extract title, description, and image meta tags
      const title = doc.querySelector("title")
        ? doc.querySelector("title").textContent
        : "";
      const description = doc.querySelector("meta[name='description']")
        ? doc.querySelector("meta[name='description']").getAttribute("content")
        : "";
      const image = doc.querySelector("meta[property='og:image']")
        ? doc.querySelector("meta[property='og:image']").getAttribute("content")
        : doc.querySelector("meta[name='twitter:image']")
        ? doc
            .querySelector("meta[name='twitter:image']")
            .getAttribute("content")
        : "";

      // Set the state with the fetched meta data
      setMetaData({
        title: title,
        description: description,
        image: image,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // console.log("respose", response);
    // console.log("data", response.data);
  };
  return (
    <>
      <div className="bg-[#36169a] w-full h-[400px] px-20 py-7 text-center">
        <h1 className="text-3xl py-4 text-white font-bold">
          Preview and Generate Open Graph Meta Tags
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchText"
            id="searchText"
            value={searchText}
            onChange={handleChange}
            placeholder="search"
            className="py-1 px-4 rounded outline-none"
          />
          <button
            type="submit"
            className="text-white py-1 px-4 rounded bg-[#5d46a0] ml-4 text-md "
          >
            Check Website
          </button>
        </form>
        <p className="text-red-600"> {isError && error}</p>
      </div>
    </>
  );
};

export default SearchComp;
