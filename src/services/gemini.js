const API_KEY = import.meta.env.VITE_GROQ_API_KEY

export const analyzeDocument = async (text) => {
  try {
    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{
            role: 'user',
            content: `You are LexIndia, an expert AI legal assistant for Indian Law.
            
Analyze this legal document and provide:
1. SUMMARY - Simple summary in 3-4 lines
2. RISKY CLAUSES - List any risky or unfair clauses
3. KEY POINTS - Important points to remember
4. RECOMMENDED ACTION - What should the person do next

Document:
${text}`
          }]
        })
      }
    )

    const data = await response.json()
    console.log('Response:', data)
    return data.choices[0].message.content

  } catch (err) {
    console.log('Error:', err)
    return `Error: ${err.message}`
  }
}