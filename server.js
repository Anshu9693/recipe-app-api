import app from './src/index.js';
import {ENV} from './src/config/env.js';

import job from './src/config/cron.js';

if(ENV.NODE_ENV==='production'){
  job.start();
}

const port = ENV.PORT 



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});