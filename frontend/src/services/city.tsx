import { CityResponse } from "../models/message";
import { SERVER_URL } from "../utils";

export const getCityInfo = async (
    city: string,
  ): Promise<CityResponse> => {
  
    try {
        const response = await fetch(`${SERVER_URL}/getCityInfo`, {
          method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ city: city })
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const cityInfo = await response.json();
        return cityInfo;

      } catch (error) {
        return {
            valid: false,
            text: "An error ocurred with the question"
        }
      }
  };