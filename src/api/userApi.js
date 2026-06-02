import axios from "axios";

const API =
  "https://smartcoursesystem-api.onrender.com/User";

const token =
  localStorage.getItem("token");

export const getStudents =
  async () => {

    const response =
      await axios.get(
        `${API}/students`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
  };