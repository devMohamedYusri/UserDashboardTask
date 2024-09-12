export default function Task({ task, onclick }) {
    return (
        <div className="w-full m-auto flex items-center p-4 bg-green-200 justify-between">
            <p className="text-lg">{task}</p>
            <button type="button" className="bg-green-500 p-2 m-2" onClick={() => onclick(task)}>Remove</button>
        </div>
    );
}