# City Information Chat

<img width="405" alt="Screenshot 2023-11-15 at 1 04 53 PM" src="https://github.com/kevind13/City-Information-GPT/assets/17632891/cf2a89f9-9e15-4720-ae9c-1f38b0ab4912">


City Information Chat is a system that allows retrieving basic information about a city by integrating with the OpenAI API.

## Backend

The backend is a simple API that provides a single endpoint:

### Endpoint

- `/getCityInfo`: This endpoint takes the name of a city and queries OpenAI for specific information about it. If the city exists, OpenAI returns the information to the frontend.

**Backend Configuration:**

To work properly, you need to set up an environment variable called `OPENAI_API_KEY`, which should contain your OpenAI API key.

## Frontend

The frontend interface allows users to enter the name of a city. Upon submitting the request, the frontend makes a call to the backend to fetch information about the city and displays it on the screen.

![Frontend Interface]](https://github.com/kevind13/City-Information-GPT/assets/17632891/d4a8de51-c761-4bba-ad14-2ff60498c6fa)


### Usage

To run the application:

1. Configure the backend with the `OPENAI_API_KEY` environment variable containing your OpenAI API key.
2. Start the backend.
3. Start the frontend.
