import axios from "axios";
class Service {
  async fetchData() {
    return axios.get("https://demo7919674.mockable.io/");
  }
}

const ServiceInstance = new Service();
export default ServiceInstance;
