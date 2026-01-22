import { siteConfig } from "@/shared/config/site.config";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center p-4">
            <p>
                {siteConfig.description}
            </p>
        </footer>
    )
}