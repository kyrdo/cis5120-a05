import PostCard from './PostCard';

function CrochetList() { 
    const posts = [
        {
            title: "Crochet for Relaxation: The Mindfulness Benefits of Crafting",
            author: "Megan Ross",
            postImg: "src/explore-imgs/relax-crochet.jpg",
            date: "November 2, 2024",
            desc: "Discover how crocheting can help reduce stress and promote mindfulness. Tips on meditative techniques..."
        },
        {
            title: "How to Read Crochet Patterns Like a Pro",
            author: "Sophia Ramirez",
            postImg: "src/explore-imgs/crochet-flowers.jpeg",
            date: "November 2, 2024",
            desc: "Ever been intimidated by a crochet pattern? You're not the only one! Growing up, my mom would always read crochet patterns from... "
        },
        {
            title: "10 Amigurumis to Make",
            author: "Olivia Carter",
            postImg: "src/explore-imgs/amigurumi.jpeg",
            date: "November 2, 2024",
            desc: "Creating amigurumis can seem intimidating at first, but you'll soon see it's not that scary! My first amigurumi project.."
        },
        {
            title: "10 Beginner-Friendly Crochet Projects to Start Today",
            author: "Liam Johnson",
            postImg: "src/explore-imgs/crochet-square.jpg",
            date: "November 2, 2024",
            desc: "First-time crocheter? Crocheting can seem intimidating, but here are some quick and easy projects to get your feet wet!"
        },
        {
            title: "Crochet Granny Square Bags: Retro Meets Modern",
            author: "Jade Huang",
            postImg: "src/explore-imgs/trend-2.jpg",
            date: "November 2, 2024",
            desc: "Revamp the classic granny square for stylish, modern bags. Perfect for casual outings or a day at the beach."
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Lucas Anderson",
            postImg: "src/explore-imgs/temp-blanket.jpg",
            date: "November 2, 2024",
            desc: "Temperature blankets are soooo fun to make! Every day you do a new row. Of course, sometimes, you forget a day here and..."
        },
        {
            title: "Chunky Crochet Cardigans: Cozy and On-Trend",
            author: "Lea Bennett",
            postImg: "src/explore-imgs/trend-1.jpeg",
            date: "November 2, 2024",
            desc: "Wrap yourself in warmth and style with this chunky crochet cardigan pattern."
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

export default CrochetList