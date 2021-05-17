import StoryCard from '../StoryCard'

const stories = [
    {
        name: "Talib Hasan",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/hkrlogo.png?alt=media&token=d11c05ab-9315-429f-ab61-2fa320b11799",
        profile: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/profile.jpg?alt=media&token=cf337957-cd5b-408a-b789-f45adff942c4",
    },
    {
        name: "Elon Musk",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/elon_bhaiya.jpg?alt=media&token=fedaae50-68ce-4de0-8a9f-343fa44787d5",
        profile: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/elon_musk_main.jpg?alt=media&token=7114828b-a05d-4c7f-a337-1509886a2093",
    },
    {
        name: "Jeff bezoz",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/bezos_bhaiya.jpg?alt=media&token=16822fda-7e21-4215-871d-33d87154e8c0",
        profile: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/jeff-bezos-main.jpg?alt=media&token=8e51c1ac-31cf-40ad-aae3-20f8994fe864",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/burge_bhaiya.jpg?alt=media&token=cce8f5f5-742c-46c2-bb43-4d95120ff172",
        profile: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/mark_zukerburg_main.jpg?alt=media&token=ba336c56-8e8e-4322-b71a-a47446a320dd",
    },
    {
        name: "Bill Gates",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/bill_gates.jpg?alt=media&token=3c72271e-bc6b-493e-86cd-f7f6f80b5611",
        profile: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/bill_gates_main.jpg?alt=media&token=5e0ba7b4-0a80-4e58-ac4b-49be5c5fabb8",
    },
]


function Stories() {
    return (
        <div className="flex mx-auto space-x-3 justfiy-center">
            {stories.map((story) => <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />)}
        </div>
    )
}

export default Stories
