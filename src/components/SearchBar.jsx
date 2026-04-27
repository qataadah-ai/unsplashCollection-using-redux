import React from "react";
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

import { useState } from "react";
function SearchBar() {

  const [text, setText] = useState("");

  const Dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    useDispatch(setQuery(text));
    setText("")
  }
  return (
    <div className="min-w-full bg-gray-900 h-2/4">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full  gap-5 py-10 px-10"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="w-full border-2 px-4 py-2 text-base rounded outline-none"
          type="text"
          placeholder="Search anything..."
        />

        <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
