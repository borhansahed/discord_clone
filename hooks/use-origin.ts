import { useEffect, useState } from "react";

export const UseOrigin = () => {
  const [mount, setMount] = useState<boolean>();

  useEffect(() => {
    setMount(true);
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!mount) {
    return "";
  }

  return origin;
};
