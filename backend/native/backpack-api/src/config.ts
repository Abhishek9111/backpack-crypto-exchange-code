import * as dotenv from "dotenv";

dotenv.config();
export const HASURA_URL =
  process.env.HASURA_URL || "http://localhost:8112/v1/graphql";

export const JWT =
  process.env.AUTH_JWT ||
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYXV0aF93b3JrZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYXV0aF93b3JrZXIifSwiaWF0IjoxNjY0MjQ3NzE2fQ.F7IMXysrX7jLs5kEekjZenixkNm8KJfzyBo4KplnSqSstWpAh4lTFNhh8Ow0bVzwphhJEPtcLMXZvYlOmwM7RcQ_8zxD-UcLPC8nru9_n-8eWO1ADwffjJ4GM7V78d-iOV3qX_bqk2L6w8Pt9XCZJ-OCvecyv1_4xndFnVO3kgOsCL78tlbw7TjiMKCKKl74Ew5mstUA7FrGolXrDvCwbeM3lHf0UJdXwTj4U18IWyEgvPWVOSJLZMRDCxhBSnKuTCkYbXkyYt_ugBg4_nAimcg116Z1MXDxC2DLK7JXh_0g11HznlUItdh7pvDIGWFQorXNIy1pY09Li6HTXBQH1oAb_wYPvZOl3Gij-P9hJkkELjmIqDlQhG9ccgPtATf62yMN5huc2fpsrqSx0e0B65XC4g8xVlXMHhxpyDrbjJ0hyBwdez5gBMOF5EWl3slzRPrmRtzMiciSPV9l44sOnD0P4-1nyjllL9v0bIPAtt-rK3ZYtKiIp-XJIOjG1jJ4K6J13jBFt5uvqoXLfxKMQSiBhp40jU4Yqjo0C_6lUkpaC5gOF9BTe8JbuDobdBGqK_gr9vJMUrGb4_LROieO6vtj6ts1mG2k3F0rpxuHMwTZIx2DuHUXXswJK7J6OXLjGFi1QjIzukfXmoBplLuqxsqLzOLH6Kxv0_WIjrkLcwA";
export const CHAT_HASURA_URL =
  process.env.CHAT_HASURA_URL || "http://localhost:8113/v1/graphql";

export const CHAT_JWT =
  process.env.CHAT_JWT ||
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY2hhdCJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJjaGF0In0sImlhdCI6MTY3MDg2NzkwN30.LI0YdKWnuCnRoJWsatcRclcruL1ojtYN7R6-zWNnpoCEz8N5pgBKaOOFFTGvcvwkG3ALo-eAAwELrBOEEVAUR7rxd5bq23rPX3eh0pkHZ0i0fLHm1o3BOcv4J_dXT2RBwcG1Y9E335L2M-N0WqlQa4Y3XnZiRkUGe0WBogqobK5vposdDiR52xKBuHuMKHo0LHQcMSJap9bSqES9BbISOW5D9qhcgm2Lbsm3HIOf7k21Hjo7bf9NpMUMbQZQS7yL0B-5bjZqNSFYnoVfGrhTMUnCM3-W4OwA8xqZuXL14jhmocBEVM-sP95G-ysxgnWniWq5OR2xRuelRJv5IocfgylMYTj64O57oLb1C7gnMcrcO_fkpJgGUEWKQb66U-JZghW4DAYljmWvlpCgfcKM7u914l9Qs-3Q2vzkzvZeTo11CfTRAX6ECfNMzGwLLxvdA_nz7eLHrBRIMz9syhPjjzYFnitlK8G2jYawlS6VmOoPAeUgUjHobmaQ9BoodJ7QpLDG789L9seXj2O57KUp3vW2Gp8NeFCHm3auzw9CwVLEn9c7wWQMHNSG22gUBYijyPle_95m_gbBvq_gdAjhwBPb9pwbXP9SCADvtvZUxUIUG7llCsbBT6ShihlTNAzgwOgxV8txEM5Pi9wG3FZdcj90LjipVCz2LiQEnwGhkoY";

export const AUTH_JWT_PUBLIC_KEY =
  process.env.AUTH_JWT_PUBLIC_KEY ||
  "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqx+7XJxJR+0Lp8hLFKYr5Gc+0RPIdaZJ18GH8b//oMn7PCVe0gLQDkxjvhKo2ySMgWSOSGaNJkZXLhN4jlot/xaulN3dSbrgQPxvx3ALd3nXJaTLOb7xBODd196r+Ylg1QPICdrBQVi6qAXacq/UBK8K7BWQ0TG2/R9aB5mNSGtY3Ogj9xp2MP5LTi7f2Alj6IwSFRN+9SCmH3NiQzNUPBWJB02Lgx1oxwtfevkQ3BpwIqzkOTTE1G7PXgKbYRBUlUNqwvMIjk89tRf/qHgMbRPGYYNu7XoRt8AOVgNFUcL51Gb9vM75XstWoAh6BwYQsceEXUU7dgIJem9zItFRdwIDAQAB-----END PUBLIC KEY-----";
