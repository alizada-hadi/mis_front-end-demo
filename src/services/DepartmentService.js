import ApiService from "./ApiService";

export async function getDepartmentList(params) {
  return ApiService.fetchData({
    url: "/api/departments/list/",
    method: "get",
    params,
  });
}
