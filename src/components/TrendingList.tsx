import PostCard from './PostCard';

function TrendingList() { 
    const posts = [
        {
            title: "Knitted Crop Tops: Lightweight Designs for Summer",
            author: "Harper Evans",
            postImg: "src/explore-imgs/tank.jpg",
            date: "November 2, 2024",
            desc: "Create trendy, lightweight knitted crop tops that pair perfectly with high-waisted jeans or skirts."
        },
        {
            title: "10 Beginner-Friendly Crochet Projects to Start Today",
            author: "Liam Johnson",
            postImg: "src/explore-imgs/crochet-square.jpg",
            date: "November 2, 2024",
            desc: "First-time crocheter? Crocheting can seem intimidating, but here are some quick and easy projects to get your feet wet!"
        },
        {
            title: "Quick and Easy Gifts: 5 Knitting Patterns You Can Finish in a...",
            author: "Noah Walker",
            postImg: "src/explore-imgs/knitting-1.jpg",
            date: "November 2, 2024",
            desc: "The holidays are coming up! Here are some perfect gifts you can knit up for your loved ones"
        },
        {
            title: "Chunky Crochet Cardigans: Cozy and On-Trend",
            author: "Lea Bennett",
            postImg: "src/explore-imgs/yarn.jpeg",
            date: "November 2, 2024",
            desc: "Wrap yourself in warmth and style with this chunky crochet cardigan pattern."
        },
        {
            title: "Crochet Granny Square Bags: Retro Meets Modern",
            author: "Jade Huang",
            postImg: "src/explore-imgs/boots-knit.jpg",
            date: "November 2, 2024",
            desc: "Revamp the classic granny square for stylish, modern bags. Perfect for casual outings or a day at the beach."
        },
        {
            title: "Crochet for Relaxation: The Mindfulness Benefits of Crafting",
            author: "Megan Ross",
            postImg: "src/explore-imgs/relax-crochet.jpg",
            date: "November 2, 2024",
            desc: "Discover how crocheting can help reduce stress and promote mindfulness. Tips on meditative techniques..."
        },
        {
            title: "Colorwork Made Simple: Tips for Stranded Knitting",
            author: "Ethan Woods",
            postImg: "src/explore-imgs/brown-knit.jpg",
            date: "November 2, 2024",
            desc: "Unlock the beauty of multi-color designs with this beginner-friendly guide to stranded knitting. Includes..."
        },

        {
            title: "How to Choose the Best Yarn for Your Projects",
            author: "Amelia Thompson",
            postImg: "src/explore-imgs/yarn-2.jpg",
            date: "November 2, 2024",
            desc: "From weight to fiber type, this guide helps you select the right yarn for your knitting or crocheting needs. Make informed decisions... "
        },
        {
            title: "How to do the Magic Circle",
            author: "Sandra Smith",
            postImg: "src/explore-imgs/magic-circle.jpg",
            date: "November 2, 2024",
            desc: "In order to create a magic circle, you could have two straight lines of yarn. You want to take your hook. And place it underneath... "
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

export default TrendingList