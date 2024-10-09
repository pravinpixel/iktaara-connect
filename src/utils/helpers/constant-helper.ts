
export const { NEXT_PUBLIC_API_BASE_URL, NEXT_PUBLIC_MAIN_URL } = process.env;

const CONSTANT = {
    BASE_URL: NEXT_PUBLIC_API_BASE_URL,
    NAV: "110px",

    // SECONDS * MILISECONDS
    TIMEOUT: 30 * 1000,

    ASSESTPATH : NEXT_PUBLIC_MAIN_URL
}


export const NAV = {
    height: "110px",
}



export default CONSTANT
