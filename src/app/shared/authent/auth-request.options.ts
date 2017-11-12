import { Headers, Http, BaseRequestOptions, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { TOKEN_NAME } from './auth.service';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export class AuthRequestOptions extends BaseRequestOptions {

    constructor() {
        super();
        this.headers.set('Content-Type', 'application/json');
        // const token = localStorage.getItem(TOKEN_NAME);
        // if(token) {
        //   this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
        // }
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        const token = localStorage.getItem(TOKEN_NAME);
        const newOptions = super.merge(options);
        if (token) {
            newOptions.headers.set(AUTH_HEADER_KEY, `${token}`);
        }

        return newOptions;
    }

}