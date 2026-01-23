import http, { mockRequest } from '@/utils/http';

export const login = (data: any) => {
    return http.post('/user/login', data);
};

// Mock请求示例
export const getUserinfoMock = () => {
    return mockRequest(
        {
            name: 'Mock User',
            avatar: 'https://example.com/avatar.png',
            roles: ['admin'],
        },
        1500,
    ); // 模拟 1.5秒 延迟
};
