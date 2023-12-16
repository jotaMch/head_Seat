import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

const Social = () => {
    return(
        <ul className="w-1/12 h-1/6 flex flex-col justify-around items-center">
            <li className="cursor-pointer text-[rgb(179, 179, 179)]">
                < SlSocialInstagram className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
            </li>
            <li className="cursor-pointer text-[rgb(179, 179, 179)]">
                < TiSocialFacebook className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
            </li>
            <li className="cursor-pointer text-[rgb(179, 179, 179)]">
                < TiSocialTwitter className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
            </li>
            <li className="cursor-pointer text-[rgb(179, 179, 179)]">
                < IoLogoWhatsapp className=" hover:bg-lime-500 rounded-md p-1 w-6 h-6" />
            </li>
        </ul>
    )
}

export default Social;