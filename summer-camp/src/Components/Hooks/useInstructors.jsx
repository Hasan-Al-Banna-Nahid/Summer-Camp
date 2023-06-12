// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch(
      "https://vedhak-iamnahid591998-gmailcom.vercel.app/instructorsClasses"
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return [instructors];
};

export default useInstructors;
