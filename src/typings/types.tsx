// Onload props

import React from "react";

export interface ImageArrayProps {
  width: string;
  bottomSize: string;
  otherSize: string;
}

//  Nav

export interface NavProps {
  icon: React.ReactElement;
  link: string;
}

export interface ProjectLinks {
  link: string;
  value: string;
}


//  tech stack

export interface Stack {
  [key: string]: string;
}