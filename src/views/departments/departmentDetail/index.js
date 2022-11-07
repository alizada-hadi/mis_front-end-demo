import React, { useEffect } from "react";
import { Loading, Container, DoubleSidedImage } from "components/shared";
import { useDispatch, useSelector } from "react-redux";
import { getDepartment } from "./store/dataSlice";
import reducer from "./store";
import { injectReducer } from "store/index";
import isEmpty from "lodash/isEmpty";
import useQuery from "utils/hooks/useQuery";
import DepartmentDetailTabs from "./components/DepartmentDetailTabs";

injectReducer("departmentDetail", reducer);

const DepartmentDetail = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const data = useSelector(
    (state) => state.departmentDetail.data.departmentData
  );
  const loading = useSelector((state) => state.departmentDetail.data.loading);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const slug = query.get("slug");
    if (slug) {
      dispatch(getDepartment({ slug }));
    }
  };
  return (
    <Container className="h-full">
      <Loading loading={loading}>
        {!isEmpty(data) && (
          <div>
            <DepartmentDetailTabs />
          </div>
        )}
      </Loading>
      {!loading && isEmpty(data) && (
        <div className="h-full flex flex-col items-center justify-center">
          <DoubleSidedImage
            src="/img/others/img-2.png"
            darkModeSrc="/img/others/img-2-dark.png"
            alt="no data found"
          />
          <h3 className="mt-8">No Department Detail info found</h3>
        </div>
      )}
    </Container>
  );
};

export default DepartmentDetail;
