import { parse } from "papaparse";

interface ParsedCSVInterface {
  data: string[][];
}

const parsePromise = (file: Blob) => {
  return new Promise<ParsedCSVInterface>((complete, error) => {
    // throwing unsafe usafe of any which does not makes sense
    // eslint-disable-next-line
    parse(file, { complete, error });
  });
};

export const getCSVFileContent = async (file: Blob) => {
  const parsedCSV = await parsePromise(file);
  return parsedCSV;
};
