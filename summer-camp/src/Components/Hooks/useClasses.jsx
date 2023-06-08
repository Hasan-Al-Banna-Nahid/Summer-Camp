// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("Classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return [classes];
};

export default useClasses;
