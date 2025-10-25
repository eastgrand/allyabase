#!/usr/bin/env node

/**
 * Spellbook Seeding Script for Test Environment
 * 
 * Seeds a spellbook into BDO for The Advancement to retrieve
 * Creates spells with mp=true for fount resolution
 */

import allyabase from '../../src/client/javascript/allyabase.js';

async function seedSpellbook() {
    console.log('🪄 Starting spellbook seeding process...');
    
    try {
        // Use test environment BDO (Base 1)
        const bdoUrl = 'http://127.0.0.1:5114/';
        const fountUrl = 'http://127.0.0.1:5117/';
        
        console.log(`📡 Connecting to BDO: ${bdoUrl}`);
        console.log(`⚡ Fount URL: ${fountUrl}`);
        
        // Configure BDO client for test environment
        const bdo = allyabase.bdo;
        bdo.baseURL = bdoUrl;
        
        // Create key storage functions for BDO client
        // BDO will handle sessionless internally
        let storedKeys = null;
        
        const saveKeys = (keys) => {
            console.log('🔑 BDO saving keys (test environment)');
            storedKeys = keys;
            return keys;
        };
        const getKeys = () => {
            console.log('🔑 BDO requesting keys (test environment)');
            return storedKeys;
        };
        
        // Create spellbook data structure
        const spellbook = {
            spellbookName: 'allyabase',
            spellTest: {
                cost: 400,
                destinations: [
                    { 
                        stopName: 'test-server', 
                        stopURL: 'http://127.0.0.1:3456/magic/spell/' 
                    },
                    { 
                        stopName: 'fount', 
                        stopURL: fountUrl + 'resolve/' 
                    }
                ],
                resolver: 'fount',
                mp: true
            },
            joinup: {
                cost: 400,
                destinations: [
                    { 
                        stopName: 'fount', 
                        stopURL: fountUrl + 'magic/spell/' 
                    }
                ],
                resolver: 'fount',
                mp: true
            },
            linkup: {
                cost: 400,
                destinations: [
                    {
                        stopName: 'fount',
                        stopURL: fountUrl + 'magic/spell/'
                    }
                ],
                resolver: 'fount',
                mp: true
            },
            save: {
                cost: 100,
                destinations: [
                    {
                        stopName: 'fount',
                        stopURL: fountUrl + 'magic/spell/'
                    }
                ],
                resolver: 'fount',
                mp: true
            }
        };
        
        console.log('📋 Spellbook structure:');
        console.log(JSON.stringify(spellbook, null, 2));
        
        // Create BDO user for spellbook storage
        console.log('👤 Creating BDO user...');
        const userUuid = await bdo.createUser('spellbook', spellbook, saveKeys, getKeys);
        
        console.log(`✅ Created BDO user: ${userUuid}`);
        console.log(`📍 BDO URL: ${bdoUrl}user/${userUuid}/bdo`);

//        const spellbooks = await bdo.putSpellbook(userUuid, hash, spellbook);
        
        // Verify the spellbook was stored correctly
        console.log('🔍 Verifying spellbook storage...');
        const retrievedBDO = await bdo.getBDO(userUuid, 'spellbook');
        
        if (retrievedBDO && retrievedBDO.spellbookName) {
            console.log(`✅ Verification successful! Spellbook "${retrievedBDO.spellbookName}" is accessible`);
            console.log(`📊 Available spells: ${Object.keys(retrievedBDO).filter(key => key !== 'spellbookName').join(', ')}`);
        } else {
            console.warn('⚠️ Warning: Could not verify spellbook storage');
        }
        
        console.log('\n🎉 Spellbook seeding completed successfully!');
        console.log('\n📋 Summary:');
        console.log(`   • Spellbook Name: ${spellbook.spellbookName}`);
        console.log(`   • Available Spells: spellTest, joinup, linkup, save`);
        console.log(`   • All spells have mp=true`);
        console.log(`   • Spell costs: spellTest/joinup/linkup=400, save=100`);
        console.log(`   • Resolver: fount`);
        console.log(`   • BDO UUID: ${userUuid}`);
        console.log(`   • Retrieval URL: ${bdoUrl}user/${userUuid}/bdo`);
        
    } catch (error) {
        console.error('❌ Error seeding spellbook:', error);
        process.exit(1);
    }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    seedSpellbook().then(() => {
        console.log('✅ Spellbook seeding process completed');
        process.exit(0);
    }).catch(error => {
        console.error('❌ Spellbook seeding failed:', error);
        process.exit(1);
    });
}

export { seedSpellbook };
