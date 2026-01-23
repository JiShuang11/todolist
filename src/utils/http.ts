import axios, {
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from 'axios';
import { ElMessage } from 'element-plus';

const http: AxiosInstance = axios.create({
    baseURL: 'api', //基础路径
    timeout: 5000, //超时时间
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});
// 添加请求拦截器
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    },
);

// 添加响应拦截器
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        const res = response.data;
        return res;
    },
    (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        // 统一错误处理
        let message = '';
        const status = error.response?.status;

        switch (status) {
            case 400:
                message = '请求错误(400)';
                break;
            case 401:
                message = '未授权，请登录(401)';
                break;
            case 403:
                message = '拒绝访问(403)';
                break;
            case 404:
                message = '请求出错(404)';
                break;
            case 500:
                message = '服务器错误(500)';
                break;
            default:
                message = `连接出错(${status})`;
        }

        // 超时
        if (error.message.includes('timeout')) {
            message = '请求超时，请重试';
        }
        // 网络问题
        if (error.message.includes('Network Error')) {
            message = '网络异常，请检查您的网络';
        }
        ElMessage.error(message);
        return Promise.reject(error);
    },
);
// 模拟异步请求的辅助函数
export const mockRequest = <T>(data: T, delay = 1000): Promise<T> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
};

export default http;
