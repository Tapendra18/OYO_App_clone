import Image from "next/image";
import React from "react";
import Block from "@/components/Block";
import Link from "next/link";

const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-20 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-24 h-28"
      />
      <div className="flex border-gray-300 h-full">
        <Block
          title={"Become a member"}
          para={"Additional 10% off on stays"}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 17"
            >
              {" "}
              <g fill="none" fill-rule="evenodd">
                {" "}
                <path d="M-2-4h24v24H-2z"></path>{" "}
                <path
                  fill="black"
                  fill-rule="nonzero"
                  d="M9.943 0c-1.9 0-3.55.237-3.82 1.818H3.181C1.41 1.818 0 3.345 0 5.192v7.791c0 1.846 1.41 3.38 3.182 3.38h13.636c1.772 0 3.182-1.534 3.182-3.38V5.192c0-1.847-1.41-3.374-3.182-3.374h-3.054C13.494.237 11.844 0 9.944 0zM10 .911c1.385 0 2.47-.093 2.727.907H7.273C7.53.818 8.615.911 10 .911zM3.182 2.727h13.636c1.25 0 2.273 1.004 2.273 2.306v.996c-1.926 1.136-4.512 1.925-7.415 2.153-.23-.694-.919-1.203-1.733-1.203-.814 0-1.503.509-1.733 1.203-2.846-.224-5.387-.986-7.3-2.086V5.033c0-1.302 1.022-2.306 2.272-2.306zM19.09 7.19v5.781c0 1.398-1.023 2.485-2.273 2.485H3.182c-1.25 0-2.273-1.087-2.273-2.485V7.273c1.996 1.125 4.442 1.734 7.205 1.962l.073.287a1.83 1.83 0 0 0 1.756 1.363 1.83 1.83 0 0 0 1.745-1.322c.012-.04.077-.288.086-.328 2.815-.232 5.304-.887 7.317-2.046zM10 8c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1z"
                  opacity=".7"
                ></path>{" "}
              </g>{" "}
            </svg>
          }
        />
        <Block
          title={"OYO for Business"}
          para={"Trusted by 5000 Corporates"}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30"
              height="30"
            >
              <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
            </svg>
          }
        />
        <Block
          title={"List your property"}
          para={"Start earning in 30 mins"}
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M11 6H5"
                stroke="#6F787C"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M19 12H17"
                stroke="#6F787C"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M14 8H22V22H14M14 22V2H2V22H14ZM6 16H10V22H6V16Z"
                stroke="#6F787C"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </svg>
          }
        />
        <Block
          title={"0124-6201611"}
          para={"Call us to Book now"}
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M21.9994 16.92V19.92C22.0006 20.1985 21.9435 20.4742 21.832 20.7294C21.7204 20.9845 21.5567 21.2136 21.3515 21.4019C21.1463 21.5901 20.904 21.7335 20.6402 21.8227C20.3764 21.9119 20.0968 21.9451 19.8194 21.92C16.7423 21.5856 13.7864 20.5342 11.1894 18.85C8.77327 17.3147 6.72478 15.2662 5.18945 12.85C3.49942 10.2412 2.44769 7.271 2.11944 4.18001C2.09446 3.90347 2.12732 3.62477 2.21595 3.36163C2.30457 3.09849 2.44702 2.85669 2.63421 2.65163C2.82141 2.44656 3.04925 2.28271 3.30324 2.17053C3.55722 2.05834 3.83179 2.00027 4.10945 2.00001H7.10945C7.59475 1.99523 8.06524 2.16708 8.43321 2.48354C8.80118 2.79999 9.04152 3.23945 9.10944 3.72001C9.23607 4.68007 9.47089 5.62273 9.80945 6.53001C9.94399 6.88793 9.97311 7.27692 9.89335 7.65089C9.8136 8.02485 9.62831 8.36812 9.35944 8.64001L8.08945 9.91001C9.513 12.4136 11.5859 14.4865 14.0894 15.91L15.3594 14.64C15.6313 14.3711 15.9746 14.1859 16.3486 14.1061C16.7225 14.0263 17.1115 14.0555 17.4694 14.19C18.3767 14.5286 19.3194 14.7634 20.2794 14.89C20.7652 14.9585 21.2088 15.2032 21.526 15.5775C21.8431 15.9518 22.0116 16.4296 21.9994 16.92Z"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </svg>
          }
        />
        <div className="flex items-center px-3">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="w-15 h-15"
          />
          <Link href={"/login"}>
            <h3 className="text-sm">Login / Signup</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
