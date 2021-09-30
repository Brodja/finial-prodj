import { HTTP_STATUS } from "../_enum/http-status.enum";

export class ApiResponseInterface {
    status: HTTP_STATUS;
    message?: string;
    data?: any;
}
