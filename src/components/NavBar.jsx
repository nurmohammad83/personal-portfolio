

const NavBar = () => {

  return (
    <div className="bg-base-200">
      <nav class="bg-base-200  mx-4 lg:ml-12 lg:mr-12 font-BebasNeue py-4">
      <div class="navbar bg-white rounded-md">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/about">About Me</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
            </ul>
          </div>
          <a
            class="btn btn-ghost normal-case text-xl font-BebasNeue font-semibold"
            href="/"
          >
            Nur Portfolio
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
