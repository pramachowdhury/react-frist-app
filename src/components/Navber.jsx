const Navber = () => {
  return (
    <div>
      <div className="navbar bg-purple-500 text-black font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>home</li>
              <li>about</li>
              <li>contact</li>
              <li>block</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Naver</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 text-white text-2xl ">
            <li className="cursor-pointer">home</li>
            <li className="cursor-pointer">about</li>
            <li className="cursor-pointer">contact</li>
            <li className="cursor-pointer">block</li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
