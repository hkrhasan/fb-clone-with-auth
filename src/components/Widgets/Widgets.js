import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import Contact from '../Contact'

const contacts = [
    {
        name: "Elon Musk",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/elon_bhaiya.jpg?alt=media&token=fedaae50-68ce-4de0-8a9f-343fa44787d5",
    },
    {
        name: "Jeff bezoz",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/bezos_bhaiya.jpg?alt=media&token=16822fda-7e21-4215-871d-33d87154e8c0",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/burge_bhaiya.jpg?alt=media&token=cce8f5f5-742c-46c2-bb43-4d95120ff172",
    },
    {
        name: "Bill Gates",
        src: "https://firebasestorage.googleapis.com/v0/b/hkr-netflix.appspot.com/o/bill_gates.jpg?alt=media&token=3c72271e-bc6b-493e-86cd-f7f6f80b5611",
    },
]


function Widgets() {
    return (
        <div className="flex-col hidden p-2 mt-5 lg:flex w-60">
            <div className="flex items-center justify-between mb-5 text-gray-500">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            {contacts.map((contact) => <Contact key={contact.src} src={contact.src} name={contact.name} />)}
        </div>
    )
}

export default Widgets
