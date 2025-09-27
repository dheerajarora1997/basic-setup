"use client";
import { JSX } from "react";
import { HiMiniEquals } from "react-icons/hi2";
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";

export const getPriorityIcon = (
  priority: string,
  color: string
): JSX.Element | null => {
  if (priority.toLowerCase() === "high") {
    return <MdOutlineKeyboardDoubleArrowUp color={color} size={20} />;
  } else if (priority.toLowerCase() === "medium") {
    return <HiMiniEquals className="me-1" color={color} size={20} />;
  } else if (priority.toLowerCase() === "low") {
    return <MdOutlineKeyboardDoubleArrowDown color={color} size={20} />;
  }

  return null;
};
