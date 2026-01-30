export const metadata = {
  title: "Contact",
  description: "Get in touch with Braydon Lafleur. Contact me for collaboration opportunities, project inquiries, or professional networking.",
  openGraph: {
    title: "Contact | Braydon Lafleur",
    description: "Get in touch with me for collaboration opportunities and project inquiries.",
  },
};

export default function Contact() {
    return(
        <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
            <section className="flex flex-col mb-12 w-full">
                <h1 className="text-3xl font-bold text-primary mb-4">Contact me(disabled temporarily)</h1>
            </section>
            <section className="flex flex-col mb-12 w-full">
                <form className="flex flex-col gap-4 w-full">
                    <input type="text" className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" placeholder="Name:" disabled/>
                    <input type="email" className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" placeholder="Email:" disabled/>
                    <input type="text" className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" placeholder="Subject:"disabled/>
                    <textarea className="p-2 border-2 border-primary rounded-lg bg-transparent text-primary focus:outline-none focus:border-secondary transition-colors" rows="6" placeholder="Message:"disabled></textarea>
                    <button type="submit" className="px-3 py-1 max-w-30 border-2 text-sm border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors" disabled>
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    )
}