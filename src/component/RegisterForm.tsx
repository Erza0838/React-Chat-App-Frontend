import { useState } from "react"
// import { useEffect } from "react"
// import { useRef } from "react"
// import ReactDOM from "react-dom/client"

export default function RegisterForm() 
{   
    const [GenderData,setGenderData] = useState<string>()
    const [EmailData,setEmailData] = useState<string>("")
    const [UsernameData,setUsernameData] = useState<string>("")
    const [PasswordData,setPasswordData] = useState<string>("")

    // Simpan state kedalam object
    const RegisterData = 
    {
        UserGender: GenderData,
        UserEmailData: EmailData,
        UserNameData: UsernameData,
        UserPasswordData: PasswordData
    }

    return (
        <>
        {/* <form action="" method="post"> */}
            <input type="text" placeholder="Jenis kelamin" value={RegisterData.UserGender} onChange={e => setGenderData(e.target.value)}/>
            <br />
            <br />
            <input type="text" placeholder="Email" value={RegisterData.UserEmailData} onChange={e => setEmailData(e.target.value)}/>
            <br />
            <br />
            <input type="text" placeholder="Username" value={RegisterData.UserNameData} onChange={e => setUsernameData(e.target.value)}/>
            <br />
            <br />
            <input type="text" placeholder="Password" value={RegisterData.UserPasswordData} onChange={e => setPasswordData(e.target.value)}/>
            <br />
            <br />
        {/* </form> */}
        <p>Jenis kelamin : {RegisterData.UserGender}</p>
        <p>Email : {RegisterData.UserEmailData}</p>
        <p>Username : {RegisterData.UserNameData}</p>
        <p>Password : {RegisterData.UserPasswordData}</p>
        </>
    )
}