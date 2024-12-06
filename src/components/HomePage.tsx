import '../css/HomePage.css';
import paper_v2 from '../assets/paper_v2.jpg';
import paper_v1 from '../assets/paper_v1.jpg';
import paper_v3 from '../assets/paper_v3.jpg';
import mood from '../assets/mood.png';
import styles from '../assets/styles.png';
import proto_v1_1 from '../assets/proto_v1_1.png';
import proto_v1_2 from '../assets/proto_v1_2.png';
import prototype_1 from '../assets/prototype_1.png';
import prototype_2 from '../assets/prototype_2.png';
import prototype_3 from '../assets/prototype_3.png';
import prototype_4 from '../assets/prototype_4.png';
import pivot from '../assets/pivot.png';
import variant1 from '../assets/variant1.png';
import variant2 from '../assets/variant2.png';

function HomePage() { 
    return (
        <div className="p-7 home">
            <div className="intro">
              <h1>Introduction</h1>
              <p>YarnDiction is a tool that streamlines the project ideation and development process for knitters and crocheters. Not only does it include a simple and flexible interface for project planning, but it also connects fiber-artist enthusiasts to each other through project sharing functionality. It’s an “all in one” interface, hosting project articles and resources from other crocheters and knitters for all kinds of levels.</p>
            </div>
            <div className="motivation">
              <h1>Motivation</h1>
                <p>As fellow crocheters/knitters ourselves, for a long time, we’ve been wanting to see a tool that centralizes all the crocheting and knitting resources out there. As a group, we’ve used a combination of different sites to gather tutorials and inspiration, which often makes the learning process segmented and clunky. Additionally, we’ve struggled to find an easy-to-use interface for project ideation, as regular note taking apps often fall short because they lack moodboard functionality. We wanted a tool that would allow fellow crocheters/knitters to easily develop their projects as well as share and discover others’ projects.</p>
            </div>
            
            <h1>Interviews & Observations</h1>
              <p>To gain an understanding of how different users might use our interface, we began by interviewing crocheters and knitters of different levels and experiences. We spoke with those who had just begun the process of learning how to crochet, and those who have been crocheting and knitting for years. We wanted to learn what pain points these groups often encountered and what priorities they had in terms of connecting with the larger community and sharing their work.</p>
            <div className="interviews">
              <div className="goals">
                <h2>Goals</h2>
                  <ul>
                    <li>How do crocheters/knitters find inspiration for their work?</li>
                    <li>What are the pain points of current crochet/knitting tools?</li>
                    <li>What challenges do crafters face (organizing supplies, finding community, learning curves)?</li>
                  </ul>
              </div>
              <div className="findings">
                <h2 >Findings</h2>
                  <p>From our interviews, we learned that many viewed a sense of community as important in the context of being able to share and interact with others’ projects. Additionally, we found that many didn’t have a defined workflow and often pulled inspiration from various sources like Youtube tutorials, Instagram reels, Tiktok, Pinterest, Ravelry, and even pattern books. Some more experienced crocheters noted that they liked developing their own pattern but often struggled with compiling all their inspiration and ideas, and keeping track of their progress.</p>
                  <p>With this in mind, we set out to create a tool that would help streamline the project ideation process and provide a platform tailored for sharing crocheting and knitting work.</p>
              </div>             
            </div>
            <div className="lo-fi">
              <div className="text">
                <h1>Low-Fidelity Prototype: Paper Prototyping</h1>
                  <p>To tackle this challenge, our team began by creating various low-fidelity prototypes. First, we redefined our goal based on our user interviews:</p>
                  
                  <h2>Goals</h2>
                    <ul>
                      <li>Help people who crochet/knit manage and share their projects.</li>
                      <li>Include shareable project logging and ideating functionality.</li>
                    </ul>
                    <p>Then, we performed a round of parallel paper prototypes. We created one prototype that focused on user tracking functionality, which featured an interactive stitch counter and displayed corresponding visuals.</p>
                  
                    <p>Another prototype we developed was one that involved project tracking and social media aspects. This interface allowed the user to create projects, with space to add links for patterns, jot down notes, and insert media. It also enabled users to share projects with others by posting, and view others’ projects through an explore feature.</p>
                  
                <h2>User Evaluations</h2>
                  <p>After developing these two prototypes, we conducted user evaluations to determine which features were intuitive, easy-to-use, and most helpful.</p>
                  <p className='before-list'>Main feedback from the first prototype:</p>
                  <ul>
                    <li>Evaluators liked the vision board and the charming aesthetic of the interface.</li> 
                    <li>They enjoyed the project tracker feature, noting the counter button was useful and facilitated fine-grained project tracking.</li> 
                    <li>They also would have liked to be able to add patterns and general notes to projects.</li>
                    <li>Evaluators would have liked the option to add inspiration for each project, rather than just as the background of the home screen.</li>
                  </ul>
                  <p className='before-list'>Main feedback from the second prototype:</p>
                  <ul>
                    <li>Evaluators liked the additional functionality of sharing and searching for projects.</li> 
                    <li>They liked the model of being able to publish and share projects with others.</li> 
                    <li>Evaluators felt the design for the Dictionary tab on the bottom was not the most clear.</li>
                    <li>They also would have liked more flexibility in the kinds of notes they could add for a certain project.</li>
                  </ul>
                  <p>From this feedback, we decided to incorporate certain features from both of our designs in a refined paper prototype. Based on the sentiment of our evaluators, we utilized the second prototype’s model, focusing on a project tracking interface with a social media experience. Since evaluators enjoyed the first prototype’s vision board, we also incorporated draggable blocks, reminiscent of a moodboard, into our project tracker feature.</p>
              </div>
              <div className="images">
                <div className="image">
                  <img
                    src={paper_v2}
                    alt="Second Paper Prototype"
                  />
                  <h3>Second Paper Prototype</h3>
                </div>
                <div className="image">
                  <img
                    src={paper_v3}
                    alt="Final Paper Prototype"
                  />
                  <h3>Final Paper Prototype</h3>
                </div>
                <div className="image">
                  <img
                    src={paper_v1}
                    alt="First Paper Prototype"
                  />
                  <h3>First Paper Prototype</h3>
                </div>            
              </div>                  
            </div>
            <div className="hi-fi">
              <div className="images">
                <div className="image">
                  <img
                    src={mood}
                    alt="YarnDiction Moodboard"
                  />
                  <h3>Moodboard</h3>
                </div>
                <div className="image">
                  <img
                    src={styles}
                    alt="Style Guide"
                  />
                  <h3>Style Guide</h3>
                </div>
                <div className="image">
                  <img
                    src={proto_v1_1}
                    alt="First Hi-Fi Prototype (part 1)"
                  />
                  <img
                    src={proto_v1_2}
                    alt="First Hi-Fi Prototype (part 2)"
                  />
                  <h3>First Hi-Fi Prototype</h3>
                </div>
              </div>
              <div className="text">
                <h2>High-Fidelity Prototype: Figma</h2>
                  <p>Next, we created a high-fidelity prototype in Figma. We began with a moodboard of our own, inspired by yarn and craft imagery, colors, and playful fonts.</p>
                  <p>Next, we created a style guide to define some rough guidelines we wanted our design to adhere to.</p>
                  
                  <p>Here is our first iteration of our high-fidelity design mapping out our main task flow of creating a project.</p>
                  <p>At first, we experimented with using all the colors in our style guide, however, we quickly realized that our color palette had too much contrasting hues, which felt distracting. We ultimately chose to only use a few of our colors, reserving certain ones as accent colors.</p>

                  <h3>User Evaluations</h3>
                    <p>The general consensus of our evaluations was that the task flow for creating a project was clear. Users were able to navigate through the app and develop a basic project page. However, they noted some confusion with the distinction between ‘My Projects’ and ‘Saved Projects’, and wondered whether there was duplicate content between the two. They also felt as if the ‘All’ dropdown was redundant when navigating between projects.</p>
                    <p>Another significant point centered around user control – particularly being able to edit/delete components of the project as well as having more options with available block types. Finally, there were some small comments on consistency and aesthetic, including the sudden change to screen color after adding an image to the project screen and the low contrast (both grayish tones) in the beige/gray screens at the beginning of the prototype.</p>
                    <p className='before-list'>Overall, the evaluations suggested that we focus on three key areas:</p>
                    <ul>
                      <li>Improving the task flow to reduce duplication</li>
                      <li>Increasing the ability of the user to edit their work</li>
                      <li>Fixing minor visual inconsistencies in the interface.</li>
                    </ul>
              </div>
            </div>
            <div className="revisions">
              <div className="text">
                <h2>Revisions</h2>
                  <p>With these changes in mind, we worked to create the next iteration of our design, developing a more intuitive and user friendly interface.</p>
                  <p>Evaluators enjoyed this iteration of the design and found the premise of our tool to be promising. However, the feedback on the project page workflow led us to consider the app in a desktop format. Some users felt that there would be a lot of scrolling with larger projects, and dragging blocks around was not as seamless with a mobile interface.</p>
                <h3>Redesign</h3>
                  <p>We decided to quickly mock up a version of the interface in a desktop format, moving the menu tab bar to be a collapsible sidebar while retaining the essence of the project tracking visual board. As you can see, we also weren’t super satisfied with the visual aesthetics of our app yet and continued to experiment with colors!</p>
                  <p>With these designs, we were able to visualize the tool in a wider, more flexible format and decided that this better fit our users’ needs. </p>
              </div>
              
              <div className="images">
                  <div className="image">
                    <img
                      src={prototype_1}
                      alt="Revised Hi-Fi Prototype (part 1)"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={prototype_2}
                      alt="Revised Hi-Fi Prototype (part 2)"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={prototype_3}
                      alt="Revised Hi-Fi Prototype (part 3)"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={prototype_4}
                      alt="Revised Hi-Fi Prototype (part 4)"
                    />
                  </div>
              </div>
            </div>
            <div className="desktop">
              <div>
                <img
                  src={pivot}
                  alt="Desktop Version of Prototype"
                  width="50%"
                />
                <h3 className="label">Desktop Prototype</h3>
              </div>
              <h3>Revised Hi-Fi Prototype</h3>
            </div>

            <div className="implementation">
              <div className="text">
                <h1>Implementation</h1>
                  <p>To implement our prototype, we created a React + Vite app, and used Tailwind CSS for styling.</p>
                  <h2>Interface Variant Study</h2>
                    <p>Throughout the process of implementation, we conducted more evaluations and made several changes to our design. One element we iterated on extensively was the toolbar for adding blocks to a project. One version featured a static toolbar at the bottom of the project page. A second version featured a collapsible toolbar located in the lower right corner of the page. We then conducted a study to analyze completion time for adding and rearranging blocks as well perceived ease of use between the two variants.</p>
                  <h2>Results</h2>
                    <p>Since each participant performed the same two tasks with each interface, we were able to conduct paired t-tests to compare the difference in averages. The average time it took to add blocks with toolbar variant 1 was 4.403 seconds faster than with toolbar variant 2 (<i>p = 0.3215</i>). The average time it took to rearrange blocks with toolbar variant 1 was 4.51 seconds slower than with toolbar variant 2 (<i>p = 0.1393</i>). Neither of these findings were statistically significant.</p>
                    <p>Each participant was asked to fill out a short questionnaire after completing the study to assess perceived ease of use for each variant. The questionnaire used Likert (1-5) scales where 1 is less easy to use and 5 is more easy to use. On average, toolbar variant 2 was rated 0.7638 higher than toolbar variant 1 (<i>p = 0.07362</i>). This finding was not statistically significant.</p>
                    <p>Despite the lack of significance, we decided to implement toolbar variant 2: the collapsible toolbar. The small gain in speed of adding blocks with the non-collapsible toolbar did not outweigh the perceived ease of use of the collapsible toolbar. From speaking with participants, we found that this was due to the non-collapsible toolbar getting in the way of rearranging or modifying the contents of a block. Thus, when users are not trying to add a block, it is better to hide that functionality.</p>
              </div>
              <div className="images">
                <div className="image-1">
                  <img
                      src={variant1}
                      alt="Non-collapsible toolbar variant design"
                    />
                    <h3>Toolbar Variant 1</h3>
                </div>
                <div className="image-1">
                  <img
                      src={variant2}
                      alt="Cllapsible toolbar variant design"
                    />
                    <h3>Toolbar Variant 2</h3>
                </div>
              </div>
            </div>
            <div className="conclusion">
                <h1>Final Interface</h1>
                <p>Interact with this website to view our final design.</p>
                <p className='before-list'>Main Changes:</p>
                <ul>
                  <li>Modified “Add Block” to be a static "Add Block" button at the corner which, on click, would display all possible block options.</li>
                  <li>Displayed blocks in a grid arrangement rather than sequentially, which allowed for more user freedom over block arrangement.</li>
                  <li>Simplified the toolbar to remove confusing/unnecessary buttons.</li>
                  <li>Allowed for block input/modification/deletion.</li>
                  <li>Modified color palette to brighter beige and coral tones. We felt the beige colors evoked a more “notebook-y/project planning” feel and the coral tones aligned with general crafting imagery more. The colors also felt more vibrant and fitting for a crochet/knitting app.</li>
                </ul>
                <h1>Conclusion</h1>
                <p>Our app, focused around the experiences and feedback of our targeted user group, provides a flexible interface for crocheters and knitters. With YarnDiction, they are equipped with the power of flexible project planning and tracking capabilities and, with project sharing functionality, are given access to the wisdom of those before them.</p>
                <p>Within the crochet/knitting community, there currently lacks an easy-to-use interface that hosts project tutorials and resources, much less one that combines such knowledge with planning/tracking abilities.</p>
                <p className='before-list'>YarnDiction’s Key Features:</p>
                <ul>
                  <li>Customizable blocks, including text, image, and color palette blocks, which are tailored toward creative project planning.</li>
                  <li>A unique grid format for displaying users’ project concepts & ideation.
                    <ul>
                      <li>This grid format deviates from traditional note taking apps which are often optimized for information to be displayed sequentially. </li>
                      <li>It allows for flexibility and customization, while providing simplicity for crocheters/knitters who often want to quickly jot down ideas.</li>
                    </ul>
                  </li>
                  <li>An intuitive explore feature that allows users to easily navigate to helpful resources and projects they find interesting.</li>
                </ul>
                <p>In line with our project demos and additional user feedback we’ve received, we think in a further round of iterations, we could look at implementing additional features. Creating a few default template options, such as those in popular note-taking apps like Notion, would be helpful for users who like to start with a base layout. Additionally, incorporating AI into our blocks could be interesting, especially with generating inspiration images for our users during the project ideation process.</p>
                <p>As you can see, there are quite a few features that could be tacked onto our app next! All in all, we’re quite happy to have created a prototype with the foundational elements we wish we had as crocheters/knitters ourselves!</p>
            </div> 
        </div>
    )
    
}

export default HomePage