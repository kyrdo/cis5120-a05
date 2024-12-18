import PostCard from './PostCard';
import bootsknit from '../assets/explore-imgs/boots-knit.jpg';
import brownknit from '../assets/explore-imgs/brown-knit.jpg';
import crochtool from '../assets/explore-imgs/croch-tool.jpg';
import crochetsquare from '../assets/explore-imgs/crochet-square.jpg';
import knitting1 from '../assets/explore-imgs/knitting-1.jpg';
import magiccircle from '../assets/explore-imgs/magic-circle.jpg';
import relaxcrochet from '../assets/explore-imgs/relax-crochet.jpg';
import yarn2 from '../assets/explore-imgs/yarn-2.jpg';
import yarn from '../assets/explore-imgs/yarn.jpeg';

function FollowingList() { 
    const posts = [
        {
            title: "Yarn Hacks: How to Fix Common Crocheting Mistakes",
            author: "Sandra Smith",
            postImg: crochtool,
            date: "November 2, 2024",
            desc: "Learn tips and tricks to keep your stitches consistent for a polished look in every project. Includes troubleshooting for common mistakes."
        },
        {
            title: "How to Choose the Best Yarn for Your Projects",
            author: "Amelia Thompson",
            postImg: yarn2,
            date: "November 2, 2024",
            desc: "From weight to fiber type, this guide helps you select the right yarn for your knitting or crocheting needs. Make informed decisions... "
        },
        {
            title: "How to do the Magic Circle",
            author: "Sandra Smith",
            postImg: magiccircle,
            date: "November 2, 2024",
            desc: "In order to create a magic circle, you could have two straight lines of yarn. You want to take your hook. And place it underneath... "
        },
        {
            title: "10 Beginner-Friendly Crochet Projects to Start Today",
            author: "Liam Johnson",
            postImg: crochetsquare,
            date: "November 2, 2024",
            desc: "First-time crocheter? Crocheting can seem intimidating, but here are some quick and easy projects to get your feet wet!"
        },
        {
            title: "Quick and Easy Gifts: 5 Knitting Patterns You Can Finish in a...",
            author: "Noah Walker",
            postImg: knitting1,
            date: "November 2, 2024",
            desc: "The holidays are coming up! Here are some perfect gifts you can knit up for your loved ones"
        },
        {
            title: "Sustainable Knitting: Eco-Friendly Yarns and Practices",
            author: "Amelia Thompson",
            postImg: yarn,
            date: "November 2, 2024",
            desc: "Not all yarns are created the same. Some are more sustainable than others. This read will make you think..."
        },
        {
            title: "7 Quick Knit Gifts for Any Occasion",
            author: "Noah Walker",
            postImg: bootsknit,
            date: "November 2, 2024",
            desc: "Need a last-minute gift? These fast and fun knitting patterns will have you ready in no time."
        },
        {
            title: "Crochet for Relaxation: The Mindfulness Benefits of Crafting",
            author: "Megan Ross",
            postImg: relaxcrochet,
            date: "November 2, 2024",
            desc: "Discover how crocheting can help reduce stress and promote mindfulness. Tips on meditative techniques..."
        },
        {
            title: "Colorwork Made Simple: Tips for Stranded Knitting",
            author: "Ethan Woods",
            postImg: brownknit,
            date: "November 2, 2024",
            desc: "Unlock the beauty of multi-color designs with this beginner-friendly guide to stranded knitting. Includes..."
        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
            {posts.map((post, i) => 
            <div>
                <PostCard post={post} key={i} />
            </div>
            )}
        </div>
    )
    
}


export default FollowingList

// 5:02:56