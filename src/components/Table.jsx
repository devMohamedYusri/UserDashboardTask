
export default function Table({user}) {
    return (
        <div className="w-full m-auto flex items-center p-4 bg-green-200 justify-between">
            <p className="text-lg">{user}</p>
            <button type="button" className="bg-red-500 p-2 m-2">Select</button>
            <button type="button" className="bg-red-500 p-2 m-2">Remove</button>
        </div>
    )
}
