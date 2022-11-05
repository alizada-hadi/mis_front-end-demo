import React from "react";
import ActionBar from "./components/ActionBar";
import DepartmentListContent from "./components/DepartmentListContent";
import { Container } from "../../components/shared";
import reducer from "./store";
import { injectReducer } from "store";

injectReducer("departments", reducer);

const DepartmentList = () => {
  return (
    <Container className="h-full">
      <ActionBar />
      <DepartmentListContent />
    </Container>
  );
};

export default DepartmentList;
