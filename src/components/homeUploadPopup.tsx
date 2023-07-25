import React, { useRef, useState } from "react";
import { uploadFile } from "../methods/home";

export default function HomeUploadPopup({ setState, state }: any) {
  const inputRef: any = useRef(null);
  const [slected, setslected]: any = useState(null);
  const { loading, error } = state;
  return (
    <div className="hoF">
      <div className="hoFa">
        <div className="hoFaA">
          Upload Document
          <div
            className="hoFaAb"
            onClick={() => setState({ showUploadPop: false })}
          />
        </div>
        <form className="hoFaB" onSubmit={(e) => uploadFile(e, {}, setState)}>
          <div className="hoFaBa">Attached Document</div>
          <div className="hoFaBb" onClick={() => inputRef?.current?.click()}>
            {slected !== null ? "Selected " : ""}
            {slected ?? "Drag & Drop your file here or No file chosen"}
          </div>
          <input
            className="hoFaBc"
            type="file"
            ref={inputRef}
            onChange={(e: any) => setslected(e.target.files[0].name)}
            id="file"
          />
          <div className="hoFaBd">
            Accepted File Type: doc, PDF, and .exl only
          </div>
          <div className="hoFaBd" style={{ color: "tomato" }}>
            {error}
          </div>
          <button className="hoFaBe" type="submit">
            Upload {loading ? " loading..." : ""}
          </button>
        </form>
      </div>
    </div>
  );
}
