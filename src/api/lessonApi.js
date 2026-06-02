import api from "./axios";

export const getLessons = async () => {
  const response = await api.get("/lessons");
  return response.data;
};

export const createLesson = async (data) => {
  const response = await api.post("/lessons", data);
  return response.data;
};

export const updateLesson = async (id, data) => {
  const response = await api.put(`/lessons/${id}`, data);
  return response.data;
};

export const deleteLesson = async (id) => {
  await api.delete(`/lessons/${id}`);
};