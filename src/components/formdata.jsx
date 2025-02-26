import { useRef } from "react"
import { useState } from "react"

function FormData(){

    const ref = useRef()

    // display
    const [IsOpen,setIsOpen] = useState (false)

    // store input data
    const [title,setTitle] = useState ("")
    const [img,setImg] = useState ("")

    // store form data
    const [data,setData] = useState([])

    
    const handleIsOpen = () =>{
        document.body.style.backgroundColor ="gray"
        setIsOpen (true)
    }
    const handleIsClose = () =>{
        document.body.style.backgroundColor ="white"
        setIsOpen (false)
    }
    // create post
    const handlePost = (e) =>{
        e.preventDefault()
        const newData = {title,img}

        if(title !== " " && img !== ""){
            setData([...data, newData])
            alert("success")
            setTitle(" ")
            ref.current.value = null
            handleIsClose()
        }
    }


    return <div>
        <div style={{display: IsOpen === true ? "flex" : "none"}} className="hidden sm:p-0 p-3">
        <form  className="  bg-blue-600 h-[400px] sm:w-[40%] w-[100%]   sm:ml-[30%] sm:mt-8 mt-14  sm:space-y-7 space-y-7 pt-16 sm:p-10 p-5 rounded-2xl relative">
            <i onClick={handleIsClose} className="fa-solid fa-x bg-white w-12 h-12 rounded-full text-center items-center pt-2 text-2xl absolute top-2 right-2 "></i>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="sm:w-80 w-72 h-10 mt-5 outline-none  rounded-sm" type="text" placeholder="Enter your title"/>
            <input ref={ref} onChange={(e) => setImg(e.target.files[0])} className="file:bg-yellow-600 file:w-40  mt-5" type="file" /> <br />
            <button onClick={handlePost} className="bg-yellow-600 px-14 py-2 rounded-lg text-white mt-5">Save</button>
        </form>
        </div>

        {/* display post */}
        {
            data.map((item) =>{
                return IsOpen === false ? <div className="w-[25%] border-2 border-slate-900 solid p-5 rounded-xl mt-7 ml-[35%]">
                <img className="w-80 rounded-lg" src={URL.createObjectURL(item.img)} alt="" />
                <h1 className="text-center font-semibold text-3xl">{item.title}</h1>
            </div>
            :
            ""

            })
        }
        


        <div className="bg-blue-600 h-14 w-14 rounded-full fixed bottom-2 right-4">
            <h1 onClick={handleIsOpen} className=" text-5xl text-white pl-3">+</h1>
        </div>

    </div>
}

export default FormData 