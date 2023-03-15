//callbacks

import React, {ChangeEvent} from "react";

export const User = () => {
  const deleteUser = (event:React.MouseEvent<HTMLButtonElement>) =>{

    // alert('user have been delete')
  }

  const onAgeChanged = (e:ChangeEvent<HTMLInputElement>) => {
    console.log('Age changed    ' + e.currentTarget.value)
  }
  return <div>
    <button name={'search'} onClick={deleteUser}>X</button>
    <button name={'save'} onClick={deleteUser}>X</button>
  </div>
}