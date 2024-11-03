import Image from "next/image";
import logo from "/public/img/logo.svg"

export default function partner() {
    return (
        <div className="flex gap-9">
            <>
                <Image
                    className="w-48"
                    src={logo}
                    alt="NIC"
                    width={250}
                    height={250}
                />
                <Image
                    className="w-48"
                    src={logo}
                    alt="NIC"
                    width={250}
                    height={250}
                />
                <Image
                    className="w-48"
                    src={logo}
                    alt="NIC"
                    width={250}
                    height={250}
                />
     
            </>
        </div>

    )
}

