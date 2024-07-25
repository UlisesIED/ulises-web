
export function Labels(props: any) {

    const { label } = props

    return (
        <div
            className='
                px-1
                mx-1
                rounded-lg
                bg-[#696869]
                text-sm 
                font-mono
                drop-shadow-lg
            '>
            {label}
        </div>
    )
}
