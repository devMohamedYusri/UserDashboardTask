
export default function Form({Text,onChange,handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={Text} className="p-3 m-3 border-none shadow-md " onChange={onChange}/>
            <button type="submit" className="p-3 m-3 bg-green-500">{Text}</button>
        </form>
    )
}
