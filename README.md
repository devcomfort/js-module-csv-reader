# csv-reader

Pure Javascript CSV Parser for Node.js user.

If anyone wants to use the "CDN" service, please contact me at [devcomfort02@gmail.com](devcomfort02@gmail.com).

## Example

```javascript
/** in the case where the filename "excel.xlsx" is valid. */
import { read_csv, read_csv_and_parse } from "@devcomfort/csv-reader";
console.log(read_csv("excel.xlsx"));
console.log(read_csv_and_parse("excel.xlsx")); // `read_csv_and_parse` function automatically parses numerical data in the csv file, while `read_csv` doesn't.
```
