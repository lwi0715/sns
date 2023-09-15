import Link from "next/link";
import SearchIcon from "./ui/reactIcons/SearchIcon";
import HomeIcon from "./ui/reactIcons/HomeIcon";
import DarkmodeButton from "./ui/DarkmodeButton";

export default function Header() {
  return (
    <section>
      <Link href="/">
        <h1>SNS</h1>
      </Link>
      <nav>
        <ul>
          <Link href="/search">
            <SearchIcon />
          </Link>
          <Link href="/">
            <HomeIcon />
          </Link>
          <DarkmodeButton />
        </ul>
      </nav>
    </section>
  );
}
