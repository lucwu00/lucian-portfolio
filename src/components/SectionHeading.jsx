function SectionHeading({eyebrow, title}){
    return(
        <div className="mb-10">
            <p className="font-mono text-sm text-accent">
                {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
            </h2>
        </div>
    );
}

export default SectionHeading;