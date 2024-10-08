import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className="    p-8 bg-white rounded-2xl flex justify-center items-center content-center ">
        <form className=" border-4  rounded-2xl p-12 flex flex-col gap-4 justify-center hover:bg-gray-50">
          <div className='flex text-2xl justify-center font-bold '> Login </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-800">Email</label>
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg focus-within:border-blue-500">
            <svg
              className="ml-3"
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
              </g>
            </svg>
            <input
              type="text"
              className="ml-3 w-full h-12 px-2 border-none focus:outline-none rounded-lg"
              placeholder="Enter your Email"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-gray-800">Password</label>
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg focus-within:border-blue-500">
            <svg
              className="ml-3"
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input
              type="password"
              className="ml-3 w-full h-12 px-2 border-none focus:outline-none rounded-lg"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Remember me</label>
            </div>
            <span className="text-sm text-blue-500 cursor-pointer">Forgot password?</span>
          </div>

          <button className="w-full h-12 mt-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
            Sign In
          </button>

          <Link href={"/signup"}>    <p className="text-center text-gray-700 mt-2">
            Don&apos;t have an account? <span className="text-blue-500 cursor-pointer">Sign Up</span>
          </p></Link>
          <p className="text-center text-gray-500 mt-4">Or With</p>

          <div className="flex gap-2 mt-4">
            <button className="flex items-center justify-center gap-2 w-full h-12 border border-gray-200 rounded-lg hover:border-blue-500">
              <svg
                version="1.1"
                width="20"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                space="preserve"
              >
                <path
                  style={{ fill: "#FBBB00" }}
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\n\tc0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\n\tC103.821,274.792,107.225,292.797,113.47,309.408z"
                />
                <path
                  style={{ fill: "#518EF8" }}
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\n\tc-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\n\tc29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                />
                <path
                  style={{ fill: "#28B446" }}
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\n\tc-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\n\tc28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                />
                <path
                  style={{ fill: "#F14336" }}
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\n\tc-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\n\tC318.115,0,375.068,22.126,419.404,58.936z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full h-12 border border-gray-200 rounded-lg hover:border-blue-500">
              Github
            </button>
          </div>
        </form>
      </div>




    </div>
  )
}

export default page
