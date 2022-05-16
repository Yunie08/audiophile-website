import React from "react";

// Return true when media query matches window size
function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(
    window.matchMedia(query).matches
  );
  React.useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);

    // Unregister from event handler
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}

export default useMediaQuery;
