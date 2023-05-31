import axios from 'axios'

const API_URL = 'http://localhost:8000/api/'

class UserService {

  #points = 0;

  getData(api) {
    return axios.get(API_URL + api).then(response => response.data)
  }

  postData(api, data) {
    return axios.post(API_URL + api, data)
  }

  putData(api, data) {
    return axios.put(API_URL + api, data)
  }

  deleteData(api) {
    return axios.delete(API_URL + api)
  }

  setPoint(point){
    this.#points = point;
  }

  getPoint(){
    return this.#points;
  }
}

export default new UserService();