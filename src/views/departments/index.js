import React from "react";
import ActionBar from "./components/ActionBar";
import DepartmentListContent from "./components/DepartmentListContent";
import { Container } from "../../components/shared";
import reducer from "./store";
import { injectReducer } from "store";
import NewDepartmentDialog from "./components/NewDepartmentDialog";

injectReducer("departments", reducer);

const DepartmentList = () => {
  return (
    <Container className="h-full">
      <ActionBar />
      <DepartmentListContent />
      <NewDepartmentDialog />
    </Container>
  );
};

export default DepartmentList;
