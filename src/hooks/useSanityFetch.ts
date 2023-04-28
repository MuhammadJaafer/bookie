"use client";
import { client } from "@/cms/client";
import React, { useState } from "react";

function useSanityFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const Fetch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await client.fetch(query);
      setData(res);
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };

  return { data, error, loading, Fetch };
}

export default useSanityFetch;
