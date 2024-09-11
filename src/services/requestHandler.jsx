export const requestHandler = async (url, method, data, authentication = '') => {
    try {
        const response = await fetch(
            url,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authentication}`
            },
                ...(method !== 'GET' && { body: JSON.stringify(data) })
            }
        );
        if (!response.ok) {
            const errorData = await response.json();
            throw { status: errorData.statusCode, message: errorData.message };
        }
        const json_data = await response.json();
        return json_data;
    } catch (error) {
        console.error("Error en la solicitud:", error.message || error);
        throw error;
    }
};
