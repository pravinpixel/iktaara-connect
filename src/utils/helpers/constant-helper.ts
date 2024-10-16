
const CONSTANT = {
    IKTARAA_CONNECT_BASE_URL: process.env.NEXT_PUBLIC_API_IKTARAA_CONNECT_BASE_URL,
    IKTARAA_BASE_URL: process.env.NEXT_PUBLIC_API_IKTARAA_BASE_URL,
    NAV: "110px",

    // SECONDS * MILISECONDS
    TIMEOUT: 30 * 1000,

    ISPRODUCTION: process.env.NODE_ENV === 'production',
    ISSTAGING: process.env.NODE_ENV === 'test',
    ISLOCAL: process.env.NODE_ENV === 'development',

    ASSESTPATH: process.env.NEXT_PUBLIC_IKTARAA_URL || ''
}


export const NAV = {
    height: "110px",
}



export default CONSTANT
