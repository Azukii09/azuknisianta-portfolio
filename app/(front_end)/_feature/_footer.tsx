import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="fixed bottom-0 px-6 sm:px-8 md:px-16 lg:px-20 w-full z-50">
            <div className={"h-20 bg-white flex items-center justify-between"}>
                <div className={"text-lg text-primary"}>Copyright <span className={"text-xl"}>© 2025</span></div>
                <div className={"flex gap-4"} >
                    <Link href={"https://api.whatsapp.com/send?phone=6281133390006"} className={"cursor-pointer"}>
                        <Image src={"/assets/img/socmed/wa.png"} alt={"wa"} height={25} width={25}/>
                    </Link>
                    <Link href={"https://github.com/Azukii09"} className={"cursor-pointer"}>
                        <Image src={"/assets/img/socmed/github.png"} alt={"github"} height={25} width={25}/>
                    </Link>
                    <Link href={"https://www.instagram.com/alvillage/"} className={"cursor-pointer"}>
                        <Image src={"/assets/img/socmed/instagram.png"} alt={"instagram"} height={25} width={25}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/alvillage-zuknisianta-ab5b82137/"} className={"cursor-pointer"}>
                        <Image src={"/assets/img/socmed/linkedin.png"} alt={"linkedin"} height={25} width={25}/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}