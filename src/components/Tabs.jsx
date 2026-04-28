import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex gap-2">
      {tabs.map((tab, idx) => (
        <button className={`p-3 rounded ${activeTab === tab ? 'bg-emerald-500 text-white' : 'bg-gray-600 text-gray-300'}`}
        key={idx} onClick={() => dispatch(setActiveTabs(tab))}>
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
