import React from "react";

const PreviewComp = () => {
  return (
    <div className="border border-slate-400 rounded-xl px-4 py-5 w-[90%] my-5 mx-auto">
      <h2 className="text-2xl font-semibold">Preview</h2>

      <div className="w-full bg-slate-50 border border-slate-300 p-2 rounded ">
        <div className="">
          <p className="p-3">facebook</p>
          <div className="w-[full] bg-slate-300">
            <img
              src="https://images.unsplash.com/photo-1614730073452-26212f842765?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full aspect-video"
            />
            <p className="p-3">Facebook.com</p>
            <p className="px-3 font-semibold text-2xl">Error</p>
            <small className="px-3 py-2">something</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewComp;
