'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '', // honeypot field
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    website: '',
                });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                setError(data.error || 'Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
            <section className="flex flex-col mb-12 w-full">
                <h1 className="text-3xl font-bold text-primary mb-4">Contact me</h1>
            </section>
            <section className="flex flex-col mb-12 w-full">
                {submitted && (
                    <div className="mb-4 p-4 bg-green-500/20 border-2 border-green-500 rounded-lg text-green-400">
                        ✓ Message sent successfully! Ill get back to you soon.
                    </div>
                )}
                {error && (
                    <div className="mb-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-lg text-red-400">
                        ✗ {error}
                    </div>
                )}
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" 
                        placeholder="Name:"
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" 
                        placeholder="Email:"
                        required
                    />
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" 
                        placeholder="Subject:"
                        required
                    />
                    {/* Honeypot field - hidden from users */}
                    <input 
                        type="text" 
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" 
                        rows="6" 
                        placeholder="Message:"
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        className="px-3 py-1 max-w-30 border-2 text-sm border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </section>
        </div>
    )
}