export const AUTH_JWT_PRIVATE_KEY =
  process.env.AUTH_JWT_PRIVATE_KEY ||
  "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrH7tcnElH7QunyEsUpivkZz7RE8h1pknXwYfxv/+gyfs8JV7SAtAOTGO+EqjbJIyBZI5IZo0mRlcuE3iOWi3/Fq6U3d1JuuBA/G/HcAt3edclpMs5vvEE4N3X3qv5iWDVA8gJ2sFBWLqoBdpyr9QErwrsFZDRMbb9H1oHmY1Ia1jc6CP3GnYw/ktOLt/YCWPojBIVE371IKYfc2JDM1Q8FYkHTYuDHWjHC196+RDcGnAirOQ5NMTUbs9eApthEFSVQ2rC8wiOTz21F/+oeAxtE8Zhg27tehG3wA5WA0VRwvnUZv28zvley1agCHoHBhCxx4RdRTt2Agl6b3Mi0VF3AgMBAAECggEAMom1kN1LOyXDynJ50ghdcCAZyi+YhT5uEn1Cg+AbQ8ZDH3k97rIL9h0TXAAwxD+gC1rCNpmq2AHwH1h6wzfY27w8JRT9FJhPQIINFQ5/JHLkWma36j78+V7bxbQqgBDVezOZsWdcqcrlnVfVMwfAiv2TMTQRR+bxzwGiWho8QoWNq1UcA8GGOE3vzWGrZJbgVwG43xUVDJtMem9w4QwlHLwekP3Q46Lqx1AOtesN39h/HduJtWtYGcw/t2TkIW9UibmBqZy7rkZW+4hCXhGBI6YhAUYnuyP6ZT+r1+J2aPlJeo2yIyjc6YVxoFwUR7QWtINzuBtG9v/YXfmtYCnEIQKBgQDd3E/nX4Vc7xolvoQZzN+0XWnyLqPgtAL63RLFfb8/lhnHHzca2k2eI0+P6I9etDa9c+i4l7/RM5LUkwxd8RGH6S4m8FiUkdKyaiwK1PAGRiUbWaij9WjKVjp7QhEtisQvtyMa9quwpv3C02zbD31/PqgeTmXOH0Aweh162qyeBwKBgQDFdMQ13JCkQe3GNO06EEPE+NjFkLqBVP2leDXmUVZRnHUN4OMpjCb9H0+/4rOAusCRmS9kALoeo6U9ykC5mqUViVzeTqnHXctD4llvEzSngDU/4+cbUQG3obj8JG9lupe/p3r6gRvB13nWiwVzj2wgK2SY0HGG1gaRaIS3K2nVEQKBgQCNhlJ6V9as9+GIHkYKZ0R0u/ovgU0MtAgKmye0T4jGOSvsd58hRAyrSf8g38tFMFSS+fOEfVjhTLLnY35KFtOGDVthf4QiEfuD0HKT3k3W0rws/D61iID2QZdAtV5b3N9VSM/eDWhsYboSo+gWvYTivMdlvcD3gbvisKNJkWD31QKBgCdgIqSPCHUJBK6K7WevyKPl7+xt8RNLbI1rzGvSeoEpzxnmZ8ZoQXomnVOplJwuIaqnPpEVqAfmIFSTGZcppJQH4XIfg7HTHW67G5SP4ucoJPZJr1N+MvZ4lJgLd/90V0CL2HVN+8gK/SvwazThO/GqVZQ3tPvrgEHM8vJIAQHRAoGAEjFMNmitScLogo9Cq5oX88/KpDOfCi+IG19g0HdaepgzreDzallcKf/XnXX9d7wuTuoSRNsq7RfCmLAUlzC+Waw0dpwLkZjgeVvFdrADGOFDKEovesZ0NBQ+Ln0SXJVRaynRxgnrjYINE+1I3uE8XZie4NMh5pybTXBpyx/cIz0=-----END PRIVATE KEY-----";

export const REFERRER_COOKIE_NAME = "referrer" as const;
export const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/backpack/aflkmfhebedbjioipglgcbcmnbpgliof" as const;

export const S3_AWS_REGION = process.env.S3_AWS_REGION || "us-west-1";
export const AWS_S3_KEY_ID = process.env.AWS_S3_KEY_ID || "";
export const AWS_S3_KEY_SECRET = process.env.AWS_S3_KEY_SECRET || "";
export const CHAT_ASSETS_AWS_BUCKET =
  process.env.CHAT_ASSETS_AWS_BUCKET || "chat-feed";
export const CHAT_ASSETS_CLOUDFRONT_URL =
  "https://d3lfr9vwfn0ejn.cloudfront.net";

export const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

export const NOTIFICATIONS_QUEUE = "NOTIFICATIONS";

export const HELIUS_API_KEY = process.env.HELIUS_API_KEY || "";

export const DROPZONE_XNFT_SECRET = process.env.DROPZONE_XNFT_SECRET || "";
export const DROPZONE_PERMITTED_AUTHORITIES =
  process.env.NODE_ENV === "production"
    ? ["DoCHcPut2WAuVEpqukF6CKh5NSnF4muJaif8zh4qfubu"]
    : [];
