"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setData(data));
    setShow(true);
  }, []);

  return <main className="min-h-screen flex flex-col gap-4 pt-8 px-16 text-white">{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</main>;
}
