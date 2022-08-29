import Ajaxious from "ajaxious";

// const baseUrl = window.location.origin + '/api';

export const configAjaxious = () => {

    let token;
    try {
        token = localStorage.getItem('token');
    } catch {
    }
    const ajaxHeader =  token ? {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers' : 'Authorization',
        'Authorization': `Bearer ${token}`,
        'Cache-Control': 'no-cache'
    } : {'Cache-Control': 'no-cache'} as HeadersInit;
    Ajaxious.setHeaders(ajaxHeader);

    const url = 'http://192.168.100.97:8080/' ;
    Ajaxious.setPath(url);
};

Ajaxious.addEventListener('onUnauthorized', () => {
    try {
        const token = localStorage.getItem("token");
        if (token !== null)
            localStorage.removeItem('token');
        window.location.reload();
    } catch {
    }
});