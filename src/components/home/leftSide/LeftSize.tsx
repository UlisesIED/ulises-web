import { CardProjects, Contact, Specializations } from "../../home";
export function Left_size(props: any) {

    const { language } = props;

    return (
        <div className="overflow-y">
            <div
                id={language.links.link_0.link}
                className="opacity-0 pt-8 animate-fade-in-3.6"
            >
                <div className="w-fit bg-[#000] mx-auto px-4 py-3 rounded-2xl border-double border-8 mb-8">
                    <p className="text-3xl font-KarmaSuture tracking-wider text-center ">
                        {language.links.link_0.name}
                    </p>
                </div>
                <Specializations />
            </div>
            <div
                id={language.links.link_3.link}
                className="pt-8 opacity-0 animate-fade-in-3.8"
            >
                <div className="w-fit bg-[#000] mx-auto px-4 py-3 rounded-2xl border-double border-8 mb-8">
                    <p className="text-3xl font-KarmaSuture tracking-wider text-center">
                        {language.links.link_3.name}
                    </p>
                </div>
                {
                    language?.projects?.map((project: any, index: number) => (
                        <CardProjects project={project} key={index} />
                    ))
                }
            </div>

            <div
                id={language.links.link_1.link}
                className="pt-8"
            >
                <div className="w-fit bg-[#000] mx-auto px-4 py-3 rounded-2xl border-double border-8 mb-8">
                    <p className="text-3xl font-KarmaSuture tracking-wider text-center">
                        {language.links.link_1.name}
                    </p>
                </div>

                <p className="mt-4 text-text-normal whitespace-pre-wrap font-mono text-[#fff]">
                    {language.about}
                </p>

            </div>
            <div
                id={language.links.link_4.link}
                className="pt-8"
            >
                <div className="w-fit bg-[#000] mx-auto px-4 py-3 rounded-2xl border-double border-8 mb-8">
                    <p className="text-3xl font-KarmaSuture tracking-wider text-center">
                        {language.links.link_4.name}
                    </p>
                </div>
                <Contact contact={language.contact} />
            </div>

        </div>
    )
}
