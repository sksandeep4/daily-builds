export const Navbar = ({ activePage, setActivePage }) => {
  return (
    <div className="px-16 w-full bg-[#444]">
      <div className="flex justify-between items-center ">
        <div className="flex items-center justify-center ">
          <div
            className={`px-5 text-white ${
              activePage == "Home"
                ? "bg-[#04AA6D] hover:bg-[#04AA6D]"
                : "hover:bg-[#555]"
            } p-2`}
            onClick={() => setActivePage("Home")}
          >
            Home
          </div>
          <div
            className={`px-5 text-white ${
              activePage == "News"
                ? "bg-[#04AA6D] hover:bg-[#04AA6D]"
                : "hover:bg-[#555]"
            } p-2`}
            onClick={() => setActivePage("News")}
          >
            News
          </div>
          <div
            className={`px-5 text-white ${
              activePage == "Content"
                ? "bg-[#04AA6D] hover:bg-[#04AA6D]"
                : "hover:bg-[#555]"
            } p-2`}
            onClick={() => setActivePage("Content")}
          >
            Content
          </div>
        </div>

        <div className="">
          <div
            className={`px-5 text-white ${
              activePage == "About"
                ? "bg-[#04AA6D] hover:bg-[#04AA6D]"
                : "hover:bg-[#555]"
            } p-2`}
            onClick={() => setActivePage("About")}
          >
            About
          </div>
        </div>
      </div>
    </div>
  );
};
