import dataCSV from "./data";



const dataArray: DataInterface[] = [];
const mimeMap = new Map<string, DataInterface>();
const fileTypeMap = new Map<string, DataInterface>();

dataCSV
  .split("\n")
  .slice(1)
  .forEach((row) => {
    const cols = row.split(",");
    if (cols.length >= 3) {
      const [mime, name, fileType] = cols;
      const item: DataInterface = {
        mime,
        name,
        fileType,
        nameLowerCase: name.toLowerCase(),
      };
      dataArray.push(item);
      if (!mimeMap.has(mime.toLowerCase())) {
        mimeMap.set(mime.toLowerCase(), item);
      }
      if (!fileTypeMap.has(fileType.toLowerCase())) {
        fileTypeMap.set(fileType.toLowerCase(), item);
      }
    }
  });


interface DataInterface {
  mime: string;
  name: string;
  fileType: string;
  nameLowerCase: string;
}
/**
 * Resolves Mime type (eg: text/csv, application/mp4 etc) of the mime to the specific mime.
 * @param mime MimeType of the file
 * @returns The resolved item.
 */
export const resolveMime = (mime: string): DataInterface => {
  const item = mimeMap.get(mime.toLowerCase());
  if (item) {
    return item;
  }
  throw new Error(`
    Mimetype (${mime}) doesn't exist in our collection, please raise a Request to add the same.\n
    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts `);
};

/**
 * Resolves File type (.mp4, .mp3 etc) of the mime to the specific mime.
 * @param fileType FileType of the file
 * @returns The resolved item.
 */
export const resolveFileType = (fileType: string): DataInterface => {
  const item = fileTypeMap.get(fileType.toLowerCase());
  if (item) {
    return item;
  }
  throw new Error(`FileType (${fileType}) doesn't exist in our collection, please raise a Request to add the same.\n
    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts`);
};

/**
 * Resolves name of the mime to array of related mimes.
 * @param name Name of the file
 * @returns Array of related items.
 */
export const resolveName = (name: string): DataInterface[] => {
  const nameLower = name.toLowerCase();
  const items = dataArray.filter((item) =>
    item.nameLowerCase.includes(nameLower)
  );
  if (items.length > 0) {
    return items;
  }
  throw new Error(`Name (${name}) doesn't exist in our collection, please raise a Request to add the same.\n
    Please add it to - https://github.com/kirananto/friendly-mimes/blob/master/src/data.ts`);
};

export default {
  resolveName,
  resolveMime,
  resolveFileType
};
