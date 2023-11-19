import React, { useState, useEffect } from "react";
import {fetchusersAllNotes} from "./Mynotes.Action";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/styles";
const Mynotes = () => {
  const dispatch = useDispatch();
  const { searchTicketList, isLoading, error } = useSelector((state) => state.Usernotes);
  const { isAuth,userdata } = useSelector((state) => state.login);
  useEffect(() => {
    // if(userdata){
      dispatch(fetchusersAllNotes(userdata._id));
      console.log(searchTicketList);
      console.log(userdata._id)
    // }
  }, []);
  return (
    <div className="flex justify-center">
        <div className={`mx-2 flex:none justify-center grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-1 lg:grid-cols-4`}>
          {searchTicketList ? 
                  searchTicketList
                    .slice(0)
                    .reverse()
                    .map((val,ind) => {
                      return <div class={`m-2 max-w-sm rounded overflow-hidden shadow-lg ${styles.defaultColor} w-80`}>
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-1">The Coldest Sunset</div>
                        <p class={`text-black text-base font-medium h-32 overflow-y-scroll ${styles.defaultColorlight} rounded-md px-2`}>
                          {val.notes}
                        </p>
                      </div>
                      <div class="px-6 pt-2 pb-2">
                      <button class="mr-1 md:mr-2 inline-flex items-center px-1 text-lg font-medium text-center text-white bg-yellow-500 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-yellow-600 hover:bg-yellow-300">
                          Edit Notes
                      </button>
                      </div>
                    </div> }) : " "
        
         } 
        </div>
    </div>
  )
}

export default Mynotes;