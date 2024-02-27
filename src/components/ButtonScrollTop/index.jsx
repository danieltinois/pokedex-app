import { useEffect } from "react";

import { TiArrowUpThick } from "react-icons/ti";

const ButtonScrollTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const topBtn = document.querySelector("#topButton");
      if (window.pageYOffset > 50) {
        // unhide
        topBtn.classList.add("flex");
        topBtn.classList.remove("hidden");
      } else {
        // hide
        topBtn.classList.remove("flex");
        topBtn.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrolltoTop}
      id="topButton"
      className="fixed bottom-10 right-10 z-10 animate-bounce rounded-full bg-blue-700 w-16 h-16 hidden justify-center items-center shadow-md dark:bg-gray-900"
    >
      <TiArrowUpThick color="white" />
    </button>
  );
};

export default ButtonScrollTop;
