


interface FooterProps {
    message: string;
}

export default function Footer({ message }: FooterProps) {
    return (
        <footer className="fixed bottom-0 left-0  z-50 bg-gray-400 flex h-12 w-full items-center justify-center">
            <h4>
                {message}
            </h4>
        </footer>
    )
}
