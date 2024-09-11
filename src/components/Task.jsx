
export default function Table({task}) {
    return (
        <div className="w-full m-auto flex items-center p-4 bg-green-200 justify-between">
            <p className="text-lg">{task}</p>
            <button type="button" className="bg-green-500 p-2 m-2">Remove</button>
        </div>
    )
}
