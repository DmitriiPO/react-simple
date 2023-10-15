import React, { Component } from 'react'

const user = {
  name: "Ivan",
  status: "React Developer",
  avatar: "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"

}


export default class UserInfoCC extends Component {
  render() {
    return (<article>
      <img src={user.avatar} alt={'${user.name} avatar'}/>
      <div>{user.name}</div>
      <p>{user.status}</p>
    </article>)
  }
}
