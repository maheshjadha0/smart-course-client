import axios from "axios";

const API =
  "https://localhost:7182/api/Enrollments";

const getToken = () =>
  localStorage.getItem("token");

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});

export const getEnrollments =
  async () => {
    const response =
      await axios.get(
        API,
        config()
      );

    return response.data;
  };

export const createEnrollment =
  async (data) => {
    const response =
      await axios.post(
        API,
        data,
        config()
      );

    return response.data;
  };

export const updateEnrollment =
  async (id, data) => {
    const response =
      await axios.put(
        `${API}/${id}`,
        data,
        config()
      );

    return response.data;
  };

export const deleteEnrollment =
  async (id) => {
    await axios.delete(
      `${API}/${id}`,
      config()
    );
  };