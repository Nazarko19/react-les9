import {useEffect, useState} from "react";
import {getPost} from "../../servises/users.servis";

export default function PostDetails(props) {

  let {location: {state}} = props

  return (
      <div>
        {
            JSON.stringify(state)
        }
      </div>
  )






}