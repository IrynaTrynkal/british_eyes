import { socialLinks } from "../assets/contacts";
import { IconFacebook } from "../shared/icons/IconFacebook";
import { IconInsta } from "../shared/icons/IconInsta";

export const SocialLinks = ({ className }: { className?: string }) => {
    return (
        <ul className={`${className} flex gap-2`}>
            {socialLinks.map(content => (
                <li key={content.name} className="">
                    <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pc:w-12 pc:h-12 pc:p-[9.6px] flex h-8 w-8 items-center justify-center rounded-sm p-[6px] hover:border"
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
