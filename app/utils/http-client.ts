import Axios from "axios"

export class HttpClient {

    get(url: string): any {
        return Axios.request(HttpClient.baseRquest(url, 'get'));
    }

    post(url: string, body: any | null, ): any {
        return Axios.request(HttpClient.baseRquest(url, 'get', body));
    }

    static baseRquest(url: string, method: string, data: object = null) {
        return{
            url: url,
            method: method,
            resposeType: 'json',
            data: data,
            header: {
                'Content-type': 'application/json'
            }
        }

    }

}