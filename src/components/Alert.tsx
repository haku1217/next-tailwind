import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import tw from "twin.macro";

export const Alert: React.FC = () => (
  <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-indigo-500">
    <span className="text-xl inline-block mr-5 align-middle">
      <FontAwesomeIcon icon={faBell} />
    </span>
    <span className="inline-block align-middle mr-8">
      <b className="capitalize">pink!</b> This is a pink alert - check it out!
    </span>
    <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
      <span>×</span>
    </button>
  </div>
);

export const Component = styled.h1`
  ${tw`text-gray-100 uppercase font-semibold text-6xl`}
`;
