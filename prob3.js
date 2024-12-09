// Your async functions here (Task 01, Task 02, etc.)

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));  // 1 second delay
    }
}

async function awaitCall() {
    try {
        console.log("Waiting for API response...");
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: "cc cv ?" });
            }, 2000);  // Simulate 2-second delay for API call
        });
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error occurred:", error.message);  // User-friendly error message
    }
}

async function chainedAsyncFunctions() {
    await function1();
    await function2();
    await function3();
}

async function function1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Function 1 executed");
            resolve();
        }, 1000);
    });
}

async function function2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Function 2 executed");
            resolve();
        }, 1000);
    });
}

async function function3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Function 3 executed");
            resolve();
        }, 1000);
    });
}

async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve("API Response 1"), 2000)),
            new Promise(resolve => setTimeout(() => resolve("API Response 2"), 3000))
        ]);
        console.log("Both requests jawhom behi:", response1, response2);
    } catch (error) {
        console.error("Error in concurrent requests:", error);
    }
}

async function parallelCalls(urls) {
    try {
        const fetchData = urls.map(url =>
            new Promise(resolve => setTimeout(() => resolve(`Fetched data from ${url}`), 1000))
        );
        const responses = await Promise.all(fetchData);
        console.log("All responses:", responses);
    } catch (error) {
        console.error("Error in parallel calls:", error);
    }
}