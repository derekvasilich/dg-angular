interface LoginError {
    message: String;
    status: Number;
}

interface LoginFilters {
    email: String;
    password: String;
}

export {
    LoginError,
    LoginFilters
}