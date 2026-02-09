import { type CalendarTheme } from "./index";

export const metallicTheme: CalendarTheme = {
  containerBg: "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
  containerBorder: "border border-gray-300",

  selectedBg: "bg-zinc-700",
  selectedText: "text-zinc-100",

  todayBg: "bg-zinc-700 ring-2 ring-gray-500 ring-offset-1 ring-offset-gray-200",
  todayText: "text-zinc-300",

  normalText: "text-zinc-700",
  normalHoverBg: "hover:bg-gray-400 hover:text-gray-900 hover:ring-2 hover:ring-gray-500 hover:ring-offset-1 hover:ring-offset-gray-200",

  disabledBg: "bg-zinc-100",
  disabledText: "text-zinc-400",

  borderRadius: "rounded-xl",
};