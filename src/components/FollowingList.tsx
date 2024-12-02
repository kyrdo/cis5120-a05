import PostCard from './PostCard';

function FollowingList() { 
    const posts = [
        {
            title: "How to do the Magic Circle",
            author: "Sandra Smith",
            postImg: "src/explore-imgs/magic-circle.jpg",
            date: "November 2, 2024",
            desc: "In order to create a magic circle, you could have two straight lines of yarn. You want to take your hook. And place it underneath... "
        },
        {
            title: "10 Amigurumis to Make",
            author: "Olivia Carter",
            postImg: "src/explore-imgs/amigurumi.jpeg",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Lucas Anderson",
            postImg: "src/explore-imgs/temp-blanket.jpg",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "src/explore-imgs/crochet-flowers.jpeg",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "src/explore-imgs/crochet-square.jpg",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "src/assets/image-tile.png",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "src/assets/image-tile.png",
            date: "November 2, 2024",
            desc: "In order to create a magic circle... "
        },
        {
            title: "I Made a Temperature Blanket!",
            author: "Sandra Smith",
            postImg: "src/assets/image-tile.png",
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

export default FollowingList

// 5:02:56