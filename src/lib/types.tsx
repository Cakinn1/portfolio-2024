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



//  projects


export interface ProjectProps {
  github: string;
  vercel: string;
  info?: {
    title?: string
    mainPara?: string
  }
  image: string;
  Application: string
  id: number 
  skillsAndDeliverables?: string[]
  video?: string
  isFalse?: boolean
}