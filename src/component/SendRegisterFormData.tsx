export interface CreateNewAccountRequest 
{
    InsertGenders: string,
    CreateEmail: string,
    CreatePassword: string,
    CreateUserName: string
}

export default async function SendRegisterData(url: string, data: CreateNewAccountRequest) : Promise<Response>
{
    const response = await fetch(url, 
    {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if (!response.ok) 
    {
        throw new Error(`Eror server : ${response.statusText}`)
    }
    return await response.json()
}