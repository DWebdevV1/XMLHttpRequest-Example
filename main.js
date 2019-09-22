window.onload = function() {
    console.log('--- Page fully loaded ---');

    const httpResponse = document.getElementById('httpResponse');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const httpMethod = 'GET';

    let httpReq = new XMLHttpRequest();
    httpReq.open(httpMethod, apiUrl);

    httpReq.onreadystatechange = function() {

        if (httpReq.readyState === 2 && httpReq.status === 200) {
            printStatusAndParseData(httpReq.readyState);
        } else if (httpReq.readyState === 3 && httpReq.status === 200) {
            printStatusAndParseData(httpReq.readyState);
        } else if (httpReq.readyState === 4 && httpReq.status === 200) {
            printStatusAndParseData(httpReq.readyState, httpReq.responseText);
        } else {
            printStatusAndParseData();
        }
    };

    httpReq.send();

    // print status and parse data if available
    function printStatusAndParseData(readyState, data) {
        switch (readyState) {
            case 2:
                console.log(`HEADERS_RECEIVED - readyState: ${httpReq.readyState} - status: ${httpReq.status}`);
                break;
            case 3:
                console.log(`LOADING - readyState: ${httpReq.readyState} - status: ${httpReq.status}`);
                break;
            case 4:
                console.log(`DONE - readyState: ${httpReq.readyState} - status: ${httpReq.status}`);
                console.log(JSON.parse(data));
                httpResponse.innerText = data;
                break;
            default:
                console.log('Error - Something went wrong');
                break;
        }

    }
};

