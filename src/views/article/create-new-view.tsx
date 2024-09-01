"use client";

import TipTap from "@/components/tiptap";
import NotesPicker from "./notes-picker";

const CreateNewView = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <NotesPicker />
      </div>
    </div>
  );
};

export default CreateNewView;
