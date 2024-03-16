import React from "react";
import Modal from "./Modal";

const Table = ({ data, userName, setId }) => {
  const headings = [
    "Full Name",
    "Contact Number",
    "date_of_birth",
    "email_id",
    "religion",
    "Group Name",
    "Actions",
  ];
  let filteredData = data; // Declare it outside the condition

  if (userName !== "") {
    filteredData = data.filter((item) =>
      item.full_name.toLowerCase().includes(userName.toLowerCase())
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto max-h-[calc(100vh-200px)]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headings.map((head, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.full_name}
              </th>
              <td className="px-6 py-4">{user.contact_number}</td>
              <td className="px-6 py-4">{user.date_of_birth}</td>
              <td className="px-6 py-4">{user.email_id}</td>
              <td className="px-6 py-4">{user.religion}</td>
              <td className="px-6 py-4">{user.group_membership_list}</td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-500 hover:underline cursor-pointer"
                  onClick={() => setId(user.id)}
                >
                  View More
                </button>
              </td>
              {/* <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
