import { Labels } from '../../common';
export function CardProjects(props: any) {

    const { project } = props;

    const gif = project?.gif.src

    return (
        <div
            className="
                mx-auto
                h-72
                w-11/12
                mt-8
            "
        >
            <div
                className="
                ease-in duration-300
                h-full
                w-full 
                group
                relative
                drop-shadow-lg
                rounded-lg
                bg-cover
                movilView:bg-[length:100%_60%]
                movilView:bg-no-repeat
            "
                style={{
                    backgroundImage: `url(${gif}) `
                }}
            >
                <div
                    className="
                    absolute
                    inset-0
                    bg-black
                    opacity-0
                    transition-opacity
                    group-hover:opacity-50
            "/>
                <div
                    className="
                    transition-all transform 
                    translate-y-8 opacity-0 
                    h-full
                    w-auto
                    group-hover:brightness-100
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    movilView:opacity-100
                    movilView:translate-y-0
                    flex
                    items-end

                "
                >
                    <div className="
                        w-full
                        pcView:hidden
                        text-center
                        screen500:pb-8
                    ">
                        <p className="
                                text-2xl
                                text-white
                                text-text-normal
                                font-mono
                                drop-shadow-lg
                            "
                            style={{
                                textShadow: "#000 1px 0 10px"
                            }}
                        >
                            {project.title}
                        </p>
                        <p
                            className="text-sm font-mono mb-2 text-shadow-lg"
                            style={{ textShadow: "#000 1px 0 10px" }}
                        >
                            {project.description}
                        </p>
                        <div className="flex flex-row justify-center">
                            {project.labels.map((label: string, index: number) => (
                                <Labels
                                    key={index}
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className="
                        flex 
                        flex-row 
                        p-2
                        w-full
                        justify-between
                        movilView:hidden
                    "

                    >
                        <div className=''>
                            <p className="
                                text-3xl
                                text-white
                                text-text-normal
                                font-mono
                                drop-shadow-lg
                            "
                                style={{ textShadow: "#000 1px 0 10px" }}
                            >
                                {project.title}
                            </p>
                            <p
                                className="text-md font-mono mb-2 text-shadow-lg"
                                style={{ textShadow: "#000 1px 0 10px" }}
                            >
                                {project.description}
                            </p>
                            <div className="flex flex-row my-2">
                                {project.labels.map((label: string, index: number) => (
                                    <Labels
                                        key={index}
                                        label={label}
                                    />
                                ))}
                            </div>
                        </div>
                        {
                            project.link
                                ? (
                                    <div className="flex items-center">
                                        <a
                                            className="
                                    px-4 
                                    py-2 
                                    text-sm 
                                    text-white 
                                    bg-[#263747]
                                    rounded-lg    
                                "
                                            href={project.link}
                                            target="_blank"
                                        >
                                            Visitar sitio
                                        </a>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
