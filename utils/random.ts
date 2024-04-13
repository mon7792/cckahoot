

// random string of 5 characters
export const randomString = (): string => {
    return Math.random().toString(36).substring(2, 7);
}