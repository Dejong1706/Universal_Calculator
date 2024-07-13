"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MoneyList() {
  const [data, setData] = useState(null);

  // async function fetchData(url: string) {
  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   const url = `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY}/latest/USD`;
  //   fetchData(url);
  // }, []);

  console.log(data);
  return <div className="w-[30rem] h-full bg-blue-500">리스트 리스트</div>;
}
