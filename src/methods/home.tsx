import {
  InvokeEndpointCommand,
  SageMakerRuntimeClient,
} from "@aws-sdk/client-sagemaker-runtime";
import AWS from "aws-sdk";

export const S3_BUCKET = "genai-demo";
export const REGION = "us-east-1";
export const ACCESS_KEY = "ASIAZTJSMU4F7VOYDS7K";
export const SECRET_ACCESS_KEY = "nhKcmxnvq4llfLbczPTbtn3DjGBWLmfZtj9qtBJW";
export const SESSION_TOKEN =
  "IQoJb3JpZ2luX2VjEI7//////////wEaCXVzLWVhc3QtMSJHMEUCIAJ/aBatYMcJgjbGYOXZ893Zve2zNWlUzq0UaRG4yb2EAiEA6pZFZKczBM00ITlMunhbwuM0/a4BQ/ozBHjMOIQq6AEqlQMIJhACGgw2NTk5MjAwMzc2NDMiDDiZnZVknH3rvtP7UiryAgxg5ZGqcg6sLPv/3JozQSiVdkN4Et984IV5Kd04k1Mi+jV3R+Ryhl00ohTWVP4f1zwU+s15X8aMVkZptZM3mwN+WvPzTktLG0F6ypFBCwHcQJUv9qxJhA3srO1qIRS/fSb3LgEcCWkvHq8X5WJLoVQZYvR8JL67rBqRZk5xbVFQbbnC6ht8UK+ft40rWP1trAxWoM5A17p8BRb5ExWgPlxb8saVb3u7qNDdtmnYJoUfQPmuDOaUks9Dd18AmRC7xUsk77eMCiw0uiENzfUoOBKqfnEjjQT/wDit/LWPaD9OTsi1S6NkCkfrMAZcnY89/5rHXDjoU//3Gx+kF3Yq70pMVC2MJsQ7//joK+fMZXrkE1PUneaVTv8m9+5j5L7k3YvqwXiNGHYwZK3xDCKzHUEDGb3bLg0+pGStZTdWd79j/At4ltlIZ/KqsZ5z2xJEvgXwBDpP1VEx3rWT26sjcCUwAmgxszP71de0tWl5UZIiGFEwlrL9pQY6pgG06Io6yWE8RN6c2U5mq8FZlKqr8OZvAMQMHmBmLZHWzMeOGaBGhBS9Odsar4mbi38d8kqxg60Mu5/iOIVHHRTIfTx02GRuDsy/e02U7LOiLMH/Ign9iuwimmz9T6fw3FwTW/FW9lOXAPkwnXuOeBRf25nmlPgcHVOPlowFh8UewmTKjJ1J3RbDA20xmv3Lm+LIFuxNRoGJG/HZV1J1ss2oY6z2nmlY";
// export const BASE_URL =
//   "https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/";

// const endPoint = "XtraktoUWAssistantUploadAPI-Endpoint/invocations";

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  sessionToken: SESSION_TOKEN,
});

export const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

export const client = new SageMakerRuntimeClient({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    sessionToken: SESSION_TOKEN,
  },
});

const uploadFileToS3 = (file: any) => {
  const params = {
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  return new Promise((resolve, reject) => {
    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt: any) => {
        // console.log({ evt });
      })
      .send((err: any, data: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          // Upload successful, resolve with the constructed S3 object URL
          const localFileURL = URL.createObjectURL(file); //`https://${S3_BUCKET}.s3.amazonaws.com/${file.name}`;
          resolve({
            location: localFileURL,
            key: file?.name,
            bucket: S3_BUCKET,
          });
        }
      });
  });
};

export const uploadFile = async (e: any, state: any, setState: any) => {
  e.preventDefault();
  const { loading }: any = state;
  if (loading) return;
  if (e.target?.file?.files.length < 1) {
    setState({ error: "Select a file" });
    return;
  }

  const file: any = e.target?.file.files[0];

  setState({ loading: true, error: null });

  await uploadFileToS3(file)
    .then(async (res: any) => {
      setState({ showUploadPop: false });
      await generateSummary(file.name);
      console.log(res);
    })
    .catch((e: any) => {
      console.log(e);
    });

  setState({ loading: false });
};

export const generateSummary = async (fileName: any) => {
  try {
    const input = {
      // InvokeEndpointInput
      //   EndpointName: "genai-open-queries-pdf-processor-t2-xlarge1", // required
      EndpointName: "XtraktoUWAssistantSummaryAPI", // required
      Body: JSON.stringify({
        // bucket: S3_BUCKET,
        // key: fileName,
        DocumentBucket: S3_BUCKET,
        // DocumentKey: fileName,
        // Length: "Long",
        // Include: ["Insured Name", "Premium"],
        // bucket: S3_BUCKET,
        size: "Long",
        details: ["Insured Name", "Premium"],
        doc_keys: fileName,
      }), // required
      ContentType: "application/json",
      Accept: "*/*",
    };
    const command = new InvokeEndpointCommand(input);
    const response = await client.send(command);

    const textDecoder = new TextDecoder();
    const resultString = textDecoder.decode(response.Body);
    const resultObject = JSON.parse(resultString);
    console.log("........ DOne");
    // dispatch(setQueriesMetaData({ [file.name]: resultObject?.docs } || {}));
  } catch (error) {
    console.log({ error });
  }
};
