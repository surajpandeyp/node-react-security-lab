import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("http://172.19.108.30:5000/api/upload", {
        method: "POST",
        body: formData
      });

      const text = await res.text(); // 🔥 IMPORTANT
      setResult(text);
    } catch (err) {
      setResult("Upload failed");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>CTF File Upload</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button type="button" onClick={uploadFile}>
        Upload & Execute
      </button>

      <br /><br />

      {loading && <p>Uploading...</p>}

      {result && (
        <pre style={{ color: "#00ff00", background: "black", padding: "10px" }}>
          {result}
        </pre>
      )}
    </div>
  );
}

export default Upload;
