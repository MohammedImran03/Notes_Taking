import axios from "axios";
import { server } from "../server";

const newnoteapi = server + "/notes/create-notes";
const usersnotes = server + "/notes/user-notes/";

export const createNewNote = (frmData) => {
    console.log("from api", frmData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(newnoteapi, frmData, {
        //   headers: {
        //     Authorization: sessionStorage.getItem("accessJWT"),
        //   },
        });
        console.log(result);
        resolve(result.data);
      } catch (error) {
        // console.log(error);
        reject(error);
      }
    });
  };

  export const getusersAllNotes = (frmData) => {
    console.log(frmData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(usersnotes+frmData, {
          //   headers: {
          //     Authorization: sessionStorage.getItem("accessJWT"),
          //   },
          });
        //   console.log(usersnotes+frmData);
        // console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  // export const getusersAllTickets = () => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const result = await axios.get(userTicketUrl, {
  //         headers: {
  //           Authorization: sessionStorage.getItem("accessJWT"),
  //         },
  //       }); 
  //       resolve(result);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // };