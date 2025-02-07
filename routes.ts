/**
 * An aray of routes that are public and not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
]


/**
 * An aray of routes used for authenticaton
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register"
];

/**
 * The prefix for API Authentication routes
 * Routes that start with this prefix are used for API authentication purpose
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";


/**
 * Default path if a user is already signed in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"