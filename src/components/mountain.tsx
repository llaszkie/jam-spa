import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Mountain = {
  title: string;
};

export function Mountain() {
  const [mountain, setMountain] = useState({} as Mountain);
  const { mountainId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/mountains/${mountainId}`)
      .then((response) => response.json())
      .then((data) => setMountain(data));
  }, [setMountain, mountainId]);

  return (
    <article>
      <h3 className="p-5 text-lg uppercase text-blue-900">{mountain.title}</h3>
      <pre className="p-5 text-sm">{JSON.stringify(mountain, null, 2)}</pre>
    </article>
  );
}

export default Mountain;
