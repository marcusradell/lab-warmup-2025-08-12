import Anthropic from '@anthropic-ai/sdk';

async function main() {
  // Initialize the Anthropic client with the API key from .env
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    console.error('Error: ANTHROPIC_API_KEY is not set in the environment variables');
    process.exit(1);
  }

  const anthropic = new Anthropic({
    apiKey,
  });

  console.log('Sending a message to Claude...');

  try {
    // Create a message with Claude
    const message = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: 'Hello Claude! Can you explain what makes you unique as an AI assistant?',
        },
      ],
    });

    // Print the response
    console.log('\nClaude\'s response:');
    if (message.content[0]?.text) {
      console.log(message.content[0].text);
    } else {
      console.log('No text response received');
    }
    
  } catch (error) {
    console.error('Error communicating with Claude:', error);
  }
}

main().catch(console.error);
