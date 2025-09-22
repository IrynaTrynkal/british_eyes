import { socialLinks } from "../assets/contacts";
import { IconFacebook } from "../shared/icons/IconFacebook";
import { IconInsta } from "../shared/icons/IconInsta";

export const SocialLinks = ({
    className,
    footer,
}: {
    className?: string;
    footer?: boolean;
}) => {
    return (
        <ul className={`${className} flex ${footer ? "gap-4" : "gap-2"}`}>
            {socialLinks.map(content => (
                <li key={content.name} className="">
                    <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${footer ? "bg-ivory border-ivory hover:text-ivory h-8 w-8 rounded-full text-black hover:bg-black" : "prepc:w-12 prepc:p-[9.6px] border-ivory prepc:h-12 h-8 w-8 rounded-sm hover:border-black"} flex items-center justify-center border p-[6px] transition-all duration-300 ease-in-out`}
                    >
                        {content.name === "instagram" ? (
                            <IconInsta />
                        ) : (
                            <IconFacebook />
                        )}
                    </a>
                </li>
            ))}
        </ul>
    );
};
