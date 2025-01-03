const mocks = {
    "/api/users": [
        { id: 1, name: "Alice", role: "Admin" },
        { id: 2, name: "Bob", role: "User" },
    ],
    "/api/animals": [
        { id: 1, name: "Tiger", type: "Wild" },
        { id: 2, name: "Dog", type: "Domestic" },
    ],
    "/api/questions": [
        { id: 1, question: "What is the capital of France?", answer: "Paris" },
        { id: 2, question: "What is 2 + 2?", answer: "4" },
    ],
};

export function setupMocks() {
    if ("fetch" in window) {
        const originalFetch = window.fetch;
        window.fetch = async (url, options) => {
            console.log(`[Mock] Intercepted fetch for URL: ${url}`); // Aqui o console.log
            if (mocks[url]) {
                console.log(`[Mock] Returning mock data for: ${url}`); // Log para exibir os dados retornados
                return Promise.resolve(
                    new Response(JSON.stringify(mocks[url]), {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                    })
                );
            }
            return originalFetch(url, options);
        };
    }
}
