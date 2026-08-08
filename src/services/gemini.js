const API_KEY = import.meta.env.VITE_GROQ_API_KEY

export const analyzeDocument = async (text, language) => {
  const lang = language || 'english'
  const langInstruction = lang === 'hindi' ? 'Respond completely in Hindi language.' : 'Respond in English language.'

  const prompt = 'You are LexIndia, an expert AI legal assistant for Indian Law. ' + langInstruction + '\n\nAnalyze this legal document and provide:\n1. SUMMARY - Simple summary in 3-4 lines\n2. RISKY CLAUSES - List any risky or unfair clauses\n3. KEY POINTS - Important points to remember\n4. RECOMMENDED ACTION - What should the person do next\n\nDocument:\n' + text

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{
        role: 'user',
        content: prompt
      }]
    })
  })

  const data = await response.json()
  return data.choices[0].message.content
}