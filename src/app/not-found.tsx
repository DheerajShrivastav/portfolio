import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Contact";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
    return (
        <>
            <Header />
            <main id="main" className="max-w-page mx-auto px-5 md:px-12 py-20 md:py-28">
                <div className="border-t-2 border-ink pt-6 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6">
                    <span aria-hidden="true" className="md:col-span-3 tabular text-display-xl font-black text-ink">404</span>
                    <div className="md:col-span-9 lg:col-span-7">
                        <h1 className="text-display-lg font-extrabold">This page doesn&apos;t exist.</h1>
                        <p className="mt-5 text-lg leading-relaxed text-ink-2 max-w-[52ch]">
                            The link may be old or mistyped. The work, case studies and resume are all on the home page.
                        </p>
                        <Link
                            href="/"
                            className="group mt-8 inline-flex items-center gap-2 bg-cobalt text-white font-bold px-6 py-4 no-underline hover:bg-cobalt-deep transition-[color,background-color,border-color,transform] duration-150 active:duration-75 motion-safe:active:translate-y-px"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to the home page
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
