// import { data } from "./data";
import dataCSV from "./data";

const data = dataCSV
  .split("\n")
  .filter((_, index) => index !== 0)
  .map((row) => {
    const cols = row.split(",");
    return {
      mime: cols[0],
      name: cols[1],
      fileType: cols[2]
    };
  });

interface DataInterface {
  mime: string;
  name: string;
  fileType: string;
}
/**
 * Resolves Mime type (eg: text/csv, application/mp4 etc) of the mime to the specific mime.
 * @param mime MimeType of the file
 * @returns The resolved item.
 */
export const resolveMime = (mime: string): DataInterface => {
  const item = data.filter((filterItem) => filterItem.mime.toLowerCase() === mime.toLowerCase())[0];
  if (item) {
    return item;
  }
  throw new Error(`
    Mimetype (${mime}) doesn\'t exist in our collection, please raise a Request to add the same.\n
    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts `);
};

/**
 * Resolves File type (.mp4, .mp3 etc) of the mime to the specific mime.
 * @param fileType FileType of the file
 * @returns The resolved item.
 */
export const resolveFileType = (fileType: string): DataInterface => {
  const item = data.filter(
    (filterItem) => filterItem.fileType.toLowerCase() === fileType.toLowerCase()
  )[0];
  if (item) {
    return item;
  }
  throw new Error(`FileType (${fileType}) doesn\'t exist in our collection, please raise a Request to add the same.\n
    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts`);
};

/**
 * Resolves name of the mime to array of related mimes.
 * @param name Name of the file
 * @returns Array of related items.
 */
export const resolveName = (name: string): DataInterface[] => {
  const items = data.filter((filterItem) =>
    filterItem.name.toLowerCase().includes(name.toLowerCase())
  );
  if (items?.length > 0) {
    return items;
  }
  throw new Error(`Name (${name}) doesn\'t exist in our collection, please raise a Request to add the same.\n
    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts`);
};

export default {
  resolveName,
  resolveMime,
  resolveFileType
};
