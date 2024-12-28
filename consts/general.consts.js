const IMAGE_MIME_TYPES = ["image/png", "image/jpg", "image/jpeg"];
const ROUTES = [
  "/api/v1/user/login",
  "/api/v1/user/register",
  "/api/v1/company/loginCompany",
  "/api/v1/company/registerCompany",
  "/api/v1/blog/getBlogs",
  "/api/v1/blog/getAllBlogs",
  "/api/v1/blog/getBlogById",
  "/api/v1/blog/createBlog",
  "/api/v1/blog/updateBlog",
  "/api/v1/blog/deleteBlog",
  "/api/v1/advert/getAdverts",
  "/api/v1/opportunity/getOpportunities",
];
const CV_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

module.exports = {
  IMAGE_MIME_TYPES,
  ROUTES,
  CV_MIME_TYPES,
};
