export interface ImageLogoProps {
    altText?: string;
    logo: string
}

export default function ImageLogo({logo, altText = "Jujutsu Kaisen - O Jogo do Abate" }: ImageLogoProps) {
    return (
        <img
            src={logo}
            alt={altText}
            className="block  pt-4 h-40 w-auto object-contain"
        />
    )
}
