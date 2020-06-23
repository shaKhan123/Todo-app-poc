import { useState } from "react";

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setError(false);
    setValue(e.target.value);
    if (value.length > 30) {
      setError(true);
    }
  };
  const reset = () => setValue("");

  return [value, error, handleChange, reset];
};
