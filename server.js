import app from './src/index.js';
import {ENV} from './src/config/env.js';

// port = ENV.PORT

const port = ENV.PORT 



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});