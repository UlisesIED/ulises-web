
export function MessageHome(props: any) {

    const { language } = props;

    return (
        <div className="self-center align-center text-center mb-10 sm:mx-5 md:mx-0">
            <p className="text-3xl opacity-0 animate-fade-in-2 text-white font-KarmaSuture whitespace-pre-wrap mb-5">
                {language?.messageHome.msg_1}
            </p>
            <p className="text-xl opacity-0 animate-fade-in-2.2 text-white font-KarmaSuture whitespace-pre-wrap">
                {language?.messageHome.msg_2}
            </p>
        </div>
    )
}
