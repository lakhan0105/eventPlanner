import React, { useEffect, useState } from "react";
import { getPreview } from "../features/products/productsSlice";

function BlogImg({ imgId }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const resp = getPreview(imgId);
    setImage(resp?.href);
  }, []);

  console.log(image);
  return <img src={image} alt={""} className="w-full h-full object-cover" />;
}

export default BlogImg;
