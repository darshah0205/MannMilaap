import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../../Components/Table";
import SearchBar from "../../Components/SearchBar";
import Modal from "../../Components/Modal";

const Home = () => {
  // eslint-disable-next-line
  const [gender, setGender] = useState("male");
  const [userName, setUserName] = useState("");
  const [modalData, setModalData] = useState(null);
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/customer");
        setData(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="flex flex-col">
      <SearchBar
        setGender={setGender}
        setUserName={setUserName}
        userName={userName}
      />
      {data && (
        <Table data={data} userName={userName} setModalData={setModalData} />
      )}
      {modalData !== null && (
        <Modal modalData={modalData} setModalData={setModalData} />
      )}
    </div>
  );
};

export default Home;
