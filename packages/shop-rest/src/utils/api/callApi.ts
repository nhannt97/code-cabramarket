import axios from 'axios';
const auth = {
    username: process.env.NEXT_PUBLIC_WOOCOMMERCE_API_USERNAME,
    password: process.env.NEXT_PUBLIC_WOOCOMMERCE_API_PASSWORD
}
type apiRes = {
    data?: any,
    error?: any;
}
const BASE_URL_WOOCOMMERCE_API = process.env.NEXT_PUBLIC_BASE_URL_WOOCOMMERCE_API;

export async function getWC(url, params):Promise<apiRes> {
    return axios.get(BASE_URL_WOOCOMMERCE_API + url, {
        auth,
        params
    }).then(res => {
        const { status, data } = res;
        if (status !== 200) throw new Error()
        return { data };
    }).catch(error => ({error}));
}
