
export function Links(props: any) {

    const { language } = props

    return (
        <div className="flex flex-col text-center pcXs:mb-8">

            <a className="my-4 opacity-0 font-KarmaSuture tracking-wider animate-fade-in-2.4" href={`#${language.links.link_0.link}`}>
                {language.links.link_0.name}
            </a>
            <a className="my-4 opacity-0 font-KarmaSuture tracking-wider animate-fade-in-3" href={`#${language.links.link_3.link}`}>
                {language.links.link_3.name}
            </a>
            <a className="my-4 opacity-0 font-KarmaSuture tracking-wider animate-fade-in-2.6" href={`#${language.links.link_1.link}`}>
                {language.links.link_1.name}
            </a>
            <a className="my-4 opacity-0 font-KarmaSuture tracking-wider animate-fade-in-3.2" href={`#${language.links.link_4.link}`}>
                {language.links.link_4.name}
            </a>
        </div>
    )
}
