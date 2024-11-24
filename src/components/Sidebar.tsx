import { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsChevronDown, BsPlus, BsBookmarksFill } from "react-icons/bs"
import { PiYarn } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookReader, BiSolidNotepad, BiNote, BiSearchAlt2} from "react-icons/bi";

function Sidebar({ open, setOpen } : 
  {open: boolean; 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
  //const [open, setOpen] = useState(true)
  const [projMenuOpen, setProjMenuOpen] = useState(false);
  const [saveMenuOpen, setSaveMenuOpen] = useState(false);

  const Menus = [
    { title: "About", spacing: true, icon: <AiFillHome />, link: "/"},
    { title: "Explore", icon: <BiSolidBookReader />, link: "/dictionary"}, 
    { title: "Projects",
      icon: <BiSolidNotepad />,
      addIcon: true,
      projMenu: true,
      submenuItems: [
        { title: "Add New Project", addIcon: true, icon: <BsPlus/>, link: "/newproj"},
        { title: "Project 1", icon: <BiNote/>}, 
        { title: "Project 2", icon: <BiNote/>},
        { title: "Project 3", icon: <BiNote/>}
      ],
    },
    { title: "Saved",
      icon: <BsBookmarksFill />,
      addIcon: true,
      saveMenu: true,
      submenuItems: [
        { title: "Add to Saved", addIcon: true, icon: <BsPlus/>},
        { title: "Project 1", icon: <BiNote/>},
        { title: "Project 2", icon: <BiNote/>}, 
        { title: "Project 3", icon: <BiNote/>},
      ],
    },
  ];

  return (
      <div className={`bg-beige h-screen p-5 pt-8 ${open ? 
        "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple 
        text-3xl rounded-lg absolute -right-3 top-4 border-2 
        border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen (!open)}
        />
        <div className="inline-flex">
          <PiYarn className="text-dark-purple text-4xl rounded-lg 
          cursor-pointer block float-left mr-2"/>
          <h1 className={`text-dark-purple origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
          YarnDiction
          </h1>
        </div>

        <div>
          
          <Link to="/newproj">
            <button
              onClick={()=>{}}
              className="flex items-center justify-center w-full bg-dark-purple text-white py-2 px-4 rounded-md hover:bg-hover-beige hover:text-dark-purple mt-6"
            >
              <span className="text-2xl block float-left">
                <BsPlus/>
              </span>
              {open ? "New Project" : ""}
            </button>
          </Link>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
            {menu.link? 
              <Link to={menu.link}>
                <li key={index} className={`text-dark-purple text-sm flex
                items-center gap-x-4 cursor-pointer p-2 hover:bg-hover-beige 
                ounded-md ${menu.spacing ? "mt-9" : "mt-2"}`} onClick={()=>{menu.projMenu? setProjMenuOpen(!projMenuOpen) : (menu.saveMenu? setSaveMenuOpen(!saveMenuOpen) : "")}}>
                  <span className="text-2xl block float-left">
                    {menu.icon}
                  </span>
                  <span className={`text-base font-medium flex-1 
                    duration-200 ${!open && "hidden"}`}>
                    {menu.title}
                  </span>
                    {menu.projMenu && open && (
                    <BsChevronDown className={`${projMenuOpen && "rotate-180"}`} onClick = {() => {setProjMenuOpen(!projMenuOpen)}}/>
                    )}
                    {menu.saveMenu && open && (
                    <BsChevronDown className={`${saveMenuOpen && "rotate-180"}`} onClick = {() => {setSaveMenuOpen(!saveMenuOpen)}}/>
                    )}
                </li>
              </Link> 
            : 
              <li key={index} className={`text-dark-purple text-sm flex
                items-center gap-x-4 cursor-pointer p-2 hover:bg-hover-beige 
                ounded-md ${menu.spacing ? "mt-9" : "mt-2"}`} onClick={()=>{menu.projMenu? setProjMenuOpen(!projMenuOpen) : (menu.saveMenu? setSaveMenuOpen(!saveMenuOpen) : "")}}>
                <span className="text-2xl block float-left">
                    {menu.icon}
                </span>
                <span className={`text-base font-medium flex-1 
                    duration-200 ${!open && "hidden"}`}>
                    {menu.title}
                </span>
                {menu.projMenu && open && (
                    <BsChevronDown className={`${projMenuOpen && "rotate-180"}`} onClick = {() => {setProjMenuOpen(!projMenuOpen)}}/>
                )}
                {menu.saveMenu && open && (
                    <BsChevronDown className={`${saveMenuOpen && "rotate-180"}`} onClick = {() => {setSaveMenuOpen(!saveMenuOpen)}}/>
                )}
              </li>
            }
              {menu.projMenu && projMenuOpen && open &&(
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    submenuItem.addIcon?
                        <Link to="/newproj">
                        <li key={index} className={`text-dark-purple text-sm flex
                        items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-hover-beige 
                        ounded-md`}>
                        <span className="text-2xl block float-left">
                            {submenuItem.icon}
                        </span>
                        {submenuItem.title}
                        </li>
                        </Link>
                    :
                        <li key={index} className={`text-dark-purple text-sm flex
                        items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-hover-beige 
                        ounded-md`}>
                        <span className="text-2xl block float-left">
                            {submenuItem.icon}
                        </span>
                        {submenuItem.title}
                        </li>
                  ))}
                </ul>
              )}
              {menu.saveMenu && saveMenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className={`text-dark-purple text-sm flex
                    items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-hover-beige 
                    ounded-md`}>
                      <span className="text-2xl block float-left">
                        {submenuItem.icon}
                      </span>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        <div className={`flex items-center rounded-md bg-hover-beige mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BiSearchAlt2 className={`text-dark-purple text-2xl block float-left cursor-pointer ${open && "mr-2"}`}/>
          <input 
            type={"search"} 
            placeholder="Search" 
            className= {`bg-transparent text-dark-purple placeholder-gray text-base w-full
            focus:outline-none ${!open && "hidden"}`}
          />
        </div>
      </div>
  )
}

export default Sidebar