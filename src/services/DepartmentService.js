import ApiService from "./ApiService";

export async function getDepartmentList(params) {
  return ApiService.fetchData({
    url: "/api/departments/list/",
    method: "get",
    params,
  });
}

export async function createNewDepartment(data) {
  return ApiService.fetchData({
    url: "/api/departments/create/",
    method: "post",
    data,
  });
}

export async function getDepartmentDetail(params) {
  const { slug } = params;
  return ApiService.fetchData({
    url: `/api/departments/detail/${slug}/`,
    method: "get",
    params,
  });
}
