#!/bin/bash

# Script to update hardcoded ports in allyabase services to use environment variables
# This enables dynamic port mapping for testing with multiple bases

echo "Updating service ports to use environment variables..."

# Julia - change from hardcoded 3000 to PORT env var
sed -i.bak 's/app\.listen(3000);/app.listen(process.env.PORT || 3000);/' /usr/src/app/julia/src/server/node/julia.js

# BDO - change from hardcoded 3003 to PORT env var  
sed -i.bak 's/app\.listen(3003);/app.listen(process.env.PORT || 3003);/' /usr/src/app/bdo/src/server/node/bdo.js

# Continuebee - change from hardcoded 2999 to PORT env var
sed -i.bak 's/app\.listen(2999);/app.listen(process.env.PORT || 2999);/' /usr/src/app/continuebee/src/server/node/continuebee.js

# Joan - change from hardcoded 3004 to PORT env var
sed -i.bak 's/app\.listen(3004);/app.listen(process.env.PORT || 3004);/' /usr/src/app/joan/src/server/node/joan.js

# Pref - change from hardcoded 3002 to PORT env var
sed -i.bak 's/app\.listen(3002);/app.listen(process.env.PORT || 3002);/' /usr/src/app/pref/src/server/node/pref.js

# Fount - change from hardcoded 3006 to PORT env var
sed -i.bak 's/app\.listen(3006);/app.listen(process.env.PORT || 3006);/' /usr/src/app/fount/src/server/node/fount.js

# Addie - change from hardcoded 3005 to PORT env var
sed -i.bak 's/app\.listen(3005);/app.listen(process.env.PORT || 3005);/' /usr/src/app/addie/src/server/node/addie.js

# Dolores - change from hardcoded 3007 to PORT env var
sed -i.bak 's/app\.listen(3007);/app.listen(process.env.PORT || 3007);/' /usr/src/app/dolores/src/server/node/dolores.js

# Minnie - change from hardcoded 2525 to PORT env var (using server.listen)
sed -i.bak 's/server\.listen(2525);/server.listen(process.env.PORT || 2525);/' /usr/src/app/minnie/src/server/node/minnie.js

echo "Port updates completed. Services will now use PORT environment variable with fallback to default ports."