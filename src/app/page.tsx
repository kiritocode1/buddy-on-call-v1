import { ComponentExample } from "@/components/component-example";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <div className="fixed top-4 right-4">
                <ThemeToggle />
            </div>
            <ComponentExample />
        </div>
    );
}