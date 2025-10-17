// This code replaces lines 376-475 in covenant.js
// Simplified: Generate only dark SVG, save as BDO with svgContent, return bdoPubKey and emojicode

    // Generate SVG representation and save as separate BDO
    console.log(`🎨 Generating SVG representation for contract ${contract.uuid}...`);
    let svgBdoPubKey = null;
    let emojicode = null;

    try {
      // Generate dark mode SVG only
      const svg = generateContractSVG(contract, { theme: 'dark', width: 800, height: 600 });

      // Create SVG BDO with its own keys
      const svgHash = `svg-${contract.uuid}`;
      const svgKeys = await sessionless.generateKeys(saveKeys, async (pubKey) => getKeys(pubKey));

      const svgBdoData = {
        type: 'contract-signing-ui',
        contractUuid: contract.uuid,
        bdoPubKey: svgKeys.pubKey,  // Include for easy reference
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
