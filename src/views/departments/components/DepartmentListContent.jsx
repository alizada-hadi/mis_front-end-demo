import React, { useEffect } from "react";
import classNames from "classnames";
import { getList } from "../store/dataSlice";
import { Spinner } from "components/ui";
import { useDispatch, useSelector } from "react-redux";
import GridItem from "./GridItem";
import ListItem from "./ListItem";

const DepartmentListContent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.departments.data.loading);
  const departmentList = useSelector(
    (state) => state.departments.data.departmentList
  );
  const view = useSelector((state) => state.departments.state.view);
  const { sort, search } = useSelector(
    (state) => state.departments.state.query
  );

  useEffect(() => {
    dispatch(getList({ sort, search }));
  }, [dispatch, sort, search]);

  return (
    <div
      className={classNames(
        "mt-6 h-full flex flex-col",
        loading && "justify-center"
      )}
    >
      {loading && (
        <div className="flex justify-center">
          <Spinner size={40} />
        </div>
      )}
      {view === "grid" && departmentList.length > 0 && !loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {departmentList.map((department) => {
            return <GridItem key={department.id} data={department} />;
          })}
        </div>
      )}
      {view === "list" &&
        departmentList.length > 0 &&
        !loading &&
        departmentList.map((department) => (
          <ListItem key={department.id} data={department} />
        ))}
    </div>
  );
};

export default DepartmentListContent;
