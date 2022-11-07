import React from "react";
import { Dialog } from "components/ui";
import { toggleNewDepartmentDialog } from "../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import NewDepartmentForm from "./NewDepartmentForm";

const NewDepartmentDialog = () => {
  const dispatch = useDispatch();
  const newDepartmentDialog = useSelector(
    (state) => state.departments.state.newDepartmentDialog
  );
  const onCloseDialog = () => {
    dispatch(toggleNewDepartmentDialog(false));
  };

  return (
    <Dialog
      isOpen={newDepartmentDialog}
      onClose={onCloseDialog}
      onRequestClose={onCloseDialog}
    >
      <h4 className="font-vazir">ایجاد دیپارتمنت جدید</h4>
      <div className="mt-4">
        <NewDepartmentForm />
      </div>
    </Dialog>
  );
};

export default NewDepartmentDialog;
