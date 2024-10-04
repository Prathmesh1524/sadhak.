

import Link from 'next/link';

function Navbar() {
    return (
        <nav className="flex justify-around p-4 mt-10">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-gray-800 hover:text-gray-500 ">
                        <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">
                            <p>Home</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'pri_jobs'} className="text-gray-800 hover:text-gray-500">

                        <div className="relative group inline-block">
                            <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">

                                <p>Private Jobs</p>
                            </div>

                            <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <ul className="p-4 space-y-1">
                                    <li className="pl-4 py-1"> Technical Internships</li>
                                    <li className="pl-4 py-1">Research-Interns</li>
                                    <li className="pl-4 py-1"> Full-Time Jobs</li>
                                    <li className="pl-4 py-1"> Remote Jobs/Internships</li>
                                    <li className="pl-4 py-1">Startups</li>
                                    <li className="pl-4 py-1">Companies</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </li>


                <li>
                    <Link href={'gov_jobs'} className="text-gray-800 hover:text-gray-500">

                        <div className="relative group inline-block">
                            <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">

                                <p>Goverment Jobs</p>
                            </div>

                            <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <ul className="p-4 space-y-1">
                                    <li className="pl-4 py-1"> Goverment Internships</li>
                                    <li className="pl-4 py-1">Research-Interns</li>
                                    <li className="pl-4 py-1"> Full-Time Jobs</li>
                                    <li className="pl-4 py-1">Study Materials</li>
                                    <li className="pl-4 py-1"> Upcoming Opeanings</li>
                                    <li className="pl-4 py-1">News</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={'freelance'} className="text-gray-800 hover:text-gray-500">
                        <div className="relative group inline-block">
                            <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">

                                <p>Freelance</p>
                            </div>

                            <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <ul className="p-4 space-y-1">
                                    <li className="pl-4 py-1"> Find Clients for you</li>
                                </ul>
                            </div>
                        </div>


                    </Link>
                </li>
                <li>
                    <Link href={'blog'} className="text-gray-800 hover:text-gray-500">
                        <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">
                            <p>Blogs</p>
                        </div>
                    </Link>
                </li>
            </ul>

            <div className='flex content-end justify-end items-end pr-3 mt-0'>
                <form className="  flex items-center gap-2 ">
                    <input 
                        type="text"
                        placeholder="Find Jobs"
                        className="px-4 py-2 w-56 border-2 rounded-full"
                    />
                    <div>
                        <button type="submit" className="bg-gray-500 rounded-xl  hover:bg-gray-800 text-white px-4 py-2">
                            <img src="" alt="" />
                            Search
                        </button>
                    </div>
                    <div>
                   <Link href={"/login"}>      <button  type="submit" className="bg-gray-500 rounded-xl  hover:bg-gray-800 text-white px-4 py-2">
                            <img src="" alt="" />
                            login/Singup
                        </button></Link>
                        </div>
                </form>
            </div>   

</nav>


    );
}

export default Navbar;