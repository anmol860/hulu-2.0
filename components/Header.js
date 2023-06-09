import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightBulbIcon,
  SearchIcon,
  UserIcon} from "@heroicons/react/outline"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5
    justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItems title="HOME" Icon={HomeIcon}/>
          <HeaderItems title="TRENDING" Icon={LightBulbIcon}/>
          <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
          <HeaderItems title="COLLECTIONS" Icon={CollectionIcon}/>
          <HeaderItems title="SEARCH" Icon={SearchIcon}/>
          <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
        </div>
        
        <Image src="https://links.papareact.com/ua6"
        height={100}
        width={200}
        className="object-contain"/>
    </header>
  )
}

export default Header;