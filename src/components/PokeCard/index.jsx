const PokeCard = ({ name, image, types }) => {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <div className="max-w-sm bg-white hover:bg-blue-100 border border-gray-200 rounded-lg shadow dark:hover:bg-gray-600 transition-all cursor-pointer dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center pt-10 pb-14">
        <a href="#">
          <img className="" src={image} alt={name} />
        </a>
      </div>
      <hr className="w-48 h-1 mx-auto mt-2 mb-3 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
      <div className="p-5">
        <h5 className="flex justify-center items-center mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          - {name} -
        </h5>
        <h6 className="mb-2 ml-2 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-500">
          {typeHandler()}
        </h6>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
        {/* <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default PokeCard;
