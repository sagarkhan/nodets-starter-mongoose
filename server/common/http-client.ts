import Axios, { AxiosRequestConfig } from 'axios';

export default class HttpClient {
  request(config: AxiosRequestConfig): Promise<any> {
    return Axios.request(config).then(response => response.data);
  }

  get(url: string, config = {}): Promise<any> {
    return Axios.get(url, config).then(response => response.data);
  }

  post(url: string, data = {}, config = {}): Promise<any> {
    return Axios.post(url, data, config).then(response => response.data);
  }

  put(url: string, data = {}, config = {}): Promise<any> {
    return Axios.put(url, data, config).then(response => response.data);
  }

  delete(url: string, data = {}, config = {}): Promise<any> {
    return Axios.delete(url, { data, ...config }).then(response => response.data);
  }
}
