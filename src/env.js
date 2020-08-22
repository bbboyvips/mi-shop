let baseUrl;
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "/deve";
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