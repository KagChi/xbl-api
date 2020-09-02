## Installation

To Use Api Install Package First
```bash
npm install xysebl-api
```

## Usage
### Get Bot Info
```javascript
const data = require("xysebl-api")

(async() => {
const resultData = await data.botData("616169470293049344")
 console.log(resultData)
})()
```
