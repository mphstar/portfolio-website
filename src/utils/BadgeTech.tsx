import React, { useState } from "react";
import SelectionTech from "./SelectionTech";

const BadgeTech = ({ selection }: { selection: SelectionTech }) => {
  switch (selection) {
    case SelectionTech.Inertia:
      return (
        <div className="px-3 py-1 bg-orange-500 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Inertia
        </div>
      );

    case SelectionTech.Laravel:
      return (
        <div className="px-3 py-1 bg-red-500 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Laravel
        </div>
      );

    case SelectionTech.Mysql:
      return (
        <div className="px-3 py-1 bg-purple-600 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          MySQL
        </div>
      );

    case SelectionTech.Kotlin:
      return (
        <div className="px-3 py-1 bg-purple-600 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Kotlin
        </div>
      );

    case SelectionTech.Nextjs:
      return (
        <div className="px-3 py-1 bg-slate-800 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Next JS
        </div>
      );

    case SelectionTech.Python:
      return (
        <div className="px-3 py-1 bg-cyan-700 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Python
        </div>
      );

    case SelectionTech.React:
      return (
        <div className="px-3 py-1 bg-teal-600 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          React JS
        </div>
      );
    case SelectionTech.Tailwindcss:
      return (
        <div className="px-3 py-1 bg-blue-500 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Tailwind CSS
        </div>
      );

      case SelectionTech.Bootstrap:
      return (
        <div className="px-3 py-1 bg-indigo-600 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Bootstrap
        </div>
      );

      case SelectionTech.Netbeans:
      return (
        <div className="px-3 py-1 bg-emerald-600 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          Netbeans
        </div>
      );

      case SelectionTech.PHP:
      return (
        <div className="px-3 py-1 bg-gray-600 text-white text-sm font-poppins-regular w-fit flex rounded-sm">
          PHP
        </div>
      );
    default:
      break;
  }

  return (
    <div className="px-3 py-1 bg-red-500 text-white text-sm font-poppins-regular w-fit flex rounded-sm"></div>
  );
};

export default BadgeTech;
