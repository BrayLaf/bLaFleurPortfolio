export default function Resume(){
    return(
        <div className="flex flex-col max-w-2xl mx-auto items-center px-6 py-8">
            <section className="flex flex-col mb-12 w-full">
                <h1 className="text-3xl font-bold text-primary mb-4">My Resume</h1>
                <iframe
                    src={null}
                    className="w-full h-screen border-2 border-primary rounded-lg"
                    title="Resume PDF"
                >
                </iframe>
            </section>
        </div>
    )
}