import React from "react";
import { data } from "../Mock/data";

const Modal = ({ id, setId }) => {
  return (
    // <!-- Main modal -->
    <div
      onClick={() => {
        setId(null);
      }}
      class="bg-gray-700/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        class="relative p-4 w-full max-w-2xl max-h-full"
      >
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white ">
              {data[id].full_name}
            </h3>
            <h1 className="text-gray-500 font-semibold">
              {data[id].contact_number}
            </h1>
            <h1 className="text-gray-500 font-semibold">{data[id].email_id}</h1>
          </div>
          {/* <!-- Modal body --> */}
          <div class="p-4 md:p-5 space-y-4 flex flex-col text-gray-500">
            <div className="parents flex justify-start gap-8">
              <span>
                Father :{" "}
                <span className="font-bold">{data[id].father_full_name}</span>
              </span>
              <span>
                Mother :{" "}
                <span className="font-bold">{data[id].mother_full_name}</span>
              </span>
            </div>
            <div className="education">
              Education/Qualification:{" "}
              <span className="font-bold">{data[id].highest_education}</span>
            </div>
            <div className="occupation">
              Occupation:{" "}
              <span className="font-bold">{data[id].occupation}</span>
            </div>
            <div className="birth_date">
              Birth Date:{" "}
              <span className="font-bold">{data[id].date_of_birth}</span>
            </div>
            <div className="religion">
              Religion: <span className="font-bold">{data[id].religion}</span>
            </div>
            <div className="address">
              Address:{" "}
              <span className="font-semibold">{data[id].address_area}</span>
            </div>
            <div className="reference flex justify-start gap-8">
              <span>
                Refered by:{" "}
                <span className="font-semibold">{data[id].reference_name}</span>
              </span>
              <span>
                Contact number:{" "}
                <span className="font-semibold">
                  {data[id].reference_contact}
                </span>
              </span>
            </div>
            <div className="group">
              Group Name:{" "}
              <span className="font-semibold">
                {data[id].group_membership_list}
              </span>
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => setId(null)}
              class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
