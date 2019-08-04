// export const SERVER_API_PATH = 'https://airbnme-jsonbe.herokuapp.com/';
export const SERVER_API_PATH = 'http://localhost:8080/';

export const DEFAULT_AXIOS_POST_CONFIG = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const ACCESS_TOKEN_KEY = 'airbnmeToken';

export const REQUIRED_TEXT = 'Required';

export const PASSWORD_FIELD_NAME = 'password',
    CONFIRM_PASSWORD_FIELD_NAME = 'confirmPassword',
    EMAIL_FIELD_NAME = 'email',
    NAME_FIELD_NAME = 'name',
    ADDRESS_FIELD_NAME = 'address',
    DESCRIPTION_FIELD_NAME = 'description',
    STRING_FIELD_TYPE = 'string',
    TEXTAREA_FIELD_TYPE = 'textarea';
