
# Friendly Mimes

Returns you friendly Human readable mime types

[![NPM](https://nodei.co/npm/friendly-mimes.png?mini=true)](https://npmjs.org/package/friendly-mimes)

### To Resolve Mime Type
Resolves Mime type (eg: text/csv, application/mp4 etc) of the mime to the specific mime. 
```javascript
import { resolveMime } from 'friendly-mimes'

const item = resolveMime('application/mp4') // { "mime": "application/mp4", "name": "MPEG4", "fileType": ".mp4" }

console.log(item.name) //MPEG4
```

### To Resolve File Type
Resolves File type (.mp4, .mp3 etc) of the mime to the specific mime. 

```javascript
import { resolveFileType } from 'friendly-mimes'

const item = resolveFileType('.csv') // {"mime": "text/csv", "name": "Comma-Separated Values",  "fileType": ".csv" }

console.log(item.mime) // text/csv
```


### To Resolve Name to mime types
Resolves name of the mime to array of related mimes. 
```javascript
import { resolveName } from 'friendly-mimes'

const mimes = resolveName('MPEG-4 Audio') // Array of Mime Types related

console.log(mimes[0].mime)
```

## Contribution
If you see any data that is missing or incorrect, please be free to raise a PR to correct the same.