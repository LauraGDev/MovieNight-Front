export const requestHandler = async (url, method = "GET", data, authentication = '') => {
    try {
        const response = await fetch(
            url,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    authentication
            },
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const json_data = await response.json();
        return json_data;
    } catch (error) {
        return error;
    }
};
