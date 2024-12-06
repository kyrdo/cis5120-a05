import PostCard from './PostCard';
import amigurumi from '../assets/explore-imgs/amigurumi.jpeg';
import crochetducks from '../assets/explore-imgs/crochet-ducks.jpg';
import crochetflowers from '../assets/explore-imgs/crochet-flowers.jpeg';
import crochetsquare from '../assets/explore-imgs/crochet-square.jpg';
import knitting1 from '../assets/explore-imgs/knitting-1.jpg';
import knitting2 from '../assets/explore-imgs/knitting-2.jpeg';
import magiccircle from '../assets/explore-imgs/magic-circle.jpg';
import tempblanket from '../assets/explore-imgs/temp-blanket.jpg';
import yarn from '../assets/explore-imgs/yarn.jpeg';

function ForYouList() { 
    const posts = [
        {
            title: "How to do the Magic Circle",
            author: "Sandra Smith",
            postImg: magiccircle,
            date: "November 2, 2024",
            desc: "In order to create a magic circle, you could have two straight lines of yarn. You want to take your hook. And place it underneath... "
        },
        {
            title: "10 Amigurumis to Make",
            author: "Olivia Carter",
            postImg: amigurumi,
            date: "November 2, 2024",
            desc: "Creating amigurumis can seem intimidating at first, but you'll soon see it's not that scary! My first amigurumi project.."
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Lucas Anderson",
            postImg: tempblanket,
            date: "November 2, 2024",
            desc: "Temperature blankets are soooo fun to make! Every day you do a new row. Of course, sometimes, you forget a day here and..."
        },
        {
            title: "How to Read Crochet Patterns Like a Pro",
            author: "Sophia Ramirez",
            postImg: crochetflowers,
            date: "November 2, 2024",
            desc: "Ever been intimidated by a crochet pattern? You're not the only one! Growing up, my mom would always read crochet patterns from... "
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
            title: "The Ultimate Guide to Choosing the Best Yarn for Your Next...",
            author: "Isabella Martinez",
            postImg: knitting2,
            date: "November 2, 2024",
            desc: "It's hard to tell what kind of yarn will go best with your project, especially if it's not something you've done very much..."
        },
        {
            title: "The Art of Blocking: How to Finish Your Projects Like a Pro",
            author: "Lisa Turner",
            postImg: crochetducks,
            date: "November 2, 2024",
            desc: "Blocking is the secret to giving your handmade pieces a professional finish. Learn how to block effectively for both knitting..."
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

export default ForYouList