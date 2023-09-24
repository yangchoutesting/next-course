import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
    return (
        <main>
            <h1>hello</h1>
            <Link href="/users">go to userPage</Link>
            <ProductCard></ProductCard>
        </main>
    );
}
