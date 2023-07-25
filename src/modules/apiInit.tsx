import axios from "axios";

export const S3_BUCKET = "genai-demo";
export const AWS_REGION = "us-east-1";
export const AWS_ACCESS_KEY = "ASIAZTJSMU4F3CBZQXFN";
export const AWS_SECRET_ACCESS_KEY = "7Lxj60Elwu9zgzdEsnTNHdPhLm10gHVzIFQhQJJj";
export const AWS_SESSION_TOKEN =
  "IQoJb3JpZ2luX2VjEHYaCXVzLWVhc3QtMSJHMEUCIQDctxvPTFe7LEsI9dHqu7sZNdyzMtKhG2nCHpgZvlfm/AIgE9pgGrGGbmfFDQdDRz2dlnbgWAiaYtjD1N9YBS6WRRAqngMI/v//////////ARACGgw2NTk5MjAwMzc2NDMiDO/0dooswTysZxe2MCryAoV3hyPkEKQ8msonYs5ncdCuDwnjyfiECkVjbvENHJ6pR58hHtPGP5nzXyzkPya7wVkc87cCpSQw5WQh9ATC3++uxpItyl3HyDuotVlmtqr2oC4+ZPybBs/6qDbAmNe7aaFBEerMI5TMhKoe8yRUSqqagaHylp+mWnH0lW2eiTJEXaukm3nWfHPbwFMsZyJgeVZgDEKiKGcs1moIhrxa7PT3w/mPUzleh2BUXo5hEssGKCLznz1LODJszdev91sB+OkPd96OeS8V1HWoh+t8kH+DAGW4WEl1E4CLCjrdSulSzlOqVZDVAYJJaqUh9xXxcsBZFrRm9dn+jJlzS7sRfGkEuymcPDVSBh+x6rR2Q5M4IZ3JszyobiztFRlaa6B5OeQ3dOzNb8HZgeMhdIZ8ThaJv9x8v5HYIjRVKuJ9BK52+cLsqA9b82bsEiK24jusHPMzJ2V0Cr4n9ts8mvEjp5gMwRdOKhNlQ+lMsGjopqDl2eMw15T4pQY6pgFnogK43eGjuzBBFaJnYgP/WpUG5yHa8R2sJDXUckqpR4bNUh/rIDtdG5Lxa9TtMssm1O2Xlc4Z4FWii0dGLplo26a21lTQEdGFlXrbiqPJu3fZ5YeetVbLPgSEgE4ECe5tMY/4NUseHJ/iLmt6W8zxc2Tux9GC1kV4sfoLaniwmS2F3TWSMbuRbzjrAGVn6t7lorMegtOjrobPSei9dKqjzp6IS7+b";
export const BASE_URL =
  "https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/";

export const httpPost = (endPoint: any, body: any, params?: any) => {
  return axios.put(BASE_URL + endPoint, body, {
    params: { Bucket: S3_BUCKET, ...(params || {}) },
    headers: {
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      sessionToken: AWS_SESSION_TOKEN,
    },
  });
};
