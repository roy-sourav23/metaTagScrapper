import React from "react";

const EditComp = () => {
  return (
    <div className="border border-slate-400 rounded-xl px-4 py-5 w-[90%] my-5 mx-auto">
      <h2 className="text-2xl font-semibold">Edit</h2>

      <div>
        <p>Title</p>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className="w-full bg-slate-50 border border-slate-300 p-2 rounded "
        />
      </div>

      <div>
        <p>Description</p>
        <textarea
          name="description"
          id="description"
          placeholder="description"
          rows={3}
          className="w-full bg-slate-50 border border-slate-300 p-2 rounded "
        />
      </div>

      <div>
        <p>Image</p>
        <img
          src="https://images.unsplash.com/photo-1614730073452-26212f842765?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={70}
          width={70}
          className="m-2"
        />
        <input type="file" name="image" id="" />
      </div>
    </div>
  );
};

export default EditComp;
