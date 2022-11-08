import ApiService from "./ApiService";

export async function getStudentList(params){
    return ApiService.fetchData({
        url : "/api/students/list/", 
        method : "get", 
        params
    });
}

export async function createNewStudent(data) {
    return ApiService.fetchData({
        url : "/api/students/create/", 
        method : "post", 
        data
    });
}