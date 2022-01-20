import React from "react";
import Image from "next/image";

interface SocialIconProps {
  src: string;
  alt?: string;
  size?: number;
  href: string;
}

const SocialIcon = ({
  src,
  alt = "Social Icon",
  size = 16,
  href,
}: SocialIconProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image
        src={src}
        alt={alt}
        height={size}
        width={size}
        objectFit="contain"
      />
    </a>
  );
};

export default SocialIcon;
