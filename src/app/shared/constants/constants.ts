export const __prod__ = process.env.NODE_ENV === "production";
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const firstPage = 1;
export const pageSize = 10;
export const pageSizeLess = 5;

// here we actually want to get all projects to select them then by name and put into significant projects table
// so this value should be set to get all projects with one query
export const pageSizeLandingPage = 100;
export const projectsToShowOnLandingPage = [
    "Personal-Website",
    "AWS-Cluster-PW",
    "Car-AI-Unity",
    "MobileAppPublicHealthFrontend",
    "Conino-BMA-Backend",
];

export const email_string = "mail@florianthom.io";
export const github_link = "https://github.com/FlorianTh2";
export const discord_link = "https://discord.gg/UYq6fz8TVw";
export const xing_link = "https://www.xing.com/profile/Florian_Thom9";
export const linkedin_link = "https://www.linkedin.com/in/florianthom";
export const cv_international_link =
    "https://drive.google.com/file/d/1azVdEOLC8S23nZK23LnalKfYSTzJXHQK/view?usp=sharing";
export const cv_germany_link = "https://drive.google.com/file/d/1e2wbtK9Pnus8pSzYK_fEMoz6aSXdrY_G/view?usp=sharing";
