"""
ai_summarizer.py — Generates executive briefs using the Gemini API.
"""
import os
from google import genai

def generate_brief(technology: str, documents: list[dict]) -> str:
    """
    Given a technology topic and a list of related documents,
    use the Gemini API to write a 1-paragraph executive brief.
    """
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        return f"**API Key Required:** To generate an AI summary for {technology}, please set the `GEMINI_API_KEY` environment variable."

    try:
        client = genai.Client(api_key=api_key)
        
        # Filter documents for this technology
        tech_docs = [d for d in documents if d.get("technology") == technology]
        
        if not tech_docs:
            return f"Not enough recent data available to generate a confident executive brief for {technology} at this time."

        # Compile document text for context (limit to recent/top 5 to save tokens)
        context_text = ""
        for i, doc in enumerate(tech_docs[:5]):
            context_text += f"\n--- Source {i+1}: {doc.get('source')} ---\nTitle: {doc.get('title')}\nSummary: {doc.get('text')}\n"

        prompt = f"""
You are an expert Chief Technology Officer writing an executive brief for your board of directors.
Write a single, highly professional, analytical paragraph summarizing the current landscape of {technology}.
Focus on the most important recent developments, market signals, and strategic implications.

Use the following real-world articles and papers as your ground-truth context:
{context_text}

Rules:
1. Write ONLY one paragraph (4-6 sentences max).
2. Do not use bullet points or asterisks.
3. Be analytical and authoritative.
4. If the context doesn't contain enough info, state that brief information is limited right now.
"""
        # Call the Gemini 2.5 Flash model
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        
        return response.text.strip()
        
    except Exception as e:
        return f"**Generation Failed:** Could not generate executive brief. Error: {str(e)}"

# Quick manual test
if __name__ == "__main__":
    from storage import load_raw_documents
    docs = load_raw_documents()
    print("Testing Artificial Intelligence summarizer...")
    print(generate_brief("Artificial Intelligence", docs))
