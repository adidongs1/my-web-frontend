"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setData({ error: err.message });
      });
  }, []);

  return <main className="min-h-screen flex flex-col gap-4 pt-8 px-16 text-white">{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</main>;
}
