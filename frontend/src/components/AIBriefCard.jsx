import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:8000/api';

export default function AIBriefCard({ trends }) {
    const [selectedTech, setSelectedTech] = useState('');
    const [brief, setBrief] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const topics = Object.keys(trends || {});

    // Auto-select the first topic when trends load
    useEffect(() => {
        if (topics.length > 0 && !selectedTech) {
            setSelectedTech(topics[0]);
        }
    }, [topics, selectedTech]);

    useEffect(() => {
        if (!selectedTech) return;

        let isMounted = true;
        const fetchBrief = async () => {
            setLoading(true);
            setError(null);
            setBrief('');

            try {
                // Encode the tech name for the URL path
                const res = await axios.get(`${API}/brief/${encodeURIComponent(selectedTech)}`);
                if (isMounted) {
                    setBrief(res.data.brief);
                }
            } catch (err) {
                if (isMounted) {
                    setError('Failed to generate AI brief. Confirm backend is running and GEMINI_API_KEY is set.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchBrief();

        return () => {
            isMounted = false;
        };
    }, [selectedTech]);

    if (!topics.length) return null;

    return (
        <div className="chart-card ai-brief-card">
            <div className="chart-card-header ai-brief-header">
                <div>
                    <h3>
                        ✨ Generative AI Executive Brief
                    </h3>
                    <span className="ai-model-badge">AI Powered</span>
                </div>

                <select
                    className="ai-tech-select"
                    value={selectedTech}
                    onChange={e => setSelectedTech(e.target.value)}
                    disabled={loading}
                >
                    {topics.map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <div className="ai-brief-content">
                {loading ? (
                    <div className="ai-loading">
                        <div className="ai-sparkles">✨</div>
                        <p>Synthesizing insights for {selectedTech}...</p>
                    </div>
                ) : error ? (
                    <div className="ai-error">
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className="ai-text">
                        {/* Simple markdown parsing for bold text since Gemini uses **bold** */}
                        <p dangerouslySetInnerHTML={{
                            __html: brief.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\n/g, '<br />')
                        }} />
                    </div>
                )}
            </div>
        </div>
    );
}
