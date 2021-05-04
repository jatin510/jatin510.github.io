import React, { useState } from "react";
import { Document } from "react-pdf";

import resumePdf from "pdf/resume.pdf";

export default function Resume() {
  const [file, setFile] = useState(resumePdf);
  return (
    <div>
      <Document file={file}></Document>
    </div>
  );
}
