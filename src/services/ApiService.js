import BaserService from "./BaseService";
const ApiService = {
  fetchData(param) {
    return new Promise((resolve, reject) => {
      BaserService(param)
        .then((response) => {
          resolve(response);
        })
        .catch((errors) => {
          reject(errors);
        });
    });
  },
};
export default ApiService;
