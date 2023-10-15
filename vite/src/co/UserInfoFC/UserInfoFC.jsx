// import "./UserInfoFC.css"
import classes from "./userInfo.module.css"


export const UserInfoFC = (props) =>{
    const {user} = props;
    const {cars} = props
    console.log(props)
    return (<article>
      <img src={user.avatar} alt={'${user.name} avatar'}/>
      <div className={classes["color-aqua"]}>{user.name==="Ivan"? "Admin " +  user.name : user.name}</div>
      <p>{user.status}</p>
      <label htmlFor="1">Active</label>
      <input id="1" type="checkbox" />
      <div>{cars.name}</div>
    </article>)
}
