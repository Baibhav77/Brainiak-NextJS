import type { NextPage } from "next";
import { useEffect, useState } from "react";

interface ProfileResponse {
  message: string;
  data: {
    amol_code: string;
    user_data: {
      user_id: string;
      user_name: string;
      user_email: string;
      user_first_name: string;
      user_last_name: string;
      user_phone: string;
      user_address1: string;
      user_avatar: string;
    };
  };
}

const Student: NextPage = () => {
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("/api/profile");
      if (response.ok) {
        const data: ProfileResponse = await response.json();
        setProfile(data);
        setLoading(false);
      } else {
        setError("Failed to fetch profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data</div>;

  return (
    <div className="flex overflow-hidden bg-gray-900">
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-50 h-full pt-16 font-normal duration-75 lg:flex transition-width bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex flex-col flex-1 min-h-0 pt-0">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 overflow-y-auto">
            <ul className="pb-2 space-y-2">
              <li>
                <form action="#" method="GET" className="lg:hidden">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="mobile-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Dashboards
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <nav className="fixed z-30 left-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ml-2 md:mr-24">
                <img src="/images/icon.png" className="h-8 mr-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Brainiak
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative w-full h-full overflow-y-auto lg:ml-64">
        <div
          className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90"
          id="sidebarBackdrop"
        ></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <main className="bg-gray-50 dark:bg-gray-900 h-max">
          <div className="text-white flex-1 p-7">
            <div className="mt-5 bg-gray-800 p-5 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold">
                    Welcome, {profile.data.user_data.user_name}
                  </h1>
                  <p className="text-sm mt-1 text-gray-400">
                    Check your brain activity below
                  </p>
                </div>
                <div>
                  <button className="btn btn-outline btn-success">Share</button>
                </div>
              </div>
              <ul className="flex space-x-2 border-b border-gray-700">
                <li>
                  <a href="#" className="text-white pb-2">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white pb-2">
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white pb-2">
                    Courses Taken
                  </a>
                </li>
              </ul>
              <div className="flex flex-col mt-5">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold">February 5, 2024</h3>
                    <span className="badge badge-success">Apprentance</span>
                  </div>
                  <p>Courses Completed: 5</p>
                  <p>Files: 4</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Student;
