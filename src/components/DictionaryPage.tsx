import { useState } from 'react'
import FollowingList from './FollowingList';
import ForYouList from './ForYouList';
import TrendingList from './TrendingList';
import CrochetList from './CrochetList';

function DictionaryPage() { 
    const categories = [
        {
            title: "For You",
            comp: ForYouList,
        },
        {
            title: "Following",
            comp: FollowingList,
        },
        {
            title: "Trending",
            comp: TrendingList,
        },
        {
            title: "Crochet",
            comp: CrochetList,
        },
        {
            title: "Knitting",
            comp: FollowingList,
        },
        {
            title: "Amigurumi",
            comp: FollowingList,
        },
        {
            title: "Blankets",
            comp: FollowingList,
        },
        {
            title: "Clothing",
            comp: FollowingList,
        },
        {
            title: "Decor",
            comp: FollowingList,
        },
        {
            title: "Bags",
            comp: FollowingList,
        },
        {
            title: "Guides",
            comp: FollowingList,
        },
        {
            title: "Socks",
            comp: FollowingList,
        },
        {
            title: "Slippers",
            comp: FollowingList,
        },
        {
            title: "Pet",
            comp: FollowingList,
        },
        {
            title: "Home",
            comp: FollowingList,
        },
    ];
    const [currentActive, setCurrentActive] = useState(categories[0])
    return (
        <div className="p-7">
            <div className="sticky top-0 bg-white z-30 py-2">
                <div className="flex items-center overflow-x-auto whitespace-nowrap no-scrollbar gap-10 border-b border-gray text-almost-black mb-8">
                    {categories.map((item) => (
                        <div className={`py-2 
                        ${item.title === currentActive.title ? 
                        "border-b border-almost-black font-semibold" : "font-regular"}
                        `}>
                            <button onClick={() => setCurrentActive(item)}>{item.title}</button>
                            
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <currentActive.comp/>
            </div>
        </div>
    )
    
}

export default DictionaryPage