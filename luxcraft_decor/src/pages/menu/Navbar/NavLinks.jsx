import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { links } from "./Mylinks";
import { FaChevronUp ,FaChevronDown } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const navigate = useNavigate();



  const handleHeadClick =(mysublink)=>{
    navigate(`/allproducts/${mysublink}`)
    console.log(mysublink);
  }

   
  return (
    <>
      {links.map((link) => (
        <div>
          <div className=" flex px-3 justify-between text-center  text-center md:cursor-pointer group">
          <h1
            className="text-base text-white flex md:pr-0 pr-1 group"
            onClick={() => {
              if (link.submenu) {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }
            }} >
                      
                      <Link
                  className="text-white text-sm capitalize"
                  to={
                    link.link === "full-collections"
                      ? `/allproducts/${link.link}`
                      : link.link === "limited-edition"
                      ? '/limited-edition'
                      : "/home"
                  }
                >
               {link.name}
                 </Link>

               
                      
         {link.submenu && (
              <span className="text-sm md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? <FaChevronUp /> : <FaChevronDown />}`}
                ></ion-icon>
              </span>
            )}
            <span className="text-sm md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:mt-2">
              {link.submenu && <FaChevronDown />}
            </span>
          </h1>

            {link.submenu && (
              <div>
                <div className="absolute left-0 w-full z-10 top-36 hidden group-hover:md:block hover:md:block ">
                  
                  <div className=" w-full bg-white rounded-2xl border-8 border-blue-900 p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-sm capitalize text-left text-blue-400 hover:text-fuchsia-600  font-semibold" onClick={()=>handleHeadClick(mysublinks.link)} >
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-xs capitalize  text-left text-black my-2.5">
                            <Link
                              to={`/allproducts/${slink.link}`}
                              className="hover:text-primary hover:text-pink-600 "
                            >
                              <span >{slink.name} </span>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          {/* <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head
                          ? "chevron-up"
                          : "chevron-down"
                          }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
