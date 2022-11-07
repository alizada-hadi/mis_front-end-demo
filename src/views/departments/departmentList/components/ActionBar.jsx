import React, { useRef } from "react";
import { Button, Input, Tooltip } from "components/ui";
import {
  HiOutlinePlusCircle,
  HiOutlineSearch,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import {
  toggleView,
  toggleSort,
  toggleNewDepartmentDialog,
  setSearch,
} from "../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";

const ActionBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const view = useSelector((state) => state.departments.state.view);
  const { sort } = useSelector((state) => state.departments.state.query);

  const onViewToggle = () => {
    dispatch(toggleView(view === "grid" ? "list" : "grid"));
  };
  const onToggleSort = () => {
    dispatch(toggleSort(sort === "asc" ? "desc" : "asc"));
  };
  const onAddNewDepartment = () => {
    dispatch(toggleNewDepartmentDialog(true));
  };

  const debounceFn = debounce(handleDebounceFn, 500);

  function handleDebounceFn(val) {
    dispatch(setSearch(val));
  }
  const handleInputChange = (e) => {
    debounceFn(e.target.value);
  };

  return (
    <div className="lg:flex items-center justify-between mb-4">
      <h3 className="mb-4 lg:mb-0 font-vazir">لیست دیپارتمنت</h3>
      <div className="flex flex-col md:flex-row md:items-center gap-1">
        <Input
          ref={inputRef}
          size="sm"
          placeholder="جستجو..."
          prefix={<HiOutlineSearch className="text-lg" />}
          onChange={handleInputChange}
          className="font-vazir"
        />
        <Tooltip
          className="font-vazir"
          title={view === "grid" ? "لیست" : "جدول"}
        >
          <Button
            className="hidden md:flex"
            onClick={() => onViewToggle()}
            variant="plain"
            size="sm"
            icon={
              view === "grid" ? <HiOutlineViewList /> : <HiOutlineViewGrid />
            }
          />
        </Tooltip>
        <Tooltip
          className="font-vazir"
          title={`ترتیب: ${sort === "asc" ? "A-Z" : "Z-A"}`}
        >
          <Button
            className="hidden md:flex"
            variant="plain"
            size="sm"
            icon={
              sort === "asc" ? (
                <HiOutlineSortAscending />
              ) : (
                <HiOutlineSortDescending />
              )
            }
            onClick={onToggleSort}
          />
        </Tooltip>
        <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewDepartment}
          className="font-vazir text-xl"
        >
          دیپارتمنت جدید
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
