import iconLoadingHome from "../../assets/icon_loading_home.gif";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-56 h-56">
      <img className="mb-10" src={iconLoadingHome} alt="" />
      <div className="px-10 py-3 font-medium text-xl leading-none text-center text-black bg-blue-200 rounded-full animate-pulse dark:bg-gray-600 dark:text-white">
        loading...
      </div>
    </div>
  );
};

export default Loading;
