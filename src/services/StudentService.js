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


export async function apiGetAccountFormData () {
    return ApiService.fetchData({
        url: '/api/students/form-data/',
        method: 'get',
    })
}

export async function apiGetStudentDetail(id) {
    return ApiService.fetchData({
        url  : `/api/students/${id}/`, 
        method : "get"
    })
}

export async function apiUpdateStudent(data) {
    const {id} = data
    return ApiService.fetchData({
        url : `/api/students/${id}/update/`, 
        method : "post",
        data
    })
}

