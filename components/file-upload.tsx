"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
interface IFileUpload {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "serverImage" | "messageFile";
}

const FileUpload = ({ onChange, value, endPoint }: IFileUpload) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <>
        <div className="relative h-24 w-24">
          <Image
            className="rounded-full object-fill"
            src={value}
            alt="serverImage"
            fill
          />
          <button
            onClick={() => onChange("")}
            className="bg-rose-500 text-white p-1 absolute top-0 right-0 rounded-full shadow-sm"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <UploadDropzone
        endpoint={endPoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(res) => {
          console.log(res);
        }}
      />
    </>
  );
};

export default FileUpload;
