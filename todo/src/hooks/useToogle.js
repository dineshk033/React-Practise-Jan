import { useState } from "react";

const useToggle = (props) => {
  const [status, setStatus] = useState(props);

  const toggleStatus = () => {
    setStatus(!status);
  };
  return [status, toggleStatus];
};

export default useToggle;
