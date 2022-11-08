import React from "react";
import { Card } from "components/ui";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import Members from "./Members";
import ItemDropdown from "./ItemDropdown";

const GridItem = ({ data }) => {
  const { name, description, created_at, chief, members, id, slug } = data;
  return (
    <Card bodyClass="h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <Link to={`/department-detail?slug=${slug}`}>
            <h6 className="font-vazir">{name}</h6>
          </Link>
          <ItemDropdown />
        </div>
        <p className="mt-4 font-vazir">{description}</p>
        <div className="mt-3">
          <div className="flex items-center justify-between mt-2">
            <Members members={members} />
            <div className="flex items-center rounded-full font-semibold text-xs">
              <div className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
                <HiOutlineClipboardCheck className="text-base" />
                <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                  {created_at}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GridItem;
