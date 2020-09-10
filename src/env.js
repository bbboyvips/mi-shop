let baseUrl;
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "/api";
        break;
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