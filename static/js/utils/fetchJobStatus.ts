import { delay } from "./delay";

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
const delayInMilliseconds = 5000;

export const fetchJobStatus = async (
  collectionId: string,
  authority: string
): Promise<string> => {
  const jobStatus = await fetch(
    `https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/collection-job-status?collection=${collectionId}&authority=${authority}`,
    {
      method: "GET",
    }
  ).then(async (response) => {
    if (response.ok) {
      let jobStatus: string | undefined = await response.json().then((json) => {
        return json.status;
      });

      if (jobStatus === "processing" || jobStatus === "not found") {
        await delay(delayInMilliseconds);
        jobStatus = await fetchJobStatus(collectionId, authority);
      }

      return jobStatus;
    }

    return "retry";
  });

  if (jobStatus !== "successful" && jobStatus !== "retry") {
    return "failed";
  }

  return jobStatus;
};
