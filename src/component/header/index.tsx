import React,{useState} from "react";
import { Link } from 'react-router-dom';
import NoteNotify from "../NoteNotify";
import { logo } from "../../assets/img";

const Header: React.FunctionComponent = () => {
    const [showSearch, setshowSearch] = useState<boolean | null>(false);
    const numberCount1: number = 10;
    const numberCount3: number = 6;
    const numberCount2: number = 2;
    return (
        <header className="bg-primary header">
            <div className="container-nmc mx-auto py-[12px] flex flex-row">
                <Link to="/" className="w-[80px] flex justify-center px-[12px]">
                    <img className="" src={logo} alt="logo" />
                </Link>
                <div className="xl:w-3/4 w-2/3 flex md:hidden items-center px-[12px] relative">
                    <input className="w-full px-[24px] h-4/5 rounded-full" type="text" placeholder="Search by Title, Author, ISBN or Keywords" />
                    <i className="bdx-search flex items-center absolute text-[20px] text-[#595959] right-[24px] cursor-pointer"></i>
                </div>
                <div className='header__content flex flex-row justify-end px-[12px] sm:px-[24px] gap-[24px] grow'>
                    <div className='hidden sm:flex'>
                        <i className="bdx-search-2 text-[20px] text-[#fff] flex items-center"
                            onClick={()=>setshowSearch(!showSearch)}    
                        ></i>
                        <div className={`${showSearch ? "visible" : "invisible"} inset-0 w-full z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-backdrop bg-opacity-75 transition-opacity"
                                onClick={()=>setshowSearch(!showSearch)}
                            ></div>
                            <div className='fixed absolute p-3 left-0 top-[76px] z-10 w-[100vw] overflow-y-auto'>
                                <form className="flex items-end justify-center text-center sm:items-start relative">
                                    <input className="relative w-full rounded-[16px] py-[16px] px-[24px] z-0" type="text" />
                                    <button className="absolute top-[6px] right-[8px] bg-primary z-1 w-[44px] h-[44px] rounded-[12px] right-[18px]"><i className="bdx-search-2 text-[20px] h-full flex items-center justify-center text-[#fff]"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <Link to="/wishlist" className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header">
                            <div className="relative">
                                <i className="bdx-heart text-[20px] text-[#fff] flex items-center"></i>
                                <NoteNotify numberCount={numberCount1} />
                            </div>
                            <p className="text-[#fff] text-[14px] uppercase block sm:hidden">Wishlist</p>
                        </Link>
                    </div>
                    <div className="flex">
                        <Link to="/cart" className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header">
                            <div className="relative">
                                <i className="bdx-cart-fill text-[20px] text-[#fff] flex items-center"></i>
                                <NoteNotify numberCount={numberCount3} />
                            </div>
                            <p className="text-[#fff] text-[14px] uppercase block sm:hidden">Cart</p>
                        </Link>
                    </div>
                    <div className="flex relative subMenu-btn">
                        <Link to="/account" className="flex flex-col items-center justify-center cursor-pointer hover-text-orange-orange-4-header">
                            <div className="relative">
                                <i className="bdx-user text-[20px] text-[#fff] flex items-center"></i>
                                <NoteNotify numberCount={numberCount2} />
                            </div>
                            <p className="text-[#fff] text-[14px] uppercase block sm:hidden">Account</p>
                        </Link>
                        <div className="absolute top-full subMenu z-[100]">
                            <ul>
                                <li><Link to="/profile"><span>Profile</span></Link></li>
                                <li><Link to="/profile"><span>Edit Profile</span></Link></li>
                                <li><button><span>Login</span></button></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default React.memo(Header);
