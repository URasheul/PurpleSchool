"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var DataRequest;
(function (DataRequest) {
    DataRequest["URL"] = "https://dummyjson.com/users";
})(DataRequest || (DataRequest = {}));
function getUserData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reuqest = yield axios_1.default.get(url);
            const response = reuqest.data.users;
            console.log(response);
            return response;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                if (error.response) {
                    const errorMessage = {
                        status: error.response.status,
                        statusText: error.response.statusText,
                    };
                    console.log(errorMessage);
                }
                else if (error.request) {
                    console.log(error.request);
                }
            }
            else {
                console.log(error);
            }
        }
    });
}
getUserData(DataRequest.URL);
