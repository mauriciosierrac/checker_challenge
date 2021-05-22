import React, { useState, useEffect} from 'react';
import { User } from './User'

//const API = process.env.REACT_APP_API;
//https://intranet.hbtn.io/users/auth_token.json'

export const Home = () => {
    
    const [api_key, setApiKey] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [scope] = useState("");

    const [sco, setSco] = useState("");
    
    const handleSumit = async (e) =>{
        e.preventDefault()

        const url = 'https://intranet.hbtn.io/users/auth_token.json'
        const data = {
            api_key,
            email ,
            password ,
            scope: "checker"
        }
        const res = await fetch(`${url}/` ,{
            method: 'POST',
            body: JSON.stringify(data) ,
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const datos = await res.json()
        setSco(datos)
        console.log(setSco)
        
    }



    const getProfile = async ({ auth_token }) => {
        //const auth_token = 'a944709b709418e39880716086eb5cbf8b5322e08233bbbbec11655309c23584'
        
        
        //const auth_token = auth_token;
 
        const resUsers = await fetch(`https://intranet.hbtn.io/users/me.json?auth_token=${auth_token}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        let userProfile = await resUsers.json()
        //setProfile(userProfile)
        console.log(userProfile)
        
    }
    getProfile(sco)
    


    return(
        <div className="row">
            
            <div className="col-md-4">
                <form onSubmit={handleSumit} className="card card-body">
                    <div className="form-group">
                        <h4>Type your data:</h4>
                        <input 
                        type="text" 
                        placeholder="Api_Key"
                        className="form-control mt-3"
                        onChange={(e) => setApiKey(e.target.value)}
                        value={api_key}
                        autoFocus />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        placeholder="Email"
                        className="form-control mt-3"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        placeholder="Password"
                        className="form-control mt-3"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                    </div>
                    
                   
                    <button className="btn btn-primary btn-block mt-3">
                        Send
                    </button>
                </form>
            </div>
            
            <div className="col-md-6">
                <h3>Your Auth_token is: </h3>
                
                <p>{sco.auth_token}</p>

                <User scope={scope} />
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>LITTLE POOP</th>
                            <th>DATA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>{sco.id}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{}p</td>
                        </tr>
                        <tr>
                            <td>Full_name</td>
                            <td>{}p</td>
                        </tr>
                        <tr>
                            <td>First_name</td>
                            <td>{}p</td>
                        </tr>
                        <tr>
                            <td>Last_name</td>
                            <td>{}p</td>
                        </tr>
                        <tr>
                            <td>Linkedin_url</td>
                            <th>{}p</th>
                        </tr>
                        <tr>
                            <td>Twitter_username</td>
                            <td>{}p</td>
                        </tr>
                        <tr>
                            <td>Github_username</td>
                            <td>{}p</td>
                        </tr>
                        <tr>
                            <td>Profile_pic</td>
                            <td>{}p</td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            
                
            </div>
        </div>
    )
}