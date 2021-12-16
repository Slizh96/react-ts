import React from "react";
import s from './Profile.module.css'

const Profile = (props: any) => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://4tololo.ru/sites/default/files/images/201301051308015172.jpg'/>
            </div>
            <div>ava + description</div>
            <div> My Posts
                <div>Mew Post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                    <div>post 4</div>
                    <div>post 5</div>
                    <div>post 6</div>
                </div>
            </div>
        </div>
    )
}
export default Profile
