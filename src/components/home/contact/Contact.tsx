import Image from "next/image";

export function Contact(props: any) {

    const { contact } = props;

    if (!contact) return null

    return (
        <div>
            <p className="mt-4  whitespace-pre-wrap font-mono text-[#fff]">
                {contact.description}
            </p>
            <div className="
                flex
                flex-row
                my-6
                justify-evenly
                movilView:flex-col
            ">
                {
                    contact.contacts.map((conta: any, index: number) => (
                        <a key={index} href={conta.link} target="_blank" className="movilView:mb-8">
                            <center>
                                <Image
                                    className="
                                            relative 
                                            dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
                                            hover:scale-125 
                                            ease-in duration-300
                                            w-[100px]
                                            mb-5
                                        "
                                    src={conta.image}
                                    alt=""
                                    width={250}
                                    height={250}
                                    priority
                                    key={index}
                                />
                                <p className="mt-4 text-text-center whitespace-pre-wrap font-mono text-[#f0f8ff] max-w-44  movilView:w-full">
                                    {conta.message}
                                </p>
                            </center>
                        </a>
                    ))}
            </div>
        </div>
    )
}
