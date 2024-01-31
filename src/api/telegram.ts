const baseUrl =
  "https://api.telegram.org/bot6689925411:AAG3j0jbsB3nPyunzUcKb0jG46eS7EzAcW4/";

export const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=-1002046681226&text=${message}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "Что-то пошло не так");
  }
};
