import { useState } from 'react'
import './App.css'
import UserInfoCC from './co/UserInfoCC/UserInfoCC'
import { UserInfoFC } from './co/UserInfoFC/UserInfoFC'

const usersData = [
{
  name: "Ivan",
  status: "React Developer",
  avatar: "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"
},
{
  name: "Maxim",
  status: "React Developer",
  avatar: "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"
},
{
  name: "Pavel",
  status: "React Developer",
  avatar: "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"
}

]

const cars = {
  name: "LLL",
  status: "car",
  avatar: "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"

}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {usersData.map(user => 
        <UserInfoFC  key={user.id} 
        user = {user} 
        cars = {cars}></UserInfoFC>)}
    </>

  )
}

export default App
