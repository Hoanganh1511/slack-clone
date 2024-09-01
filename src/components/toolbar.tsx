"use client";
import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";
type Props = {
  editor: Editor | null;
  content: string;
};
const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="w-fit  px-8 py-[5px] bg-black/5 flex justify-between items-start
gap-5 flex-wrap rounded-[25px]"
    >
      <div className="flex justify-start items-center gap-2 w-full flex-wrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("bold") ? "bg-sky-700 text-white" : "text-black/60"
          )}
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("italic")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("underline")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("strike")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("heading")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("bulletList")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("orderedList")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("blockquote")
              ? "bg-sky-700 text-white"
              : "text-black/60"
          )}
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={cn(
            "p-2 rounded-lg",
            editor.isActive("code") ? "bg-sky-700 text-white" : "text-black/60"
          )}
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={cn(
            "p-2 rounded-lg ",
            editor.isActive("undo")
              ? "bg-sky-700  text-white"
              : "text-black/60 hover:bg-primary hover:text-white"
          )}
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={cn(
            "p-2 rounded-lg ",
            editor.isActive("redo")
              ? "bg-sky-700  text-white"
              : "text-black/60 hover:bg-primary hover:text-white"
          )}
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
      {/* {content && (
        <button
          type="submit"
          className="px-4 bg-sky-700 text-white py-2 rounded-md"
        >
          Add
        </button>
      )} */}
    </div>
  );
};

export default Toolbar;
