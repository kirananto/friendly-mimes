import { data } from './data'

interface DataInterface {
    mime: string
    name: string
    fileType: string
}
/**
 * Resolves Mime type (eg: text/csv, application/mp4 etc) of the mime to the specific mime. 
 * @param mime MimeType of the file
 * @returns The resolved item.
 */
export const resolveMime = (mime: string): DataInterface => {
    const item = data.filter(filterItem => filterItem.mime.toLowerCase() === mime.toLowerCase())[0]
    if(item) {
        return item
    }
    throw new Error('Mimetype doesn\'t exist in our collection, please raise a Request to add the same.')
};

/**
 * Resolves File type (.mp4, .mp3 etc) of the mime to the specific mime. 
 * @param fileType FileType of the file
 * @returns The resolved item.
 */
export const resolveFileType = (fileType: string): DataInterface => {
    const item = data.filter(filterItem => filterItem.fileType.toLowerCase() === fileType.toLowerCase())[0]
    if(item) {
        return item
    }
    throw new Error('FileType doesn\'t exist in our collection, please raise a Request to add the same.')
};

/**
 * Resolves name of the mime to array of related mimes. 
 * @param name Name of the file
 * @returns Array of related items.
 */
export const resolveName = (name: string): DataInterface[]  => {
    const items = data.filter(filterItem => filterItem.name.toLowerCase().includes(name.toLowerCase()))
    if(items?.length > 0) {
        return items
    }
    throw new Error('Names doesn\'t exist in our collection, please raise a Request to add the same.')
};

export default { 
    resolveName,
    resolveMime,
    resolveFileType
}