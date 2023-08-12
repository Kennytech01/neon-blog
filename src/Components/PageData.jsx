import nature from '../assets/images/nature.jpeg'
import travel from '../assets/images/travel.jpeg'
import food from '../assets/images/food.jpeg'
import lifestyle from '../assets/images/lifestyle.jpeg'
import inspiration from '../assets/images/inspiration.jpeg'
import bag from '../assets/images/bag.jpeg'
import food2 from '../assets/images/food2.jpeg'
import health from '../assets/images/health.jpeg'
import drones from '../assets/images/drones.jpeg'
import forestTree from '../assets/images/forestTree.jpeg'
import animal from '../assets/images/animal.jpeg'
import schoolGirl from '../assets/images/schoolGirl.jpeg'
import friuts from '../assets/images/fruits.jpeg'
import mountain from '../assets/images/mountain.jpeg'
import ladyEating from '../assets/images/ladyEating.jpeg'
import goodHealth from '../assets/images/goodHealth.jpeg'

// export const dataSet = [
//     {
//         tags: "id",
//         tag1: "Food",
//         tag2: "Health",
//         tag3: "Lifestyle",
//         tag4: "Nature",
//         tag5: "Technology",
//         tag6: "Travel"
//     }
// ];

const PageData = [
    {
        tags: "id",
        tag1: "Food",
        tag2: "Health",
        tag3: "Lifestyle",
        tag4: "Nature",
        tag5: "Technology",
        tag6: "Travel"
    },
 
    {
        id: 'footer',
        location: 'page',
        image: `${nature}`,
        type1: 'Nature',
        header: 'Autumn is a second spring when every leaf is a flower',
        details: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and...',
        date: 'August 2, 2023',
        time: '4 min read'
    },
    {
        location: 'page',
        image: `${travel}`,
        type1: 'Travel',
        header: 'Never let your memories be greater than your dreams',
        details: 'Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time',
        date: 'July 30, 2023',
        time: '4 min read '
    },
    {
        location: 'page',
        image: `${food}`,
        type1: 'Food',
        header: 'Dramatically improve your cooking using just your imagination',
        details: 'You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would',
        date: 'July 28, 2023',
        time: '4 min read'
    },
    {
        location: 'page',
        image: `${lifestyle}`,
        type1: 'Lifestyle',
        header: 'Self-observation is the first step of inner unfolding',
        details: "Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-smith.",
        date: 'July 20, 2023',
        time: '5 min read'
    },
    {
        location: 'page',
        image: `${inspiration}`,
        type1: 'Inspiration',
        header: 'It is during our darkest moments that we must focus to see the light',
        details: 'Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time',
        date: 'July 19, 2023',
        time: '4 min read'
    },
    {
        location: 'page',
        image: `${bag}`,
        type1: 'Technology',
        type2: 'Nature',
        type3: 'Inspiration',
        header: 'Bangladesh has developed plastic alternative using jute',
        details: "Dr. Johnson, as usual, spoke contemptuously of Colley Cibber. 'It is wonderful that a man, who for forty years had lived with the great and the witty, should have acquired so ill the talents of",
        date: 'June 18, 2023',
        time: '3 min read'
    },
    {
        location: 'page',
        image: `${food2}`,
        type1: 'Food',
        header: 'I do not stick to rules when cooking. I rely on my imagination',
        details: "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself in a yellow-",
        date: 'June 12, 2023',
        time: '4 min read'
    },
    {
        location: 'page',
        image: `${health}`,
        type1: 'health',
        header: 'The mind and body are not separate. what affects one, affects the other',
        details: 'His recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with',
        date: 'June 05, 2023',
        time: '3 min read'
    },
    {
        location: 'page',
        image: `${drones}`,
        type1: 'Technology',
        header: 'Amphibious drone are being used to send medicine to flooded area',
        details: "Another tragedy. Had single watch to-night, as crew too tired to double. When morning watch came on deck could find no one except steersman. Raised outcry, and all came on deck. Thorough",
        date: 'May 28, 2022',
        time: '4 min read'
    },
    {
        location: 'page',
        image: `${forestTree}`,
        type1: 'Nature',
        header: 'In all things of nature there is something of the marvelous',
        details: "Though thus elevated into fame, and conscious of uncommon powers, he had not that bustling confidence, or, I may rather say, that animated ambition, which one might have supposed would...",
        date: 'May 20, 2022',
        time: '3 min read'
    },
    {
        location: 'page',
        image: `${animal}`,
        type1: 'Travel',
        header: "Don't listen to what they say, go see",
        details: "They got up and put on their coats, sipping their coffee standing. The painter was silent and preoccupied. There was a gloom over him. He could not bear this marriage, and yet it seemed to him to",
        date: 'May 19, 2022',
        time: '4 min read'
    },
    {
        location: 'page',
        id: "footer",
        image: `${schoolGirl}`,
        type1: 'Travel',
        header: "Stop worrying about the potholes in the road and enjoy the journey",
        details: "Six o’clock struck on the bells of the church that was so conveniently near to Mr. Utterson’s dwelling, and still he was digging at the problem. Hitherto it had touched him on the...",
        date: 'May 2, 2022',
        time: '3 min read'
    },
    {
        location: 'page',
        image: `${friuts}`,
        type1: 'Food',
        type2: 'Inspiration',
        header: 'The secret ingredient in good food is always love',
        details: "I am surely in the toils. Last night the Count asked me in the suavest tones to write three letters, one saying that my work here was nearly done, and that I should start for home within a few",
        date: 'April 28, 2022',
        time: '3 min read'
    },
    {
        location: 'page',
        image: `${mountain}`,
        type1: 'Nature',
        type2: "Travel",
        header: "With age, comes wisdom. With travel, comes understanding",
        details: "It was a cold morning of the early spring, and we sat after breakfast on either side of a cheery fire in the old room at Baker Street. A thick fog rolled down between the lines of dun-coloured",
        date: 'April 01, 2022',
        time: '4 min read'
    },
    {
        location: 'page',
        id: 'footer',
        image: `${ladyEating}`,
        type1: 'Food',
        header: "I like better than talking about food is eating",
        details: "In one point he was more fortunate than the novel's fantastic hero. He never knew--never, indeed, had any cause to know--that somewhat grotesque dread of mirrors, and polished metal",
        date: 'March 10, 2022',
        time: '2 min read'
    },
    {
        location: 'page',
        image: `${goodHealth}`,
        type1: 'Health',
        type2: "Lifstyle",
        header: "All the money in the world can't buy you back good health",
        details: "My dear, it never rains but it pours. How true the old proverbs are. Here am I, who shall be twenty in September, and yet I never had a proposal till to-day, not a real proposal, and to-day I have had",
        date: 'Feb, 2022',
        time: '3 min read'
    }
]
export default PageData
// export default myData