#!/bin/bash

# Update Covenant to simplify SVG generation
# 1. Remove light mode SVG
# 2. Save dark SVG to BDO with svgContent
# 3. Add bdoPubKey and emojicode to contract response

docker exec allyabase-base1 bash -c 'cat > /tmp/new_svg_section.js << '\''EOFMARKER'\''
    // Generate SVG representation and save as separate BDO
    console.log(`🎨 Generating SVG representation for contract ${contract.uuid}...`);
    let svgBdoPubKey = null;
    let emojicode = null;

    try {
      // Generate dark mode SVG only
      const svg = generateContractSVG(contract, { theme: "dark", width: 800, height: 600 });

      // Create SVG BDO with its own keys
      const svgHash = `svg-${contract.uuid}`;
      const svgKeys = await sessionless.generateKeys(saveKeys, async (pubKey) => getKeys(pubKey));

      const svgBdoData = {
        type: "contract-signing-ui",
        contractUuid: contract.uuid,
        bdoPubKey: svgKeys.pubKey,
        svgContent: svg,
        title: contract.title,
        participants: contract.participants,
        createdAt: new Date().toISOString()
      };

      // Create BDO for SVG
      const originalGetKeys = sessionless.getKeys;
      sessionless.getKeys = async () => svgKeys;

      const svgBdoUuid = await bdo.createUser(svgHash, svgBdoData,
        async (keys) => svgKeys,
        async () => svgKeys
      );

      sessionless.getKeys = originalGetKeys;

      // Generate emojicode from SVG BDO pubKey
      svgBdoPubKey = svgKeys.pubKey;
      const encodedPubKey = simpleEncodeHex(svgBdoPubKey);
      emojicode = `✨${encodedPubKey}✨`;

      console.log(`✅ Created SVG BDO ${svgBdoUuid} with pubKey ${svgBdoPubKey.slice(0, 16)}...`);
      console.log(`✅ Generated emojicode: ${emojicode.slice(0, 20)}...`);

      // Add to contract for easy access
      contract.svgBdoUuid = svgBdoUuid;
      contract.bdoPubKey = svgBdoPubKey;
      contract.emojicode = emojicode;

    } catch (svgError) {
      console.log(`⚠️ Failed to generate SVG BDO: ${svgError.message}`);
      // Continue without SVG if generation fails
    }
EOFMARKER

# Now replace the section in covenant.js
# Lines 376-475 contain the old SVG generation and scgContent BDO creation
# We will replace it with our simplified version

sed -i "376,475d" /usr/src/app/covenant/src/server/node/covenant.js
sed -i "375r /tmp/new_svg_section.js" /usr/src/app/covenant/src/server/node/covenant.js

echo "✅ Updated covenant.js - Simplified SVG generation"
'

echo "Done! Restart Covenant container to apply changes"
