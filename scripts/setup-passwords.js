/**
 * Password Setup Script for Sales Portal
 *
 * This script generates bcrypt hashes for the contractor and admin passwords.
 * Run this script to generate hashes, then add them to DynamoDB AppConfig table.
 *
 * Usage:
 *   node scripts/setup-passwords.js
 *
 * You'll be prompted to enter passwords for both roles.
 */

const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('\n=== Sales Portal Password Setup ===\n');

  // Get contractor password
  const contractorPassword = await question('Enter CONTRACTOR password: ');
  if (!contractorPassword || contractorPassword.length < 8) {
    console.error('Error: Password must be at least 8 characters.');
    process.exit(1);
  }

  // Get admin password
  const adminPassword = await question('Enter ADMIN password: ');
  if (!adminPassword || adminPassword.length < 8) {
    console.error('Error: Password must be at least 8 characters.');
    process.exit(1);
  }

  console.log('\nGenerating bcrypt hashes (cost factor: 12)...\n');

  const contractorHash = await bcrypt.hash(contractorPassword, 12);
  const adminHash = await bcrypt.hash(adminPassword, 12);

  console.log('=== DynamoDB AppConfig Items ===\n');
  console.log('Add these items to your AppConfig table:\n');

  console.log('Item 1 - Contractor Password:');
  console.log(JSON.stringify({
    configKey: 'CONTRACTOR_PASSWORD_HASH',
    value: contractorHash,
  }, null, 2));

  console.log('\nItem 2 - Admin Password:');
  console.log(JSON.stringify({
    configKey: 'ADMIN_PASSWORD_HASH',
    value: adminHash,
  }, null, 2));

  console.log('\n=== AWS CLI Commands ===\n');
  console.log('# Replace YOUR_TABLE_NAME with your actual DynamoDB table name\n');

  console.log(`aws dynamodb put-item --table-name YOUR_TABLE_NAME --item '{"configKey":{"S":"CONTRACTOR_PASSWORD_HASH"},"value":{"S":"${contractorHash}"}}'`);
  console.log(`\naws dynamodb put-item --table-name YOUR_TABLE_NAME --item '{"configKey":{"S":"ADMIN_PASSWORD_HASH"},"value":{"S":"${adminHash}"}}'`);

  console.log('\n=== Done ===\n');

  rl.close();
}

main().catch(console.error);
