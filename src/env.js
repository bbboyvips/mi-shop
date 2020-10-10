let baseUrl;
switch (process.env.NODE_ENV) {
    // 通过npm脚本传参的方式传递环境参数,如果是development,调用的接口前缀将是/api
    case 'development':
        baseUrl = "/api";
        break;
        // 如果是生产环境,那么就是/pro
    case 'production':
        baseUrl = "/pro";
        break;
    default:
        baseUrl = "/pro";
        break;
}
export default {
    baseUrl
}