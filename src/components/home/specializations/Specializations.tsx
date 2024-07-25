
import Image from "next/image";
import { specializations } from '../../../constants/constants';

export function Specializations() {
    return (
        <div className="phone:w-auto">
            {
                specializations.map((specialization: any, index: number) => (
                    <div className="flex flex-row justify-evenly pb-5" key={index}>
                        {
                            specialization.map((image: any, index: number) => (
                                <Image
                                    className="
                                        relative 
                                        dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
                                        w-12
                                        hover:scale-125 
                                        ease-in duration-300
                                    "
                                    src={image}
                                    alt=""
                                    width={180}
                                    height={37}
                                    priority
                                    key={index}
                                />
                            ))}
                    </div>
                ))
            }
        </div>
    )
}
