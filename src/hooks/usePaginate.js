import React from "react";
import { useState } from "react";

export const usePaginate = () => {
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("ASC");
  const [orBy, setOrBy] = useState("id");
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(1);
  const onLimit = (vl) => {
    setLimit(vl);
  };
  const onOffset = (value) => {
    setOffset(value);
  };
  const onActive = (ac) => {
    setActive(ac);
  };
  const onOrder = (item) => {
    setOrBy(item);
    if (order === "ASC") {
      setOrder("DESC ");
    } else {
      setOrder("ASC");
    }
  };
  const onOrderReset = () => {
    setOrBy("id");
    setOrder("DESC ");
  };

  return {
    limit,
    offset,
    active,
    onLimit,
    onOffset,
    onActive,
    onOrder,
    order,
    orBy,
    onOrderReset,
  };
};
