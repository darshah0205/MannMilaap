import React from "react";
import { useState } from "react";
import Table from "../../Components/Table";
import SearchBar from "../../Components/SearchBar";
import { data } from "../../Mock/data";
import Modal from "../../Components/Modal";

const Home = () => {
  // eslint-disable-next-line
  const [gender, setGender] = useState("male");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState(null);
  return (
    <div className="flex flex-col">
      <SearchBar
        setGender={setGender}
        setUserName={setUserName}
        userName={userName}
      />
      <Table data={data} userName={userName} setId={setId} />
      {id !== null && <Modal id={id} setId={setId} />}
    </div>
  );
};

export default Home;
